import React from "react";
import { Link } from "react-router-dom";
import SearchBar2 from "./SearchBar2";
import Freedelivery from "./Freedelivery";
import Footer from "./Footer";

const categories = [
  {
    name: "Clothes",
    img: "/src/assets/img2.png",
  },
  {
    name: "Vehicles",
    img: "/src/assets/car.png",
    route: "/vehicles",
  },
  {
    name: "Property",
    img: "/src/assets/house.png",
    route: "/property",
  },
  {
    name: "Phones & Tablets",
    img: "/src/assets/phone.png",
    route: "/phones",
  },
  {
    name: "Electronics",
    img: "/src/assets/tv.png",
    route: "/electronics",
  },
  {
    name: "Fashion",
    img: "/src/assets/drag.png",
    route: "/home-appliances",
  },
];

const HomePage = () => {
  return (
    <>
      <SearchBar2 />
      <Freedelivery />
      <div className=" bg-gray-100 p-8">
        <h1 className=" text-[20px] font-semibold text-cyan-600 ">Explore</h1>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              className="flex flex-col rounded-lg items-center p-4 bg-white hover:shadow-sm transition-all"
            >
              <img
                src={category.img}
                alt={category.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <span className="text-sm font-medium text-gray-700 text-center">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
