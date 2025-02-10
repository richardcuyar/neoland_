// components/Header.jsx

import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext"; // Importamos el contexto de autenticación
import { useNavigate } from "react-router-dom"; // Para redirigir tras logout
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  TextField,
  Drawer,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "../cart/Cart";
import { Link } from "react-router-dom"; // 🆕 Importamos Link

const Header = () => {
  const { user, logout } = useAuth(); // Obtenemos el usuario y la función logout
  const { state } = useCart();
  const navigate = useNavigate(); // Hook para redirección
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirigir al login después de cerrar sesión
  };

  // Función para manejar el input de búsqueda
  const handleSearchInput = (event) => {
    const query = event.target.value;
    console.log(query); // Aquí puedes manejar la lógica de búsqueda
  };

  // Función para togglear el carrito
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* Botón del menú */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Título de la tienda */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mi Tienda
          </Typography>

          {/* Barra de búsqueda */}
          <TextField
            id="search-bar"
            className="text"
            onChange={handleSearchInput}
            label="Buscar productos"
            variant="outlined"
            placeholder="Buscar..."
            size="small"
            margin="normal"
            sx={{ backgroundColor: "white", borderRadius: 1, mr: 2 }}
          />

          {/* Icono de cuenta de usuario */}
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>

          {/* Si el usuario está autenticado, mostrar su email y el botón de logout */}
          {user ? (
            <>
              <Typography variant="body1" sx={{ marginRight: 2 }}>
                {user.email}
              </Typography>
              <Button color="inherit" onClick={handleLogout}>
                Cerrar Sesión
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={() => navigate("/login")}>
              Iniciar Sesión
            </Button>
          )}

          {/* Icono del carrito de compras */}
          <IconButton color="inherit" onClick={toggleCart}>
            <Badge badgeContent={state.items.length} color="secondary">
              <ShoppingCartIcon className="shake-animation" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Enlace al resumen del pedido */}
      <Link to="/order-summary">
        <Button color="inherit">Mis Pedidos</Button>
      </Link>

      {/* Enlace al perfil del usuario */}
      <Link to="/profile">
        <Button color="inherit">Mi Perfil</Button>
      </Link>

      {/* Drawer para mostrar el carrito */}
      <Drawer anchor="right" open={isCartOpen} onClose={toggleCart}>
        <Cart />
      </Drawer>
    </>
  );
};

export default Header;
