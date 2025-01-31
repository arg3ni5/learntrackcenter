import React from 'react';
import { Student } from '../../../types/types';
import './StudentCard.css';

interface StudentCardProps {
    student: Student;
    onEdit?: (student: Student) => void;
    onDelete?: (id: string) => void;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, onEdit, onDelete }) => {
    return (
        <div className="student-card">
            <h3>{student.fullName}</h3>
            {student.identificationNumber && (
                <p><strong>ID:</strong> {student.identificationNumber}</p>
            )}
            {student.email && (
                <p><strong>Email:</strong> {student.email}</p>
            )}
            
            <div className="student-card-actions">
                {onEdit && (
                    <button onClick={() => onEdit(student)} className="edit-button">
                        Edit
                    </button>
                )}
                {onDelete && student.id && (
                    <button onClick={() => onDelete(student.id!)} className="delete-button">
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
};

export default StudentCard;
