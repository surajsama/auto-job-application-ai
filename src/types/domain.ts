export type CandidateProfile = {
  fullName: string;
  targetRoles: string[];
  skills: string[];
  preferredLocations: string[];
  remoteOnly: boolean;
};

export type JobPosting = {
  id: string;
  title: string;
  company: string;
  location: string;
  remote: boolean;
  skills: string[];
  description?: string;
};

export type MatchResult = {
  score: number;
  reasons: string[];
  recommendation: "apply_now" | "apply_with_edits" | "low_priority" | "skip";
};
