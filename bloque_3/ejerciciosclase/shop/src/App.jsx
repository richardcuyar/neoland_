import "./App.css";
import Pages from "./pages";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BaseTheme } from "./theme/base";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login"; // Página de login
import HomePage from "./pages/home"; // ✅ Correcto
import CheckoutPage from "./pages/checkout/Checkout";
import { UserProvider } from "./context/UserContext"; // Contexto de usuario
import { CartProvider } from "./context/CartContext"; // Contexto del carrito
import ProtectedRoute from "./components/ProtectedRoute"; // Componente de rutas protegidas
import OrderSummary from "./pages/order-summary"; // 🆕 Importamos la nueva página
import ProfilePage from "./pages/profile"; // 🆕 Importamos la nueva página
import PaymentPage from "./pages/payment"; // ✅ Importamos la página de pago

function App() {
  return (
    <ThemeProvider theme={BaseTheme}>
      <UserProvider>
        <CartProvider>
          {" "}
          {/* 🔥 Envolvemos la app con el carrito */}
          <BrowserRouter>
            <Routes>
              {/* Ruta pública para Login */}
              <Route path="/login" element={<LoginPage />} />

              {/* Ruta protegida para Checkout */}
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <CheckoutPage />
                  </ProtectedRoute>
                }
              />
              {/* 🆕 Ruta protegida para Order Summary */}
              <Route
                path="/order-summary"
                element={
                  <ProtectedRoute>
                    <OrderSummary />
                  </ProtectedRoute>
                }
              />

              {/* 🆕 Ruta protegida para el perfil del usuario */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />

              {/* Ruta pública para Home */}
              <Route path="/" element={<HomePage />} />

              {/* Ruta protegida para el pago */}
              <Route
                path="/payment"
                element={
                  <ProtectedRoute>
                    <PaymentPage />
                  </ProtectedRoute>
                }
              />

              {/* Otras rutas generales */}
              <Route path="*" element={<Pages />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
