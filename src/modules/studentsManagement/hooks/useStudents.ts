// src/modules/studentsManagement/hooks/useStudents.ts
import { useEffect, useState } from 'react';
import { fetchStudents, addStudent, deleteStudent, updateStudent, fetchStudentById, addStudentsBatch } from '../services/studentService';
import { useNotification } from '../../../components/notification/NotificationContext';
import { useLoading } from '../../../components/loading/LoadingContext';
import { Student } from '../../../types/types';

const useStudents = () => {
    const { setIsLoading, setLoadingText } = useLoading();
    const [students, setStudents] = useState<Student[]>([]); // State to store the list of students
    const [student, setStudent] = useState<Student | null>(); // State to store a single student
    const [loading, setLoading] = useState<boolean>(true); // State to indicate loading status
    const [error, setError] = useState<string | null>(null); // State to store error messages
    const { showNotification } = useNotification(); // Hook for showing notifications

    // Effect to manage loading state and text
    useEffect(() => {
        setLoadingText("Loading Student"); // Set loading text
        setIsLoading(loading); // Update loading state
    }, [loading, setIsLoading]);
    
    // Function to load all students
    const loadStudents = async () => {
        try {
            setLoading(true);
            const studentsData = await fetchStudents(); // Fetch students from the service
            setStudents(studentsData); // Update state with fetched students
        } catch (err) {
            setError('Error loading students'); // Set error message if fetching fails
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    // Function to load a single student by ID
    const loadStudent = async (id: string) => {
        try {
            if (!id) {
                console.error(`Student ID is null or undefined`); // Log if ID is invalid
                return;
            }
            setLoading(true);
            const studentData = await fetchStudentById(id); // Fetch student data by ID
            console.log("studentData", studentData);            
            setStudent(studentData); // Update state with fetched student data
        } catch (err) {
            setError('Error loading student'); // Set error message if fetching fails
            showNotification('Error loading student', 'error'); // Show notification for the error
            console.error(`Error loading student ${id}`); // Log the error with the student ID
        } finally {
            setLoading(false); // Reset loading state
        }
    };
    
    // Load all students on component mount
    useEffect(() => {
        loadStudents();
    }, []);

    // Function to handle adding a single student
    const handleAddStudent = async (newStudent: Student) => {
        try {
            if (!validateStudent(newStudent)) return; // Validate before proceeding
            await addStudent(newStudent);            
            showNotification("Element added", "success"); // Show notification for successful addition
            loadStudents(); // Reload the list of students
        } catch (err) {
            setError('Error adding the student'); // Set error message if adding fails
        }
    };

    // Function to handle adding multiple students in batch
    const handleAddStudents = async (studentsToAdd: Student[]) => {
        try {
            // Filter to get unique students that do not already exist
            const uniqueStudents = studentsToAdd.filter(newStudent => 
                !students.some(existingStudent => existingStudent.fullName === newStudent.fullName)
            );

            // Check if there are no unique students to add
            if (uniqueStudents.length === 0) {
                showNotification('All students already exist', 'error'); // Notify if all students already exist
                return;
            }

            // Validate each student before adding
            const invalidStudents = uniqueStudents.filter(student => !validateStudent(student));
            if (invalidStudents.length > 0) {
                showNotification('Some students have invalid data', 'error'); // Notify about invalid data
                return;
            }

            // Use batch function to add unique students
            await addStudentsBatch(uniqueStudents);
            
            // Show notification for successful addition
            showNotification(`${uniqueStudents.length} elements added`, "success");
            
            // Reload the list of students
            loadStudents();
        } catch (err) {
            console.error('Error adding students:', err); // Log the error for debugging
            setError('Error adding students'); // Set error message if adding fails
        }
    };


    // Function to handle removing a student by ID
    const handleRemoveStudent = async (id: string) => {
        try {
            await deleteStudent(id); // Delete the student by ID
            loadStudents(); // Reload the list of students after deletion
        } catch (err) {
            setError('Error deleting the student'); // Set error message if deletion fails
        }
    };

    // Function to handle updating a student's details by ID
    const handleUpdateStudent = async (id: string, student: Student) => {
        try {
            await updateStudent(id, student); // Update the student's details by ID
            loadStudents(); // Reload the list of students after updating
        } catch (err) {
            setError('Error updating the student'); // Set error message if updating fails
        }
    };

    const isValidEmail = (email: string | undefined): boolean => {
        // Check if the email is undefined or an empty string
        if (typeof email === 'undefined' || email.trim() === '') {
            return false; // Return false if the email is undefined or empty
        }
        // Validate the email format using a regular expression
        return /\S+@\S+\.\S+/.test(email);
    };
    

    const validateStudent = (student: Student): boolean => {
        // Check if the student already exists
        const exists = students.some(existingStudent => existingStudent.fullName === student.fullName);
        if (exists) {
            showNotification('The student already exists', 'error'); // Notify if the student already exists
            return false; // Return false to indicate validation failure
        }
    
        // Validate student data
        if (!student.fullName || !isValidEmail(student.email)) {
            showNotification('Invalid student data', 'error'); // Notify if the student data is invalid
            return false; // Return false to indicate validation failure
        }
    
        return true; // Return true if all validations pass
    };
    

    return { 
        students, 
        student, 
        loadStudents, 
        loadStudent, 
        loading, 
        error, 
        handleAddStudent, 
        handleAddStudents, 
        handleRemoveStudent, 
        handleUpdateStudent 
    };
};

export default useStudents; 
