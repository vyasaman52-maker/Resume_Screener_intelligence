// STATUS: WORKING
// Displays the response from POST /resumes/score, including the real
// matched/missing skill breakdown - not just raw feature numbers.
export default function ScoreResult({ result }) {
  if (!result) return null;

  const { ats_score, features_used, matched_skills, missing_skills } = result;

  return (
    <div style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem" }}>
      <h2>ATS Score: {ats_score}</h2>

      <div style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}>
        <div>
          <h3 style={{ color: "#166534" }}>✓ Matched Skills</h3>
          {matched_skills && matched_skills.length > 0 ? (
            <ul>
              {matched_skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          ) : (
            <p>No matched skills found.</p>
          )}
        </div>

        <div>
          <h3 style={{ color: "#991b1b" }}>✗ Missing Skills</h3>
          {missing_skills && missing_skills.length > 0 ? (
            <ul>
              {missing_skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          ) : (
            <p>No missing skills - great match!</p>
          )}
        </div>
      </div>

      <details style={{ marginTop: "1.5rem" }}>
        <summary>Full feature breakdown</summary>
        <ul>
          {Object.entries(features_used).map(([key, value]) => (
            <li key={key}>
              <strong>{key}</strong>: {value}
            </li>
          ))}
        </ul>
      </details>

      {/* TODO (Objective 9): LLM feedback + interview questions go here */}
    </div>
  );
}