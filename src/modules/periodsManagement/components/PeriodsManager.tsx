// src/modules/studentsManagement/components/PeriodsManager.tsx

import React, { useState } from "react";
import "./PeriodsManager.css";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { Course, Period } from "../../../types/types";
import useCourses from "../hooks/useCourses";
import SelectInput from "../../../shared/modules/DataManagementModule/components/SelectInput";
import useTeachers from "../../teachersManagement/hooks/useTeachers";
import AssignmentsManager from "./AssignmentsManager";
import CourseCard from "./CourseCard";
import CourseSelector from "./CourseSelector";

const PeriodsManager: React.FC<{ periodId: string }> = ({ periodId }) => {
  const navigate = useNavigate();
  const { loading, courses, availableCourses, handleAddCourse, handleDeleteCourse, handleUpdateCourse, loadAvailableCourses } = useCourses(periodId);
  const { teachers } = useTeachers();
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null); // State to hold selected period ID
  const [selectedTeacher, setSelectedTeacher] = useState<string | null>(null);
  const [period] = useLocalStorage<Period | null>("selectPeriod", null);

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
  const isEqual = (id1: any, id2: any) => id1 && id2 && String(id1) === String(id2);

  return (
    <div className="periods-manager">
      <div className="container">
        <h2>{period?.name}</h2>
        <button onClick={handleGoBack}>Volver</button>
      </div>

      <div className="container">

        {periodId &&
          (<div className="item">
            <div className="buttons-container">
              <CourseSelector courses={availableCourses.filter(availableCourse => !courses.some(course => course.courseId === availableCourse.id))}
              setSelectedCourseId={setSelectedCourseId} loading={loading} load={loadAvailableCourses}></CourseSelector>
            </div>
            {availableCourses.length === 0 && <div className="empty">No courses available for this period</div>}
            {availableCourses
              .filter(availableCourse => !courses.some(course => course.courseId === availableCourse.id)).length === 0 &&
              <div className="empty">All available courses have already been assigned to this period.</div>
            }

          </div>)}

        {periodId && selectedCourseId && (
          <button className="edit-button" onClick={assignCourseToPeriod}>
            Assign course
          </button>
        )}
      </div>
      <div className="">
        {courses.map((course) => (
          <div key={course.id} className="container periods-list">

            <div className="item">
              {!course.teacherId && (
                <>
                  <div className="buttons-container actions">
                    <button className="save-button" onClick={() => handleUpdate(course)}>
                      Save
                    </button>
                  </div>
                  <SelectInput
                    label="Teacher"
                    key="teacherId"
                    options={teachers.map((teacher) => ({ value: teacher.id!, label: teacher.name }))}
                    value={""}
                    onChange={(selectedOption) => setSelectedTeacher(selectedOption.value)}
                    placeholder="Select Teacher"
                  />
                </>
              )}

              <CourseCard
                data={course}
                onDelete={handleDeleteCourse}
                viewLink={`/period/${periodId}/course/${course.id}`} />
            </div>
            <div className="item">
              {course.id && periodId! && <AssignmentsManager courseId={course.id!} periodId={periodId}></AssignmentsManager>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeriodsManager;
