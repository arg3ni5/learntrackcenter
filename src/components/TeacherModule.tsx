// src/components/Teacher/TeacherModule.tsx
import React from 'react';
import BaseModule from './BaseModule';

const TeacherModule: React.FC = () => {
    const fields = [
        { name: 'name', placeholder: 'Nombre Completo' },
        { name: 'idNumber', placeholder: 'Número de Identificación' },
        { name: 'specialty', placeholder: 'Especialidad' }
    ];

    return (
        <BaseModule collectionName="teachers" title="Gestión de Profesores" fields={fields} />
    );
};

export default TeacherModule;
