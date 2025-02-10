import {
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  // Eliminar producto del carrito
  const handleRemoveFromCart = (item) => {
    console.log("Eliminando producto:", item); // 🔍 Log para depurar
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  // Vaciar el carrito
  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <Typography variant="h6">Carrito de Compras</Typography>

      {state.items.length === 0 ? (
        <Typography variant="body1">El carrito está vacío</Typography>
      ) : (
        <>
          <List>
            {state.items.map((item, index) => (
              <ListItem key={`${item.id}-${index}`} divider>
                <ListItemText
                  primary={item.name}
                  secondary={`$${item.price}`}
                />
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Eliminar
                </Button>
              </ListItem>
            ))}
          </List>
          {/* Mostrar el total del carrito */}
          <Typography variant="h6" style={{ marginTop: "10px" }}>
            Total: ${state.total}
          </Typography>
          {/* Botón para vaciar el carrito */}
          <Button
            variant="contained"
            color="error"
            onClick={handleClearCart}
            style={{ marginTop: "10px" }}
          >
            Vaciar Carrito
          </Button>

          <Button
            variant="contained"
            color="success"
            onClick={() => navigate("/payment")}
            fullWidth
            sx={{ mt: 2 }}
          >
            Ir al Pago
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;
