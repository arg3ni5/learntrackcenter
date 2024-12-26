import React from 'react';

interface StudentDataProps {
    studentsData: any[]; // Datos de los estudiantes
    selectedRows: Set<number>; // Filas seleccionadas
    toggleRowSelection: (index: number) => void; // Función para alternar la selección de filas
    deleteSelectedRows: () => void; // Función para eliminar filas seleccionadas
    confirmAndSave: () => void; // Función para confirmar y guardar datos
    onSelectStudent: (student: any) => void; // Callback para manejar la selección de un estudiante
}

const StudentData: React.FC<StudentDataProps> = ({
    studentsData,
    selectedRows,
    toggleRowSelection,
    deleteSelectedRows,
    confirmAndSave,
    onSelectStudent,
}) => {
    return (
        <div>
            <h3>Preview of Students Data</h3>
            <button onClick={deleteSelectedRows}>Delete Selected Rows</button>
            <button onClick={confirmAndSave}>Confirm and Save</button>
            
            <table className="students-table">
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Full Name</th>
                        <th>Identification Number</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {studentsData.map((row, index) => (
                        <tr key={index}>
                            <td>
                                <input 
                                    type="checkbox" 
                                    checked={selectedRows.has(index)} 
                                    onChange={() => toggleRowSelection(index)} 
                                />
                            </td>
                            {row.map((cell: any, cellIndex: number) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                            <td>
                                <button onClick={() => onSelectStudent(row)}>Select</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentData;
