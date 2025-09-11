import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CourseCard from '../modules/periodsManagement/components/CourseCard';
import useCourse from "../modules/coursesManagement/hooks/useCourse";
import CourseAssignmentsManager from '../modules/periodsManagement/components/CourseAssignmentsManager';
import { FaArrowLeft } from 'react-icons/fa';


const PeriodCourse: React.FC = () => {
  const navigate = useNavigate();
  const { courseId, periodId } = useParams<{ courseId: string, periodId: string }>();
  const { course } = useCourse(periodId, courseId);
  return (
    <div>
      <div className="container px-0" style={{ paddingBottom: 30 }}>
        <h1>{course?.name}</h1>
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft /> Go Back
        </button>
      </div>
      <CourseCard
        hideTitle={true}
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
