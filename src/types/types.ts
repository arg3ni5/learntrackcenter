export interface Assignment {
    id?: string; // Optional ID property, used when fetching from Firestore
    title: string; // Title of the assignment
    contributionPercentage: number; // Contribution percentage to final grade
}

export type CourseStatus = 
    | 'Passed' 
    | 'Failed' 
    | 'In Progress' 
    | 'Not Started' 
    | 'Withdrawn';

export interface AvailableCourse {
    id?: string; // Optional ID for Firestore
    name: string; // Course title
    description: string; // Course description
    duration?: number; // Course duration in weeks
    hours?: number; // Hours per week
}

export interface Course extends AvailableCourse{
    status?: CourseStatus; // Approved or Reprobated status
    courseId: string; // Reference to the Course document
    periodId: string; // Reference to the Period document
    teacherId?: string; // Reference to the Teacher document
    teacherName?: string; // To show name of teacher
    assignmentsIds: string[]; // List of assignments for the course
}
export interface PeriodCourse extends Course{
    periodCourseId: string; // Reference to the PeriodCourse document
}

export interface CourseWithDetails extends Course {

}

export type PeriodStatus = 
    | 'Active' 
    | 'Finished' 
    | 'In Progress' 
    | 'Upcoming';

// Define the interface for Period
export interface Period {
    id?: string; // Optional ID for Firestore
    code: string; // code of the period
    name: string; // Descriptive name of the period
    startDate: Date; // Start date of the academic period
    endDate: Date; // End date of the academic period
    status: PeriodStatus; // Current status of the period (e.g., "Active", "Finished", "Upcoming")
    coursesIds: string[]; // List of courses IDs for the period
}

export interface PeriodWithDetails extends Period {
    name: string; // Name of the course
}

export interface Student {
    id?: string; // Optional ID property, used when fetching from Firestore
    fullName: string; // Full name of the student
    identificationNumber?: string; // Unique identification number for the student
    email?: string; // Email address of the student
    coursesIds: string[]; // List of periods for the student (renamed from periodos to periods)
}



export interface StudentCourse extends Omit<AvailableCourse, 'duration' | 'hours'>{
    courseId: string; // Reference to the Course document
    periodId: string; // Reference to the Period document
    periodCourseId: string; // Reference to the Period/Course document
    finalGrade: number; // Final grade for the course
    status: CourseStatus; // Approved or Reprobated status
    assignmentsIds: string[]; // List of assignments for the course
}

export interface StudentCourseDetails extends Omit<AvailableCourse, 'duration' | 'hours'>{
    studentid?: string; // Optional ID property, used when fetching from Firestore
    fullName: string; // Full name of the student
    identificationNumber?: string; // Unique identification number for the student
    email?: string;
}


export interface StudentsCourse extends Student {
}

export interface StudentAssignment extends Omit<Assignment, "contributionPercentage"> {
    assignmentId: string; // Title of the assignment
    grade: number; // Grade obtained for the assignment
    gradeMax?: number; // Grade obtained for the assignment
    percentage: number; // Contribution percentage to final grade
    percentageMax?: number; // Maximum grade for the assignment
}

export interface AssignmentsManagerProps {
    studentId: string;
    periodId: string;
    courseId: string;
}