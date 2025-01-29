import { useState, useEffect } from "react";
import { AvailableCourse, Course } from "../../../types/types";
import { fetchTeachers, Teacher } from "../../teachersManagement/services/teacherService";
import { addCourse, deleteCourse, updateCourse, fetchAvailableCourses, fetchCourses } from "../services/periodCourseService";
import { useLoading } from "../../../components/loading/LoadingContext";
import { useNotification } from "../../../components/notification/NotificationContext";
import useLocalStorage from "../../../hooks/useLocalStorage";

const DEFAULT_POLLING_INTERVAL = 10 * 60 * 1000; // 10 minutes

const useCourses = (periodId: string) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [availableTeachers, setAvailableTeachers] = useLocalStorage<Teacher[]>("availableTeachers", []);
  const [availableCourses, setAvailableCourses] = useLocalStorage<AvailableCourse[]>("availableCourses", []);
  const { showNotification } = useNotification();
  const { setIsLoading } = useLoading();

  // Update loading state for the loading context
  useEffect(() => {
    setIsLoading(loading);
  }, [loading, setIsLoading]);

  // Load courses for the specific period
  const loadPeriodCourses = async () => {
    try {
      setLoading(true);
      const data = await fetchCourses(periodId);
      const detailedData = data.map((course) => {
        const teacher = availableTeachers.find((t) => t.id === course.teacherId);
        return {
          ...course,
          teacherName: teacher ? teacher.name : "Unknown Teacher",
        };
      });
      setCourses(detailedData);
    } catch (err) {
      console.error("Error loading period courses:", err);
      showNotification("Error loading period courses", "error");
    } finally {
      setLoading(false);
    }
  };

  // Load global data (teachers and available courses)
  const loadGlobalData = async (forceUpdate = false) => {
    try {
      if (!forceUpdate && availableTeachers.length > 0 && availableCourses.length > 0) {
        console.log("Global data already loaded. Skipping fetch.");
        return;
      }

      const [teachers, availableCoursesList] = await Promise.all([
        fetchTeachers(),
        fetchAvailableCourses()
      ]);

      setAvailableTeachers(teachers);
      setAvailableCourses(availableCoursesList);

      localStorage.setItem("availableTeachers", JSON.stringify(teachers));
      localStorage.setItem("availableCourses", JSON.stringify(availableCoursesList));

      console.log("Global data updated.");
    } catch (err) {
      console.error("Error loading global data:", err);
      showNotification("Error loading global data", "error");
    }
  };

  // Load period courses when the period ID changes
  useEffect(() => {
    loadPeriodCourses();
  }, [periodId]);

  useEffect(() => {
    loadGlobalData(); // Initial load
    const intervalId = setInterval(() => loadGlobalData(true), DEFAULT_POLLING_INTERVAL); // Periodic updates
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  // Handle adding a course
  const handleAddCourse = async (newCourse: Course) => {
    try {
      if (courses.some((course) => course.courseId === newCourse.courseId)) {
        showNotification("Course already added", "error");
        return;
      }
      setLoading(true);
      await addCourse(periodId, newCourse);
      loadPeriodCourses(); // Reload period courses after adding
    } catch (err) {
      showNotification("Error adding course", "error");
    } finally {
      setLoading(false);
    }
  };

  // Handle deleting a course
  const handleDeleteCourse = async (courseId: string | undefined) => {
    try {
      if (!courseId) return;
      setLoading(true);
      await deleteCourse(periodId, courseId);
      loadPeriodCourses(); // Reload period courses after deleting
    } catch (err) {
      showNotification("Error deleting course", "error");
      console.error("Error deleting course:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle updating a course
  const handleUpdateCourse = async (courseId: string, updatedCourse: Course) => {
    try {
      if (!periodId) return;
      setLoading(true);
      await updateCourse(periodId, courseId, updatedCourse);
      loadPeriodCourses(); // Reload period courses after updating
    } catch (err) {
      showNotification("Error updating course", "error");
      console.error("Error updating course:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    courses,
    availableCourses,
    availableTeachers,
    loading,
    handleAddCourse,
    handleDeleteCourse,
    handleUpdateCourse,
  };
};

export default useCourses;
