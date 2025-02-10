import { createContext, useReducer, useContext, useEffect } from "react";
import PropTypes from "prop-types"; // ✅ Importamos PropTypes

// Estado inicial
const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [], // Recupera del localStorage
  total: 0, //Total del carrito
};

// Reducer para manejar las acciones del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const updatedCart = [...state.items, action.payload];
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Guarda en localStorage
      return {
        ...state,
        items: updatedCart,
        total: updatedCart.reduce((sum, item) => sum + item.price, 0),
      };
    }
    case "REMOVE_ITEM": {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        const newCart = [...state.items]; // Copia del array
        newCart.splice(itemIndex, 1); // Elimina solo UNA unidad

        localStorage.setItem("cart", JSON.stringify(newCart)); // Guarda en localStorage
        return { ...state, items: newCart };
      }

      return state;
    }

    case "CLEAR_CART":
      localStorage.removeItem("cart"); // Limpia el carrito del localStorage
      return { ...state, items: [], total: 0 };

    default:
      return state;
  }
};

// Crear el contexto
const CartContext = createContext();

// Proveedor del carrito
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Guardar en localStorage cuando el carrito cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// 📌 ✅ Definir PropTypes para `children`
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook personalizado para usar el carrito
export const useCart = () => {
  return useContext(CartContext);
};
