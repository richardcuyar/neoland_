import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
  Box,
} from "@mui/material";

const PaymentPage = () => {
  const { state, dispatch } = useCart(); // 🔥 Accedemos al carrito
  const navigate = useNavigate(); // Para redireccionar tras el pago
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [isPaying, setIsPaying] = useState(false);

  const handlePayment = () => {
    if (cardNumber.length < 16 || cvv.length < 3) {
      alert("Por favor, introduce una tarjeta y CVV válidos.");
      return;
    }

    setIsPaying(true);

    setTimeout(() => {
      alert("Pago realizado con éxito 🎉");
      dispatch({ type: "CLEAR_CART" }); // Vaciar el carrito
      navigate("/order-summary"); // Redirigir a la página de resumen de compra
    }, 2000);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Resumen de Pago
      </Typography>

      {state.items.length === 0 ? (
        <Typography variant="body1">El carrito está vacío</Typography>
      ) : (
        <>
          <List>
            {state.items.map((item, index) => (
              <ListItem key={index} divider>
                <ListItemText
                  primary={item.name}
                  secondary={`Precio: $${item.price}`}
                />
              </ListItem>
            ))}
          </List>

          {/* ✅ MOSTRAR EL TOTAL DE LA COMPRA (CORREGIDO) */}
          <Box mt={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Total: ${state.total ? state.total.toFixed(2) : "0.00"}
            </Typography>
          </Box>
        </>
      )}

      {/* Campo de tarjeta */}
      <Box mt={2}>
        <TextField
          label="Número de Tarjeta"
          variant="outlined"
          fullWidth
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </Box>

      {/* Campo de CVV */}
      <Box mt={2}>
        <TextField
          label="CVV"
          variant="outlined"
          fullWidth
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
      </Box>

      {/* Botón de pago */}
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handlePayment}
          disabled={isPaying || state.items.length === 0}
        >
          {isPaying ? "Procesando..." : "Pagar"}
        </Button>
      </Box>
    </Container>
  );
};

export default PaymentPage;
