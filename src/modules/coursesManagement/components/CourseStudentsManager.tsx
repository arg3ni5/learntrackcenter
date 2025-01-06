import React, { useEffect, useState } from "react";
import BaseModule from "../../../components/BaseModule/BaseModule";
import { useLoading } from "../../../components/loading/LoadingContext";
import { PeriodCourse, Student } from "../../../types/types";
import "./CourseStudentsManager.css";
import useStudentsCourse from "../hooks/useStudentsCourse";
import StudentCard from "./StudentCard";
import AssignmentsManager from "./AssignmentsManager";
import useLocalStorage from "../../../hooks/useLocalStorage";
import Loading from "../../../components/loading/Loading";

interface CourseStudentsManagerProps {
  periodCourse: PeriodCourse;
  periodId: string;
}

const CourseStudentsManager: React.FC<CourseStudentsManagerProps> = ({ periodCourse, periodId }) => {
  const { setIsLoading } = useLoading();
  const { students, loading } = useStudentsCourse(periodCourse);
  const [selectedStudent, setSelectedStudent] = useLocalStorage<Student | null>("selectedStudent", null);

  // Define fields for the student table
  const fields = [
    { name: "fullName", placeholder: "Full Name", view: true },
    { name: "identificationNumber", placeholder: "Identification Number" },
    { name: "email", placeholder: "Email Address" },    
    { name: "grade", placeholder: "grade", view: true },
  ];

  // Effect to manage loading state
  useEffect(() => {
    setIsLoading(loading);
  }, [loading, setIsLoading]);

  return loading ? (
    <Loading type="spinner" className="item h30vh"></Loading>
  ) : (
    <>
      {/* {selectedStudent && <StudentCard student={selectedStudent} />} */}
      <h2></h2>
      <div className="container">
        <div >
          <BaseModule<Student>
            alias={"CourseStudentsManager"}
            fields={fields}
            items={students}
            initialFormData={selectedStudent}
            showForm={false}
            ableForm={false}
            ableFilter={true}
            ableImport={false}
            clearFormAfterAdd={true}
            onSelect={setSelectedStudent}
            loading={loading}></BaseModule>
        </div>

        {selectedStudent?.id && periodCourse.id && periodId! && (
          <AssignmentsManager studentId={selectedStudent?.id!} periodId={periodId} courseId={periodCourse.courseId!} periodCourseId={periodCourse.id!} />
        )}
      </div>
    </>
  );
};

export default CourseStudentsManager;
