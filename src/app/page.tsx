import { matchJobToCandidate } from "@/lib/scoring/match-job";
import { sampleCandidate, sampleJobs } from "@/lib/sample-data";

export default function HomePage() {
const results = sampleJobs.map((job) => ({
job,
match: matchJobToCandidate(sampleCandidate, job)
}));

return ( <main> <h1>Auto Job Application AI</h1> <p>
AI-powered multi-agent system for automating job discovery, resume tailoring,
and application workflows. </p>

```
  {/* ✅ Candidate Profile Section */}
  <section style={{ marginTop: "2rem" }}>
    <h2>Candidate Profile</h2>
    <p><strong>Name:</strong> {sampleCandidate.fullName}</p>
    <p><strong>Target Roles:</strong> {sampleCandidate.targetRoles.join(", ")}</p>
    <p><strong>Skills:</strong> {sampleCandidate.skills.join(", ")}</p>
    <p><strong>Preferred Locations:</strong> {sampleCandidate.preferredLocations.join(", ")}</p>
    <p><strong>Remote Only:</strong> {sampleCandidate.remoteOnly ? "Yes" : "No"}</p>
  </section>

  {/* ✅ Job Results Section */}
  <section style={{ marginTop: "2rem" }}>
    <h2>Sample Job Match Results</h2>

    <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
      {results.map(({ job, match }) => (
        <article
          key={job.id}
          style={{
            border: "1px solid #2a3140",
            borderRadius: "12px",
            padding: "1rem",
            background: "#121826"
          }}
        >
          <h3>
            {job.title} — {job.company}
          </h3>

          <p>
            {job.location} | {job.remote ? "Remote" : "On-site"}
          </p>

          <p><strong>Score:</strong> {match.score}/100</p>
          <p><strong>Recommendation:</strong> {match.recommendation}</p>

          <div>
            <strong>Reasons:</strong>
            <ul>
              {match.reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </section>
</main>
```

);
}
