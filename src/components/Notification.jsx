import React from "react";
import { useCart } from "./CartContext";

const Notification = () => {
  const { notification } = useCart();

  if (!notification) return null;

  return (
    <div
      className="fixed top-4 right-4 z-50 bg-zinc-500 flex text-center
       justify-center items-center text-white px-5 py-5 rounded-md shadow-md ml-10 "
    >
      {notification}
    </div>
  );
};

export default Notification;
