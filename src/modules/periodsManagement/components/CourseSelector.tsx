import { useEffect, useMemo, useState } from "react";
import DataManagementModule from "../../../shared/modules/DataManagementModule/DataManagementModule";
import { BaseField } from "../../../shared/modules/DataManagementModule/types/types";
import { AvailableCourse } from "../../../types/types";

const fields: BaseField[] = [
  { name: "name", placeholder: "name", size: 10, visible: true },
  { name: "description", placeholder: "description", visible: true },
  { name: "teacherName", placeholder: "teacher", visible: false}
];

interface Props {
  type: "assign" | "available";
  courses: AvailableCourse[];
  setSelectedCourseId?: (id: string | null) => void;
  loading: boolean;
  assign?: () => void;
  load?: () => void;
}

const CourseSelector: React.FC<Props> = (
  { type, courses, setSelectedCourseId, loading, load, assign }) => {

  const handleOnSelect = (item: AvailableCourse | null) => {
    if (item && !!setSelectedCourseId) {
      setSelectedCourseId(item.id ?? null);
    }
  };

  const [dynamicFields, setDynamicFields] = useState<BaseField[]>(fields);

useEffect(() => {
  if (type === "assign") {
    setDynamicFields(fields.map(field =>
      field.name === "teacherName" ? { ...field, visible: true } : field
    ));
  } else {
    setDynamicFields(fields);
  }
}, [type]);

  return (

    <DataManagementModule<AvailableCourse>
      className="p-0"
      alias={`${type}Courses`.toUpperCase()}
      title={`${type} Courses`.toUpperCase()}
      fields={dynamicFields}
      items={courses}
      handlers={{
        onSelect: handleOnSelect,
        onReload: load,
        onAssign: assign,
      }}
      ableForm={false}
      showForm={false}
      loading={loading}
    />
  );
};

export default CourseSelector;