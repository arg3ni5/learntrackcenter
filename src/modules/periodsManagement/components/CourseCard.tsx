import React, { useRef, useState } from 'react';
import { Course, Teacher } from '../../../types/types';
import Card, { CardField } from '../../../shared/components/Card/Card';
import SelectInput from '../../../shared/modules/DataManagementModule/components/SelectInput';
import { CSSTransition } from 'react-transition-group';
import './CourseCard.css';

interface StudentCardProps {
    children?: React.ReactNode;
    childrenVisible?: boolean;
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
    childrenVisible,
    course,
    teachers,
    setSelectedTeacher,
    viewLink,
    handlers }) => {
    const [isChildrenVisible, setIsChildrenVisible] = useState(childrenVisible);
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const cardRef = useRef<HTMLDivElement | null>(null);


    const { onDelete, onItemAdded, onItemUpdated } = handlers;
    const toggleChildrenVisibility = () => {
        setIsChildrenVisible(!isChildrenVisible);
    };

    return (
        <>
            <div className="item m-0 px-0">
                {!course.teacherId && (
                    <>
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



                <CSSTransition
                    in={isChildrenVisible}
                    timeout={500}
                    classNames="fade"
                    unmountOnExit
                    nodeRef={nodeRef}>
                    <div ref={(el) => (nodeRef.current = el)} className="fade-container">
                        {children}
                    </div>
                </CSSTransition>


                <CSSTransition
                    in={!isChildrenVisible}
                    timeout={500}
                    classNames={{
                        enter: "animate__animated animate__bounceInUp",
                    }}
                    nodeRef={cardRef}>
                    <div ref={cardRef}>
                        <Card<Course>
                            titleName="name"
                            fields={fields}
                            data={course}
                            viewLink={viewLink}
                            handlers={{ onDelete, onItemAdded, onItemUpdated }}
                            ableDelete={course.assignmentsIds.length === 0 && (course.enrolledStudents?.length ?? 0) === 0}
                            customButtons={[
                                {
                                    label: isChildrenVisible ? 'Hide Assignments' : 'Assignments',
                                    onClick: toggleChildrenVisibility,
                                    className: 'save-button',
                                    ariaLabel: 'Toggle Details Button',
                                },
                            ]}>
                        </Card>
                    </div>
                </CSSTransition>
            </div>
        </>
    );
};

export default CourseCard;
