// src/pages/CandidateDashboard.jsx
// Fully redesigned with the Sift design system.
// Flow: Upload → Score (animated ring) → Skills Gap → AI Feedback + Interview Qs → AI Chat

import { useState, useRef } from "react";
import { scoreResume } from "../api/client.js";

const API_BASE = "https://resume-screener-intelligence.onrender.com";

/* ── Styles ─────────────────────────────────────────────────────────────── */
const CSS = `
  .cd-root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    color: #14171F;
    -webkit-font-smoothing: antialiased;
  }

  /* ── Upload card ── */
  .cd-upload-card {
    background: #fff;
    border: 1px solid #D9D3C4;
    border-radius: 12px;
    padding: 32px;
    margin-bottom: 24px;
    box-shadow: 0 1px 3px rgba(20,23,31,0.04), 0 8px 24px -12px rgba(20,23,31,0.08);
  }
  .cd-card-title {
    font-family: Georgia, serif;
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 6px;
    color: #14171F;
  }
  .cd-card-sub {
    font-size: 14px;
    color: #565A66;
    margin-bottom: 24px;
  }

  .cd-drop-zone {
    border: 2px dashed #D9D3C4;
    border-radius: 10px;
    padding: 28px 24px;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    margin-bottom: 20px;
    background: #FAFAF8;
    position: relative;
  }
  .cd-drop-zone.has-file { border-color: #2F8F80; background: #E1F5EE; }
  .cd-drop-zone:hover { border-color: #2F8F80; background: #F0FAF8; }
  .cd-drop-zone input[type="file"] {
    position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%;
  }
  .cd-drop-icon { font-size: 32px; margin-bottom: 8px; }
  .cd-drop-text { font-size: 14px; color: #565A66; line-height: 1.5; }
  .cd-drop-text strong { color: #14171F; }
  .cd-file-name {
    font-size: 13px; color: #1F6459; font-weight: 600; margin-top: 6px;
    display: flex; align-items: center; justify-content: center; gap: 6px;
  }

  .cd-jd-label { font-size: 13px; font-weight: 600; color: #14171F; margin-bottom: 8px; display: block; }
  .cd-jd-textarea {
    width: 100%; font-family: inherit; font-size: 14px; color: #14171F;
    border: 1.5px solid #D9D3C4; border-radius: 8px; padding: 12px 14px;
    resize: vertical; min-height: 130px; line-height: 1.6;
    transition: border-color 0.2s, box-shadow 0.2s;
    background: #fff;
  }
  .cd-jd-textarea:focus {
    outline: none; border-color: #2F8F80;
    box-shadow: 0 0 0 3px rgba(47,143,128,0.15);
  }
  .cd-jd-textarea::placeholder { color: #B0AAA0; }

  .cd-submit-row { display: flex; gap: 12px; margin-top: 20px; align-items: center; }
  .cd-submit-btn {
    font-family: inherit; font-size: 15px; font-weight: 700;
    background: #2F8F80; color: #fff; border: none;
    border-radius: 8px; padding: 13px 28px; cursor: pointer;
    transition: background 0.15s, box-shadow 0.15s, transform 0.1s;
    display: flex; align-items: center; gap: 10px;
    box-shadow: 0 1px 4px rgba(47,143,128,0.25);
  }
  .cd-submit-btn:hover:not(:disabled) {
    background: #1F6459;
    box-shadow: 0 4px 16px rgba(47,143,128,0.35);
  }
  .cd-submit-btn:active:not(:disabled) { transform: scale(0.97); }
  .cd-submit-btn:disabled { background: #9ca3af; cursor: not-allowed; box-shadow: none; }
  .cd-spin {
    width: 16px; height: 16px; border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.35); border-top-color: #fff;
    animation: cd-spin 0.7s linear infinite; flex-shrink: 0;
  }
  @keyframes cd-spin { to { transform: rotate(360deg); } }
  .cd-error-pill {
    background: #FFF0EE; border: 1px solid #F5C6C2; color: #C0392B;
    border-radius: 6px; padding: 10px 16px; font-size: 13.5px; line-height: 1.5;
    margin-top: 12px;
  }

  /* ── Score card ── */
  .cd-score-card {
    background: #14171F; border-radius: 12px; padding: 32px;
    margin-bottom: 24px; color: #F5F2EA;
    display: grid; grid-template-columns: auto 1fr; gap: 32px; align-items: center;
    box-shadow: 0 8px 32px -8px rgba(20,23,31,0.5);
  }
  @media (max-width: 600px) {
    .cd-score-card { grid-template-columns: 1fr; text-align: center; }
    .cd-score-ring-wrap { display: flex; justify-content: center; }
  }
  .cd-score-ring-wrap { position: relative; width: 120px; height: 120px; }
  .cd-score-ring-svg { width: 120px; height: 120px; transform: rotate(-90deg); }
  .cd-score-ring-bg { fill: none; stroke: rgba(245,242,234,0.1); stroke-width: 8; }
  .cd-score-ring-fill {
    fill: none; stroke-width: 8; stroke-linecap: round;
    transition: stroke-dashoffset 1.2s cubic-bezier(0.22,1,0.36,1);
  }
  .cd-score-label {
    position: absolute; inset: 0; display: flex;
    flex-direction: column; align-items: center; justify-content: center;
  }
  .cd-score-num {
    font-family: 'SF Mono', Consolas, monospace;
    font-size: 32px; font-weight: 700; line-height: 1;
  }
  .cd-score-max { font-size: 11px; color: rgba(245,242,234,0.5); }

  .cd-score-right {}
  .cd-score-verdict {
    font-family: Georgia, serif; font-size: 22px; margin-bottom: 8px;
  }
  .cd-score-explain { font-size: 14px; color: rgba(245,242,234,0.65); margin-bottom: 16px; line-height: 1.6; }
  .cd-feature-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;
  }
  @media (max-width: 600px) { .cd-feature-grid { grid-template-columns: repeat(2, 1fr); } }
  .cd-feature-chip {
    background: rgba(245,242,234,0.07); border-radius: 6px; padding: 8px 10px;
  }
  .cd-feature-name { font-size: 10px; color: rgba(245,242,234,0.5); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 2px; }
  .cd-feature-val { font-family: 'SF Mono', Consolas, monospace; font-size: 14px; font-weight: 700; }

  /* ── Skills card ── */
  .cd-skills-card {
    display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;
  }
  @media (max-width: 640px) { .cd-skills-card { grid-template-columns: 1fr; } }
  .cd-skills-panel {
    background: #fff; border: 1px solid #D9D3C4; border-radius: 12px; padding: 24px;
    box-shadow: 0 1px 3px rgba(20,23,31,0.04);
  }
  .cd-skills-head {
    display: flex; align-items: center; gap: 8px; margin-bottom: 14px;
    font-size: 13px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
  }
  .cd-skills-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
  .cd-skill-pills { display: flex; flex-wrap: wrap; gap: 8px; }
  .cd-skill-pill {
    font-size: 13px; font-weight: 600; border-radius: 20px; padding: 5px 14px;
  }
  .cd-skill-pill.matched { background: #E1F5EE; color: #1F6459; border: 1px solid #2F8F80; }
  .cd-skill-pill.missing { background: #FBF0DD; color: #A66F1E; border: 1px solid #E2A33D; }
  .cd-skills-empty { font-size: 13.5px; color: #565A66; font-style: italic; }

  /* ── AI Feedback card ── */
  .cd-ai-card {
    background: #fff; border: 1px solid #D9D3C4; border-radius: 12px;
    padding: 28px 32px; margin-bottom: 24px;
    box-shadow: 0 1px 3px rgba(20,23,31,0.04), 0 8px 24px -12px rgba(20,23,31,0.08);
  }
  .cd-ai-header {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 20px; flex-wrap: wrap; gap: 12px;
  }
  .cd-ai-title-row { display: flex; align-items: center; gap: 10px; }
  .cd-ai-icon {
    width: 36px; height: 36px; border-radius: 8px;
    background: #14171F; color: #F5F2EA;
    display: flex; align-items: center; justify-content: center; font-size: 16px;
    flex-shrink: 0;
  }
  .cd-ai-title { font-family: Georgia, serif; font-size: 20px; }
  .cd-ai-btn {
    font-family: inherit; font-size: 13px; font-weight: 600;
    border: 1.5px solid #D9D3C4; border-radius: 7px;
    background: transparent; color: #14171F; padding: 8px 18px; cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
    display: flex; align-items: center; gap: 7px;
  }
  .cd-ai-btn:hover:not(:disabled) { border-color: #2F8F80; color: #1F6459; background: #E1F5EE; }
  .cd-ai-btn:disabled { color: #9ca3af; cursor: not-allowed; }
  .cd-ai-btn.primary { background: #2F8F80; border-color: #2F8F80; color: #fff; }
  .cd-ai-btn.primary:hover:not(:disabled) { background: #1F6459; border-color: #1F6459; }

  .cd-feedback-list { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
  .cd-feedback-item {
    display: flex; gap: 12px; align-items: flex-start;
    background: #FAFAF8; border: 1px solid #EDE9DD; border-radius: 8px; padding: 13px 16px;
  }
  .cd-feedback-num {
    width: 22px; height: 22px; border-radius: 50%;
    background: #2F8F80; color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700; flex-shrink: 0; margin-top: 1px;
  }
  .cd-feedback-text { font-size: 14.5px; color: #14171F; line-height: 1.6; }

  .cd-iq-divider {
    height: 1px; background: #EDE9DD; margin: 20px 0;
  }
  .cd-iq-label {
    font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
    color: #565A66; margin-bottom: 12px;
  }
  .cd-iq-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
  .cd-iq-item {
    display: flex; gap: 12px; align-items: flex-start;
    background: #FBF0DD; border: 1px solid #E2A33D; border-radius: 8px; padding: 13px 16px;
  }
  .cd-iq-num {
    font-family: 'SF Mono', Consolas, monospace;
    font-size: 11px; font-weight: 700; color: #A66F1E; white-space: nowrap; margin-top: 2px;
  }
  .cd-iq-text { font-size: 14.5px; color: #14171F; line-height: 1.6; }

  /* ── Chat ── */
  .cd-chat-card {
    background: #fff; border: 1px solid #D9D3C4; border-radius: 12px;
    overflow: hidden; margin-bottom: 24px;
    box-shadow: 0 1px 3px rgba(20,23,31,0.04), 0 8px 24px -12px rgba(20,23,31,0.08);
  }
  .cd-chat-header {
    background: #14171F; padding: 16px 24px;
    display: flex; align-items: center; gap: 12px;
  }
  .cd-chat-avatar {
    width: 32px; height: 32px; border-radius: 50%;
    background: #2F8F80; display: flex; align-items: center; justify-content: center;
    font-size: 14px; flex-shrink: 0;
  }
  .cd-chat-header-text {}
  .cd-chat-header-name { font-size: 14px; font-weight: 700; color: #F5F2EA; }
  .cd-chat-header-sub { font-size: 12px; color: rgba(245,242,234,0.5); }
  .cd-chat-indicator {
    width: 8px; height: 8px; border-radius: 50%; background: #2F8F80;
    margin-left: auto; box-shadow: 0 0 0 2px rgba(47,143,128,0.3);
    animation: cd-pulse 2s ease-in-out infinite;
  }
  @keyframes cd-pulse {
    0%, 100% { box-shadow: 0 0 0 2px rgba(47,143,128,0.3); }
    50% { box-shadow: 0 0 0 5px rgba(47,143,128,0.1); }
  }

  .cd-chat-messages {
    max-height: 340px; overflow-y: auto; padding: 20px 24px;
    display: flex; flex-direction: column; gap: 12px;
    scroll-behavior: smooth;
  }
  .cd-chat-messages::-webkit-scrollbar { width: 5px; }
  .cd-chat-messages::-webkit-scrollbar-track { background: transparent; }
  .cd-chat-messages::-webkit-scrollbar-thumb { background: #D9D3C4; border-radius: 3px; }

  .cd-chat-empty {
    text-align: center; padding: 20px;
    font-size: 13.5px; color: #B0AAA0; font-style: italic;
  }

  .cd-msg { display: flex; flex-direction: column; }
  .cd-msg.user { align-items: flex-end; }
  .cd-msg.model { align-items: flex-start; }
  .cd-msg-bubble {
    max-width: 78%; padding: 11px 16px; border-radius: 16px; font-size: 14.5px; line-height: 1.6;
    white-space: pre-wrap;
  }
  .cd-msg.user .cd-msg-bubble {
    background: #2F8F80; color: #fff; border-bottom-right-radius: 4px;
  }
  .cd-msg.model .cd-msg-bubble {
    background: #F5F2EA; color: #14171F; border: 1px solid #D9D3C4;
    border-bottom-left-radius: 4px;
  }
  .cd-chat-typing {
    display: flex; gap: 4px; align-items: center; padding: 11px 16px;
    background: #F5F2EA; border: 1px solid #D9D3C4; border-radius: 16px;
    border-bottom-left-radius: 4px; width: fit-content;
  }
  .cd-typing-dot {
    width: 6px; height: 6px; border-radius: 50%; background: #B0AAA0;
    animation: cd-typing 1.2s ease-in-out infinite;
  }
  .cd-typing-dot:nth-child(2) { animation-delay: 0.2s; }
  .cd-typing-dot:nth-child(3) { animation-delay: 0.4s; }
  @keyframes cd-typing { 0%, 60%, 100% { transform: translateY(0); } 30% { transform: translateY(-6px); } }

  .cd-chat-input-row {
    display: flex; gap: 0; border-top: 1px solid #EDE9DD;
  }
  .cd-chat-input {
    flex: 1; font-family: inherit; font-size: 14px; color: #14171F;
    border: none; padding: 14px 18px; background: #fff; resize: none;
    line-height: 1.5;
  }
  .cd-chat-input:focus { outline: none; }
  .cd-chat-input::placeholder { color: #B0AAA0; }
  .cd-chat-send {
    font-family: inherit; font-size: 13px; font-weight: 700;
    background: #2F8F80; color: #fff; border: none;
    padding: 0 20px; cursor: pointer;
    transition: background 0.15s;
    flex-shrink: 0;
  }
  .cd-chat-send:hover:not(:disabled) { background: #1F6459; }
  .cd-chat-send:disabled { background: #D9D3C4; cursor: not-allowed; }

  /* ── Course recs ── */
  .cd-courses-card {
    background: #fff; border: 1px solid #D9D3C4; border-radius: 12px;
    padding: 24px 28px; margin-bottom: 24px;
    box-shadow: 0 1px 3px rgba(20,23,31,0.04);
  }
  .cd-courses-title { font-family: Georgia, serif; font-size: 18px; margin-bottom: 14px; }
  .cd-courses-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; }
  .cd-course-item {
    border: 1px solid #EDE9DD; border-radius: 8px; padding: 14px 16px;
    background: #FAFAF8; transition: border-color 0.15s;
  }
  .cd-course-item:hover { border-color: #2F8F80; }
  .cd-course-cat { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #565A66; margin-bottom: 4px; }
  .cd-course-title { font-size: 14px; font-weight: 600; color: #14171F; margin-bottom: 4px; line-height: 1.4; }
  .cd-course-meta { font-size: 12px; color: #565A66; }
  .cd-course-link { color: #2F8F80; text-decoration: none; font-weight: 600; font-size: 12px; display: inline-block; margin-top: 6px; }
  .cd-course-link:hover { color: #1F6459; text-decoration: underline; }
`;

/* ── Score ring helper ───────────────────────────────────────────────── */
function ScoreRing({ score }) {
  const r = 46;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(Math.max(score, 0), 100) / 100;
  const color = score >= 80 ? "#2F8F80" : score >= 60 ? "#E2A33D" : "#C0392B";
  const verdict = score >= 80 ? "Strong Match" : score >= 60 ? "Partial Match" : "Weak Match";

  return (
    <div className="cd-score-ring-wrap">
      <svg className="cd-score-ring-svg" viewBox="0 0 120 120">
        <circle className="cd-score-ring-bg" cx="60" cy="60" r={r} />
        <circle
          className="cd-score-ring-fill"
          cx="60" cy="60" r={r}
          stroke={color}
          strokeDasharray={circ}
          strokeDashoffset={circ - circ * pct}
        />
      </svg>
      <div className="cd-score-label">
        <span className="cd-score-num" style={{ color }}>{Math.round(score)}</span>
        <span className="cd-score-max">/ 100</span>
      </div>
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────────────── */
export default function CandidateDashboard() {
  const [file, setFile] = useState(null);
  const [jd, setJd] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  // AI feedback state
  const [feedback, setFeedback] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [aiFeedbackLoading, setAiFeedbackLoading] = useState(false);
  const [aiFeedbackError, setAiFeedbackError] = useState(null);

  // Chat state
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [chatError, setChatError] = useState(null);
  const chatRef = useRef(null);

  // Course recs
  const [courses, setCourses] = useState([]);

  async function handleScore(e) {
    e.preventDefault();
    if (!file) { setError("Please select a resume file."); return; }
    if (!jd.trim()) { setError("Please paste a job description."); return; }

    setLoading(true);
    setError(null);
    setResult(null);
    setFeedback(null);
    setQuestions([]);
    setMessages([]);
    setCourses([]);
    setSessionId(null);

    try {
      const data = await scoreResume(file, jd);
      setResult(data);
      // Fetch course recommendations immediately
      if (data.missing_skills?.length) fetchCourses(data.missing_skills);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function fetchCourses(missing) {
    try {
      const res = await fetch(`${API_BASE}/courses/recommend`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ missing_skills: missing }),
      });
      if (res.ok) { const d = await res.json(); setCourses(d.courses || d); }
    } catch (_) {}
  }

  async function handleGetFeedback() {
    if (!result) return;
    setAiFeedbackLoading(true);
    setAiFeedbackError(null);
    try {
      const res = await fetch(`${API_BASE}/ai/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resume_text: result.resume_text,
          job_description: jd,
          session_id: sessionId,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "AI feedback failed.");
      setFeedback(data.feedback);
      setQuestions(data.interview_questions);
      setSessionId(data.session_id);
    } catch (err) {
      setAiFeedbackError(err.message);
    } finally {
      setAiFeedbackLoading(false);
    }
  }

  async function handleChat(e) {
    e.preventDefault();
    if (!chatInput.trim() || !result) return;
    const msg = chatInput;
    setChatInput("");
    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setChatLoading(true);
    setChatError(null);

    try {
      const res = await fetch(`${API_BASE}/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resume_text: result.resume_text,
          job_description: jd,
          message: msg,
          session_id: sessionId,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Chat failed.");
      setMessages((prev) => [...prev, { role: "model", text: data.reply }]);
      setSessionId(data.session_id);
      setTimeout(() => {
        if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }, 50);
    } catch (err) {
      setChatError(err.message);
    } finally {
      setChatLoading(false);
    }
  }

  const score = result?.ats_score ?? 0;
  const color = score >= 80 ? "#2F8F80" : score >= 60 ? "#E2A33D" : "#C0392B";
  const verdict = score >= 80 ? "Strong Match" : score >= 60 ? "Partial Match" : "Weak Match";

  return (
    <>
      <style>{CSS}</style>
      <div className="cd-root">

        {/* ── Upload card ── */}
        <div className="cd-upload-card">
          <h2 className="cd-card-title">Score your resume</h2>
          <p className="cd-card-sub">Upload a PDF or DOCX and paste the job description to get your ATS score, skill breakdown, AI feedback, and interview questions.</p>

          <form onSubmit={handleScore}>
            <div
              className={`cd-drop-zone${file ? " has-file" : ""}`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => { e.preventDefault(); setFile(e.dataTransfer.files[0]); }}
            >
              <input
                type="file" accept=".pdf,.docx"
                id="resume-file"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <div className="cd-drop-icon">{file ? "✅" : "📄"}</div>
              <div className="cd-drop-text">
                {file ? (
                  <div className="cd-file-name">
                    <span>📎</span> {file.name}
                  </div>
                ) : (
                  <><strong>Click to upload</strong> or drag &amp; drop your resume<br /><span style={{ fontSize: 12 }}>PDF or DOCX · Max 10 MB</span></>
                )}
              </div>
            </div>

            <label className="cd-jd-label" htmlFor="jd-text">Job Description</label>
            <textarea
              id="jd-text"
              className="cd-jd-textarea"
              value={jd}
              onChange={(e) => setJd(e.target.value)}
              placeholder="Paste the full job description here…"
            />

            <div className="cd-submit-row">
              <button type="submit" className="cd-submit-btn" disabled={loading}>
                {loading ? <span className="cd-spin" /> : "✦"}
                {loading ? "Scoring…" : "Get ATS Score"}
              </button>
              {result && (
                <span style={{ fontSize: 13, color: "#565A66" }}>
                  Scored successfully — scroll down for results
                </span>
              )}
            </div>
            {error && <div className="cd-error-pill" role="alert">⚠ {error}</div>}
          </form>
        </div>

        {/* ── Results ── */}
        {result && (
          <>
            {/* Score card */}
            <div className="cd-score-card">
              <ScoreRing score={result.ats_score} />
              <div className="cd-score-right">
                <div className="cd-score-verdict" style={{ color }}>
                  {verdict}
                </div>
                <div className="cd-score-explain">
                  Your resume scores <strong style={{ color }}>{result.ats_score} / 100</strong> against this job description.
                  The breakdown below shows which factors drove this score.
                </div>
                <div className="cd-feature-grid">
                  {Object.entries(result.features_used || {}).map(([k, v]) => (
                    <div key={k} className="cd-feature-chip">
                      <div className="cd-feature-name">{k.replace(/_/g, " ")}</div>
                      <div className="cd-feature-val" style={{ color }}>
                        {typeof v === "number" ? (v <= 1.0 && v > 0 ? `${Math.round(v * 100)}%` : Number(v).toFixed(2)) : String(v)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills gap */}
            <div className="cd-skills-card">
              <div className="cd-skills-panel">
                <div className="cd-skills-head">
                  <span className="cd-skills-dot" style={{ background: "#2F8F80" }} />
                  <span style={{ color: "#1F6459" }}>Matched Skills ({result.matched_skills?.length ?? 0})</span>
                </div>
                {result.matched_skills?.length > 0 ? (
                  <div className="cd-skill-pills">
                    {result.matched_skills.map((s) => (
                      <span key={s} className="cd-skill-pill matched">{s}</span>
                    ))}
                  </div>
                ) : (
                  <p className="cd-skills-empty">No matched skills detected.</p>
                )}
              </div>
              <div className="cd-skills-panel">
                <div className="cd-skills-head">
                  <span className="cd-skills-dot" style={{ background: "#E2A33D" }} />
                  <span style={{ color: "#A66F1E" }}>Missing Skills ({result.missing_skills?.length ?? 0})</span>
                </div>
                {result.missing_skills?.length > 0 ? (
                  <div className="cd-skill-pills">
                    {result.missing_skills.map((s) => (
                      <span key={s} className="cd-skill-pill missing">{s}</span>
                    ))}
                  </div>
                ) : (
                  <p className="cd-skills-empty">🎉 No missing skills — perfect match!</p>
                )}
              </div>
            </div>

            {/* Course recs */}
            {courses.length > 0 && (
              <div className="cd-courses-card">
                <div className="cd-courses-title">Recommended Courses for Skill Gaps</div>
                <div className="cd-courses-grid">
                  {courses.map((c, i) => (
                    <div key={i} className="cd-course-item">
                      <div className="cd-course-cat">{c.category}</div>
                      <div className="cd-course-title">{c.course_title}</div>
                      <div className="cd-course-meta">{c.provider} · gap: {c.skill_gap}</div>
                      {c.url && <a href={c.url} target="_blank" rel="noopener noreferrer" className="cd-course-link">View course →</a>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AI Feedback + Interview Questions */}
            <div className="cd-ai-card">
              <div className="cd-ai-header">
                <div className="cd-ai-title-row">
                  <div className="cd-ai-icon">✦</div>
                  <div className="cd-ai-title">AI Feedback &amp; Interview Questions</div>
                </div>
                <button
                  className={`cd-ai-btn${feedback ? "" : " primary"}`}
                  onClick={handleGetFeedback}
                  disabled={aiFeedbackLoading}
                >
                  {aiFeedbackLoading ? <span className="cd-spin" style={{ borderTopColor: feedback ? "#2F8F80" : "#fff" }} /> : "✦"}
                  {aiFeedbackLoading ? "Thinking…" : feedback ? "Refresh Questions" : "Get AI Feedback"}
                </button>
              </div>

              {aiFeedbackError && (
                <div className="cd-error-pill" role="alert">⚠ {aiFeedbackError}</div>
              )}

              {!feedback && !aiFeedbackLoading && (
                <p style={{ fontSize: 14, color: "#565A66" }}>
                  Click "Get AI Feedback" to receive tailored resume improvement tips and interview questions for this specific role, powered by AI.
                </p>
              )}

              {feedback && (
                <>
                  <ul className="cd-feedback-list">
                    {feedback.map((point, i) => (
                      <li key={i} className="cd-feedback-item">
                        <span className="cd-feedback-num">{i + 1}</span>
                        <span className="cd-feedback-text">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {questions.length > 0 && (
                    <>
                      <div className="cd-iq-divider" />
                      <div className="cd-iq-label">Likely Interview Questions</div>
                      <ul className="cd-iq-list">
                        {questions.map((q, i) => (
                          <li key={i} className="cd-iq-item">
                            <span className="cd-iq-num">Q{i + 1}</span>
                            <span className="cd-iq-text">{q}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </>
              )}
            </div>

            {/* AI Chat */}
            <div className="cd-chat-card">
              <div className="cd-chat-header">
                <div className="cd-chat-avatar">✦</div>
                <div className="cd-chat-header-text">
                  <div className="cd-chat-header-name">AI Career Coach</div>
                  <div className="cd-chat-header-sub">Powered by AI · Ask anything about your resume or this role</div>
                </div>
                <div className="cd-chat-indicator" />
              </div>

              <div className="cd-chat-messages" ref={chatRef}>
                {messages.length === 0 && (
                  <div className="cd-chat-empty">
                    Ask about your resume, interview prep, or how to improve your score…
                  </div>
                )}
                {messages.map((msg, i) => (
                  <div key={i} className={`cd-msg ${msg.role}`}>
                    <div className="cd-msg-bubble">{msg.text}</div>
                  </div>
                ))}
                {chatLoading && (
                  <div className="cd-msg model">
                    <div className="cd-chat-typing">
                      <span className="cd-typing-dot" />
                      <span className="cd-typing-dot" />
                      <span className="cd-typing-dot" />
                    </div>
                  </div>
                )}
              </div>

              {chatError && (
                <div style={{ padding: "8px 20px" }}>
                  <div className="cd-error-pill">⚠ {chatError}</div>
                </div>
              )}

              <form className="cd-chat-input-row" onSubmit={handleChat}>
                <textarea
                  className="cd-chat-input"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleChat(e); } }}
                  placeholder="Ask about interview prep, skill gaps, career advice…"
                  rows={1}
                  disabled={chatLoading}
                  id="chat-input"
                />
                <button type="submit" className="cd-chat-send" disabled={chatLoading || !chatInput.trim()}>
                  Send →
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
}