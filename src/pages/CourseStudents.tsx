import React from 'react';
import { useParams } from 'react-router-dom';
import useCourse from '../modules/coursesManagement/hooks/useCourse';
import CourseManager from '../modules/coursesManagement/components/CourseManager';
import { PeriodCourse } from '../types/types';

const CourseStudents: React.FC = () => {
    const { periodId, courseId } = useParams<{ periodId: string, courseId: string}>();
    const { loading, course } = useCourse(periodId, courseId);

    return (
        <>
            {!loading && course && <CourseManager periodId={periodId} periodCourse={course! as PeriodCourse}/>}
        </>
    );
};

export default CourseStudents;
