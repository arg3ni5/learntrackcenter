import { useState } from "react";
import DataManagementModule from "../../../shared/modules/DataManagementModule/DataManagementModule";
import { BaseField } from "../../../shared/modules/DataManagementModule/types/types";
import { Course, Teacher } from "../../../types/types";
import CourseCard from "./CourseCard";
import CourseAssignmentsManager from "./CourseAssignmentsManager";

const fields: BaseField[] = [
  { name: "name", placeholder: "name", size: 10 },
  { name: "description", placeholder: "description" },
  { name: "teacherName", placeholder: "teacher" }
];

interface Props {
  periodId: string;
  type: "assign" | "available";
  courses: Course[];
  teachers: Teacher[];
  setSelectedCourseId?: (id: string | null) => void;
  loading: boolean;
  assign?: () => void;
  load?: () => void;
  handlers: {
    onItemAdded?: (newItem: Course) => Promise<void>;
    onItemUpdated?: (updatedItem: Course) => Promise<void>;
    onDelete?: (id: string) => Promise<void>;
  }
}

const CourseTable: React.FC<Props> = (
  { periodId, courses, teachers, setSelectedCourseId, loading, load, assign, handlers }) => {

  const handleOnSelect = (item: Course | null) => {
    if (item && !!setSelectedCourseId) {
      setSelectedCourseId(item.id ?? null);
    }
  };
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedTeacher, setSelectedTeacher] = useState<string | null>(null);

  return (

    <>
      <DataManagementModule<Course>
        className="p-0"
        alias="assignCourses"
        fields={fields}
        items={courses}
        handlers={{
          onSelect: setSelectedCourse,
          onReload: load,
          onAssign: assign,
        }}
        ableForm={false}
        showForm={false}
        loading={loading}
      />


      {selectedCourse && (<CourseCard
        course={selectedCourse}
        teachers={teachers}
        handlers={handlers}
        setSelectedTeacher={setSelectedTeacher}
        viewLink={`/period/${periodId}/course/${selectedCourse.id}`}>
        {selectedCourse.id && periodId! && <CourseAssignmentsManager courseId={selectedCourse.id!} periodId={periodId}></CourseAssignmentsManager>}
      </CourseCard>)}
    </>
  );
};

export default CourseTable;