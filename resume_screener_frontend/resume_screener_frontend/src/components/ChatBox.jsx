// STATUS: WORKING
// Open-ended chat: candidate can ask anything about their resume, this
// job, interview prep, or career generally. Reuses the same session_id
// as AIFeedbackPanel isn't shared here directly - this component keeps
// its own conversation thread, using /ai/chat's own session memory.
import { useState } from "react";
import { chatWithAI } from "../api/client.js";

export default function ChatBox({ resumeText, jobDescription }) {
  const [messages, setMessages] = useState([]); // {role: "user"|"model", text}
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSend(event) {
    event.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const data = await chatWithAI(resumeText, jobDescription, userMessage, sessionId);
      setMessages((prev) => [...prev, { role: "model", text: data.reply }]);
      setSessionId(data.session_id);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem" }}>
      <h3>Ask the AI Career Coach</h3>

      <div style={{ maxHeight: "300px", overflowY: "auto", marginBottom: "1rem" }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              textAlign: msg.role === "user" ? "right" : "left",
              margin: "0.5rem 0",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "0.5rem 1rem",
                borderRadius: "12px",
                backgroundColor: msg.role === "user" ? "#2563eb" : "#e5e7eb",
                color: msg.role === "user" ? "white" : "black",
                maxWidth: "80%",
                whiteSpace: "pre-wrap",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
        {isLoading && <p style={{ color: "#666" }}>Thinking...</p>}
      </div>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <form onSubmit={handleSend} style={{ display: "flex", gap: "0.5rem" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about your resume, this job, or career advice..."
          style={{ flex: 1, padding: "0.5rem" }}
        />
        <button type="submit" disabled={isLoading}>Send</button>
      </form>
    </div>
  );
}