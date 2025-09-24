import { useState, useEffect } from "react";
import { Course} from "../../../types/types";
import { getCourseById } from "../services/periodCourseService";
import { useNotification } from "../../../components/notification/NotificationContext";

const useCourses = (periodId: string, courseId: string) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error] = useState<string | null>(null);
  const { showNotification } = useNotification();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const data = await getCourseById(periodId, courseId);
        setCourse(data);
      } catch (err) {
                console.error("Error loading period courses:", err);
        showNotification("Error loading period courses", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [periodId, courseId]);

  return { course, loading, error };
};

export default useCourses;
