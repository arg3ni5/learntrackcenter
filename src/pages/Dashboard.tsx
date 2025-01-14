import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../services/firebase";
import UserProfile from "../components/UserProfile/UserProfile";
import DynamicTable from "../shared/modules/DynamicTable/DynamicTable";

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

  const data: User[] = [
      { id: 1, name: 'John Doe', age: 30 },
      { id: 2, name: 'Jane Smith', age: 25 },
      { id: 3, name: 'Alice Johnson', age: 28 },
      // Agrega más datos según sea necesario
      { id: 4, name: 'Bob Brown', age: 32 },
      { id: 5, name: 'Charlie Black', age: 29 },
      { id: 6, name: 'Diana White', age: 27 },
      // Más filas para probar el desplazamiento
      { id: 7, name: 'Eve Green', age: 31 },
      { id: 8, name: 'Frank Blue', age: 26 },
      { id: 9, name: 'Grace Yellow', age: 24 },
      { id: 10, name: 'Hank Red', age: 33 },
      // Continúa agregando más datos si es necesario
      // Asegúrate de tener suficientes filas para activar el desplazamiento
  ];


  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
  ];

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

        <div>
      <h1>User Table</h1>
      <DynamicTable data={data} columns={columns} />
    </div>

    </>
  );
};

export default Dashboard;
