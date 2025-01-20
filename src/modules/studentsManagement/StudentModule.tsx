import React, { useEffect } from "react";
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
    const { students, loading, handleAddStudent, handleAddStudents, handleRemoveStudent, handleUpdateStudent } = useStudents();
    const [selectedStudent, setSelectedStudent] = useLocalStorage<Student | null>("selectedStudent", null);
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
        setSelectedStudent(item);
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
            {selectedStudent &&
                <div className="slideInUp">
                    <StudentCard student={selectedStudent} />
                    {selectedStudent.id && <PeriodsManager student={selectedStudent} />}
                </div>
            }

            <DataManagementModule<Student>
                fields={fields}
                items={students}
                handlers={{
                    onItemAdded : handleAddStudent,
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
