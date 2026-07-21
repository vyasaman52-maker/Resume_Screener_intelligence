// src/pages/NotFoundPage.jsx
// 404 / Not Found page — shown when the view state doesn't match any route.
// Matches the Sift design system (cream + teal + serif display type).

export default function NotFoundPage({ onGoHome }) {
  return (
    <>
      <style>{`
        .nf-root {
          min-height: 100vh;
          background: #F5F2EA;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          padding: 48px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        /* Background decorative grid */
        .nf-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(#D9D3C4 1px, transparent 1px),
            linear-gradient(90deg, #D9D3C4 1px, transparent 1px);
          background-size: 48px 48px;
          opacity: 0.3;
          pointer-events: none;
        }

        /* Glowing circle behind the number */
        .nf-glow {
          position: absolute;
          width: 480px; height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(47,143,128,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .nf-card {
          position: relative;
          z-index: 1;
          max-width: 540px;
          width: 100%;
        }

        /* Big 404 number */
        .nf-code {
          font-family: Georgia, 'Iowan Old Style', 'Palatino Linotype', serif;
          font-size: clamp(96px, 18vw, 160px);
          font-weight: 700;
          line-height: 1;
          color: #14171F;
          letter-spacing: -0.04em;
          margin-bottom: 8px;
          /* Teal accent on the middle digit */
          background: linear-gradient(135deg, #14171F 0%, #14171F 38%, #2F8F80 50%, #14171F 62%, #14171F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nf-eyebrow {
          font-family: 'SF Mono', 'JetBrains Mono', Consolas, monospace;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #2F8F80;
          font-weight: 700;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .nf-eyebrow::before,
        .nf-eyebrow::after {
          content: "";
          flex: 1;
          max-width: 48px;
          height: 1px;
          background: #2F8F80;
          border-radius: 1px;
        }

        .nf-title {
          font-family: Georgia, 'Iowan Old Style', serif;
          font-size: clamp(22px, 4vw, 30px);
          font-weight: 400;
          color: #14171F;
          line-height: 1.25;
          margin-bottom: 16px;
        }

        .nf-body {
          font-size: 15.5px;
          color: #565A66;
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .nf-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .nf-btn {
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          border: 1.5px solid transparent;
          padding: 11px 24px;
          transition: transform 0.15s, background 0.15s, box-shadow 0.15s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .nf-btn:active { transform: scale(0.97); }
        .nf-btn-primary {
          background: #14171F;
          color: #F5F2EA;
          box-shadow: 0 1px 4px rgba(20,23,31,0.2);
        }
        .nf-btn-primary:hover {
          background: #242836;
          box-shadow: 0 4px 16px rgba(20,23,31,0.3);
        }
        .nf-btn-ghost {
          background: transparent;
          border-color: #D9D3C4;
          color: #14171F;
        }
        .nf-btn-ghost:hover { border-color: #14171F; }

        /* Helpful links */
        .nf-links {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .nf-link {
          font-size: 13px;
          color: #565A66;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.15s;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          padding: 0;
        }
        .nf-link:hover { color: #2F8F80; }
        .nf-link-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #D9D3C4;
        }

        /* Decorative divider */
        .nf-divider {
          width: 48px; height: 2px;
          background: linear-gradient(90deg, transparent, #2F8F80, transparent);
          border-radius: 2px;
          margin: 28px auto;
        }

        /* Brand footer */
        .nf-brand {
          font-family: Georgia, serif;
          font-size: 18px;
          color: #B0AAA0;
          margin-top: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }
        .nf-brand-dot { color: #2F8F80; }

        @media (max-width: 480px) {
          .nf-actions { flex-direction: column; align-items: center; }
          .nf-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="nf-root">
        <div className="nf-grid" aria-hidden="true" />
        <div className="nf-glow" aria-hidden="true" />

        <div className="nf-card">
          <div className="nf-code" aria-label="Error 404">404</div>

          <div className="nf-eyebrow">Page not found</div>

          <h1 className="nf-title">
            This page doesn't exist — or it moved
          </h1>
          <p className="nf-body">
            The URL you visited isn't part of Sift. It might have been
            mistyped, the link might be outdated, or you may have taken
            a wrong turn somewhere.
          </p>

          <div className="nf-actions">
            <button
              className="nf-btn nf-btn-primary"
              id="nf-home-btn"
              onClick={onGoHome}
            >
              ← Back to Sift home
            </button>
            <button
              className="nf-btn nf-btn-ghost"
              id="nf-score-btn"
              onClick={onGoHome}
            >
              Score a resume
            </button>
          </div>

          <div className="nf-divider" aria-hidden="true" />

          <div className="nf-links">
            <button className="nf-link" onClick={onGoHome}>
              <span className="nf-link-dot" />
              Home
            </button>
            <button className="nf-link" onClick={onGoHome}>
              <span className="nf-link-dot" />
              Candidate Dashboard
            </button>
            <button className="nf-link" onClick={onGoHome}>
              <span className="nf-link-dot" />
              Recruiter Dashboard
            </button>
          </div>
        </div>

        <div className="nf-brand" aria-label="Sift">
          sift<span className="nf-brand-dot">.</span>
        </div>
      </div>
    </>
  );
}
