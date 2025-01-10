import React from "react";
import order from "/src/assets/order.png";
import Freedelivery from "./Freedelivery";

function Order() {
  return (
    <>
      <Freedelivery />
      <div className=" grid items-center justify-center">
        <img src={order} alt="" className=" h-[250px] " />
        <p className="text-center">
          No orders yet.{" "}
          <a
            href="https://whatsapp.com"
            className=" hover:underline hover:text-blue-500 "
          >
            Order Now
          </a>
        </p>
      </div>
    </>
  );
}

export default Order;
