import React from 'react';
import { Student } from '../../../types/types';
import Card, { CardField } from '../../../shared/components/Card/Card';

interface StudentCardProps {
    student: Student;
    onDelete?: (id: string) => Promise<void>;
}

const fields: CardField[] = [
    { name: "identificationNumber", placeholder: "Identification" },
    { name: "email", placeholder: "Email Address" },
];

const StudentCard: React.FC<StudentCardProps> = ({ student, onDelete }) => {
    return (
        <>
        <Card<Student> titleName="fullName" fields={fields} data={student} handlers={{onDelete}} />
        </>
    );
};

export default StudentCard;
