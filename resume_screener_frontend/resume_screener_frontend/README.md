# Resume Screener Frontend

## Folder structure

```
resume_screener_frontend/
├── package.json
├── vite.config.js
├── index.html
├── .gitignore
│
└── src/
    ├── main.jsx              # React entry point, mounts <App />
    ├── App.jsx               # ✅ WORKING (basic) - renders CandidateDashboard directly
    │                            (no routing between pages yet - see TODO inside)
    ├── index.css              # global styles, minimal
    │
    ├── api/
    │   └── client.js          # ✅ WORKING - all backend calls live here,
    │                            never call fetch() directly inside components
    │
    ├── components/             # reusable, "dumb" pieces - no API calls inside these
    │   ├── ResumeUploadForm.jsx   # ✅ WORKING - file + text input, reports up via onSubmit
    │   └── ScoreResult.jsx         # ✅ WORKING - displays the score + feature breakdown
    │
    └── pages/                   # each page owns its own state + API calls
        ├── CandidateDashboard.jsx  # ✅ WORKING (Objective 7, basic version)
        ├── RecruiterDashboard.jsx  # ❌ stub (Objective 8)
        └── AdminPanel.jsx          # ❌ stub (Objective 11)
```

## What's real vs. what's a stub

Every stub file has a comment at the top explaining exactly what it needs
to do and which synopsis Objective it maps to - same pattern as the
backend's `notebooks_archive` and stub routers.

## How to run it

You need Node.js installed first. Check with:
```bash
node --version
```

Then, from inside this folder:
```bash
npm install
npm run dev
```

This starts a local dev server, usually at:
```
http://localhost:5173
```

**Your FastAPI backend must also be running** (in a separate terminal,
inside `resume_screener_backend`, with its `venv` active) for the
Candidate Dashboard to actually get a score back:
```bash
uvicorn app.main:app --reload
```

## What this connects to right now

`CandidateDashboard.jsx` calls `POST http://127.0.0.1:8000/resumes/score`
via `api/client.js` - the same endpoint you already tested manually
through `/docs`. This page is just a real UI wrapped around that same
working call.

## What's genuinely next

1. Test this page against your real backend - upload a resume, paste a
   JD, confirm the score displays correctly
2. Build out `RecruiterDashboard.jsx` (calls `getRankedCandidates()`,
   already written in `api/client.js`, just not used yet)
3. Once both dashboards exist, install `react-router-dom` and replace
   `App.jsx`'s direct render with real page routing
4. `AdminPanel.jsx` last, since it depends on Auth (Objective 12/2)
   existing first
