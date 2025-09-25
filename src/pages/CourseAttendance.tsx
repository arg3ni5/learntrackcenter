// src/pages/CourseAttendance.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLoading } from '../components/loading/LoadingContext';
import { useNotification } from '../components/notification/NotificationContext';
import { Course, Student, Attendance } from '../types/types';
import { db } from '../services/firebase';
import { collection, query, where, getDocs, doc, getDoc, setDoc } from 'firebase/firestore';
import useCourse from '../modules/coursesManagement/hooks/useCourse';

const CourseAttendance: React.FC = () => {
    const { periodId, courseId } = useParams<{ periodId: string, courseId: string }>();
    const { setIsLoading, setLoadingText } = useLoading();
    const { showSuccess, showError } = useNotification();
    const { course } = useCourse(periodId, courseId);
    const [students, setStudents] = useState<Student[]>([]);
    const [week, setWeek] = useState(1);
    const [attendances, setAttendances] = useState<Map<string, Attendance>>(new Map());

    useEffect(() => {
        const fetchCourseAndStudents = async () => {
            if (!courseId) return;
            setIsLoading(true);
            setLoadingText('Cargando curso y estudiantes...');

            try {
                // Fetch course details
                if (course) {
                    // Fetch enrolled students
                    console.log('Enrolled Students IDs:', course.enrolledStudents);
                    if (course.enrolledStudents && course.enrolledStudents.length > 0) {

                        const studentsQuery = query(collection(db, 'students'), where('__name__', 'in', course.enrolledStudents));
                        const studentsSnap = await getDocs(studentsQuery);
                        console.log('Fetched Students:', studentsSnap.docs.map(d => ({ id: d.id, ...d.data() } as Student)));
                        setStudents(studentsSnap.docs.map(d => ({ id: d.id, ...d.data() } as Student)));
                    }
                } else {
                    showError('Curso no encontrado');
                }
            } catch (error) {
                showError('Error al cargar datos del curso y estudiantes.');
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCourseAndStudents();
    }, [courseId, setIsLoading, setLoadingText, showError]);

    useEffect(() => {
        const fetchAttendances = async () => {
            if (!courseId || !periodId || students.length === 0) return;

            setIsLoading(true);
            setLoadingText(`Cargando asistencias para la semana ${week}...`);

            try {
                const attendancesQuery = query(
                    collection(db, 'attendances'),
                    where('courseId', '==', courseId),
                    where('periodId', '==', periodId),
                    where('weekNumber', '==', week)
                );
                const attendancesSnap = await getDocs(attendancesQuery);
                const newAttendances = new Map<string, Attendance>();
                attendancesSnap.forEach(doc => {
                    const attendanceData = doc.data() as Attendance;
                    newAttendances.set(attendanceData.studentId, { id: doc.id, ...attendanceData });
                });
                setAttendances(newAttendances);
            } catch (error) {
                showError('Error al cargar las asistencias.');
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAttendances();
    }, [courseId, periodId, week, students, setIsLoading, setLoadingText, showError]);

    const handleAttendanceChange = async (studentId: string, attended: boolean) => {
        if (!courseId || !periodId) return;

        const attendanceId = `${courseId}_${periodId}_${studentId}_${week}`;
        const newAttendance: Attendance = {
            courseId,
            periodId,
            studentId,
            weekNumber: week,
            attended,
            date: new Date(),
        };

        try {
            await setDoc(doc(db, 'attendances', attendanceId), newAttendance, { merge: true });
            setAttendances(prev => new Map(prev).set(studentId, { ...newAttendance, id: attendanceId }));
            showSuccess('Asistencia actualizada');
        } catch (error) {
            showError('Error al actualizar la asistencia.');
            console.error(error);
        }
    };

    if (!course) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Asistencia del Curso: {course.name}</h1>
            <div className="mb-4">
                <label htmlFor="week-selector" className="mr-2">Semana:</label>
                <select
                    id="week-selector"
                    value={week}
                    onChange={(e) => setWeek(Number(e.target.value))}
                    className="p-2 border rounded"
                >
                    {Array.from({ length: course.duration || 0 }, (_, i) => i + 1).map(w => (
                        <option key={w} value={w}>{w}</option>
                    ))}
                </select>
            </div>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Estudiante</th>
                        <th className="py-2 px-4 border-b">Asistió</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td className="py-2 px-4 border-b">{student.fullName}</td>
                            <td className="py-2 px-4 border-b text-center">
                                <input
                                    type="checkbox"
                                    checked={attendances.get(student.id!)?.attended || false}
                                    onChange={(e) => handleAttendanceChange(student.id!, e.target.checked)}
                                    className="h-6 w-6"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourseAttendance;