import React, { useEffect, useState } from "react";
import DataManagementModule from "../../shared/modules/DataManagementModule/DataManagementModule";
import useStudents from './hooks/useStudents';
import { useLoading } from "../../components/loading/LoadingContext";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { Student } from "../../types/types";
import StudentCard from "./components/StudentCard";
import PeriodsManager from "./components/PeriodsManager";
import './StudentModule.css';

const StudentModule: React.FC = () => {
    const { setIsLoading } = useLoading();
    const { students, loading, handleAddStudent, handleAddStudents, handleRemoveStudent, handleUpdateStudent } = useStudents("Loading Student");
    const [selectedStudent, setSelectedStudent] = useLocalStorage<Student | null>("selectedStudent", null);
    const [animation, setAnimation] = useState('');
    const navigate = useNavigate();

    // Define fields for the student table
    const fields = [
        { name: "fullName", placeholder: "Full Name", view: true },
        { name: "identificationNumber", placeholder: "Identification Number" },
        { name: "email", placeholder: "Email Address" },
    ];

    // Effect to manage loading state
    useEffect(() => {
        setIsLoading(loading);
    }, [loading, setIsLoading]);



    // Navigate to student courses page
    const handleOnView = (item: Student) => {
        navigate(`/students/${item.id}/courses`);
        setSelectedStudent(item);
    };

    // Handle selection of a student
    const handleOnSelect = (item: Student | null) => {
        if (item) {
            setAnimation('slide-in-elliptic-bottom-fwd');
            setSelectedStudent(item);
        } else {
            setAnimation('slide-out-elliptic-bottom-bck');
            setTimeout(() => {
                setSelectedStudent(null);
                setAnimation('');
            }, 500); // Ajusta este tiempo según la duración de tu animación
        }
    };


    // Handle removal of a student
    const handleOnRemove = async (id: string) => {
        if (id) {
            await handleRemoveStudent(id);
            setSelectedStudent(null); // Clear selected student after removal
        }
    };
    return (
        <>
            <h1 className='title'>Student Management</h1>
            {(selectedStudent || animation === 'slide-out-top') && (
                <div className={`animated-element ${animation}`}>
                    <StudentCard student={selectedStudent!} />
                    {selectedStudent?.id && <PeriodsManager student={selectedStudent} />}
                </div>
            )}

            <DataManagementModule<Student>
                fields={fields}
                items={students}
                handlers={{
                    onItemAdded: handleAddStudent,
                    onItemsAdded: handleAddStudents,
                    onItemDeleted: handleOnRemove,
                    onItemUpdated: handleUpdateStudent,
                    onView: handleOnView,
                    onSelect: handleOnSelect
                }}
                initialFormData={selectedStudent}
                ableFilter={true}
                showForm={false}
                ableForm={true}
                ableImport={true}
                clearFormAfterAdd={true}
                loading={loading}>
            </DataManagementModule>
        </>
    );
};

export default StudentModule;
