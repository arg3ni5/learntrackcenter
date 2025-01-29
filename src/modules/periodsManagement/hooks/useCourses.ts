// src/modules/studentsManagement/hooks/useCourses.ts

import { useState, useEffect } from "react";
import { AvailableCourse, Course } from "../../../types/types";
import { fetchTeachers, Teacher } from "../../teachersManagement/services/teacherService";
import { addCourse, deleteCourse, updateCourse, fetchAvailableCourses, fetchCourses } from "../services/periodCourseService";
import { useLoading } from "../../../components/loading/LoadingContext";
import { useNotification } from "../../../components/notification/NotificationContext";
import useLocalStorage from "../../../hooks/useLocalStorage";

const DEFAULT_POLLING_INTERVAL = 10 * 60 * 1000;

const useCourses = (periodId: string) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [availableTeachers, setAvailableTeachers] = useLocalStorage<Teacher[]>("availableTeachers", []);
  const [availableCourses, setAvailableCourses] = useLocalStorage<AvailableCourse[]>("availableCourses", []);
  const { showNotification } = useNotification();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(loading);
  }, [loading, setIsLoading]);

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

  const loadGlobalData = async () => {
    try {
      if (availableTeachers.length > 0 && availableCourses.length > 0) {
        console.log("Global data already loaded. Skipping fetch.");
        return;
      }

      const [teachers, availableCoursesList] = await Promise.all([fetchTeachers(), fetchAvailableCourses()]);

      setAvailableTeachers(teachers);
      setAvailableCourses(availableCoursesList);

      localStorage.setItem("availableTeachers", JSON.stringify(teachers));
      localStorage.setItem("availableCourses", JSON.stringify(availableCoursesList));
    } catch (err) {
      console.error("Error loading global data:", err);
      showNotification("Error loading global data", "error");
    }
  };

  useEffect(() => {
    loadPeriodCourses();
  }, [periodId]);

  useEffect(() => {
    loadGlobalData();
    const intervalId = setInterval(() => loadGlobalData(), DEFAULT_POLLING_INTERVAL);
    return () => clearInterval(intervalId);
  }, []);

  const handleAddCourse = async (newCourse: Course) => {
    try {
      if (courses.filter((course) => course.courseId === newCourse.courseId).length > 0) {
        showNotification("Course already added", "error");
        return;
      }
      setLoading(true);
      await addCourse(periodId, newCourse);
      loadGlobalData();
    } catch (err) {
      showNotification("Error adding course", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCourse = async (courseId: string | undefined) => {
    try {
      if (!courseId) return;
      setLoading(true);
      await deleteCourse(periodId, courseId);
      loadGlobalData();
    } catch (err) {
      showNotification("Error deleting course", "error");
      console.error("Error deleting course:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateCourse = async (courseId: string, course: Course) => {
    try {
      if (!periodId) return;
      setLoading(true);
      await updateCourse(periodId, courseId, course);
      loadGlobalData();
    } catch (err) {
      showNotification("Error update course", "error");
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
