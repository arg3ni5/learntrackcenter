import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useNotification } from "../notification/NotificationContext";
import { useAuth } from "../../hooks/useAuth";
import "./UserProfile.css";

const UserProfile: React.FC = () => {
    const { user } = useAuth();
    const { addNotification } = useNotification();
    
    const handleLogout = async () => {
        try {
          await signOut(auth);
          console.log("Usuario cerrado sesión");
        } catch (error) {
          console.error("Error cerrando sesión:", error);
          addNotification("Error al cerrar sesión.", "error")
        }
      };

    return (
        user &&
            <div className="user-profile">
                <h2>Bienvenido, {user.displayName}</h2>
                <p className="user-email">Email: {user.email}</p>
                {user.photoURL && <img src={user.photoURL} alt="Perfil" className="user-photo" />}
                <div className="logout-container">
                    <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
                </div>
            </div>
    );
};

export default UserProfile;