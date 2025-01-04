// src/modules/studentsManagement/components/PeriodsManager.tsx

import React, { useState } from "react";
import "./PeriodsManager.css";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { Course, Period } from "../../../types/types";
import useCourses from "../hooks/useCourses";
import SelectInput from "../../../components/BaseModule/SelectInput";
import useTeachers from "../../teachersManagement/hooks/useTeachers";
import AssignmentsManager from "./AssignmentsManager";
import Card, { CardField } from "../../../components/card/card";

const PeriodsManager: React.FC<{ periodId: string }> = ({ periodId }) => {
  const navigate = useNavigate();
  const { courses, availableCourses, handleAddCourse, handleDeleteCourse, handleUpdateCourse } = useCourses(periodId);
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
        courseId: id!,
        status: "Not Started",
        assignmentsIds: [],
      };      
      await handleAddCourse(course); // Call the function to add the new period to the student
      setSelectedCourseId(null); // Reset selected period after assignment
    }
  };
  const isEqual = (id1: any, id2: any) => id1 && id2 && String(id1) === String(id2);

  const fields: CardField[] = [
    { name: "name", placeholder: "name" },
    { name: "description", placeholder: "description" },
    { name: "duration", placeholder: "duration" },
    { name: "hours", placeholder: "hours" },
    { name: "status", placeholder: "status" },
    // { name: "courseId", placeholder: "courseId" },
    { name: "assignmentsIds", placeholder: "assignments", type:"array" },
    { name: "teacherName", placeholder: "teacherName" },
  ];

  return (
    <div className="periods-manager card">
      <div className="container">
        <h3>{period?.name}</h3>
        <button onClick={handleGoBack}>Volver</button>
      </div>

      <div className="container">
        {periodId && (
          <div className="item">
            <h3>Available Courses</h3>
            <div className="buttons-container flex">
              {availableCourses.map((course, idx) => (
                <button key={`ac-${idx}`} className={`button ${isEqual(selectedCourseId, course.id) ? "active" : ""}`} onClick={() => setSelectedCourseId(course.id!)}>
                  {course.name}
                </button>
              ))}
            </div>
            {availableCourses.length === 0 && <div className="empty">No courses available for this period</div>}
          </div>
        )}
        {periodId && selectedCourseId && (
          <button className="edit-button" onClick={assignCourseToPeriod}>
            Assign course
          </button>
        )}
      </div>
      <div className="periods-list">
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <div className="buttons-container actions">
                {
                  <button className="save-button" onClick={() => handleUpdate(course)}>
                    Save
                  </button>
                }
                {course.assignmentsIds && course.assignmentsIds.length == 0 && (
                  <button className="delete-button" onClick={() => handleDeleteCourse(course.id!)}>
                    Delete
                  </button>
                )}
              </div>

              <Card<Course> 
              titleName="name"
              fields={fields}
              data={course} 
              viewLink={`/period/${periodId}/course/${course.id}`}/>

              {!course.teacherId && (
                <SelectInput
                  label="Teacher"
                  key="teacherId"
                  options={teachers.map((teacher) => ({ value: teacher.id!, label: teacher.name }))}
                  value={""}
                  onChange={(selectedOption) => setSelectedTeacher(selectedOption.value)}
                  placeholder="Select Teacher"
                />
              )}
              {course.id && periodId! && <AssignmentsManager courseId={course.id!} periodId={periodId}></AssignmentsManager>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PeriodsManager;
