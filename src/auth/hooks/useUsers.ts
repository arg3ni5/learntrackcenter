// src/hooks/useUsers.ts
import { useState } from "react";
import { registerUser, loginUserWithEmailPassword, logoutUser, getUserData, updateUserProfile, loginWithGoogle, checkAuthMethodsForEmail } from "../services/userServices";

export const useUsers = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleLogin = async (email: string, password?: string) => {
    setLoading(true);
    setError("");

    try {
      const methods = await checkAuthMethodsForEmail(email);

      if (methods.includes("password")) {
        if (password) {
          // Si tiene Email/Password, autenticamos con ese método
          const userCredential = await loginUserWithEmailPassword(email, password);
          return userCredential;
        } else {
          throw new Error("Se requiere una contraseña para iniciar sesión con Email/Password.");
        }
      } else if (methods.includes("google.com")) {
        // Si solo tiene cuenta con Google, intentamos login con Google
        const googleUser = await loginWithGoogle();
        return googleUser;
      } else {
        throw new Error("No hay una cuenta registrada con este correo.");
      }
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Registro de usuario
  const register = async (email: string, password: string) => {
    setLoading(true);
    setError("");
    try {
      const newUser = await registerUser(email, password);
      setUser(newUser);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Inicio de sesión con correo y contraseña
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError("");
    try {
      const loggedInUser = await loginUserWithEmailPassword(email, password);
      console.log(loggedInUser);
      setUser(loggedInUser);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Iniciar sesión con Google
  const loginWithGoogleHandler = async () => {
    setLoading(true);
    setError("");
    try {
      const googleUser = await loginWithGoogle();
      setUser(googleUser);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Cerrar sesión
  const logout = async () => {
    setLoading(true);
    setError("");
    try {
      await logoutUser();
      setUser(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Obtener datos del usuario
  const fetchUserData = async (uid: string) => {
    setLoading(true);
    setError("");
    try {
      const userData = await getUserData(uid);
      setUser({ ...user, ...userData });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Actualizar perfil del usuario
  const updateProfileData = async (uid: string, data: any) => {
    setLoading(true);
    setError("");
    try {
      await updateUserProfile(uid, data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const linkGoogleAccount = async () => {
    setLoading(true);
    setError("");
    try {
      const googleUser = await linkGoogleAccount(user);
      setUser(googleUser);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, register, login, handleLogin, loginWithGoogleHandler, logout, linkGoogleAccount, fetchUserData, updateProfileData };
};
