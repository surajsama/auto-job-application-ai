import { matchJobToCandidate } from "@/lib/scoring/match-job";
import { sampleCandidate, sampleJobs } from "@/lib/sample-data";

function formatRecommendation(value: string): string {
  return value
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function HomePage() {
  const results = sampleJobs.map((job) => ({
    job,
    match: matchJobToCandidate(sampleCandidate, job)
  }));

  const sortedResults = [...results].sort((a, b) => b.match.score - a.match.score);

  return (
    <main>
      <h1>Auto Job Application AI</h1>
      <p>
        AI-powered multi-agent system for automating job discovery, resume tailoring,
        and application workflows.
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Candidate Profile</h2>
        <article
          style={{
            border: "1px solid #2a3140",
            borderRadius: "12px",
            padding: "1rem",
            background: "#121826",
            marginTop: "1rem"
          }}
        >
          <p>
            <strong>Name:</strong> {sampleCandidate.fullName}
          </p>
          <p>
            <strong>Target Roles:</strong> {sampleCandidate.targetRoles.join(", ")}
          </p>
          <p>
            <strong>Skills:</strong> {sampleCandidate.skills.join(", ")}
          </p>
          <p>
            <strong>Preferred Locations:</strong>{" "}
            {sampleCandidate.preferredLocations.join(", ")}
          </p>
          <p>
            <strong>Remote Only:</strong> {sampleCandidate.remoteOnly ? "Yes" : "No"}
          </p>
        </article>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Sample Job Match Results</h2>

        <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
          {sortedResults.map(({ job, match }) => (
            <article
              key={job.id}
              style={{
                border: "1px solid #2a3140",
                borderRadius: "12px",
                padding: "1rem",
                background: "#121826"
              }}
            >
              <h3 style={{ margin: 0 }}>
                {job.title} — {job.company}
              </h3>

              <p style={{ marginTop: "0.5rem" }}>
                <strong>Location:</strong> {job.location}
              </p>

              <p>
                <strong>Work Mode:</strong> {job.remote ? "Remote" : "On-site"}
              </p>

              <p>
                <strong>Skills Required:</strong> {job.skills.join(", ")}
              </p>

              <p>
                <strong>Score:</strong> {match.score}/100
              </p>

              <p>
                <strong>Recommendation:</strong>{" "}
                {formatRecommendation(match.recommendation)}
              </p>

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
  );
}
