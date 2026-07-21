
import { useState } from "react";
import { getResumeFeedback } from "../api/client.js";

export default function AIFeedbackPanel({ resumeText, jobDescription }) {
  const [feedback, setFeedback] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleGetFeedback() {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getResumeFeedback(resumeText, jobDescription, sessionId);
      setFeedback(data.feedback);
      setQuestions(data.interview_questions);
      setSessionId(data.session_id);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem" }}>
      <h3>AI Resume Feedback</h3>

      <button onClick={handleGetFeedback} disabled={isLoading}>
        {isLoading ? "Thinking..." : feedback ? "Get More Questions" : "Get AI Feedback"}
      </button>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {feedback && (
        <div style={{ marginTop: "1rem" }}>
          <h4>Feedback</h4>
          <ul>
            {feedback.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <h4>Interview Questions</h4>
          <ul>
            {questions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}