import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../services/firebase";
import UserProfile from "../components/UserProfile/UserProfile";

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Usuario autenticado con Google:", result.user);
    } catch (error) {
      console.error("Error iniciando sesión con Google:", error);
      setError("Error al iniciar sesión con Google.");
    }
  };

  return (
    <>
      <h2>Resumen Académico</h2>
        {!user ? (
          <>
            <h1>Iniciar Sesión</h1>
            <button onClick={handleGoogleLogin}>Iniciar Sesión con Google</button>
          </>
        ) : (
          <UserProfile />
        )}
        {error && <p>{error}</p>}
    </>
  );
};

export default Dashboard;
