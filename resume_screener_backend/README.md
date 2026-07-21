# Resume Screener Backend

## Folder structure

```
resume_screener_backend/
├── .env.example              # copy to .env, fill in your real MONGO_URI
├── .gitignore
├── requirements.txt
├── README.md
│
├── app/
│   ├── main.py                # FastAPI app - includes all routers
│   ├── config.py              # loads .env
│   ├── database.py            # MongoDB connection + collection references
│   │
│   ├── routers/                # one file per feature area (URL + input/output only)
│   │   ├── candidates.py       # ✅ WORKING - ranked candidates per job
│   │   ├── predictions.py      # ✅ WORKING - scores a resume/JD feature set
│   │   ├── jobs.py             # ❌ stub - JD upload (Objective 1)
│   │   ├── ai_services.py      # ❌ stub - LLM feedback + interview Qs (Objective 9)
│   │   ├── courses.py          # ❌ stub - course recommendations (Objective 10)
│   │   └── auth.py             # ❌ stub - login/JWT/RBAC (Objective 12/2)
│   │
│   ├── models/                  # Pydantic request/response schemas
│   │   ├── prediction.py       # ✅ WORKING
│   │   ├── candidate.py        # ❌ stub
│   │   └── job.py              # ❌ stub
│   │
│   ├── services/                # actual logic - routers call these, never the reverse
│   │   ├── scoring.py           # ✅ WORKING - loads your real trained model
│   │   ├── parsing.py           # ❌ stub - PDF/DOCX text extraction (Objective 2)
│   │   ├── embeddings.py        # ❌ stub - live Sentence-BERT (Objective 4)
│   │   └── llm_service.py       # ❌ stub - Anthropic/OpenAI calls (Objective 9)
│   │
│   └── ml_models/                # your real trained artifacts
│       ├── ats_score_model.pkl
│       └── feature_names.pkl
│
├── notebooks_archive/            # your original Colab notebooks, kept for reference
│   ├── resume_cleaned.ipynb
│   ├── embeding.ipynb
│   ├── Step_6_Candidate_Ranking.ipynb
│   ├── database_creation.ipynb
│   ├── step7_resume_upload.ipynb
│   └── step5_option_b_v2_ats_score.py
│
├── data_archive/                 # static reference data
│   └── skills_taxonomy.csv
│
└── tests/
    ├── test_scoring.py           # ❌ stub (Objective 15)
    └── test_candidates.py        # ❌ stub (Objective 15)
```

## What's real vs. what's a stub

Every stub file has a `STATUS: NOT BUILT YET` docstring at the top explaining
exactly what it needs to do and which synopsis Objective it maps to. Nothing
is hidden or faked - if a router only returns `{"status": "not implemented"}`,
that's honest, not a placeholder pretending to work.

## How to run it

```bash
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt

cp .env.example .env
# now edit .env and put your real MongoDB URI in

uvicorn app.main:app --reload
```

Then check:
- `http://127.0.0.1:8000/` - health check
- `http://127.0.0.1:8000/docs` - interactive API docs (FastAPI auto-generates this)
- `http://127.0.0.1:8000/candidates/AI Engineer` - real ranked candidates from Mongo
- `POST http://127.0.0.1:8000/predictions/score` - real ATS score from your trained model

## What's genuinely next

1. **`services/parsing.py`** - turn a raw PDF/DOCX upload into clean text
2. **`services/embeddings.py`** - load Sentence-BERT once, expose `embed()` + `cosine_similarity()`
3. Wire those two into `routers/jobs.py` and a new `routers/resumes.py`, so a fresh
   resume+JD pair can be scored end-to-end without you hand-supplying the 6 features
4. Then `ai_services.py`, `courses.py`, `auth.py` - same pattern, one at a time
