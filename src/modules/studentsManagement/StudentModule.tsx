import React, { useEffect } from "react";
import DataManagementModule from "../../shared/modules/DataManagementModule/DataManagementModule";
import useStudents from './hooks/useStudents';
import { useLoading } from "../../components/loading/LoadingContext";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { Student } from "../../types/types";
import StudentCard from "./components/StudentCard";
import StudentPeriodsManager from "./components/StudentPeriodsManager";
import './StudentModule.css';
import { AnimatePresence, motion } from 'framer-motion';

const StudentModule: React.FC = () => {
    const { setIsLoading } = useLoading();
    const { students, loading, handleAddStudent, handleAddStudents, handleRemoveStudent, handleUpdateStudent } = useStudents("Loading Student");
    const [selectedStudent, setSelectedStudent] = useLocalStorage<Student | null>("selectedStudent", null);
    const navigate = useNavigate();

    const fields = [
        { name: "fullName", placeholder: "Full Name", view: true, size: 20 },
        { name: "identificationNumber", placeholder: "Identification Number", size: 15 },
        { name: "email", placeholder: "Email Address", size: 20 },
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


    // Handle removal of a student
    const handleOnRemove = async (id: string) => {
        if (id) {
            await handleRemoveStudent(id);
            setSelectedStudent(null); // Clear selected student after removal
        }
    };
    return (
        <>
            <h1 className='title'>Manage Student</h1>
            <AnimatePresence initial={false}>
                {selectedStudent && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}>
                        <StudentCard student={selectedStudent!} />
                        <StudentPeriodsManager student={selectedStudent} />
                    </motion.div>
                )}
            </AnimatePresence>

            <DataManagementModule<Student>
                fields={fields}
                items={students}
                handlers={{
                    onItemAdded: handleAddStudent,
                    onItemsAdded: handleAddStudents,
                    onItemDeleted: handleOnRemove,
                    onItemUpdated: handleUpdateStudent,
                    onView: handleOnView,
                    onSelect: setSelectedStudent
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
