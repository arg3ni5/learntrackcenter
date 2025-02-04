import React from 'react';
import { Student } from '../../../types/types';
import Card, { CardField } from '../../../shared/components/Card/Card';

interface StudentCardProps {
    student: Student;
    onEdit?: (student: Student) => Promise<void>;
    onDelete?: (id: string) => Promise<void>;
}

const fields: CardField[] = [
    { name: "identificationNumber", placeholder: "Identification" },
    { name: "email", placeholder: "Email Address" },
];

const StudentCard: React.FC<StudentCardProps> = ({ student, onDelete, onEdit }) => {
    return (
        <>
            <Card<Student> titleName="fullName" fields={fields} data={student} handlers={{ onDelete, onItemUpdated: onEdit }} />
        </>
    );
};

export default StudentCard;