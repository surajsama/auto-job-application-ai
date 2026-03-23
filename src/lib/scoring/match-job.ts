import type { CandidateProfile, JobPosting, MatchResult } from "@/types/domain";

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function includesNormalized(list: string[], value: string): boolean {
  const target = normalize(value);
  return list.some((item) => normalize(item).includes(target) || target.includes(normalize(item)));
}

export function matchJobToCandidate(
  candidate: CandidateProfile,
  job: JobPosting
): MatchResult {
  let score = 0;
  const reasons: string[] = [];

  const titleMatched = candidate.targetRoles.some((role) =>
    normalize(job.title).includes(normalize(role))
  );

  if (titleMatched) {
    score += 35;
    reasons.push("Job title matches one of the candidate target roles.");
  } else {
    reasons.push("Job title does not strongly match the candidate target roles.");
  }

  const matchedSkills = job.skills.filter((skill) =>
    includesNormalized(candidate.skills, skill)
  );

  const skillRatio = job.skills.length > 0 ? matchedSkills.length / job.skills.length : 0;

  if (skillRatio >= 0.7) {
    score += 35;
    reasons.push("Candidate matches most of the listed job skills.");
  } else if (skillRatio >= 0.4) {
    score += 20;
    reasons.push("Candidate matches some of the listed job skills.");
  } else if (matchedSkills.length > 0) {
    score += 10;
    reasons.push("Candidate matches a small portion of the listed job skills.");
  } else {
    reasons.push("Candidate does not match the listed job skills closely.");
  }

  const locationMatched =
    candidate.preferredLocations.length === 0 ||
    includesNormalized(candidate.preferredLocations, job.location);

  if (job.remote && candidate.remoteOnly) {
    score += 20;
    reasons.push("Remote preference aligns with a remote job.");
  } else if (job.remote && !candidate.remoteOnly) {
    score += 15;
    reasons.push("Remote job offers flexibility.");
  } else if (!job.remote && candidate.remoteOnly) {
    reasons.push("Candidate prefers remote-only roles, but this job is not remote.");
  } else if (locationMatched) {
    score += 20;
    reasons.push("Job location matches the candidate preferred locations.");
  } else {
    reasons.push("Job location does not match the candidate preferred locations.");
  }

  if (score > 100) {
    score = 100;
  }

  let recommendation: MatchResult["recommendation"] = "skip";

  if (score >= 75) {
    recommendation = "apply_now";
  } else if (score >= 55) {
    recommendation = "apply_with_edits";
  } else if (score >= 35) {
    recommendation = "low_priority";
  }

  return {
    score,
    reasons,
    recommendation
  };
}
