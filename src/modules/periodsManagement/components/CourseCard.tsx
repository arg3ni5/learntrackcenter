import React from 'react';
import { Course, Teacher } from '../../../types/types';
import Card, { CardField } from '../../../shared/components/Card/Card';

interface StudentCardProps {
    children?: React.ReactNode;
    data: Course;
    viewLink: string;
    onItemAdded?: (newItem: Course) => Promise<void>;
    onItemUpdated?: (updatedItem: Course) => Promise<void>;
    onDelete?: (id: string) => Promise<void>;
}



const fields: CardField[] = [
    { name: "name", placeholder: "name" },
    { name: "description", placeholder: "description" },
    { name: "duration", placeholder: "duration" },
    { name: "hours", placeholder: "hours" },
    { name: "status", placeholder: "status" },
    // { name: "courseId", placeholder: "courseId" },
    { name: "assignmentsIds", placeholder: "assignments", type: "array" },
    { name: "enrolledStudents", placeholder: "Enrolled Students", type: "array" },
    { name: "teacherName", placeholder: "teacherName" },
];

const CourseCard: React.FC<StudentCardProps> = ({
    children,
    data,
    viewLink,
    onDelete, onItemAdded, onItemUpdated }) => {
    return (
        <>
            <Card<Course>
                titleName="name"
                fields={fields}
                data={data}
                viewLink={viewLink}
                handlers={{ onDelete, onItemAdded, onItemUpdated }}
                ableDelete={data.assignmentsIds.length === 0 && (data.enrolledStudents?.length ?? 0) === 0}
            >
                {children}
            </Card>
        </>
    );
};

export default CourseCard;
