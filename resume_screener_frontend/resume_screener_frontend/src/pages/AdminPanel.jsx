// src/pages/AdminPanel.jsx
// Polished admin panel with Sift design system.
// Tabs: Skills Taxonomy | Course Catalogue
// Both tables are searchable/filterable client-side.

import { useState, useEffect, useMemo } from "react";

const API_BASE = "https://resume-screener-intelligence.onrender.com";

const CSS = `
  .ap-root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    color: #14171F;
    -webkit-font-smoothing: antialiased;
  }

  .ap-header {
    background: #14171F; border-radius: 12px; padding: 28px 32px;
    margin-bottom: 24px; color: #F5F2EA;
    box-shadow: 0 8px 32px -8px rgba(20,23,31,0.4);
  }
  .ap-header-title { font-family: Georgia, serif; font-size: 24px; margin-bottom: 4px; }
  .ap-header-sub { font-size: 14px; color: rgba(245,242,234,0.55); }

  /* ── Tab bar ── */
  .ap-tabs {
    display: flex; gap: 4px; margin-bottom: 20px;
    background: #EDE9DD; border-radius: 10px; padding: 4px; width: fit-content;
  }
  .ap-tab {
    font-family: inherit; font-size: 14px; font-weight: 600;
    border: none; background: none; cursor: pointer;
    padding: 9px 22px; border-radius: 7px; color: #565A66;
    transition: background 0.15s, color 0.15s;
  }
  .ap-tab.active { background: #14171F; color: #F5F2EA; }

  /* ── Card ── */
  .ap-card {
    background: #fff; border: 1px solid #D9D3C4; border-radius: 12px;
    overflow: hidden; box-shadow: 0 1px 3px rgba(20,23,31,0.04), 0 8px 24px -12px rgba(20,23,31,0.08);
  }
  .ap-card-header {
    padding: 20px 28px; border-bottom: 1px solid #EDE9DD;
    display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
  }
  .ap-card-title { font-family: Georgia, serif; font-size: 18px; }
  .ap-count-badge {
    font-family: 'SF Mono', Consolas, monospace; font-size: 12px;
    background: #EDE9DD; border-radius: 20px; padding: 4px 12px; color: #565A66;
  }

  /* ── Search box ── */
  .ap-search {
    font-family: inherit; font-size: 14px; color: #14171F;
    border: 1.5px solid #D9D3C4; border-radius: 7px; padding: 8px 14px;
    background: #FAFAF8; min-width: 240px;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .ap-search:focus {
    outline: none; border-color: #2F8F80;
    box-shadow: 0 0 0 3px rgba(47,143,128,0.15);
  }
  .ap-search::placeholder { color: #B0AAA0; }

  /* ── Table ── */
  .ap-table-wrap { overflow: auto; max-height: 520px; }
  .ap-table {
    width: 100%; border-collapse: collapse; font-size: 14px;
  }
  .ap-table thead th {
    position: sticky; top: 0; background: #FAFAF8;
    border-bottom: 2px solid #D9D3C4; padding: 12px 20px;
    text-align: left; font-size: 12px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em; color: #565A66;
    white-space: nowrap; z-index: 1;
  }
  .ap-table tbody tr {
    border-bottom: 1px solid #F0ECE3;
    transition: background 0.1s;
  }
  .ap-table tbody tr:hover { background: #F5F2EA; }
  .ap-table tbody tr:last-child { border-bottom: none; }
  .ap-table td { padding: 12px 20px; vertical-align: middle; }

  .ap-category-pill {
    font-size: 11.5px; font-weight: 600; border-radius: 12px; padding: 3px 10px;
    background: #E1F5EE; color: #1F6459;
  }

  .ap-link {
    color: #2F8F80; text-decoration: none; font-weight: 500; font-size: 13px;
  }
  .ap-link:hover { color: #1F6459; text-decoration: underline; }

  .ap-empty { padding: 40px; text-align: center; color: #B0AAA0; font-size: 14px; }

  /* ── Loading skeleton ── */
  .ap-skeleton {
    display: flex; flex-direction: column; gap: 12px; padding: 20px 28px;
  }
  .ap-skeleton-row {
    height: 20px; border-radius: 4px; background: linear-gradient(90deg, #EDE9DD 25%, #F5F2EA 50%, #EDE9DD 75%);
    background-size: 400% 100%; animation: ap-shimmer 1.4s ease-in-out infinite;
  }
  @keyframes ap-shimmer { 0% { background-position: 100% 0; } 100% { background-position: -100% 0; } }
`;

export default function AdminPanel() {
  const [skills, setSkills] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("skills");
  const [skillSearch, setSkillSearch] = useState("");
  const [courseSearch, setCourseSearch] = useState("");

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}/admin/skills`).then((r) => r.json()),
      fetch(`${API_BASE}/admin/courses`).then((r) => r.json()),
    ])
      .then(([sData, cData]) => {
        setSkills(sData.skills || []);
        setCourses(cData.courses || []);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredSkills = useMemo(() => {
    if (!skillSearch.trim()) return skills;
    const q = skillSearch.toLowerCase();
    return skills.filter((s) =>
      s.skill?.toLowerCase().includes(q) || s.category?.toLowerCase().includes(q)
    );
  }, [skills, skillSearch]);

  const filteredCourses = useMemo(() => {
    if (!courseSearch.trim()) return courses;
    const q = courseSearch.toLowerCase();
    return courses.filter((c) =>
      c.course_title?.toLowerCase().includes(q) ||
      c.category?.toLowerCase().includes(q) ||
      c.provider?.toLowerCase().includes(q)
    );
  }, [courses, courseSearch]);

  return (
    <>
      <style>{CSS}</style>
      <div className="ap-root">

        <div className="ap-header">
          <div className="ap-header-title">Admin Panel</div>
          <div className="ap-header-sub">Manage the skills taxonomy and course catalogue used across the platform.</div>
        </div>

        {error && (
          <div style={{ background: "#FFF0EE", border: "1px solid #F5C6C2", color: "#C0392B", borderRadius: 8, padding: "12px 18px", marginBottom: 20, fontSize: 14 }}>
            ⚠ Failed to load admin data: {error}
          </div>
        )}

        <div className="ap-tabs" role="tablist">
          <button
            className={`ap-tab${activeTab === "skills" ? " active" : ""}`}
            role="tab" aria-selected={activeTab === "skills"}
            onClick={() => setActiveTab("skills")} id="tab-skills"
          >
            Skills Taxonomy
          </button>
          <button
            className={`ap-tab${activeTab === "courses" ? " active" : ""}`}
            role="tab" aria-selected={activeTab === "courses"}
            onClick={() => setActiveTab("courses")} id="tab-courses"
          >
            Course Catalogue
          </button>
        </div>

        {/* ── Skills tab ── */}
        {activeTab === "skills" && (
          <div className="ap-card">
            <div className="ap-card-header">
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div className="ap-card-title">Skills Taxonomy</div>
                <span className="ap-count-badge">{filteredSkills.length} / {skills.length}</span>
              </div>
              <input
                className="ap-search"
                type="text"
                value={skillSearch}
                onChange={(e) => setSkillSearch(e.target.value)}
                placeholder="Search skills or categories…"
                id="skills-search"
              />
            </div>
            {loading ? (
              <div className="ap-skeleton">
                {Array.from({ length: 8 }, (_, i) => (
                  <div key={i} className="ap-skeleton-row" style={{ width: `${60 + (i * 13) % 40}%` }} />
                ))}
              </div>
            ) : (
              <div className="ap-table-wrap">
                <table className="ap-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Skill</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSkills.length === 0 && (
                      <tr><td colSpan={3} className="ap-empty">No skills match "{skillSearch}"</td></tr>
                    )}
                    {filteredSkills.map((s, i) => (
                      <tr key={i}>
                        <td style={{ color: "#B0AAA0", fontFamily: "monospace", fontSize: 12 }}>{i + 1}</td>
                        <td style={{ fontWeight: 600 }}>{s.skill}</td>
                        <td><span className="ap-category-pill">{s.category}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ── Courses tab ── */}
        {activeTab === "courses" && (
          <div className="ap-card">
            <div className="ap-card-header">
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div className="ap-card-title">Course Catalogue</div>
                <span className="ap-count-badge">{filteredCourses.length} / {courses.length}</span>
              </div>
              <input
                className="ap-search"
                type="text"
                value={courseSearch}
                onChange={(e) => setCourseSearch(e.target.value)}
                placeholder="Search courses, categories, providers…"
                id="courses-search"
              />
            </div>
            {loading ? (
              <div className="ap-skeleton">
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={i} className="ap-skeleton-row" style={{ width: `${55 + (i * 17) % 45}%` }} />
                ))}
              </div>
            ) : (
              <div className="ap-table-wrap">
                <table className="ap-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Category</th>
                      <th>Course</th>
                      <th>Provider</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCourses.length === 0 && (
                      <tr><td colSpan={5} className="ap-empty">No courses match "{courseSearch}"</td></tr>
                    )}
                    {filteredCourses.map((c, i) => (
                      <tr key={i}>
                        <td style={{ color: "#B0AAA0", fontFamily: "monospace", fontSize: 12 }}>{i + 1}</td>
                        <td><span className="ap-category-pill">{c.category}</span></td>
                        <td style={{ fontWeight: 600, maxWidth: 300 }}>{c.course_title}</td>
                        <td style={{ color: "#565A66" }}>{c.provider}</td>
                        <td>
                          {c.url ? (
                            <a href={c.url} target="_blank" rel="noopener noreferrer" className="ap-link">
                              Open →
                            </a>
                          ) : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}