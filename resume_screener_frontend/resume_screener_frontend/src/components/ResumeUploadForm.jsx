// STATUS: WORKING
// The form: pick a resume file, paste a job description, submit.
// This component only collects input and reports it upward via
// onSubmit - it doesn't call the API itself (that stays in the parent
// page, same "separate concerns" idea used on the backend).
import { useState } from "react";

export default function ResumeUploadForm({ onSubmit, isLoading }) {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // stops the browser's default full-page reload on submit

    if (!resumeFile) {
      alert("Please choose a resume file first.");
      return;
    }
    if (!jobDescription.trim()) {
      alert("Please paste a job description.");
      return;
    }

    onSubmit(resumeFile, jobDescription);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="resume-file">Resume (PDF or DOCX)</label>
        <br />
        <input
          id="resume-file"
          type="file"
          accept=".pdf,.docx"
          onChange={(e) => setResumeFile(e.target.files[0])}
        />
      </div>

      <div style={{ marginTop: "1rem" }}>
        <label htmlFor="jd-text">Job Description</label>
        <br />
        <textarea
          id="jd-text"
          rows={8}
          style={{ width: "100%" }}
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste the job description here..."
        />
      </div>

      <button type="submit" disabled={isLoading} style={{ marginTop: "1rem" }}>
        {isLoading ? "Scoring..." : "Get ATS Score"}
      </button>
    </form>
  );
}
