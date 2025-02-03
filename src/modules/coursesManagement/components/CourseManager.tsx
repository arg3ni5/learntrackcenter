import React from "react";
import { PeriodCourse } from "../../../types/types";
import CourseAssignmentsManager from "../../periodsManagement/components/CourseAssignmentsManager";
import CourseStudentsManager from "./CourseStudentsManager";
import AvailableStudents from "./AvailableStudents";
import useLocalStorage from "../../../hooks/useLocalStorage";
import Card, { CardField } from "../../../shared/components/Card/Card";
import { FaBook, FaClipboardList, FaUserPlus, FaUsers } from "react-icons/fa";

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
  periodCourse: PeriodCourse | undefined;
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
const CourseManager: React.FC<CourseManagerProps> = ({ periodId, periodCourse }) => {
  // State to keep track of the active section
  const [activeSection, setActiveSection] = useLocalStorage<string>("activeSection", "course");

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
    { name: "assignmentsIds", placeholder: "assignments", type: "array" },
    { name: "teacherName", placeholder: "teacherName" },
  ];

  const tabs = [
    { id: "course", label: "Course Details", icon: <FaBook /> },
    { id: "assignments", label: "Course Assignments", icon: <FaClipboardList /> },
    { id: "students", label: "Enrolled Students", icon: <FaUsers /> },
    { id: "availableStudents", label: "Available Students", icon: <FaUserPlus /> },
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
      <h1 className="title">{periodCourse?.name} Course Manage</h1>

      {/* Tabs Navigation */}
      <div className="view-toggle tabs">
        {tabs.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={`tab ${activeSection === id ? "active" : ""}`}
          >
            {icon} <span>{label}</span>
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeSection === "course" && periodCourse && (
          <Card<PeriodCourse> titleName="name" fields={fieldsCard} data={periodCourse} />
        )}
        {activeSection === "assignments" && (
          <CourseAssignmentsManager courseId={periodCourse?.id!} periodId={periodId!} />
        )}
        {activeSection === "students" && (
          <CourseStudentsManager periodCourse={periodCourse!} periodId={periodId!} />
        )}
        {activeSection === "availableStudents" && (
          <AvailableStudents periodCourse={periodCourse!} periodId={periodId!} />
        )}
      </div>
    </>
  );
};

export default CourseManager;
