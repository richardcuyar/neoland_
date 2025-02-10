import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  console.log("🔍 Verificando acceso, usuario:", user);

  if (!user) {
    console.log("🔴 No hay usuario, redirigiendo a /login");
    // Redirige al login si no está autenticado
    return <Navigate to="/login" replace />;
  }
  console.log("✅ Usuario autenticado, mostrando página protegida");
  return children;
};

export default ProtectedRoute;
