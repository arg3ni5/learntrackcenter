// src/services/userServices.ts
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  fetchSignInMethodsForEmail,
  EmailAuthProvider,
  User,
  linkWithCredential,
  linkWithPopup,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "../../services/firebase";

// Crear un nuevo usuario con correo y contraseña
export const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error registering user");
    throw error;
  }
};

export const loginUserWithEmailPassword = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};

export const loginWithGoogle = async (user?: User) => {
  try {
    if (user) {
      return linkEmailAndGoogle(user);
    }
    return await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

export const linkEmailAndGoogle = async (user: User) => {
  try {
    if (!user || !user.email) {
      console.error("Usuario no valido");
      return;
    }
    const methods = await fetchSignInMethodsForEmail(auth, user.email);

    if (methods.includes(EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)) {
      // El correo está vinculado a una cuenta con email y password, ahora vinculamos ambas cuentas
      const credential = EmailAuthProvider.credential(user.email, "password_aqui"); // Solicita la contraseña
      await linkWithCredential(user, credential);
      console.log("Cuentas vinculadas correctamente");
    }
  } catch (error) {
    console.error("Error al vincular cuentas:", error);
  }
};

// Cerrar sesión
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(`Error logging out`);
    throw error;
  }
};

// Obtener datos del usuario desde Firestore
export const getUserData = async (uid: string) => {
  const userRef = doc(db, "users", uid);
  const userDoc = await getDoc(userRef);
  if (userDoc.exists()) {
    return userDoc.data();
  } else {
    throw new Error("User not found");
  }
};

// Crear o actualizar el perfil de usuario en Firestore
export const updateUserProfile = async (uid: string, data: any) => {
  try {
    const userRef = doc(db, "users", uid);
    await setDoc(userRef, data, { merge: true });
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};

export const checkAuthMethodsForEmail = async (email: string) => {
  try {
    return await fetchSignInMethodsForEmail(auth, email);
  } catch (error) {
    console.error("Error fetching sign-in methods:", error);
    throw error;
  }
};

export const linkGoogleAccount = async () => {
  if (!auth.currentUser) throw new Error("No user is currently signed in");

  try {
    return await linkWithPopup(auth.currentUser, googleProvider);
  } catch (error) {
    console.error("Error linking Google account:", error);
    throw error;
  }
};
