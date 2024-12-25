import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../services/firebase";

const Dashboard: React.FC = () => {
  const { user } = useAuth(); // Obtener el estado del usuario
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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Usuario cerrado sesión");
    } catch (error) {
      console.error("Error cerrando sesión:", error);
      setError("Error al cerrar sesión.");
    }
  };

  return (
    <div>
      <h1>Bienvenido, {user?.displayName}</h1>
      <h2>Resumen Académico</h2>
      {/* Aquí puedes añadir componentes para mostrar calificaciones y asistencia */}

      <div>
        {!user ? (
          <>
            <h1>Iniciar Sesión</h1>
            <button onClick={handleGoogleLogin}>Iniciar Sesión con Google</button>
          </>
        ) : (
          <div>
            <h2>Bienvenido, {user.displayName}</h2>
            <p>Email: {user.email}</p>
            {user.photoURL && <img src={user.photoURL} alt="Perfil" />}
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </div>
        )}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Dashboard;
