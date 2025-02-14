import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useNotification } from "../notification/NotificationContext";
import { useAuth } from "../../hooks/useAuth";
import "./UserProfile.css";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const UserProfile: React.FC = () => {
  const { user } = useAuth();
  const { showNotification } = useNotification();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Usuario cerrado sesión");
    } catch (error) {
      console.error("Error cerrando sesión:", error);
      showNotification("Error al cerrar sesión.", "error")
    }
  };

  return (
    user &&
    <div className="user-profile">
      <h2>Bienvenido, {user.displayName}</h2>
      <p className="user-email">Email: {user.email}</p>
      {user.photoURL && <img src={user.photoURL} alt="Perfil" className="user-photo" />}
      <div>
        {user.providerData.map((item) => (
          <span key={item.uid}>
            {item.providerId == "password" && <MdOutlineEmail />}{item.providerId == "google.com" && <FaGoogle />}
          </span>
        ))}
      </div>
      <div className="logout-container">
        <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default UserProfile;