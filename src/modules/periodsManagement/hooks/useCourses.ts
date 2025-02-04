import { useState, useEffect } from "react";
import { AvailableCourse, Course, Teacher } from "../../../types/types";
import { fetchTeachers } from "../../teachersManagement/services/teacherService";
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

  // Update loading state for the loading context
  useEffect(() => {
    setIsLoading(loading);
  }, [loading, setIsLoading]);

  // Load courses for the specific period
  const loadPeriodCourses = async () => {
    if (courses.length === 0) {  // Solo cargar si no hay cursos
      try {
        setLoading(true);
        const data = await fetchCourses(periodId);
        const detailedData = data.map((course) => {
          const teacher = availableTeachers.find((t) => t.id === course.teacherId);
          return {
            ...course,
            teacherName: teacher ? teacher.name : "Unassigned Teacher",
          };
        });
        setCourses(detailedData);
      } catch (err) {
        console.error("Error loading period courses:", err);
        showNotification("Error loading period courses", "error");
      } finally {
        setLoading(false);
      }
    }
  };


  // Load available teachers
  const loadAvailableTeachers = async (forceUpdate = false) => {
    try {
      if (!forceUpdate && availableTeachers.length > 0) {
        console.log("Teachers data already loaded. Skipping fetch.");
        return;
      }
      forceUpdate && setLoading(true);
      const teachers = await fetchTeachers();
      setAvailableTeachers(teachers);
      localStorage.setItem("availableTeachers", JSON.stringify(teachers));

      console.log("Teachers data updated.");
    } catch (err) {
      console.error("Error loading teachers:", err);
      showNotification("Error loading teachers", "error");
    } finally {
      forceUpdate && setLoading(false);
    }
  };

  // Load available courses
  const loadAvailableCourses = async (forceUpdate = false) => {
    try {
      if (!forceUpdate && availableCourses.length > 0) {
        console.log("Available Courses data already loaded. Skipping fetch.");
        return;
      }

      forceUpdate && setLoading(true);
      const courses = await fetchAvailableCourses();
      setAvailableCourses(courses);
      localStorage.setItem("availableCourses", JSON.stringify(courses));

      console.log("Available Courses data updated.");
    } catch (err) {
      console.error("Error loading available courses:", err);
      showNotification("Error loading available courses", "error");
    } finally {
      forceUpdate && setLoading(false);
    }
  };

  type LoadableData = keyof typeof loaders;

  const loaders = {
    teachers: loadAvailableTeachers,
    courses: loadAvailableCourses,
  } as const;

  /**
   * Load selected global data.
   * @param {LoadableData[] | boolean} [loadListOrForce] - List of data to load or a boolean to force update everything.
   * @param {boolean} [forceUpdate] - Whether to force update (only used if first param is an array).
   */
  const loadGlobalData = async (loadListOrForce?: LoadableData[] | boolean, forceUpdate: boolean = false) => {
    let loadList: LoadableData[] = ["teachers", "courses"];

    if (typeof loadListOrForce === "boolean") {
      forceUpdate = loadListOrForce; // Si se pasa un booleano, se usa como forceUpdate
    } else if (Array.isArray(loadListOrForce)) {
      loadList = loadListOrForce; // Si se pasa un array, se usa como lista de cargas
    }

    const tasks = loadList.map((key) => loaders[key](forceUpdate));

    if (tasks.length > 0) {
      await Promise.all(tasks);
      console.log("Selected global data loaded.");
    } else {
      console.log("No valid data type selected for loading.");
    }
  };

  useEffect(() => {
    if (periodId) {
      loadPeriodCourses();
    }
  }, [periodId]);


  useEffect(() => {
    loadGlobalData(); // Initial load
    const intervalId = setInterval(() => loadGlobalData(["courses"], true), DEFAULT_POLLING_INTERVAL); // Periodic updates
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
    loadGlobalData: () => loadGlobalData(true),
    loadAvailableCourses: () => loadGlobalData(["courses"], true),
    loadAvailableTeachers: () => loadGlobalData(["teachers"], true),
  };
};

export default useCourses;
