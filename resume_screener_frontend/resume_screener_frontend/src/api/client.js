// STATUS: WORKING
// Wraps calls to your FastAPI backend so components never build fetch()
// requests directly - same reasoning as separating routers from services
// on the backend: keep the "how we talk to the API" logic in one place.

const API_BASE_URL = "https://resume-screener-intelligence.onrender.com";

/**
 * Calls POST /resumes/score with a resume file + job description text.
 * Matches app/routers/resumes.py exactly: expects "resume" (file) and
 * "job_description" (text) as multipart form fields, not JSON - because
 * file uploads can't be sent as plain JSON.
 */
export async function scoreResume(resumeFile, jobDescription) {
  const formData = new FormData();
  formData.append("resume", resumeFile);
  formData.append("job_description", jobDescription);

  const response = await fetch(`${API_BASE_URL}/resumes/score`, {
    method: "POST",
    body: formData,
    // NOTE: do NOT set a Content-Type header manually here - the browser
    // sets the correct multipart boundary automatically. Setting it by
    // hand is a common mistake that breaks the upload.
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `Request failed with status ${response.status}`);
  }

  return response.json();
}

// TODO (Objective 6): call GET /candidates/{job_name} once the
// Recruiter Dashboard is built
export async function getRankedCandidates(jobName) {
  const response = await fetch(`${API_BASE_URL}/candidates/${encodeURIComponent(jobName)}`);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
}

export async function getResumeFeedback(resumeText, jobDescription, sessionId) {
  const response = await fetch(`${API_BASE_URL}/ai/feedback`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      resume_text: resumeText,
      job_description: jobDescription,
      session_id: sessionId,
    }),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `Request failed with status ${response.status}`);
  }
  return response.json();
}

export async function chatWithAI(resumeText, jobDescription, message, sessionId) {
  const response = await fetch(`${API_BASE_URL}/ai/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      resume_text: resumeText,
      job_description: jobDescription,
      message: message,
      session_id: sessionId,
    }),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `Request failed with status ${response.status}`);
  }
  return response.json();
}

export async function getCourseRecommendations(missingSkills) {
  const response = await fetch(`${API_BASE_URL}/courses/recommend`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ missing_skills: missingSkills }),
  });
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
}

// ── Auth endpoints (Objective 12/2) ──────────────────────────────────────
// These call the backend /auth/login and /auth/register routes.
// The backend auth module is not yet implemented — the LandingPage modals
// handle the "not implemented" response gracefully and fall back to demo mode.

/**
 * POST /auth/login
 * Body: { email, password }
 * Returns: { token, role, user_id } on success
 */
export async function loginUser(email, password) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `Login failed with status ${response.status}`);
  }
  return response.json();
}

/**
 * POST /auth/register
 * Body: { name, email, password, role }
 * Returns: { token, role, user_id } on success
 */
export async function registerUser(name, email, password, role) {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, role }),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `Registration failed with status ${response.status}`);
  }
  return response.json();
}