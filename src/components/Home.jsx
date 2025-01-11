import React from "react";
import { Link } from "react-router-dom";
import SearchBar2 from "./SearchBar2";
import Freedelivery from "./Freedelivery";
import Footer from "./Footer";

const categories = [
  {
    name: "Headphones",
    img: "https://i.pinimg.com/474x/9a/72/d2/9a72d2e9beb48d62959987205228f4f8.jpg",
  },
  {
    name: "Vehicles",
    img: "https://i.pinimg.com/236x/93/da/d2/93dad290eb9cbf6a324552a7fad172ed.jpg",
    route: "/vehicles",
  },
  {
    name: "Properties",
    img: "https://i.pinimg.com/236x/bf/eb/29/bfeb29200642340444c7badecf83de39.jpg",
    route: "/property",
  },
  {
    name: "Phones & Tablets",
    img: "https://i.pinimg.com/236x/0d/be/eb/0dbeeb010c9cf22fec89f6ef1cc699f0.jpg",
    route: "/phones",
  },
  {
    name: "Smart Watch",
    img: "https://i.pinimg.com/236x/37/a8/ae/37a8ae2095512429d5d0ffa5d8675378.jpg",
    route: "/electronics",
  },
  {
    name: "Clothes",
    img: "https://i.pinimg.com/236x/b0/06/19/b006197dab0c09cbf17e41d8db67ef35.jpg",
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
                className=" object-contain mb-4"
              />
              <span className="text-sm font-medium p-4 text-gray-700 text-center">
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
