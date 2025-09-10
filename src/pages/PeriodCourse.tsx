import React from 'react';
import { useParams } from 'react-router-dom';
import CourseCard from '../modules/periodsManagement/components/CourseCard';
import useCourse from "../modules/coursesManagement/hooks/useCourse";
import CourseAssignmentsManager from '../modules/periodsManagement/components/CourseAssignmentsManager';


const PeriodCourse: React.FC = () => {
    const { courseId, periodId } = useParams<{ courseId: string, periodId: string }>();
    const { course } = useCourse(periodId, courseId);
    return (
        <div>
          <CourseCard
              className="item"
              key={courseId}
              course={course}
              handlers={{ onDelete: async () => { } }}
              childrenVisible={false}
              viewLink={`/period/${periodId}/course/${courseId}`}
              setSelectedTeacher={() => { }}
            >
              {course && course.id && periodId && <CourseAssignmentsManager course={course} />}
            </CourseCard>
        </div>
    );
};

export default PeriodCourse;
