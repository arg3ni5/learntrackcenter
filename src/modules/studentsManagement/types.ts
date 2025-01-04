export type CourseStatus = 
    | 'Passed' 
    | 'Failed' 
    | 'In Progress' 
    | 'Not Started' 
    | 'Withdrawn';

export interface Course { // Renamed from Materia to Course
    id?: string; // Optional ID property, used when fetching from Firestore
    courseId: string; // Reference to the Course document
    finalGrade: number; // Final grade for the course
    status: CourseStatus; // Approved or Reprobated status
    assignmentsIds: string[]; // List of assignments for the course
}

export interface CourseWithDetails extends Course {
    name: string; // Name of the course
    description: string; // Description of the course
}

export interface Student {
    id?: string; // Optional ID property, used when fetching from Firestore
    fullName: string; // Full name of the student
    identificationNumber?: string; // Unique identification number for the student
    email?: string; // Email address of the student
    coursesIds: string[]; // List of periods for the student (renamed from periodos to periods)
}


export interface StudentAssignmentsManagerProps {
    studentId: string;
    periodId: string;
    periodCourseId: string;
    courseId: string;
}

export interface AssignmentsSelectorProps {
    periodId: string;
    courseId: string;
}