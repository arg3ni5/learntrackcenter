import React, { useState } from 'react';
import { Course, Teacher } from '../../../types/types';
import Card, { CardField } from '../../../shared/components/Card/Card';
import SelectInput from '../../../shared/modules/DataManagementModule/components/SelectInput';

interface StudentCardProps {
    children?: React.ReactNode;
    course: Course;
    teachers: Teacher[];
    viewLink: string;
    setSelectedTeacher: (id: string) => void;
    handlers: {
        onItemAdded?: (newItem: Course) => Promise<void>;
        onItemUpdated?: (updatedItem: Course) => Promise<void>;
        onDelete?: (id: string) => Promise<void>;
    }
}



const fields: CardField[] = [
    { name: "name", placeholder: "name" },
    { name: "description", placeholder: "description" },
    { name: "duration", placeholder: "duration" },
    { name: "hours", placeholder: "hours" },
    { name: "status", placeholder: "status" },
    { name: "assignmentsIds", placeholder: "assignments", type: "array" },
    { name: "enrolledStudents", placeholder: "Enrolled Students", type: "array" },
    { name: "teacherName", placeholder: "teacherName" },
];

const CourseCard: React.FC<StudentCardProps> = ({
    children,
    course,
    teachers,
    setSelectedTeacher,
    viewLink,
    handlers }) => {
    const [isChildrenVisible, setIsChildrenVisible] = useState(false);
    const { onDelete, onItemAdded, onItemUpdated } = handlers;
    const toggleChildrenVisibility = () => {
        setIsChildrenVisible(!isChildrenVisible);
    };
    return (
        <>
            <div key={course.id} className="container periods-list">
                <div className="item">
                    {!course.teacherId && (
                        <>
                            {/* <div className="buttons-container actions">
                                <button className="save-button" onClick={() => handleUpdate(course)}>
                                    Save
                                </button>
                            </div> */}
                            <SelectInput
                                label="Teacher"
                                key="teacherId"
                                options={teachers.map((teacher) => ({ value: teacher.id!, label: teacher.name }))}
                                value={""}
                                onChange={(selectedOption) => setSelectedTeacher(selectedOption.value)}
                                placeholder="Select Teacher"
                            />
                        </>
                    )}


                    <Card<Course>
                        titleName="name"
                        fields={fields}
                        data={course}
                        viewLink={viewLink}
                        handlers={{ onDelete, onItemAdded, onItemUpdated }}
                        ableDelete={course.assignmentsIds.length === 0 && (course.enrolledStudents?.length ?? 0) === 0}
                        customButtons={[
                            {
                                label: isChildrenVisible ? 'Hide Details' : 'Show Details',
                                onClick: toggleChildrenVisibility,
                                className: 'add-button',
                                ariaLabel: 'Toggle Details Button',
                            },
                        ]}>
                        {isChildrenVisible && children}
                    </Card>
                </div>
            </div>
        </>
    );
};

export default CourseCard;
