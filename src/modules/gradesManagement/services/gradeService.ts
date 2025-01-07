
import { db } from '../../../services/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Grade } from '../../../types/types';


// Función para agregar una nueva calificación
export const addGrade = async (grade: Grade): Promise<void> => {
    const gradesCollection = collection(db, 'grades');
    await addDoc(gradesCollection, grade);
};

// Función para obtener todas las calificaciones
export const fetchGrades = async (): Promise<Grade[]> => {
    const gradesCollection = collection(db, 'grades');
    const gradesSnapshot = await getDocs(gradesCollection);
    
    // Asegúrate de mapear correctamente los campos a la interfaz Grade
    return gradesSnapshot.docs.map(doc => ({
        id: doc.id,
        studentId: doc.data().studentId,
        subjectId: doc.data().subjectId,
        finalGrade: doc.data().finalGrade,
    })) as Grade[];
};

// Función para eliminar una calificación por ID
export const deleteGrade = async (id: string): Promise<void> => {
    const gradeDoc = doc(db, 'grades', id);
    await deleteDoc(gradeDoc);
};

