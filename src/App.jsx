import React from "react";
import "./index.css";
import Nav from "./components/Nav";
import { CartProvider } from "./components/CartContext";
import Notification from "./components/Notification";

function App() {
  return (
    <>
      <div className="bg-white">
        <CartProvider>
          <Notification />
          <Nav />
        </CartProvider>
      </div>
    </>
  );
}

export default App;
