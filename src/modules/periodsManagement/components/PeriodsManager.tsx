// src/modules/studentsManagement/components/PeriodsManager.tsx

import React, { useState } from "react";
import "./PeriodsManager.css";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { Course, Period } from "../../../types/types";
import useCourses from "../hooks/useCourses";
import AssignmentsManager from "./AssignmentsManager";
import CourseCard from "./CourseCard";
import CourseSelector from "./CourseSelector";
import { FaTable, FaTh } from "react-icons/fa";
import CourseTable from "./CourseTable";

const PeriodsManager: React.FC<{ periodId: string }> = ({ periodId }) => {
  const navigate = useNavigate();
  const { loading, courses, availableCourses, availableTeachers, handleAddCourse, handleDeleteCourse, handleUpdateCourse, loadAvailableCourses } = useCourses(periodId);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null); // State to hold selected period ID
  const [selectedTeacher, setSelectedTeacher] = useState<string | null>(null);
  const [period] = useLocalStorage<Period | null>("selectPeriod", null);
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleUpdate = async (course: Course) => {
    if (selectedTeacher) {
      const { id, ...courseWithOutId } = course;
      const updatedCourse = { ...courseWithOutId, teacherId: selectedTeacher };
      await handleUpdateCourse(id!, updatedCourse);
      setSelectedTeacher(null);
    }
  };

  const assignCourseToPeriod = async () => {
    const { id, ...courseWithoutId } = availableCourses.filter((course) => course.id === selectedCourseId)[0];
    if (selectedCourseId) {
      const course: Course = {
        ...courseWithoutId,
        periodId,
        courseId: id!,
        status: "Not Started",
        assignmentsIds: [],
        enrolledStudents: [],
      };
      await handleAddCourse(course); // Call the function to add the new period to the student
      setSelectedCourseId(null); // Reset selected period after assignment
    }
  };

  const courseHandlers = { onDelete: handleDeleteCourse, onItemUpdated: handleUpdate };

  return (
    <div className="periods-manager">
      <div className="container">
        <h2>{period?.name}</h2>
        <button onClick={handleGoBack}>Go Back</button>
      </div>



      <div className="">

        {!periodId &&
          (<div className="item m-0 p-0">
            <CourseSelector type="available" courses={availableCourses.filter(availableCourse => !courses.some(course => course.courseId === availableCourse.id))}
              setSelectedCourseId={setSelectedCourseId}
              assign={assignCourseToPeriod}
              loading={loading} load={loadAvailableCourses}></CourseSelector>
            {availableCourses.length === 0 && <div className="empty">No courses available for this period</div>}
            {availableCourses
              .filter(availableCourse => !courses.some(course => course.courseId === availableCourse.id)).length === 0 &&
              <div className="empty">All available courses have already been assigned to this period.</div>
            }

          </div>)}
      </div>

      <div className="view-toggle">
        <button onClick={() => setViewMode('cards')} className={viewMode === 'cards' ? 'active' : ''}>
          <FaTh /> Cards
        </button>
        <button onClick={() => setViewMode('table')} className={viewMode === 'table' ? 'active' : ''}>
          <FaTable /> Table
        </button>
      </div>

      <h1 className="title bt">ASSIGNED COURSES</h1>

      {viewMode === 'table' &&
        (<div className="item m-0 p-0">
          <CourseTable type="assign"
            courses={courses}
            loading={loading}
            teachers={availableTeachers}
            periodId={periodId}
            handlers={courseHandlers}>
          </CourseTable>
        </div>)
      }

      {viewMode === 'cards' && (
        <>
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              teachers={availableTeachers}
              handlers={courseHandlers}
              setSelectedTeacher={setSelectedTeacher}
              childrenVisible={false}
              viewLink={`/period/${periodId}/course/${course.id}`}>
              {course.id && periodId! && <AssignmentsManager courseId={course.id!} periodId={periodId}></AssignmentsManager>}
            </CourseCard>
          ))}
        </>
      )}

    </div>
  );
};

export default PeriodsManager;
