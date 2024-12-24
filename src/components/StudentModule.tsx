// src/components/Student/StudentModule.tsx
import React from "react";
import BaseModule from "./BaseModule";

const StudentModule: React.FC = () => {
  const fields = [
    { name: "name", placeholder: "Nombre Completo" },
    { name: "idNumber", placeholder: "Número de Identificación" },
  ];

  return <BaseModule collectionName="students" title="Gestión de Estudiantes" fields={fields} />;
};

export default StudentModule;
