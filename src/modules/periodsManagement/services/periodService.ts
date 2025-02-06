/**
 * Manages period-related operations in Firestore.
 * @module periodService
 */

import { db } from "../../../services/firebase";
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { Period } from "../../../types/types";

/**
 * Fetches all periods from Firestore.
 * @async
 * @returns {Promise<Period[]>} A promise that resolves to an array of Period objects.
 */
export const fetchPeriods = async (): Promise<Period[]> => {
  const periodsCollection = collection(db, "periods");
  const periodSnapshot = await getDocs(periodsCollection);
  const periodList: Period[] = periodSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Period, "id">),
  }));
  return periodList;
};

/**
 * Fetches all periods from Firestore.
 * @async
 * @returns {Promise<Period[]>} A promise that resolves to an array of Period objects.
 */
export const fetchPeriodsActive = async (): Promise<Period[]> => {
  const periodsCollection = collection(db, "periods");
  const periodSnapshot = await getDocs(periodsCollection);
  const periodList: Period[] = periodSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Period, "id">),
  }));
  return periodList;
};

/**
 * Adds a new period to Firestore.
 * @async
 * @param {Period} period - The period object to be added.
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 */
export const addPeriod = async (period: Period): Promise<Period> => {
  const periodsCollection = collection(db, "periods");
  const docRef = await addDoc(periodsCollection, period);
  return { ...period, id: docRef.id };
};

/**
 * Deletes a period from Firestore by its ID.
 * @async
 * @param {string} id - The ID of the period to be deleted.
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 */
export const deletePeriod = async (id: string): Promise<boolean> => {
  try {
    const periodDoc = doc(db, "periods", id);
    await deleteDoc(periodDoc);
    return true;
  } catch (error) {
    console.error("Error deleting period:", error);
    throw new Error("Error deleting period");
  }
};

/**
 * Updates a period in Firestore by its ID.
 * @async
 * @param {string} id - The ID of the period to be updated.
 * @param {Partial<Period>} updatedPeriod - The partial Period object containing the fields to be updated.
 * @returns {Promise<void>} A promise that resolves when the operation is complete.
 */
export const updatePeriod = async (id: string, updatedPeriod: Partial<Period>): Promise<void> => {
  const { id: _, ...period } = updatedPeriod;
  const periodDoc = doc(db, "periods", id);
  await updateDoc(periodDoc, period);
  syncCourses(id);
};

export const syncCourses = async (periodId: string): Promise<void> => {
  const coursesCollection = collection(db, `periods/${periodId}/courses`);
  const coursesSnapshot = await getDocs(coursesCollection);
  const ids = coursesSnapshot.docs.map((doc) => doc.id);

  const periodDocRef = doc(db, `periods/${periodId}`);
  await updateDoc(periodDocRef, {
    coursesIds: ids,
  });
};
