import React from "react";
import { Course, PeriodCourse } from "../../../types/types";
import CourseAssignmentsManager from "../../periodsManagement/components/CourseAssignmentsManager";
import CourseStudentsManager from "./CourseStudentsManager";
import AvailableStudents from "./AvailableStudents";
import useLocalStorage from "../../../hooks/useLocalStorage";
import Card, { CardField } from "../../../shared/components/Card/Card";
import { FaArrowLeft, FaClipboardList, FaUserPlus, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useLocalStorage<string>("activeSection", "course");

  /**
   * fieldsCard Array
   *
   * Defines the fields for the course details card.
   *
   * @type {CardField[]}
   */
  const fieldsCard: CardField[] = [
    { name: "description", placeholder: "description" },
    { name: "duration", placeholder: "duration" },
    { name: "hours", placeholder: "hours" },
    { name: "status", placeholder: "status" },
    // { name: "courseId", placeholder: "courseId" },
    { name: "assignmentsIds", placeholder: "assignments", type: "array" },
    { name: "teacherName", placeholder: "teacherName" },
  ];

  const tabs = [
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

      <div className="container px-0">
        <h1 className="title">{periodCourse?.name} Course Manage</h1>
        <button onClick={() => { navigate(-1) }}> <FaArrowLeft /> Go Back</button>
      </div>




      <div className="actions-card">
        {/* Tabs Navigation */}
        <div className="view-toggle tabs">
          {tabs.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => toggleSection(id)}
              className={`tab ${activeSection === id ? "active" : ""}`}
            >
              {icon} <span className="d-none ">{label}</span>
            </button>
          ))}
        </div>
        <Card<PeriodCourse> fields={fieldsCard} data={periodCourse} />
      </div>

      <div className="container px-0">
        {activeSection === "assignments" && (
          <CourseAssignmentsManager course={periodCourse as Course} />
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
