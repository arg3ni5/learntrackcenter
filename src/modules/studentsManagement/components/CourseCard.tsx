import React from 'react';
import './CourseCard.css';
import { StudentCourse } from '../../../types/types';

interface CourseCardProps {
    course: StudentCourse;
    onEdit?: (course: StudentCourse) => void;
    onDelete?: (id: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onEdit, onDelete }) => {
    return (
        <div className="course-card">
            <h3>{course.name} - {course.id}</h3>
            {course.description && (
                <p><strong>Description:</strong> {course.description}</p>
            )}
            {course.status && (
                <p><strong>Status:</strong> {course.status}</p>
            )}
            

            <p><strong>Assignments:</strong> {course.assignmentsIds?.length || 0}</p>
            
            <div className="course-card-actions">
                {onEdit && (
                    <button onClick={() => onEdit(course)} className="edit-button">
                        Edit
                    </button>
                )}
                {onDelete && course.id && (
                    <button onClick={() => onDelete(course.id!)} className="delete-button">
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
};

export default CourseCard;
