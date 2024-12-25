import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../services/firebase';

export const login = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const register = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
};