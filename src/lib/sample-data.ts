import type { CandidateProfile, JobPosting } from "@/types/domain";

export const sampleCandidate: CandidateProfile = {
  fullName: "Suraj Sama",
  targetRoles: ["Appian Developer", "BPM Developer", "Software Engineer"],
  skills: ["Appian", "Sail", "XML", "REST", "SOAP", "CSS", "DB", "Kafka", "Integration", "CDT"],
  preferredLocations: ["Remote", "Chicago", "Charlotte"],
  remoteOnly: true
};

export const sampleJobs: JobPosting[] = [
  {
    id: "job-1",
    title: "Appian Developer",
    company: "Nova Labs",
    location: "Remote",
    remote: true,
    skills: ["Appian", "Sail", "XML", "REST", "SOAP", "CSS", "DB", "Kafka", "Integration", "CDT"],
  },
  {
    id: "job-2",
    title: "Software Engineer",
    company: "Cloud Forge",
    location: "Chicago",
    remote: false,
    skills: ["Appian", "Sail", "XML", "REST", "SOAP", "CSS", "DB", "Kafka", "Integration", "CDT"],
  },
  {
    id: "job-3",
    title: "BPM Developer",
    company: "Bright AI",
    location: "Charlotte",
    remote: false,
    skills: ["Appian", "Sail", "XML", "REST", "SOAP", "CSS", "DB", "Kafka", "Integration", "CDT"],
  }
];
