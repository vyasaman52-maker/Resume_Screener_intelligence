// App.jsx — root of the Sift frontend
//
// Auth flow:
//   1. On mount: read { token, role, name } from localStorage.
//      If found → skip landing, go straight to the correct dashboard.
//   2. onEnterApp(role, name, token): called by LandingPage after login/signup/demo.
//      Stores in localStorage + sets view = "app".
//   3. handleLogout(): clears localStorage, returns to landing page.
//
// Views:
//   "landing"  → LandingPage (auth gate)
//   "app"      → Dashboard with role-based tabs
//   "404"      → NotFoundPage (invalid view state)

import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage.jsx";
import CandidateDashboard from "./pages/CandidateDashboard.jsx";
import RecruiterDashboard from "./pages/RecruiterDashboard.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

/* ── App shell styles (only applied when view === "app") ─────────────────── */
const APP_CSS = `
  .app-root {
    min-height: 100vh;
    background: #F5F2EA;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  /* ── Navigation bar ── */
  .app-nav {
    position: sticky; top: 0; z-index: 20;
    display: flex; align-items: center;
    padding: 0 48px; height: 58px;
    gap: 24px;
    background: rgba(245,242,234,0.92);
    backdrop-filter: blur(10px) saturate(1.4);
    border-bottom: 1px solid #D9D3C4;
    box-shadow: 0 1px 0 rgba(20,23,31,0.03);
  }

  .app-brand-btn {
    font-family: Georgia, 'Iowan Old Style', serif;
    font-size: 20px; letter-spacing: 0.01em;
    background: none; border: none; cursor: pointer;
    color: #14171F; display: flex; align-items: center; gap: 1px;
    padding: 0; flex-shrink: 0;
    transition: opacity 0.15s;
  }
  .app-brand-btn:hover { opacity: 0.75; }
  .app-brand-dot { color: #2F8F80; }

  .app-divider { width: 1px; height: 22px; background: #D9D3C4; flex-shrink: 0; }

  /* ── Tab buttons ── */
  .app-tabs { display: flex; gap: 2px; flex: 1; }
  .app-tab {
    font-family: inherit; font-size: 14px; font-weight: 500;
    border: none; background: none; cursor: pointer;
    padding: 7px 16px; border-radius: 7px; color: #565A66;
    transition: background 0.15s, color 0.15s;
    white-space: nowrap;
  }
  .app-tab:hover { background: #EDE9DD; color: #14171F; }
  .app-tab.active { background: #14171F; color: #F5F2EA; font-weight: 600; }

  /* ── Right-side controls ── */
  .app-nav-right {
    display: flex; align-items: center; gap: 10px; margin-left: auto;
  }
  .app-user-chip {
    display: flex; align-items: center; gap: 8px;
    background: #EDE9DD; border-radius: 20px; padding: 5px 14px 5px 8px;
    font-size: 13px; font-weight: 600; color: #14171F;
    border: 1px solid #D9D3C4;
  }
  .app-user-avatar {
    width: 24px; height: 24px; border-radius: 50%;
    background: #2F8F80; color: #fff;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700; flex-shrink: 0;
  }
  .app-role-tag {
    font-size: 11px; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.07em; color: #1F6459;
    background: #E1F5EE; border: 1px solid #2F8F80;
    border-radius: 4px; padding: 2px 7px;
  }
  .app-logout-btn {
    font-family: inherit; font-size: 13px; font-weight: 600;
    background: none; border: 1.5px solid #D9D3C4; border-radius: 7px;
    padding: 7px 14px; cursor: pointer; color: #565A66;
    transition: border-color 0.15s, color 0.15s, background 0.15s;
    white-space: nowrap;
  }
  .app-logout-btn:hover {
    border-color: #C0392B; color: #C0392B; background: #FFF5F4;
  }

  /* ── Page content ── */
  .app-content {
    max-width: 1100px; margin: 0 auto; padding: 36px 32px 80px;
  }
  .app-page-header { margin-bottom: 28px; }
  .app-page-title {
    font-family: Georgia, 'Iowan Old Style', serif;
    font-size: 28px; font-weight: 400; color: #14171F; margin-bottom: 4px;
  }
  .app-page-sub { font-size: 14px; color: #565A66; }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .app-nav { padding: 0 16px; gap: 12px; }
    .app-user-chip span:not(.app-user-avatar) { display: none; }
    .app-role-tag { display: none; }
    .app-content { padding: 20px 16px 60px; }
  }
  @media (max-width: 500px) {
    .app-tab { padding: 7px 10px; font-size: 13px; }
  }
`;

/* ── Local storage helpers ─────────────────────────────────────────────── */
const STORAGE_KEY = "sift_user";

function saveUser(user) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(user)); } catch (_) {}
}
function loadUser() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null"); } catch (_) { return null; }
}
function clearUser() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
}

/* ── App ──────────────────────────────────────────────────────────────── */
export default function App() {
  const [view, setView] = useState("landing");   // "landing" | "app" | "404"
  const [activeTab, setActiveTab] = useState("candidate");
  const [user, setUser] = useState(null);        // { name, role, token? }

  /* On mount: restore session from localStorage */
  useEffect(() => {
    const saved = loadUser();
    if (saved?.role) {
      setUser(saved);
      setActiveTab(
        saved.role === "recruiter" ? "recruiter" :
        saved.role === "admin"     ? "admin"     : "candidate"
      );
      setView("app");
    }
  }, []);

  /* Called by LandingPage when user logs in, registers, or picks demo */
  function handleEnterApp(role, name, token) {
    const u = { role: role || "candidate", name: name || "User", token: token || null };
    setUser(u);
    saveUser(u);
    setActiveTab(
      u.role === "recruiter" ? "recruiter" :
      u.role === "admin"     ? "admin"     : "candidate"
    );
    setView("app");
  }

  /* Logout */
  function handleLogout() {
    clearUser();
    setUser(null);
    setView("landing");
  }

  /* 404 */
  if (view === "404") {
    return <NotFoundPage onGoHome={() => setView(user ? "app" : "landing")} />;
  }

  /* Landing */
  if (view === "landing") {
    return <LandingPage onEnterApp={handleEnterApp} />;
  }

  /* ── App shell ─────────────────────────────────────────────────────── */
  const role = user?.role || "candidate";
  const name = user?.name || "User";
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  const showCandidate = true;                          // all roles see candidate tab
  const showRecruiter = role === "recruiter" || role === "admin";
  const showAdmin     = role === "admin";

  const pageHeaders = {
    candidate: { title: "Candidate Dashboard", sub: "Upload your resume, get your ATS score, AI feedback, and interview prep." },
    recruiter:  { title: "Recruiter Dashboard", sub: "Search a job title to see every applicant ranked by skill match." },
    admin:      { title: "Admin Panel", sub: "Manage the skills taxonomy and course catalogue." },
  };
  const { title, sub } = pageHeaders[activeTab] || pageHeaders.candidate;

  return (
    <>
      <style>{APP_CSS}</style>
      <div className="app-root">

        {/* ── Nav ── */}
        <nav className="app-nav" role="navigation" aria-label="App navigation">
          <button className="app-brand-btn" onClick={() => setView("landing")} aria-label="Back to home">
            sift<span className="app-brand-dot">.</span>
          </button>

          <div className="app-divider" aria-hidden="true" />

          <div className="app-tabs" role="tablist" aria-label="Dashboard tabs">
            {showCandidate && (
              <button
                role="tab" aria-selected={activeTab === "candidate"}
                className={`app-tab${activeTab === "candidate" ? " active" : ""}`}
                id="tab-candidate"
                onClick={() => setActiveTab("candidate")}
              >
                Candidate
              </button>
            )}
            {showRecruiter && (
              <button
                role="tab" aria-selected={activeTab === "recruiter"}
                className={`app-tab${activeTab === "recruiter" ? " active" : ""}`}
                id="tab-recruiter"
                onClick={() => setActiveTab("recruiter")}
              >
                Recruiter
              </button>
            )}
            {showAdmin && (
              <button
                role="tab" aria-selected={activeTab === "admin"}
                className={`app-tab${activeTab === "admin" ? " active" : ""}`}
                id="tab-admin"
                onClick={() => setActiveTab("admin")}
              >
                Admin
              </button>
            )}
          </div>

          <div className="app-nav-right">
            <div className="app-user-chip">
              <span className="app-user-avatar">{initials}</span>
              <span>{name}</span>
            </div>
            <span className="app-role-tag">{role}</span>
            <button className="app-logout-btn" id="logout-btn" onClick={handleLogout}>
              Log out
            </button>
          </div>
        </nav>

        {/* ── Content ── */}
        <div className="app-content" role="tabpanel">
          <div className="app-page-header">
            <h1 className="app-page-title">{title}</h1>
            <p className="app-page-sub">{sub}</p>
          </div>

          {activeTab === "candidate" && <CandidateDashboard />}
          {activeTab === "recruiter" && <RecruiterDashboard />}
          {activeTab === "admin"     && <AdminPanel />}
        </div>
      </div>
    </>
  );
}