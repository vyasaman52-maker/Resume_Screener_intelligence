
import { useState, useEffect } from "react";
import { getCourseRecommendations } from "../api/client.js";

export default function CourseRecommendations({ missingSkills }) {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!missingSkills || missingSkills.length === 0) {
      setIsLoading(false);
      return;
    }

    getCourseRecommendations(missingSkills)
      .then((data) => setCourses(data.recommendations))
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [missingSkills]);

  if (isLoading) return <p>Loading course suggestions...</p>;
  if (courses.length === 0) return null;

  return (
    <div style={{ marginTop: "1.5rem" }}>
      <h4>Recommended Courses for Your Skill Gaps</h4>
      <ul>
        {courses.map((c, i) => (
          <li key={i}>
            <strong>{c.skill_gap}</strong>:{" "}
            <a href={c.url} target="_blank" rel="noopener noreferrer">
              {c.course_title}
            </a>{" "}
            ({c.provider})
          </li>
        ))}
      </ul>
    </div>
  );
}