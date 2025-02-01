import DataManagementModule from "../../../shared/modules/DataManagementModule/DataManagementModule";
import { BaseField } from "../../../shared/modules/DataManagementModule/types/types";
import { AvailableCourse } from "../../../types/types";

const fields: BaseField[] = [
  { name: "name", placeholder: "name" },
  { name: "description", placeholder: "description" },
];

interface Props {
  courses: AvailableCourse[];
  setSelectedCourseId: (id: string | null) => void;
  loading: boolean;
  assign: () => void;
  load: () => void;
}

const CourseSelector: React.FC<Props> = (
  { courses, setSelectedCourseId, loading, load, assign }) => {

  const handleOnSelect = (item: AvailableCourse | null) => {
    if (item) {
      setSelectedCourseId(item.id ?? null);
    }
  };

  return (
    <>
      <DataManagementModule<AvailableCourse>
        alias="availableCourses"
        title="Available Courses" // Title for the module
        fields={fields} // Fields to be displayed in the form
        items={courses} // Use the courses from the custom hook
        handlers={
          {
            onSelect: handleOnSelect,
            onReload: load,
            onAssign: assign,
          }
        }
        ableForm={false} // Show the form
        showForm={false} // Show the form
        loading={loading} // Loading state
      />
    </>
  );
};

export default CourseSelector;