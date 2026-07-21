// src/pages/RecruiterDashboard.jsx
// Full redesign with Sift design system:
// Search → ranked table with score bars, skill pills → expandable row detail

import { useState } from "react";
import { getRankedCandidates } from "../api/client.js";

const CSS = `
  .rd-root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    color: #14171F;
    -webkit-font-smoothing: antialiased;
  }

  /* ── Search card ── */
  .rd-search-card {
    background: #14171F; border-radius: 12px; padding: 32px;
    margin-bottom: 24px;
    box-shadow: 0 8px 32px -8px rgba(20,23,31,0.4);
  }
  .rd-search-title {
    font-family: Georgia, serif; font-size: 24px; color: #F5F2EA;
    margin-bottom: 6px; font-weight: 400;
  }
  .rd-search-sub { font-size: 14px; color: rgba(245,242,234,0.55); margin-bottom: 24px; }

  .rd-search-row { display: flex; gap: 12px; flex-wrap: wrap; }
  .rd-search-input {
    flex: 1; min-width: 200px;
    font-family: inherit; font-size: 15px; color: #14171F;
    background: #F5F2EA; border: none; border-radius: 8px;
    padding: 13px 18px;
    transition: box-shadow 0.2s;
  }
  .rd-search-input:focus {
    outline: none; box-shadow: 0 0 0 3px rgba(47,143,128,0.4);
  }
  .rd-search-input::placeholder { color: #B0AAA0; }
  .rd-search-btn {
    font-family: inherit; font-size: 14px; font-weight: 700;
    background: #2F8F80; color: #fff; border: none; border-radius: 8px;
    padding: 13px 24px; cursor: pointer; white-space: nowrap;
    transition: background 0.15s, box-shadow 0.15s, transform 0.1s;
    display: flex; align-items: center; gap: 8px;
    box-shadow: 0 1px 4px rgba(47,143,128,0.3);
  }
  .rd-search-btn:hover:not(:disabled) {
    background: #1F6459; box-shadow: 0 4px 14px rgba(47,143,128,0.4);
  }
  .rd-search-btn:active:not(:disabled) { transform: scale(0.97); }
  .rd-search-btn:disabled { background: #5a6272; cursor: not-allowed; }
  .rd-spin {
    width: 15px; height: 15px; border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff;
    animation: rd-spin 0.7s linear infinite;
  }
  @keyframes rd-spin { to { transform: rotate(360deg); } }

  /* ── Stats row ── */
  .rd-stats-row {
    display: flex; gap: 16px; margin-top: 20px; flex-wrap: wrap;
  }
  .rd-stat {
    background: rgba(245,242,234,0.07); border-radius: 8px;
    padding: 10px 18px; display: flex; align-items: center; gap: 10px;
  }
  .rd-stat-num {
    font-family: 'SF Mono', Consolas, monospace;
    font-size: 20px; font-weight: 700; color: #2F8F80;
  }
  .rd-stat-label { font-size: 12px; color: rgba(245,242,234,0.5); }

  /* ── Results area ── */
  .rd-results-header {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 16px; flex-wrap: wrap; gap: 8px;
  }
  .rd-results-title {
    font-family: Georgia, serif; font-size: 20px;
  }
  .rd-results-meta { font-size: 13px; color: #565A66; }

  /* ── Candidate cards ── */
  .rd-candidates { display: flex; flex-direction: column; gap: 10px; }

  .rd-card {
    background: #fff; border: 1px solid #D9D3C4; border-radius: 12px;
    overflow: hidden; transition: box-shadow 0.2s;
    box-shadow: 0 1px 3px rgba(20,23,31,0.04);
  }
  .rd-card:hover { box-shadow: 0 4px 16px -4px rgba(20,23,31,0.12); }

  .rd-card-main {
    display: grid; grid-template-columns: 48px 1fr 180px; gap: 16px;
    align-items: center; padding: 18px 24px; cursor: pointer;
  }
  @media (max-width: 640px) {
    .rd-card-main { grid-template-columns: 40px 1fr; }
    .rd-card-score-col { display: none; }
  }

  .rd-rank-badge {
    width: 40px; height: 40px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-family: 'SF Mono', Consolas, monospace;
    font-size: 14px; font-weight: 700; flex-shrink: 0;
  }
  .rd-rank-badge.top { background: #2F8F80; color: #fff; }
  .rd-rank-badge.mid { background: #EDE9DD; color: #565A66; }
  .rd-rank-badge.low { background: #FBF0DD; color: #A66F1E; }

  .rd-card-info {}
  .rd-card-skills {
    display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px;
  }
  .rd-skill-tag {
    font-size: 11.5px; font-weight: 600; border-radius: 12px; padding: 3px 10px;
  }
  .rd-skill-tag.matched { background: #E1F5EE; color: #1F6459; }
  .rd-skill-tag.missing { background: #FBF0DD; color: #A66F1E; border: 1px solid #E2A33D; }

  .rd-card-score-col { text-align: right; }
  .rd-score-num {
    font-family: 'SF Mono', Consolas, monospace;
    font-size: 28px; font-weight: 700; line-height: 1; margin-bottom: 6px;
  }
  .rd-score-bar-track {
    height: 4px; background: #EDE9DD; border-radius: 2px; overflow: hidden; width: 120px; margin-left: auto;
  }
  .rd-score-bar-fill { height: 100%; border-radius: 2px; transition: width 0.8s cubic-bezier(0.22,1,0.36,1); }

  .rd-expand-arrow {
    text-align: center; font-size: 12px; color: #B0AAA0; padding: 2px 0;
    transition: transform 0.2s; display: block;
  }
  .rd-expand-arrow.open { transform: rotate(180deg); }

  .rd-card-detail {
    border-top: 1px solid #EDE9DD; padding: 16px 24px;
    background: #FAFAF8; display: none;
  }
  .rd-card-detail.open { display: block; }
  .rd-detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  @media (max-width: 500px) { .rd-detail-grid { grid-template-columns: 1fr; } }
  .rd-detail-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: #565A66; margin-bottom: 8px; }
  .rd-detail-pills { display: flex; flex-wrap: wrap; gap: 6px; }
  .rd-detail-pill {
    font-size: 12px; font-weight: 600; border-radius: 12px; padding: 4px 11px;
  }
  .rd-detail-pill.matched { background: #E1F5EE; color: #1F6459; }
  .rd-detail-pill.missing { background: #FBF0DD; color: #A66F1E; }

  /* ── Empty / error states ── */
  .rd-empty {
    text-align: center; padding: 48px 24px;
    background: #fff; border: 1px solid #D9D3C4; border-radius: 12px;
    color: #565A66; font-size: 15px;
  }
  .rd-empty-icon { font-size: 36px; margin-bottom: 12px; }
  .rd-error-pill {
    background: #FFF0EE; border: 1px solid #F5C6C2; color: #C0392B;
    border-radius: 8px; padding: 12px 18px; font-size: 14px; margin-top: 12px;
  }
`;

function scoreColor(s) {
  return s >= 80 ? "#2F8F80" : s >= 60 ? "#E2A33D" : "#C0392B";
}
function rankClass(i) {
  return i === 0 ? "top" : i < 3 ? "mid" : "low";
}

function CandidateCard({ candidate, index }) {
  const [open, setOpen] = useState(false);
  const score = candidate.ats_score ?? 0;
  const color = scoreColor(score);

  return (
    <div className="rd-card">
      <div className="rd-card-main" onClick={() => setOpen(!open)}>
        {/* Rank badge */}
        <div className={`rd-rank-badge ${rankClass(index)}`}>#{index + 1}</div>

        {/* Info */}
        <div className="rd-card-info">
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>
            Candidate #{candidate.candidate_rank ?? index + 1}
          </div>
          <div className="rd-card-skills">
            {(candidate.matched_skills || []).slice(0, 4).map((s) => (
              <span key={s} className="rd-skill-tag matched">✓ {s}</span>
            ))}
            {(candidate.missing_skills || []).slice(0, 3).map((s) => (
              <span key={s} className="rd-skill-tag missing">✗ {s}</span>
            ))}
            {((candidate.matched_skills?.length ?? 0) > 4) && (
              <span className="rd-skill-tag matched">+{candidate.matched_skills.length - 4} more</span>
            )}
          </div>
        </div>

        {/* Score */}
        <div className="rd-card-score-col">
          <div className="rd-score-num" style={{ color }}>{Number(score).toFixed(1)}</div>
          <div className="rd-score-bar-track">
            <div
              className="rd-score-bar-fill"
              style={{ width: `${score}%`, background: color }}
            />
          </div>
          <span className="rd-expand-arrow" style={{ marginTop: 6 }} aria-hidden>
            {open ? "▲" : "▼"}
          </span>
        </div>
      </div>

      <div className={`rd-card-detail${open ? " open" : ""}`}>
        <div className="rd-detail-grid">
          <div>
            <div className="rd-detail-label">Matched Skills ({candidate.matched_skills?.length ?? 0})</div>
            <div className="rd-detail-pills">
              {(candidate.matched_skills || []).map((s) => (
                <span key={s} className="rd-detail-pill matched">{s}</span>
              ))}
              {(!candidate.matched_skills?.length) && <span style={{ fontSize: 13, color: "#B0AAA0" }}>None detected</span>}
            </div>
          </div>
          <div>
            <div className="rd-detail-label">Missing Skills ({candidate.missing_skills?.length ?? 0})</div>
            <div className="rd-detail-pills">
              {(candidate.missing_skills || []).map((s) => (
                <span key={s} className="rd-detail-pill missing">{s}</span>
              ))}
              {(!candidate.missing_skills?.length) && <span style={{ fontSize: 13, color: "#2F8F80" }}>🎉 No gaps</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RecruiterDashboard() {
  const [jobName, setJobName] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);
  const [searchedFor, setSearchedFor] = useState("");

  async function handleSearch(e) {
    e.preventDefault();
    if (!jobName.trim()) return;
    setLoading(true);
    setError(null);
    setSearched(true);
    setSearchedFor(jobName.trim());

    try {
      const data = await getRankedCandidates(jobName.trim());
      setCandidates(data.candidates || []);
    } catch (err) {
      setError(err.message);
      setCandidates([]);
    } finally {
      setLoading(false);
    }
  }

  const avgScore = candidates.length
    ? (candidates.reduce((s, c) => s + (c.ats_score ?? 0), 0) / candidates.length).toFixed(1)
    : null;
  const topScore = candidates.length
    ? Math.max(...candidates.map((c) => c.ats_score ?? 0)).toFixed(1)
    : null;

  return (
    <>
      <style>{CSS}</style>
      <div className="rd-root">

        {/* Search card */}
        <div className="rd-search-card">
          <h2 className="rd-search-title">Recruiter Dashboard</h2>
          <p className="rd-search-sub">Search a job title to see every applicant ranked by real skill match.</p>
          <form onSubmit={handleSearch} className="rd-search-row">
            <input
              className="rd-search-input"
              type="text"
              value={jobName}
              onChange={(e) => setJobName(e.target.value)}
              placeholder='e.g. "AI Engineer", "Data Scientist", "Frontend Developer"'
              id="recruiter-search-input"
            />
            <button type="submit" className="rd-search-btn" disabled={loading}>
              {loading ? <span className="rd-spin" /> : "🔍"}
              {loading ? "Searching…" : "Search Candidates"}
            </button>
          </form>

          {searched && !loading && candidates.length > 0 && (
            <div className="rd-stats-row">
              <div className="rd-stat">
                <span className="rd-stat-num">{candidates.length}</span>
                <span className="rd-stat-label">Candidates found</span>
              </div>
              <div className="rd-stat">
                <span className="rd-stat-num">{topScore}</span>
                <span className="rd-stat-label">Top score</span>
              </div>
              <div className="rd-stat">
                <span className="rd-stat-num">{avgScore}</span>
                <span className="rd-stat-label">Average score</span>
              </div>
            </div>
          )}
        </div>

        {error && <div className="rd-error-pill" role="alert">⚠ {error}</div>}

        {/* Results */}
        {searched && !loading && (
          <>
            <div className="rd-results-header">
              <div className="rd-results-title">
                {candidates.length > 0
                  ? `${candidates.length} candidate${candidates.length > 1 ? "s" : ""} for "${searchedFor}"`
                  : `No candidates for "${searchedFor}"`}
              </div>
              {candidates.length > 0 && (
                <div className="rd-results-meta">Ranked highest → lowest · click any row to expand</div>
              )}
            </div>

            {candidates.length === 0 && !error && (
              <div className="rd-empty">
                <div className="rd-empty-icon">📭</div>
                <div>No candidates found for <strong>"{searchedFor}"</strong>.</div>
                <div style={{ marginTop: 8, fontSize: 13 }}>Try a different job title, or check that candidates have been scored against this role.</div>
              </div>
            )}

            <div className="rd-candidates">
              {candidates.map((c, i) => (
                <CandidateCard key={c.candidate_rank ?? i} candidate={c} index={i} />
              ))}
            </div>
          </>
        )}

        {!searched && (
          <div className="rd-empty">
            <div className="rd-empty-icon">🔍</div>
            <div>Enter a job title above to see ranked candidates.</div>
            <div style={{ marginTop: 8, fontSize: 13 }}>Data comes from the predictions stored in MongoDB Atlas.</div>
          </div>
        )}
      </div>
    </>
  );
}