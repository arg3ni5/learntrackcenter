import React from 'react';
import { Course } from '../../../types/types';
import Card, { CardField } from '../../../shared/components/Card/Card';

interface StudentCardProps {
    data: Course; //
    viewLink: string; //
    // onEdit?: (student: Student) => void;
    onDelete?: (id: string) => void;
}



const fields: CardField[] = [
    { name: "name", placeholder: "name" },
    { name: "description", placeholder: "description" },
    { name: "duration", placeholder: "duration" },
    { name: "hours", placeholder: "hours" },
    { name: "status", placeholder: "status" },
    // { name: "courseId", placeholder: "courseId" },
    { name: "assignmentsIds", placeholder: "assignments", type:"array" },
    { name: "teacherName", placeholder: "teacherName" },
  ];

const CourseCard: React.FC<StudentCardProps> = ({
    data,
    viewLink,
    onDelete }) => {
    return (
        <>
            <Card<Course>
                titleName="name"
                fields={fields}
                data={data}
                viewLink={viewLink}
                onDelete={onDelete}
            />
        </>
    );
};

export default CourseCard;
