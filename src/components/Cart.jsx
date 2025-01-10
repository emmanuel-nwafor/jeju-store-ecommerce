import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import cartImg from "/src/assets/cart.png";
import Freedelivery from "./Freedelivery";

// Skeleton Component
const Skeleton = ({
  width = "w-full",
  height = "h-4",
  rounded = "rounded-md",
}) => (
  <div
    className={`bg-gray-300 animate-pulse ${width} ${height} ${rounded}`}
  ></div>
);

const Cart = () => {
  const { cart, setCart, removeFromCart } = useCart();
  const [total, setTotal] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => {
      const price = parseFloat(item.price.replace(/[^\d.-]/g, ""));
      return acc + price * (item.quantity || 1);
    }, 0);
    setTotal(newTotal);
  }, [cart]);

  const handleQuantityChange = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max((item.quantity || 1) + delta, 1) }
          : item
      )
    );
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      setShowPopup(true);
      return;
    }
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    if (cart.length > 0) {
      setCart([]);
      localStorage.removeItem("cart");
    }
  };

  return (
    <>
      <Freedelivery />
      <h1 className="text-[30px] ml-6 font-extrabold text-zinc-600  ">Cart</h1>
      <div className="p-6">
        {isLoading ? (
          // Skeleton Loader
          <div className="space-y-6">
            {[...Array(2)].map((_, index) => (
              <div>
                <div key={index} className="flex items-center gap-4 m-5">
                  <Skeleton width="w-20" height="h-20" rounded="rounded-full" />
                  <div className="flex flex-col space-y-2 flex-grow">
                    <Skeleton width="w-3/4" />
                    <Skeleton width="w-1/2" />
                  </div>
                  <Skeleton width="w-16" height="h-8" />
                </div>
                <div key={index} className="flex items-center gap-4 m-5">
                  <Skeleton width="w-20" height="h-20" rounded="rounded-full" />
                  <div className="flex flex-col space-y-2 flex-grow">
                    <Skeleton width="w-3/4" />
                    <Skeleton width="w-1/2" />
                  </div>
                  <Skeleton width="w-16" height="h-8" />
                </div>
                <div key={index} className="flex items-center gap-4 m-5">
                  <Skeleton width="w-20" height="h-20" rounded="rounded-full" />
                  <div className="flex flex-col space-y-2 flex-grow">
                    <Skeleton width="w-3/4" />
                    <Skeleton width="w-1/2" />
                  </div>
                  <Skeleton width="w-16" height="h-8" />
                </div>
              </div>
            ))}
          </div>
        ) : cart.length === 0 ? (
          // Empty Cart
          <center>
            <div className="flex-col items-center justify-center">
              <img src={cartImg} alt="addToCart" className="h-[250px]" />
              <br />
              <p className="text-center">Your cart is empty.</p>
            </div>
          </center>
        ) : (
          // Cart Items
          <div className="flex-col">
            {cart.map((item) => (
              <li
                key={item.id}
                className="bg-gray-200 mb-5 p-4 rounded-md flex justify-between items-center max-md:flex-col"
              >
                <div className="flex max-md:flex-col justify-evenly items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-full max-md:rounded-sm max-md:w-full object-cover"
                  />
                  <div className="flex-col">
                    <h2 className="text-md max-md:text-sm m-2">{item.name}</h2>
                    <p className="max-md:text-sm text-gray-600 m-2 font-bold text-xl">
                      $
                      {parseFloat(item.price.replace(/[^\d.-]/g, "")).toFixed(
                        2
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="p-[8px] bg-zinc-500 rounded-full m-4 hover:bg-zinc-400 transition-all text-white"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    <i className="bx bx-chevron-left"></i>
                  </button>
                  {item.quantity || 1}
                  <button
                    className="p-[8px] bg-zinc-500 rounded-full m-4 hover:bg-zinc-400 transition-all text-white"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    <i className="bx bx-chevron-right"></i>
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="max-md:w-full max-md:text-sm px-4 py-2 bg-red-600 text-white rounded-sm hover:bg-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
            <hr />
            <br />
            <h1 className="text-2xl  font-extrabold">
              Total: ${total.toFixed(2)}
            </h1>
            <button
              onClick={handleCheckout}
              className="mt-4 px-6 py-3 bg-zinc-600 text-white font-bold rounded hover:bg-zinc-800"
            >
              Checkout
            </button>
          </div>
        )}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[300px] text-center">
            <h2 className="text-xl max-md:text-lg font-bold mb-4">
              {cart.length === 0
                ? "Your cart is empty!"
                : `Purchase successful!`}
            </h2>
            {cart.length > 0 && (
              <p className="mb-4">Total: ${total.toFixed(2)}</p>
            )}
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={handlePopupClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
