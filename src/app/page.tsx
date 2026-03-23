<section style={{ marginTop: "2rem" }}>
  <h2>Candidate Profile</h2>
  <p><strong>Name:</strong> {sampleCandidate.fullName}</p>
  <p><strong>Target Roles:</strong> {sampleCandidate.targetRoles.join(", ")}</p>
  <p><strong>Skills:</strong> {sampleCandidate.skills.join(", ")}</p>
  <p><strong>Preferred Locations:</strong> {sampleCandidate.preferredLocations.join(", ")}</p>
  <p><strong>Remote Only:</strong> {sampleCandidate.remoteOnly ? "Yes" : "No"}</p>
</section>
