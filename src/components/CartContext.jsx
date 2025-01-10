import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load cart from local storage when the app initializes
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isAlreadyInCart = prevCart.some((item) => item.id === product.id);
      if (isAlreadyInCart) {
        showNotification(`${product.name} is already in the cart.`);
        return prevCart;
      }
      showNotification(`${product.name} added to cart.`);
      return [...prevCart, product];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const product = prevCart.find((item) => item.id === id);
      if (product) {
        showNotification(`${product.name} removed from cart.`);
      }
      return prevCart.filter((item) => item.id !== id);
    });
  };

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, notification }}
    >
      {children}
    </CartContext.Provider>
  );
};
