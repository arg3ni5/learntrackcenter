import React from 'react';
import { Student } from '../../../types/types';
import Card, { CardField } from '../../../components/card/Card';

interface StudentCardProps {
    student: Student;
    // onEdit?: (student: Student) => void;
    onDelete?: (id: string) => void;
}

const fields: CardField[] = [    
    { name: "identificationNumber", placeholder: "Identification" },
    { name: "email", placeholder: "Email Address" },
];    

const StudentCard: React.FC<StudentCardProps> = ({ student, onDelete }) => {
    return (
        <>
        <Card<Student> titleName="fullName" fields={fields} data={student} onDelete={onDelete} />
        </>
    );
};

export default StudentCard;
