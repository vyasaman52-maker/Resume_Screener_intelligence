// src/pages/LandingPage.jsx
// Professional landing page for Sift — AI Resume Screening Platform
// Features: 5 auto-advancing slides (40s), Login/Signup modals with
// backend auth integration + demo fallback, full responsive design.

import React, { useEffect, useRef, useState, useCallback } from "react";

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Constants                                                                   */
/* ─────────────────────────────────────────────────────────────────────────── */

const API_BASE = "http://127.0.0.1:8000";
const SLIDE_DURATION = 40000; // 40 seconds per slide

const SLIDES = [
  {
    key: "overview",
    eyebrow: "Platform",
    badge: "01",
    title: "AI-powered resume screening that shows its work",
    body: "Sift combines a trained machine-learning model with AI to score every resume against a job description — and explains exactly why, skill by skill.",
    Illustration: OverviewIllustration,
    accent: "#2F8F80",
  },
  {
    key: "score",
    eyebrow: "ATS Score",
    badge: "02",
    title: "A match score you can defend, not just a percentage",
    body: "Six engineered features — skill overlap, experience, education, field match, and semantic similarity — feed a real trained scikit-learn model. Every number traces back to something real in both documents.",
    Illustration: ScoreIllustration,
    accent: "#2F8F80",
  },
  {
    key: "gap",
    eyebrow: "Skills Gap",
    badge: "03",
    title: "See exactly which skills closed the gap — and which didn't",
    body: "No opaque model output. Matched skills and missing skills sit side by side so a candidate or recruiter can read the reasoning behind every score at a glance.",
    Illustration: GapIllustration,
    accent: "#E2A33D",
  },
  {
    key: "ai",
    eyebrow: "AI Coach",
    badge: "04",
    title: "Resume feedback and interview prep, powered by AI",
    body: "Candidates get actionable rewrite suggestions tailored to the role they're targeting. An AI career coach is available to chat about interview preparation and skill development.",
    Illustration: AICoachIllustration,
    accent: "#2F8F80",
  },
  {
    key: "recruit",
    eyebrow: "Recruit",
    badge: "05",
    title: "Rank every applicant by real skill match, not keyword frequency",
    body: "Recruiters search a job title and instantly see every candidate ranked by ATS score, with matched and missing skills visible at a glance — built for the whole hiring pipeline.",
    Illustration: RecruiterIllustration,
    accent: "#E2A33D",
  },
];

/* ─────────────────────────────────────────────────────────────────────────── */
/*  LoginModal                                                                  */
/* ─────────────────────────────────────────────────────────────────────────── */

function LoginModal({ onClose, onSwitch, onSuccess }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const overlayRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Login failed.");
      onSuccess(data.role || "candidate", data.name || "User", data.token || null);
    } catch (err) {
      const msg = err.message || "";
      if (
        msg.toLowerCase().includes("not implemented") ||
        msg.toLowerCase().includes("failed to fetch") ||
        msg.toLowerCase().includes("networkerror")
      ) {
        setError("Auth module is not yet active — use Demo Access below to explore the app.");
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      ref={overlayRef}
      className="lp-overlay"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-heading"
    >
      <div className="lp-modal">
        <button className="lp-modal-close" onClick={onClose} aria-label="Close dialog">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="lp-modal-brand">
          sift<span className="lp-brand-dot">.</span>
        </div>
        <h2 id="login-heading" className="lp-modal-title">Welcome back</h2>
        <p className="lp-modal-sub">Sign in to your Sift account</p>

        <form onSubmit={handleSubmit} className="lp-form" noValidate>
          <div className="lp-field">
            <label htmlFor="lp-login-email">Email address</label>
            <input
              id="lp-login-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="lp-field">
            <label htmlFor="lp-login-password">Password</label>
            <input
              id="lp-login-password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>
          {error && <p className="lp-form-error" role="alert">{error}</p>}
          <button
            type="submit"
            className="lp-btn lp-btn-primary lp-btn-full"
            disabled={loading}
          >
            {loading ? (
              <span className="lp-spinner" aria-hidden="true" />
            ) : null}
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <div className="lp-divider"><span>or continue without an account</span></div>

        <div className="lp-demo-group">
          <p className="lp-demo-hint">Demo access — no credentials needed</p>
          <div className="lp-demo-row">
            <button className="lp-btn lp-btn-ghost lp-demo-btn" onClick={() => onSuccess("candidate", "Demo Candidate", null)}>
              <span className="lp-demo-icon">👤</span> Candidate
            </button>
            <button className="lp-btn lp-btn-ghost lp-demo-btn" onClick={() => onSuccess("recruiter", "Demo Recruiter", null)}>
              <span className="lp-demo-icon">💼</span> Recruiter
            </button>
            <button className="lp-btn lp-btn-ghost lp-demo-btn" onClick={() => onSuccess("admin", "Demo Admin", null)}>
              <span className="lp-demo-icon">⚙️</span> Admin
            </button>
          </div>
        </div>

        <p className="lp-modal-footer-text">
          No account yet?{" "}
          <button className="lp-text-btn" onClick={onSwitch}>Create one →</button>
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  SignupModal                                                                 */
/* ─────────────────────────────────────────────────────────────────────────── */

function SignupModal({ onClose, onSwitch, onSuccess }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "candidate" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Registration failed.");
      onSuccess(form.role, data.name || form.name, data.token || null);
    } catch (err) {
      const msg = err.message || "";
      if (
        msg.toLowerCase().includes("not implemented") ||
        msg.toLowerCase().includes("failed to fetch") ||
        msg.toLowerCase().includes("networkerror")
      ) {
        setError("Auth module is not yet active — use Demo Access below to explore the app.");
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      ref={overlayRef}
      className="lp-overlay"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="signup-heading"
    >
      <div className="lp-modal">
        <button className="lp-modal-close" onClick={onClose} aria-label="Close dialog">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="lp-modal-brand">
          sift<span className="lp-brand-dot">.</span>
        </div>
        <h2 id="signup-heading" className="lp-modal-title">Create an account</h2>
        <p className="lp-modal-sub">Get your first ATS score in minutes</p>

        <form onSubmit={handleSubmit} className="lp-form" noValidate>
          <div className="lp-field">
            <label htmlFor="lp-signup-name">Full name</label>
            <input
              id="lp-signup-name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Alex Johnson"
              autoComplete="name"
              required
            />
          </div>
          <div className="lp-field">
            <label htmlFor="lp-signup-email">Email address</label>
            <input
              id="lp-signup-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="lp-field">
            <label htmlFor="lp-signup-password">Password</label>
            <input
              id="lp-signup-password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Min 8 characters"
              autoComplete="new-password"
              required
            />
          </div>
          <div className="lp-field">
            <label htmlFor="lp-signup-role">I am a</label>
            <select
              id="lp-signup-role"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="candidate">Candidate — looking for a job</option>
              <option value="recruiter">Recruiter — hiring talent</option>
            </select>
          </div>
          {error && <p className="lp-form-error" role="alert">{error}</p>}
          <button
            type="submit"
            className="lp-btn lp-btn-primary lp-btn-full"
            disabled={loading}
          >
            {loading ? <span className="lp-spinner" aria-hidden="true" /> : null}
            {loading ? "Creating account…" : "Create account"}
          </button>
        </form>

        <div className="lp-divider"><span>or continue without an account</span></div>

        <div className="lp-demo-group">
          <p className="lp-demo-hint">Demo access — no credentials needed</p>
          <div className="lp-demo-row">
            <button className="lp-btn lp-btn-ghost lp-demo-btn" onClick={() => onSuccess("candidate", "Demo Candidate", null)}>
              <span className="lp-demo-icon">👤</span> Candidate
            </button>
            <button className="lp-btn lp-btn-ghost lp-demo-btn" onClick={() => onSuccess("recruiter", "Demo Recruiter", null)}>
              <span className="lp-demo-icon">💼</span> Recruiter
            </button>
          </div>
        </div>

        <p className="lp-modal-footer-text">
          Already have an account?{" "}
          <button className="lp-text-btn" onClick={onSwitch}>Sign in →</button>
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  LandingPage (main export)                                                   */
/* ─────────────────────────────────────────────────────────────────────────── */

export default function LandingPage({ onEnterApp }) {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modal, setModal] = useState(null); // null | "login" | "signup"
  const timerRef = useRef(null);

  /* detect prefers-reduced-motion */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  /* scroll-aware nav border */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* 40-second auto-advance */
  useEffect(() => {
    if (paused || reducedMotion) return;
    timerRef.current = setTimeout(() => {
      setActive((i) => (i + 1) % SLIDES.length);
      setAnimKey((k) => k + 1);
    }, SLIDE_DURATION);
    return () => clearTimeout(timerRef.current);
  }, [active, paused, reducedMotion]);

  const goTo = useCallback((i) => {
    setActive(i);
    setAnimKey((k) => k + 1);
  }, []);

  const onKeyDown = useCallback((e) => {
    if (e.key === "ArrowRight") goTo((active + 1) % SLIDES.length);
    if (e.key === "ArrowLeft") goTo((active - 1 + SLIDES.length) % SLIDES.length);
  }, [active, goTo]);

  function handleAuthSuccess(role, name, token) {
    setModal(null);
    onEnterApp(role, name, token);
  }

  const slide = SLIDES[active];

  return (
    <>
      {/* ─── Global styles (scoped via lp- prefix) ─── */}
      <style>{`
        /* ── Reset / Root ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body.lp-open { overflow: hidden; }

        :root {
          --ink:        #14171F;
          --paper:      #F5F2EA;
          --paper-dim:  #EDE9DD;
          --teal:       #2F8F80;
          --teal-dark:  #1F6459;
          --teal-tint:  #E1F5EE;
          --amber:      #E2A33D;
          --amber-dark: #A66F1E;
          --amber-tint: #FBF0DD;
          --line:       #D9D3C4;
          --line-dark:  rgba(245,242,234,0.15);
          --soft:       #565A66;
          --soft-dark:  rgba(245,242,234,0.65);
          --danger:     #C0392B;
          --font-display: Georgia, 'Iowan Old Style', 'Palatino Linotype', serif;
          --font-body:  -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          --font-mono:  'SF Mono', 'JetBrains Mono', Consolas, monospace;
          --ease:       cubic-bezier(0.22, 1, 0.36, 1);
          --r-sm:       6px;
          --r-md:       10px;
          --r-lg:       16px;
        }

        /* ── Landing root ── */
        .lp-root {
          background: var(--paper);
          color: var(--ink);
          font-family: var(--font-body);
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
        }
        .lp-root a { color: inherit; text-decoration: none; }
        .lp-root :focus-visible {
          outline: 2px solid var(--teal);
          outline-offset: 3px;
          border-radius: 3px;
        }

        /* ── Skip link ── */
        .lp-skip {
          position: absolute; left: -9999px; top: 0; z-index: 200;
          background: var(--ink); color: var(--paper); padding: 10px 20px;
          border-radius: 0 0 var(--r-sm) 0; font-size: 14px;
        }
        .lp-skip:focus { left: 0; }

        /* ── Nav ── */
        .lp-nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 56px;
          background: rgba(245,242,234,0.88);
          backdrop-filter: blur(10px) saturate(1.4);
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s var(--ease), box-shadow 0.3s var(--ease);
        }
        .lp-nav.scrolled {
          border-bottom-color: var(--line);
          box-shadow: 0 2px 20px -8px rgba(20,23,31,0.08);
        }
        .lp-brand {
          font-family: var(--font-display);
          font-size: 22px;
          letter-spacing: 0.01em;
          display: flex; align-items: center;
        }
        .lp-brand-dot { color: var(--teal); }

        .lp-nav-links {
          display: flex; align-items: center; gap: 36px;
          font-size: 14px; color: var(--soft);
        }
        .lp-nav-links a {
          transition: color 0.15s;
          position: relative;
        }
        .lp-nav-links a::after {
          content: ""; position: absolute; bottom: -2px; left: 0; right: 0;
          height: 1.5px; background: var(--teal); border-radius: 2px;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.2s var(--ease);
        }
        .lp-nav-links a:hover { color: var(--ink); }
        .lp-nav-links a:hover::after { transform: scaleX(1); }

        .lp-nav-actions { display: flex; align-items: center; gap: 10px; }

        /* ── Buttons ── */
        .lp-btn {
          font-family: var(--font-body); font-size: 14px; font-weight: 600;
          border-radius: var(--r-sm); cursor: pointer; border: 1.5px solid transparent;
          padding: 9px 20px;
          transition: transform 0.15s var(--ease), background 0.15s, border-color 0.15s, box-shadow 0.15s;
          display: inline-flex; align-items: center; gap: 7px;
          text-decoration: none;
          line-height: 1;
          white-space: nowrap;
        }
        .lp-btn:active { transform: scale(0.97); }
        .lp-btn-primary {
          background: var(--teal); color: #fff;
          box-shadow: 0 1px 4px rgba(47,143,128,0.25);
        }
        .lp-btn-primary:hover { background: var(--teal-dark); box-shadow: 0 4px 16px rgba(47,143,128,0.35); }
        .lp-btn-ghost {
          background: transparent;
          border-color: var(--line); color: var(--ink);
        }
        .lp-btn-ghost:hover { border-color: var(--ink); background: rgba(20,23,31,0.03); }
        .lp-btn-dark {
          background: var(--ink); color: var(--paper);
          box-shadow: 0 1px 4px rgba(20,23,31,0.20);
        }
        .lp-btn-dark:hover { background: #242836; box-shadow: 0 4px 16px rgba(20,23,31,0.30); }
        .lp-btn-full { width: 100%; justify-content: center; padding: 12px; }
        .lp-btn-lg { padding: 12px 28px; font-size: 15px; }

        /* ── Spinner ── */
        .lp-spinner {
          width: 16px; height: 16px; border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff;
          animation: lp-spin 0.7s linear infinite;
          flex-shrink: 0;
        }
        @keyframes lp-spin { to { transform: rotate(360deg); } }

        /* ── Hero ── */
        .lp-hero {
          max-width: 1280px; margin: 0 auto; padding: 72px 56px 48px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center;
        }
        .lp-hero-left { display: flex; flex-direction: column; }

        .lp-eyebrow-row { display: flex; align-items: center; gap: 10px; margin-bottom: 22px; }
        .lp-badge {
          font-family: var(--font-mono); font-size: 11px; color: var(--soft);
          background: var(--paper-dim); border: 1px solid var(--line);
          border-radius: 4px; padding: 2px 7px;
        }
        .lp-eyebrow {
          font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--teal-dark); font-weight: 700;
        }

        .lp-headline {
          font-family: var(--font-display);
          font-size: 46px; line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 22px;
          min-height: 160px;
        }
        .lp-subhead {
          font-size: 17px; color: var(--soft); line-height: 1.65;
          max-width: 480px; margin-bottom: 36px;
          min-height: 88px;
        }

        .lp-hero-ctas { display: flex; gap: 12px; margin-bottom: 44px; flex-wrap: wrap; }

        /* ── Progress track ── */
        .lp-track-row { display: flex; align-items: center; gap: 16px; }
        .lp-tracks { display: flex; gap: 8px; flex: 1; }
        .lp-track-item {
          flex: 1; height: 3px; background: var(--line); border-radius: 3px;
          overflow: hidden; cursor: pointer; position: relative;
        }
        .lp-track-item:hover { background: #C5BFB0; }
        .lp-track-fill {
          position: absolute; inset: 0; width: 0;
          background: var(--teal); border-radius: 3px;
        }
        .lp-track-fill.active {
          animation: lp-track-grow ${SLIDE_DURATION}ms linear forwards;
        }
        .lp-track-fill.done { width: 100%; }
        .lp-track-item.paused .lp-track-fill.active { animation-play-state: paused; }
        @keyframes lp-track-grow { from { width: 0; } to { width: 100%; } }
        @media (prefers-reduced-motion: reduce) {
          .lp-track-fill.active { animation: none; width: 100%; }
        }
        .lp-track-counter {
          font-family: var(--font-mono); font-size: 12px; color: var(--soft);
          white-space: nowrap;
        }

        /* ── Illustration stage ── */
        .lp-stage {
          position: relative; border-radius: var(--r-lg);
          background: #fff; border: 1px solid var(--line);
          box-shadow:
            0 2px 4px rgba(20,23,31,0.04),
            0 20px 60px -24px rgba(20,23,31,0.16);
          overflow: hidden;
          aspect-ratio: 4/3;
        }
        .lp-stage svg {
          width: 100%; height: 100%; display: block;
          animation: lp-fadein 0.55s var(--ease);
        }
        @keyframes lp-fadein {
          from { opacity: 0; transform: translateY(8px) scale(0.985); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .lp-stage svg { animation: none; }
        }

        /* ── Proof band ── */
        .lp-proof {
          background: var(--paper-dim);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .lp-proof-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 32px 56px;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px;
        }
        .lp-stat-num {
          font-family: var(--font-mono); font-size: 28px; font-weight: 700; color: var(--ink);
        }
        .lp-stat-label { font-size: 13px; color: var(--soft); margin-top: 4px; }

        /* ── How it works (dark) ── */
        .lp-how {
          background: var(--ink); color: var(--paper);
          padding: 96px 56px;
        }
        .lp-how-inner { max-width: 1280px; margin: 0 auto; }
        .lp-section-eyebrow {
          font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.1em;
          text-transform: uppercase; font-weight: 700; margin-bottom: 16px;
        }
        .lp-how .lp-section-eyebrow { color: var(--amber); }
        .lp-how-head { margin-bottom: 52px; max-width: 600px; }
        .lp-how-title {
          font-family: var(--font-display); font-size: 34px; line-height: 1.15;
          margin-bottom: 14px;
        }
        .lp-how-sub { color: var(--soft-dark); font-size: 16px; line-height: 1.65; }

        .lp-dual-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1px; background: var(--line-dark);
          border-radius: var(--r-md); overflow: hidden;
        }
        .lp-track-card { background: #1C2030; padding: 40px; }
        .lp-track-card-label {
          display: flex; align-items: center; gap: 12px; margin-bottom: 28px;
        }
        .lp-track-num {
          font-family: var(--font-mono); font-size: 11px; font-weight: 700;
          color: var(--ink); background: var(--amber);
          width: 24px; height: 24px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .lp-track-name {
          font-size: 13px; letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--paper); font-weight: 700;
        }
        .lp-track-steps { list-style: none; }
        .lp-track-steps li {
          position: relative; padding-left: 20px;
          color: var(--soft-dark); font-size: 15px; line-height: 1.6;
          margin-bottom: 16px;
        }
        .lp-track-steps li:last-child { margin-bottom: 0; }
        .lp-track-steps li::before {
          content: ""; position: absolute; left: 0; top: 9px;
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--teal);
        }

        /* ── Tech stack ── */
        .lp-tech {
          max-width: 1280px; margin: 0 auto;
          padding: 88px 56px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center;
        }
        .lp-tech-copy .lp-section-eyebrow { color: var(--teal-dark); }
        .lp-tech-title {
          font-family: var(--font-display); font-size: 30px; line-height: 1.2;
          margin-bottom: 16px;
        }
        .lp-tech-body { color: var(--soft); font-size: 15.5px; line-height: 1.7; margin-bottom: 28px; }
        .lp-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .lp-pill {
          font-family: var(--font-mono); font-size: 12px; font-weight: 600;
          border-radius: 4px; padding: 5px 12px;
          border: 1.5px solid var(--line); color: var(--ink);
          background: var(--paper-dim);
        }
        .lp-pill.teal { border-color: var(--teal); color: var(--teal-dark); background: var(--teal-tint); }
        .lp-pill.amber { border-color: var(--amber); color: var(--amber-dark); background: var(--amber-tint); }

        .lp-pipeline {
          background: var(--paper-dim); border: 1px solid var(--line);
          border-radius: var(--r-md); padding: 28px;
        }
        .lp-pipeline-step {
          display: flex; align-items: flex-start; gap: 14px; margin-bottom: 20px;
        }
        .lp-pipeline-step:last-child { margin-bottom: 0; }
        .lp-pipeline-icon {
          font-size: 18px; width: 36px; height: 36px;
          background: #fff; border: 1px solid var(--line); border-radius: var(--r-sm);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .lp-pipeline-text strong { display: block; font-size: 14px; font-weight: 600; margin-bottom: 2px; }
        .lp-pipeline-text span { font-size: 13px; color: var(--soft); }
        .lp-pipeline-arrow {
          margin: 4px 0 4px 18px; font-size: 16px; color: var(--line);
          line-height: 1;
        }

        /* ── CTA ── */
        .lp-cta {
          background: var(--ink); color: var(--paper);
          text-align: center; padding: 96px 56px;
        }
        .lp-cta-inner { max-width: 640px; margin: 0 auto; }
        .lp-cta .lp-section-eyebrow { color: var(--amber); }
        .lp-cta-title {
          font-family: var(--font-display); font-size: 38px; line-height: 1.15;
          margin-bottom: 18px;
        }
        .lp-cta-body { color: var(--soft-dark); font-size: 16px; margin-bottom: 36px; line-height: 1.65; }
        .lp-cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

        /* ── Footer ── */
        .lp-footer {
          border-top: 1px solid var(--line);
          background: var(--paper);
        }
        .lp-footer-inner {
          max-width: 1280px; margin: 0 auto; padding: 36px 56px;
          display: flex; align-items: center; justify-content: space-between;
          font-size: 13px; color: var(--soft);
        }
        .lp-footer-links { display: flex; gap: 28px; }
        .lp-footer-links a:hover { color: var(--ink); }
        .lp-footer-right { display: flex; align-items: center; gap: 16px; }

        /* ── Modal overlay ── */
        .lp-overlay {
          position: fixed; inset: 0; z-index: 100;
          background: rgba(14,16,22,0.60);
          backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          padding: 24px;
          animation: lp-overlay-in 0.2s ease;
        }
        @keyframes lp-overlay-in { from { opacity: 0; } to { opacity: 1; } }

        .lp-modal {
          background: var(--paper); border: 1px solid var(--line);
          border-radius: var(--r-lg); padding: 40px;
          width: 100%; max-width: 440px;
          box-shadow: 0 24px 80px -16px rgba(14,16,22,0.45);
          position: relative;
          animation: lp-modal-in 0.3s var(--ease);
        }
        @keyframes lp-modal-in {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .lp-modal-close {
          position: absolute; top: 18px; right: 18px;
          background: none; border: none; cursor: pointer;
          color: var(--soft); padding: 4px;
          border-radius: var(--r-sm);
          display: flex; align-items: center; justify-content: center;
          transition: color 0.15s, background 0.15s;
        }
        .lp-modal-close:hover { color: var(--ink); background: var(--paper-dim); }

        .lp-modal-brand {
          font-family: var(--font-display); font-size: 20px;
          margin-bottom: 20px; display: inline-flex; align-items: center;
        }
        .lp-modal-title {
          font-family: var(--font-display); font-size: 26px;
          line-height: 1.2; margin-bottom: 6px;
        }
        .lp-modal-sub { color: var(--soft); font-size: 14.5px; margin-bottom: 24px; }

        /* ── Form ── */
        .lp-form { display: flex; flex-direction: column; gap: 16px; }
        .lp-field { display: flex; flex-direction: column; gap: 6px; }
        .lp-field label {
          font-size: 13px; font-weight: 600; color: var(--ink); letter-spacing: 0.01em;
        }
        .lp-field input,
        .lp-field select {
          font-family: var(--font-body); font-size: 14.5px; color: var(--ink);
          background: #fff; border: 1.5px solid var(--line);
          border-radius: var(--r-sm); padding: 10px 14px;
          transition: border-color 0.15s, box-shadow 0.15s;
          width: 100%; appearance: auto;
        }
        .lp-field input:focus,
        .lp-field select:focus {
          outline: none;
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(47,143,128,0.15);
        }
        .lp-field input::placeholder { color: #B0AAA0; }

        .lp-form-error {
          font-size: 13px; color: var(--danger); padding: 10px 14px;
          background: #FFF5F4; border: 1px solid #F5C6C2;
          border-radius: var(--r-sm); line-height: 1.5;
        }

        /* ── Modal divider ── */
        .lp-divider {
          position: relative; text-align: center; margin: 20px 0;
        }
        .lp-divider::before {
          content: ""; position: absolute; top: 50%; left: 0; right: 0;
          height: 1px; background: var(--line);
        }
        .lp-divider span {
          position: relative; background: var(--paper);
          padding: 0 12px; font-size: 12px; color: var(--soft);
        }

        /* ── Demo group ── */
        .lp-demo-group { margin-bottom: 20px; }
        .lp-demo-hint {
          font-size: 12.5px; color: var(--soft); margin-bottom: 10px; text-align: center;
        }
        .lp-demo-row { display: flex; gap: 8px; }
        .lp-demo-btn { flex: 1; justify-content: center; padding: 8px 12px !important; font-size: 13px !important; }
        .lp-demo-icon { font-size: 14px; }

        .lp-modal-footer-text { font-size: 13px; color: var(--soft); text-align: center; }
        .lp-text-btn {
          background: none; border: none; cursor: pointer;
          color: var(--teal-dark); font-weight: 600; font-size: inherit;
          text-decoration: underline; padding: 0;
        }
        .lp-text-btn:hover { color: var(--teal); }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .lp-nav, .lp-hero, .lp-how, .lp-tech, .lp-cta, .lp-proof-inner, .lp-footer-inner {
            padding-left: 28px; padding-right: 28px;
          }
          .lp-hero { grid-template-columns: 1fr; gap: 40px; padding-top: 48px; }
          .lp-headline { font-size: 36px; min-height: 0; }
          .lp-subhead { min-height: 0; }
          .lp-tech { grid-template-columns: 1fr; gap: 40px; }
          .lp-dual-grid { grid-template-columns: 1fr; }
          .lp-proof-inner { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        @media (max-width: 640px) {
          .lp-nav { padding: 16px 20px; }
          .lp-nav-links { display: none; }
          .lp-hero { padding: 36px 20px 32px; }
          .lp-headline { font-size: 28px; }
          .lp-how, .lp-cta { padding: 64px 20px; }
          .lp-tech { padding: 56px 20px; }
          .lp-proof-inner, .lp-footer-inner { padding: 24px 20px; }
          .lp-proof-inner { grid-template-columns: 1fr 1fr; }
          .lp-cta-actions { flex-direction: column; align-items: center; }
          .lp-footer-inner { flex-direction: column; gap: 16px; text-align: center; }
          .lp-modal { padding: 28px 20px; }
          .lp-demo-row { flex-wrap: wrap; }
        }
      `}</style>

      {/* lock body scroll when modal open */}
      {modal && (
        <style>{`body { overflow: hidden; }`}</style>
      )}

      <div className="lp-root">
        <a className="lp-skip" href="#lp-main">Skip to main content</a>

        {/* ── Nav ── */}
        <nav className={`lp-nav${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">
          <div className="lp-brand" aria-label="Sift home">
            sift<span className="lp-brand-dot">.</span>
          </div>
          <div className="lp-nav-links">
            <a href="#how-it-works">How it works</a>
            <a href="#for-candidates">Candidates</a>
            <a href="#for-recruiters">Recruiters</a>
            <a href="#tech-stack">Technology</a>
          </div>
          <div className="lp-nav-actions">
            <button
              className="lp-btn lp-btn-ghost"
              id="nav-login-btn"
              onClick={() => setModal("login")}
            >
              Log in
            </button>
            <button
              className="lp-btn lp-btn-dark"
              id="nav-signup-btn"
              onClick={() => setModal("signup")}
            >
              Sign up free
            </button>
          </div>
        </nav>

        {/* ── Main ── */}
        <main id="lp-main">

          {/* ── Hero / Slides ── */}
          <section
            className="lp-hero"
            aria-label="Product highlights"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onKeyDown={onKeyDown}
          >
            {/* Left: text */}
            <div className="lp-hero-left">
              <div className="lp-eyebrow-row">
                <span className="lp-badge">{slide.badge}</span>
                <span className="lp-eyebrow">{slide.eyebrow}</span>
              </div>
              <h1 className="lp-headline">{slide.title}</h1>
              <p className="lp-subhead">{slide.body}</p>

              <div className="lp-hero-ctas">
                <button
                  className="lp-btn lp-btn-primary lp-btn-lg"
                  id="hero-get-started-btn"
                  onClick={() => setModal("signup")}
                >
                  Get started free
                </button>
                <button
                  className="lp-btn lp-btn-ghost lp-btn-lg"
                  id="hero-demo-btn"
                  onClick={() => onEnterApp("candidate")}
                >
                  Try demo →
                </button>
              </div>

              {/* Progress tracks */}
              <div
                className="lp-track-row"
                role="tablist"
                aria-label="Slide navigation"
              >
                <div className="lp-tracks">
                  {SLIDES.map((s, i) => (
                    <div
                      key={s.key}
                      className={`lp-track-item${paused ? " paused" : ""}`}
                      role="tab"
                      tabIndex={0}
                      aria-selected={i === active}
                      aria-label={`${s.eyebrow}: ${s.title}`}
                      onClick={() => goTo(i)}
                      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); goTo(i); } }}
                    >
                      <div
                        className={`lp-track-fill${
                          i === active ? " active" : i < active ? " done" : ""
                        }`}
                        key={i === active ? `active-${animKey}` : `${s.key}-${i}`}
                      />
                    </div>
                  ))}
                </div>
                <span className="lp-track-counter" aria-live="polite" aria-atomic="true">
                  {active + 1} / {SLIDES.length}
                </span>
              </div>
            </div>

            {/* Right: illustration */}
            <div className="lp-stage">
              {React.createElement(slide.Illustration, { key: `${slide.key}-${animKey}` })}
            </div>
          </section>

          {/* ── Proof band ── */}
          <section className="lp-proof" aria-label="Platform statistics">
            <div className="lp-proof-inner">
              {[
                { num: "170+", label: "Candidates ranked in a single run" },
                { num: "6", label: "Engineered ML features per score" },
                { num: "100%", label: "Scores traceable to real skills" },
                { num: "AI", label: "Model powering feedback and chat" },
              ].map((s) => (
                <div key={s.num}>
                  <div className="lp-stat-num">{s.num}</div>
                  <div className="lp-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── How it works ── */}
          <section className="lp-how" id="how-it-works" aria-labelledby="how-heading">
            <div className="lp-how-inner">
              <div className="lp-how-head">
                <p className="lp-section-eyebrow">How it works</p>
                <h2 id="how-heading" className="lp-how-title">Built for both sides of the hire</h2>
                <p className="lp-how-sub">
                  The same comparison engine powers a different view for the person applying
                  and the person hiring — transparent to both.
                </p>
              </div>
              <div className="lp-dual-grid">
                <div className="lp-track-card" id="for-candidates">
                  <div className="lp-track-card-label">
                    <span className="lp-track-num">1</span>
                    <span className="lp-track-name">Candidate</span>
                  </div>
                  <ol className="lp-track-steps">
                    <li>Upload your resume (PDF or DOCX) and paste the job description you're targeting</li>
                    <li>Get an ATS score with a full feature breakdown — cosine similarity, skill overlap, education match, and more</li>
                    <li>See exactly which skills you have and which ones you're missing for that role</li>
                    <li>Receive actionable AI feedback and tailored interview questions</li>
                    <li>Chat with the AI career coach to prepare and improve your application</li>
                  </ol>
                </div>
                <div className="lp-track-card" id="for-recruiters">
                  <div className="lp-track-card-label">
                    <span className="lp-track-num">2</span>
                    <span className="lp-track-name">Recruiter</span>
                  </div>
                  <ol className="lp-track-steps">
                    <li>Search any job title in the recruiter dashboard</li>
                    <li>Every applicant is ranked by their real ATS score — not keyword stuffing</li>
                    <li>See matched and missing skills for each candidate at a glance</li>
                    <li>Admin panel gives full visibility into the skills taxonomy and course catalogue</li>
                    <li>Built to scale: 170+ candidates ranked from a single MongoDB query</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* ── Technology stack ── */}
          <section aria-labelledby="tech-heading" id="tech-stack">
            <div className="lp-tech">
              <div className="lp-tech-copy">
                <p className="lp-section-eyebrow" style={{ color: "var(--teal-dark)" }}>Under the hood</p>
                <h2 id="tech-heading" className="lp-tech-title">Engineered features, a real trained model, and live AI</h2>
                <p className="lp-tech-body">
                  Sift doesn't just count keywords. Six hand-engineered features are computed
                  from every resume–JD pair and passed to a trained scikit-learn model.
                  AI handles the generative feedback and open-ended chat.
                </p>
                <div className="lp-pills">
                  {[
                    { label: "FastAPI", cls: "" },
                    { label: "MongoDB Atlas", cls: "" },
                    { label: "scikit-learn", cls: "teal" },
                    { label: "AI Model", cls: "teal" },
                    { label: "React 18", cls: "" },
                    { label: "Vite 5", cls: "" },
                    { label: "sentence-transformers", cls: "amber" },
                    { label: "pdfplumber", cls: "" },
                    { label: "python-docx", cls: "" },
                    { label: "joblib", cls: "" },
                  ].map((p) => (
                    <span key={p.label} className={`lp-pill ${p.cls}`}>{p.label}</span>
                  ))}
                </div>
              </div>

              <div className="lp-pipeline">
                {[
                  { icon: "📄", title: "Resume + Job Description", desc: "PDF or DOCX upload, plain text JD" },
                  { icon: "⚙️", title: "Feature Extraction", desc: "Skill overlap, cosine similarity, education level, field match, experience, positions held" },
                  { icon: "🤖", title: "ML Scoring", desc: "Trained scikit-learn model → 0–100 ATS score" },
                  { icon: "✨", title: "AI", desc: "Structured feedback, interview questions, open-ended career chat with session memory" },
                  { icon: "📊", title: "Results", desc: "Score, matched/missing skills, course recommendations" },
                ].map((step, i, arr) => (
                  <React.Fragment key={step.title}>
                    <div className="lp-pipeline-step">
                      <div className="lp-pipeline-icon">{step.icon}</div>
                      <div className="lp-pipeline-text">
                        <strong>{step.title}</strong>
                        <span>{step.desc}</span>
                      </div>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="lp-pipeline-arrow">↓</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="lp-cta" aria-labelledby="cta-heading">
            <div className="lp-cta-inner">
              <p className="lp-section-eyebrow">Get started</p>
              <h2 id="cta-heading" className="lp-cta-title">Stop guessing whether you're a fit</h2>
              <p className="lp-cta-body">
                Free to try. Upload your resume against any job description and get your first
                ATS score, skill breakdown, and AI feedback in under a minute.
              </p>
              <div className="lp-cta-actions">
                <button
                  className="lp-btn lp-btn-primary lp-btn-lg"
                  id="cta-score-btn"
                  onClick={() => setModal("signup")}
                >
                  Score my resume
                </button>
                <button
                  className="lp-btn lp-btn-ghost lp-btn-lg"
                  id="cta-recruiter-btn"
                  style={{ color: "var(--paper)", borderColor: "rgba(245,242,234,0.3)" }}
                  onClick={() => onEnterApp("recruiter")}
                >
                  I'm a recruiter →
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* ── Footer ── */}
        <footer className="lp-footer">
          <div className="lp-footer-inner">
            <span>
              <strong style={{ fontFamily: "Georgia, serif" }}>sift.</strong>
              &nbsp;— AI Resume &amp; Role Matching Platform
            </span>
            <div className="lp-footer-links">
              <a href="#how-it-works">How it works</a>
              <a href="#for-candidates">Candidates</a>
              <a href="#for-recruiters">Recruiters</a>
              <a href="#tech-stack">Technology</a>
            </div>
            <div className="lp-footer-right">
              <span style={{ fontSize: 12 }}>Built with FastAPI + React</span>
            </div>
          </div>
        </footer>
      </div>

      {/* ── Modals ── */}
      {modal === "login" && (
        <LoginModal
          onClose={() => setModal(null)}
          onSwitch={() => setModal("signup")}
          onSuccess={handleAuthSuccess}
        />
      )}
      {modal === "signup" && (
        <SignupModal
          onClose={() => setModal(null)}
          onSwitch={() => setModal("login")}
          onSuccess={handleAuthSuccess}
        />
      )}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  Illustrations — hand-built SVGs, no external assets                        */
/* ─────────────────────────────────────────────────────────────────────────── */

function OverviewIllustration() {
  return (
    <svg viewBox="0 0 560 420" role="img" aria-label="Platform overview: resume and job description flow into a pipeline producing a score, skills, and AI feedback">
      {/* Background grid */}
      {Array.from({ length: 7 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={60 * i + 30} x2="560" y2={60 * i + 30} stroke="#F0EDE5" strokeWidth="1" />
      ))}
      {Array.from({ length: 10 }, (_, i) => (
        <line key={`v${i}`} x1={56 * i + 28} y1="0" x2={56 * i + 28} y2="420" stroke="#F0EDE5" strokeWidth="1" />
      ))}

      {/* Resume card */}
      <rect x="32" y="100" width="120" height="160" rx="8" fill="#fff" stroke="#D9D3C4" strokeWidth="1.5" />
      <rect x="48" y="118" width="60" height="9" rx="3" fill="#14171F" />
      <rect x="48" y="138" width="88" height="6" rx="2" fill="#E0DBD0" />
      <rect x="48" y="152" width="72" height="6" rx="2" fill="#E0DBD0" />
      <rect x="48" y="166" width="80" height="6" rx="2" fill="#E0DBD0" />
      <rect x="48" y="186" width="50" height="7" rx="2" fill="#2F8F80" opacity="0.7" />
      <rect x="48" y="202" width="88" height="6" rx="2" fill="#E0DBD0" />
      <rect x="48" y="218" width="64" height="6" rx="2" fill="#E0DBD0" />
      <text x="92" y="280" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="11" fill="#565A66">Resume</text>

      {/* JD card */}
      <rect x="32" y="310" width="120" height="80" rx="8" fill="#fff" stroke="#D9D3C4" strokeWidth="1.5" />
      <rect x="48" y="326" width="50" height="7" rx="2" fill="#14171F" />
      <rect x="48" y="342" width="88" height="5" rx="2" fill="#E0DBD0" />
      <rect x="48" y="354" width="72" height="5" rx="2" fill="#E0DBD0" />
      <rect x="48" y="366" width="80" height="5" rx="2" fill="#E0DBD0" />
      <text x="92" y="408" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="11" fill="#565A66">Job Description</text>

      {/* Arrows to pipeline */}
      <path d="M152 180 Q192 180 196 210" stroke="#D9D3C4" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
      <path d="M152 350 Q192 350 196 300" stroke="#D9D3C4" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />

      {/* Pipeline box */}
      <rect x="196" y="160" width="168" height="180" rx="10" fill="#F5F2EA" stroke="#D9D3C4" strokeWidth="1.5" />
      <rect x="210" y="174" width="140" height="22" rx="5" fill="#2F8F80" />
      <text x="280" y="190" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="12" fontWeight="700" fill="#fff">Feature Extraction</text>
      <rect x="210" y="206" width="140" height="22" rx="5" fill="#1F6459" />
      <text x="280" y="222" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="12" fontWeight="700" fill="#fff">ML Model</text>
      <rect x="210" y="238" width="140" height="22" rx="5" fill="#14171F" />
      <text x="280" y="254" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="12" fontWeight="700" fill="#F5F2EA">AI</text>
      <rect x="210" y="270" width="140" height="22" rx="5" fill="#E2A33D" />
      <text x="280" y="286" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="12" fontWeight="700" fill="#fff">Session Memory</text>
      <text x="280" y="332" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="11" fill="#565A66">Pipeline</text>

      {/* Output arrow */}
      <path d="M364 250 L396 250" stroke="#2F8F80" strokeWidth="2" fill="none" />
      <polygon points="396,245 406,250 396,255" fill="#2F8F80" />

      {/* Score output */}
      <rect x="406" y="90" width="118" height="52" rx="8" fill="#2F8F80" />
      <text x="465" y="112" textAnchor="middle" fontFamily="SF Mono,Consolas,monospace" fontSize="24" fontWeight="700" fill="#fff">87</text>
      <text x="465" y="130" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="11" fill="rgba(255,255,255,0.75)">ATS Score / 100</text>

      {/* Skills output */}
      <rect x="406" y="158" width="118" height="100" rx="8" fill="#E1F5EE" stroke="#2F8F80" strokeWidth="1.5" />
      <text x="416" y="176" fontFamily="-apple-system,sans-serif" fontSize="11" fontWeight="700" fill="#1F6459">✓ Matched</text>
      {["Python", "React", "SQL"].map((s, i) => (
        <text key={s} x="424" y={194 + i * 16} fontFamily="-apple-system,sans-serif" fontSize="11" fill="#2F8F80">• {s}</text>
      ))}
      <text x="416" y="242" fontFamily="-apple-system,sans-serif" fontSize="10" fontWeight="700" fill="#A66F1E">✗ Docker, AWS</text>

      {/* AI output */}
      <rect x="406" y="274" width="118" height="100" rx="8" fill="#FBF0DD" stroke="#E2A33D" strokeWidth="1.5" />
      <text x="416" y="292" fontFamily="-apple-system,sans-serif" fontSize="11" fontWeight="700" fill="#A66F1E">✦ AI Feedback</text>
      {["Rewrite summary", "Add Docker exp.", "Prep: system design"].map((s, i) => (
        <text key={s} x="416" y={310 + i * 16} fontFamily="-apple-system,sans-serif" fontSize="10" fill="#565A66">• {s}</text>
      ))}

      {/* Decorative glow */}
      <circle cx="280" cy="250" r="90" fill="url(#ov-glow)" opacity="0.12" />
      <defs>
        <radialGradient id="ov-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2F8F80" />
          <stop offset="100%" stopColor="#2F8F80" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function ScoreIllustration() {
  return (
    <svg viewBox="0 0 560 420" role="img" aria-label="Resume and job description compared, producing a match score of 87 out of 100">
      {/* Resume */}
      <rect x="48" y="60" width="160" height="250" rx="8" fill="#fff" stroke="#D9D3C4" strokeWidth="1.5" />
      <rect x="68" y="80" width="80" height="11" rx="3" fill="#14171F" />
      {[104, 124, 144, 164, 184, 204, 224, 244, 268, 284].map((y, i) => (
        <rect key={y} x="68" y={y} width={i % 3 === 1 ? 80 : 110} height="7" rx="2" fill={i === 3 ? "#2F8F80" : "#E0DBD0"} opacity={i === 3 ? 0.8 : 1} />
      ))}
      <text x="128" y="330" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="12" fill="#565A66">Resume.pdf</text>

      {/* JD */}
      <rect x="352" y="60" width="160" height="250" rx="8" fill="#fff" stroke="#D9D3C4" strokeWidth="1.5" />
      <rect x="372" y="80" width="80" height="11" rx="3" fill="#14171F" />
      {[104, 124, 144, 164, 184, 204, 224, 244, 268, 284].map((y, i) => (
        <rect key={y} x="372" y={y} width={i % 4 === 2 ? 70 : 110} height="7" rx="2" fill={i === 5 ? "#E2A33D" : "#E0DBD0"} opacity={i === 5 ? 0.8 : 1} />
      ))}
      <text x="432" y="330" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="12" fill="#565A66">Job Description</text>

      {/* Dashed connection lines */}
      <line x1="208" y1="185" x2="252" y2="185" stroke="#D9D3C4" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="308" y1="185" x2="352" y2="185" stroke="#D9D3C4" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Score circle */}
      <circle cx="280" cy="185" r="56" fill="#F5F2EA" stroke="#2F8F80" strokeWidth="2.5" />
      <circle cx="280" cy="185" r="48" fill="none" stroke="#E1F5EE" strokeWidth="1" />
      <text x="280" y="196" textAnchor="middle" fontFamily="SF Mono,Consolas,monospace" fontSize="30" fontWeight="700" fill="#1F6459">87</text>
      <text x="280" y="214" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="11" fill="#565A66">/ 100</text>

      {/* Feature bars */}
      <g transform="translate(80,350)">
        {[
          { label: "Skill overlap", pct: 0.72, c: "#2F8F80" },
          { label: "Cosine sim", pct: 0.88, c: "#2F8F80" },
          { label: "Education", pct: 1.0, c: "#1F6459" },
          { label: "Field match", pct: 1.0, c: "#1F6459" },
          { label: "Experience", pct: 0.5, c: "#E2A33D" },
        ].map((f, i) => (
          <g key={f.label} transform={`translate(${i * 80}, 0)`}>
            <rect x="0" y={-50 * f.pct} width="52" height={50 * f.pct} rx="4" fill={f.c} opacity="0.85" />
            <text x="26" y="14" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="9" fill="#565A66">{f.label}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

function GapIllustration() {
  const matched = ["Python", "React", "SQL", "FastAPI", "pandas"];
  const missing = ["Docker", "AWS", "Kubernetes"];
  return (
    <svg viewBox="0 0 560 420" role="img" aria-label="Matched skills shown in teal, missing skills outlined in amber">
      {/* Headers */}
      <text x="72" y="60" fontFamily="-apple-system,sans-serif" fontSize="14" fontWeight="700" fill="#1F6459">✓ Matched Skills</text>
      <text x="320" y="60" fontFamily="-apple-system,sans-serif" fontSize="14" fontWeight="700" fill="#A66F1E">✗ Missing Skills</text>
      <line x1="296" y1="40" x2="296" y2="400" stroke="#E0DBD0" strokeWidth="1" strokeDasharray="4 3" />

      {matched.map((s, i) => {
        const w = s.length * 9 + 40;
        return (
          <g key={s}>
            <rect x="72" y={80 + i * 56} width={w} height="36" rx="18" fill="#2F8F80" />
            <text x={72 + w / 2} y={80 + i * 56 + 23} textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="13" fontWeight="600" fill="#fff">{s}</text>
          </g>
        );
      })}

      {missing.map((s, i) => {
        const w = s.length * 9 + 40;
        return (
          <g key={s}>
            <rect x="320" y={80 + i * 56} width={w} height="36" rx="18" fill="#FBF0DD" stroke="#E2A33D" strokeWidth="2" />
            <text x={320 + w / 2} y={80 + i * 56 + 23} textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="13" fontWeight="600" fill="#A66F1E">{s}</text>
          </g>
        );
      })}

      {/* Overlap ratio */}
      <rect x="72" y="370" width="190" height="30" rx="6" fill="#E1F5EE" stroke="#2F8F80" strokeWidth="1.5" />
      <text x="167" y="390" textAnchor="middle" fontFamily="SF Mono,Consolas,monospace" fontSize="12" fontWeight="700" fill="#1F6459">
        Overlap: 5 / 8 skills (62.5%)
      </text>
    </svg>
  );
}

function AICoachIllustration() {
  const msgs = [
    { role: "user", text: "Why is my score only 71?" },
    { role: "ai", text: "Your resume is missing Docker and AWS — both required by this role. Adding cloud deployment experience could push your score above 85." },
    { role: "user", text: "What questions should I prepare?" },
    { role: "ai", text: "Expect: system design at scale, CI/CD pipeline setup, and how you'd containerise a FastAPI service." },
  ];
  return (
    <svg viewBox="0 0 560 420" role="img" aria-label="AI career coach chat interface with resume feedback and interview questions">
      {/* Card */}
      <rect x="48" y="28" width="464" height="364" rx="12" fill="#fff" stroke="#D9D3C4" strokeWidth="1.5" />

      {/* Header */}
      <rect x="48" y="28" width="464" height="52" rx="12" fill="#14171F" />
      <rect x="48" y="60" width="464" height="20" rx="0" fill="#14171F" />
      <circle cx="80" cy="54" r="14" fill="#2F8F80" />
      <text x="80" y="59" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="14" fill="#fff">✦</text>
      <text x="104" y="50" fontFamily="-apple-system,sans-serif" fontSize="13" fontWeight="700" fill="#F5F2EA">AI Career Coach</text>
      <text x="104" y="66" fontFamily="-apple-system,sans-serif" fontSize="11" fill="rgba(245,242,234,0.55)">Powered by AI · Session active</text>

      {/* Messages */}
      {msgs.map((m, i) => {
        const isUser = m.role === "user";
        const y = 100 + i * 72;
        const maxW = 300;
        const chars = m.text.length;
        const estW = Math.min(maxW, chars * 6.2 + 24);
        const lines = Math.ceil(chars * 6.2 / maxW);
        const h = 20 + lines * 18;
        const x = isUser ? 464 - 56 - estW : 64;

        return (
          <g key={i}>
            <rect
              x={x} y={y} width={estW} height={h} rx="10"
              fill={isUser ? "#2F8F80" : "#F5F2EA"}
              stroke={isUser ? "none" : "#E8E3D9"}
              strokeWidth="1"
            />
            {/* Simplified text — truncate to 2 lines */}
            <foreignObject x={x + 8} y={y + 6} width={estW - 16} height={h - 8}>
              <div xmlns="http://www.w3.org/1999/xhtml" style={{
                fontSize: "11px",
                color: isUser ? "#fff" : "#14171F",
                fontFamily: "-apple-system,sans-serif",
                lineHeight: "1.5",
                overflow: "hidden",
              }}>
                {m.text}
              </div>
            </foreignObject>
          </g>
        );
      })}

      {/* Input bar */}
      <rect x="64" y="356" width="360" height="28" rx="6" fill="#F5F2EA" stroke="#D9D3C4" strokeWidth="1.5" />
      <text x="78" y="375" fontFamily="-apple-system,sans-serif" fontSize="11" fill="#B0AAA0">Ask about your resume, interview prep…</text>
      <rect x="432" y="356" width="64" height="28" rx="6" fill="#2F8F80" />
      <text x="464" y="375" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="12" fontWeight="700" fill="#fff">Send</text>
    </svg>
  );
}

function RecruiterIllustration() {
  const candidates = [
    { rank: 1, score: 94.2, matched: ["Python","React","SQL","Docker"], missing: [] },
    { rank: 2, score: 87.1, matched: ["Python","SQL","FastAPI"], missing: ["Docker"] },
    { rank: 3, score: 71.5, matched: ["Python","React"], missing: ["SQL","Docker","AWS"] },
    { rank: 4, score: 58.0, matched: ["React"], missing: ["Python","SQL","Docker","AWS"] },
  ];

  return (
    <svg viewBox="0 0 560 420" role="img" aria-label="Recruiter dashboard showing candidates ranked by ATS score with matched and missing skills">
      {/* Search bar */}
      <rect x="48" y="28" width="320" height="36" rx="6" fill="#fff" stroke="#D9D3C4" strokeWidth="1.5" />
      <text x="64" y="51" fontFamily="-apple-system,sans-serif" fontSize="13" fill="#B0AAA0">Search job title… "AI Engineer"</text>
      <rect x="380" y="28" width="132" height="36" rx="6" fill="#2F8F80" />
      <text x="446" y="51" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="13" fontWeight="700" fill="#fff">Search Candidates</text>

      {/* Table header */}
      <rect x="48" y="80" width="464" height="30" rx="4" fill="#F0ECE3" />
      {["#", "ATS Score", "Matched Skills", "Missing"].map((h, i) => {
        const xs = [68, 110, 200, 420];
        return (
          <text key={h} x={xs[i]} y={100} fontFamily="-apple-system,sans-serif" fontSize="11" fontWeight="700" fill="#565A66">{h}</text>
        );
      })}

      {/* Rows */}
      {candidates.map((c, i) => {
        const y = 120 + i * 66;
        const pct = c.score / 100;
        const barColor = pct > 0.85 ? "#2F8F80" : pct > 0.65 ? "#E2A33D" : "#C0392B";
        return (
          <g key={c.rank}>
            <rect x="48" y={y} width="464" height="58" rx="6" fill={i % 2 === 0 ? "#fff" : "#FAFAF8"} stroke="#F0ECE3" strokeWidth="1" />
            {/* Rank */}
            <circle cx="68" cy={y + 29} r="12" fill={c.rank === 1 ? "#2F8F80" : "#E8E3D9"} />
            <text x="68" y={y + 34} textAnchor="middle" fontFamily="SF Mono,Consolas,monospace" fontSize="11" fontWeight="700" fill={c.rank === 1 ? "#fff" : "#565A66"}>{c.rank}</text>
            {/* Score */}
            <text x="110" y={y + 22} fontFamily="SF Mono,Consolas,monospace" fontSize="18" fontWeight="700" fill={barColor}>{c.score}</text>
            <rect x="110" y={y + 28} width="72" height="4" rx="2" fill="#E8E3D9" />
            <rect x="110" y={y + 28} width={72 * pct} height="4" rx="2" fill={barColor} />
            {/* Matched */}
            <text x="200" y={y + 28} fontFamily="-apple-system,sans-serif" fontSize="11" fill="#2F8F80">
              {c.matched.join(", ")}
            </text>
            {/* Missing */}
            <text x="420" y={y + 28} fontFamily="-apple-system,sans-serif" fontSize="11" fill="#E2A33D">
              {c.missing.length > 0 ? c.missing.join(", ") : "—"}
            </text>
          </g>
        );
      })}

      {/* Footer count */}
      <text x="48" y="406" fontFamily="-apple-system,sans-serif" fontSize="11" fill="#565A66">Showing 4 of 170 candidates ranked for "AI Engineer"</text>
    </svg>
  );
}
