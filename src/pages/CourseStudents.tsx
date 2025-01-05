import React from 'react';
import { useParams } from 'react-router-dom';
import useCourse from '../modules/coursesManagement/hooks/useCourse';
import CourseManager from '../modules/coursesManagement/components/CourseManager';

const CourseStudents: React.FC = () => {
    const { periodId, courseId } = useParams<{ periodId: string, courseId: string}>();
    const { loading, course } = useCourse(periodId, courseId);

    return (
        <>
            {!loading && course && <CourseManager periodId={periodId} periodCourse={course!}/>}
        </>
    );
};

export default CourseStudents;
