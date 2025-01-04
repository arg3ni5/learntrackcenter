import React, { useState } from "react";
import { BaseField } from "../../../components/BaseModule/types";
import Card, { CardField } from "../../../components/card/card";
import { PeriodCourse } from "../../../types/types";
import AssignmentsManager from "../../periodsManagement/components/AssignmentsManager";
import CourseStudentsManager from "./CourseStudentsManager";

/**
 * CourseManagerProps Interface
 * 
 * Defines the props for the CourseManager component.
 *
 * @interface
 * @property {string | undefined} periodId - The ID of the current period
 * @property {PeriodCourse | undefined} course - The course object containing course details
 */
interface CourseManagerProps {
    periodId: string | undefined;
    course: PeriodCourse | undefined;
}

/**
 * CourseManager Component
 * 
 * This component manages the display and interaction for a specific course within a period.
 * It provides a tabbed interface to switch between different aspects of course management:
 * course details, assignments, and students.
 *
 * @component
 * @param {Object} props - The component props
 * @param {string | undefined} props.periodId - The ID of the current period
 * @param {PeriodCourse | undefined} props.course - The course object containing course details
 *
 * @example
 * <CourseManager periodId="period123" course={courseObject} />
 */
const CourseManager: React.FC<CourseManagerProps> = ({ periodId, course }) => {
  // State to keep track of the active section
  const [activeSection, setActiveSection] = useState<string>("course");

  /**
   * fieldsCard Array
   * 
   * Defines the fields for the course details card.
   *
   * @type {CardField[]}
   */
  const fieldsCard: CardField[] = [
    { name: "name", placeholder: "name" },
    { name: "description", placeholder: "description" },
    { name: "duration", placeholder: "duration" },
    { name: "hours", placeholder: "hours" },
    { name: "status", placeholder: "status" },
    // { name: "courseId", placeholder: "courseId" },
    { name: "assignmentsIds", placeholder: "assignments", type:"array" },
    { name: "teacherName", placeholder: "teacherName" },
  ];

  /**
   * toggleSection Function
   * 
   * Toggles the visibility of different sections within the CourseManager.
   *
   * @function
   * @param {string} section - The name of the section to toggle
   */
  const toggleSection = (section: string) => {
    setActiveSection(section === activeSection ? "" : section);
  };

  return (
    <>
      <h1 className="title">{course?.name} Course Manage</h1>
      
      {/* Navigation buttons for different sections */}
      <div className="section-buttons">
        <button 
          onClick={() => toggleSection("course")}
          className={activeSection === "course" ? "active" : ""}
        >
          Course Details
        </button>
        <button 
          onClick={() => toggleSection("assignments")}
          className={activeSection === "assignments" ? "active" : ""}
        >
          Assignments
        </button>
        <button 
          onClick={() => toggleSection("students")}
          className={activeSection === "students" ? "active" : ""}
        >
          Students
        </button>
      </div>

      {/* Course details section */}
      {activeSection === "course" && course && (
        <Card<PeriodCourse> titleName="name" fields={fieldsCard} data={course}/>
      )}
      
      {/* Assignments section */}
      {activeSection === "assignments" && (
        <AssignmentsManager courseId={course?.id!} periodId={periodId!} />
      )}
      
      {/* Students section (placeholder) */}
      {activeSection === "students" && (
        <CourseStudentsManager courseId={course?.id!} periodId={periodId!} />
      )}
    </>
  );
};

export default CourseManager;
