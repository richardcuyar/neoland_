import { List, Typography, Box } from "@mui/material";

// Componente funcional Cart
// eslint-disable-next-line react/prop-types
const Cart = () => {
  // Utilizamos el contexto del carrito

  // Función para manejar la eliminación de un ítem del carrito
  return (
    <Box sx={{ width: 320, p: 2 }}>
      {/* Título del carrito */}
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Carrito de Compras
      </Typography>
      <List>
        {/* Mapeamos los ítems del carrito para mostrarlos */}

        {/* Mostramos el botón de "Proceder al Pago" si hay ítems en el carrito */}
      </List>
    </Box>
  );
};

export default Cart;
