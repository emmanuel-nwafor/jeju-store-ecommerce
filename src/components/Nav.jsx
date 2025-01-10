import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import ProductList from "./ProductList";
import ProductView from "./ProductView";
import Error from "./Error";
import Notify from "./Notify";
import Order from "./Order";

const Nav = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {" "}
      <Router>
        <div className="flex-col z-50">
          <div
            className=" md:hidden lg:hidden xl:hidden items-end flex justify-end p-3 z-50 fixed
        translate-x-[250px] "
          >
            <button
              onClick={toggleSidebar}
              className="text-xl focus:outline-none hover:text-gray-400 z-50 "
            >
              <i className="bx bx-menu text-[30px] "></i>
            </button>
          </div>

          <div
            className={`bg-[#131313] backdrop-blur-[13px] max-md:bg-transparent shadow-2xl transition-all duration-300 max-md:text-cyan-600 text-white flex-col fixed h-full z-50 ${
              isCollapsed ? "max-md:hidden w-[60px]" : "w-64"
            } transition-all duration-300`}
          >
            <div className="flex items-center justify-between p-4">
              <h1
                className={`text-lg font-bold ${isCollapsed ? "hidden" : ""}`}
              >
                Welcome
              </h1>
              <button
                onClick={toggleSidebar}
                className="text-xl focus:outline-none hover:text-gray-400 max-md:hidden"
              >
                <i className="bx bx-menu"></i>
              </button>
            </div>

            <ul className="flex-1">
              <Link
                to="/"
                title={isCollapsed ? "Home" : ""}
                className="flex items-center cursor-pointer hover:bg-slate-400  hover:text-white "
              >
                <li className="flex items-center p-4 cursor-pointer hover:bg-slate-400 ">
                  <i className="bx bx-home max-md:text-[20px] text-2xl"></i>
                  <span className={`ml-4 ${isCollapsed ? "hidden" : "block"}`}>
                    Home
                  </span>
                </li>
              </Link>

              <Link
                to="/products"
                title={isCollapsed ? "Shop" : ""}
                className="flex items-center cursor-pointer hover:bg-slate-400  hover:text-white "
              >
                <li className="flex items-center p-4  cursor-pointer hover:bg-slate-400 ">
                  <i className="bx bx-shopping-bag max-md:text-[20px] text-2xl"></i>
                  <span className={`ml-4 ${isCollapsed ? "hidden" : "block"}`}>
                    Shop
                  </span>
                </li>
              </Link>

              <Link
                to="/cart"
                title={isCollapsed ? "Cart" : ""}
                className="flex items-center  cursor-pointer hover:bg-slate-400  hover:text-white "
              >
                <li className="flex items-center p-4  cursor-pointer hover:bg-slate-400 ">
                  <i className="bx bx-cart max-md:text-[20px] text-2xl"></i>
                  <span className={`ml-4 ${isCollapsed ? "hidden" : "block"}`}>
                    Cart
                  </span>
                </li>
              </Link>

              <Link
                to="/order"
                title={isCollapsed ? "Order" : ""}
                className="flex items-center cursor-pointer hover:bg-slate-400  hover:text-white "
              >
                <li className="flex items-center p-4  cursor-pointer hover:bg-slate-400 ">
                  <i className="bx bx-package max-md:text-[20px] text-2xl "></i>
                  <span className={`ml-4 ${isCollapsed ? "hidden" : "block"}`}>
                    Order
                  </span>
                </li>
              </Link>

              <Link
                to="/notify"
                title={isCollapsed ? "Notifications" : ""}
                className="flex items-center cursor-pointer hover:bg-slate-400 hover:text-white "
              >
                <li className="flex items-center p-3 cursor-pointer hover:bg-slate-400 ">
                  <span className=" animate-ping py-[2px] px-[2px] rounded-full bg-red-500 translate-x-[8px] "></span>
                  <i className="bx bx-bell max-md:text-[20px] text-2xl "></i>
                  <span className={`ml-4 ${isCollapsed ? "hidden" : "block"}`}>
                    Notifications
                  </span>
                </li>
              </Link>
            </ul>
          </div>

          <div className="flex-1  md:ml-[45px] lg:ml-[60px]  bg-white ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductView />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/notify" element={<Notify />} />
              <Route path="/order" element={<Order />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Nav;
