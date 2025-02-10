import { createContext, useContext, useState, useEffect } from "react";

// Creamos el contexto
const UserContext = createContext();

// Hook personalizado para usar el contexto
export const useUser = () => useContext(UserContext);

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  // Estado del usuario autenticado
  const [user, setUser] = useState(null);

  // 🟢 1️⃣ Recuperar usuario del localStorage al cargar la app
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Convertimos el JSON en un objeto
    }
  }, []);

  // 🟢 2️⃣ Función para iniciar sesión y guardar en localStorage
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Guardamos en localStorage
  };

  // 🟢 3️⃣ Función para cerrar sesión y borrar del localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Eliminamos el usuario del localStorage
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
