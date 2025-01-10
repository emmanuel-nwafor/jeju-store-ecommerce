import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import Freedelivery from "./Freedelivery";
import Footer from "./Footer";
import SearchExample from "./SearchBar";

const ProductList = () => {
  const { addToCart } = useCart();
  const [sortOrder, setSortOrder] = useState("default");

  const products = [
    {
      id: 1,
      name: "Jordan Air 16 Low",
      price: "$30.99",
      availability: "Only 16 remaining",
      percentage: "10% off",
      percentageOff: "$40.99",
      rating: "★★★★☆",
      image:
        "https://images.pexels.com/photos/10134303/pexels-photo-10134303.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      name: "Nike Awesome Air",
      price: "$50.99",
      availability: "Almost sold out",
      percentage: "20% off",
      percentageOff: "$70.99",
      rating: "★★★★★",
      image:
        "https://images.pexels.com/photos/8979069/pexels-photo-8979069.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      name: "Nike React Air 87",
      price: "$30.99",
      availability: "Still in stock",
      percentage: "10% off",
      percentageOff: "$10.99",
      rating: "★★★☆☆",
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Adidas Superstar",
      price: "$20.99",
      availability: "Still in stock",
      percentage: "10% off",
      percentageOff: "$10.99",
      rating: "★★★☆☆",
      image:
        "https://images.pexels.com/photos/17918935/pexels-photo-17918935/free-photo-of-shoes-close-up.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 5,
      name: "Puma Suede Classic",
      price: "$35.99",
      availability: "Only 4 remaining",
      percentage: "10% off",
      percentageOff: "$10.99",
      rating: "★★★★☆",
      image:
        "https://images.pexels.com/photos/12879626/pexels-photo-12879626.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 6,
      name: "White & Black Polo",
      price: "$50.00",
      availability: "Almost sold out",
      percentage: "30% off",
      percentageOff: "$30.99",
      rating: "★★★☆☆",
      image:
        "https://images.pexels.com/photos/18186105/pexels-photo-18186105/free-photo-of-basic-black-and-white-t-shirts.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 7,
      name: "3 Pairs of Jeans ",
      price: "$80.99",
      availability: "Only 20 remaining",
      percentage: "10% off",
      percentageOff: "$10.99",
      rating: "★★★★☆",
      image:
        "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 8,
      name: "Female Crop Top",
      price: "$35.00",
      availability: "Sold out",
      percentage: "5% off",
      percentageOff: "$5.99",
      rating: "★★★★☆",
      image:
        "https://i.pinimg.com/236x/a6/f5/18/a6f51874b7e74186395759aace28c44a.jpg",
    },
    {
      id: 9,
      name: " Long Hoodie",
      price: "$80.99",
      availability: "Only 5 remaining",
      percentage: "20% off",
      percentageOff: "$20.99",
      rating: "★★★★☆",
      image:
        "https://i.pinimg.com/736x/ce/72/ad/ce72ade952f54326361f14284d493d9f.jpg",
    },
    {
      id: 10,
      name: "Face Cap",
      price: "$40.00",
      availability: "Almost Sold out",
      percentage: "5% off",
      percentageOff: "$5.99",
      rating: "★★★★☆",
      image:
        "https://images.pexels.com/photos/9558758/pexels-photo-9558758.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 11,
      name: "300 watts Blender Machine",
      price: "$100.00",
      availability: "Still in stock",
      percentage: "5% off",
      percentageOff: "$5.99",
      rating: "★★★★☆",
      image:
        "https://images.pexels.com/photos/1797103/pexels-photo-1797103.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 12,
      name: "Female Gown",
      price: "$30.00",
      availability: "Only 10 remaining",
      percentageOff: "$10.99",
      rating: "★★★★☆",
      image:
        "https://i.pinimg.com/736x/fd/35/27/fd3527a97e92d2cf8c7f4dc8291c28cb.jpg",
      percentage: "10% off",
    },
    {
      id: 13,
      name: "Men trackers",
      price: "$100.00",
      availability: "Still in stock",
      percentage: "5% off",
      percentageOff: "$5.99",
      rating: "★★★★☆",
      image:
        "https://i.pinimg.com/474x/95/1d/00/951d000caf826eb9329ee88d414080a0.jpg",
    },
    {
      id: 14,
      name: "Unisex Footwear",
      price: "$55.00",
      availability: "Still in stock",
      percentage: "15% off",
      percentageOff: "$15.00",
      rating: "★★★★☆",
      image:
        "https://i.pinimg.com/736x/39/a4/cd/39a4cdb69beb49514dbfd26908935464.jpg",
    },
    {
      id: 15,
      name: "Quality Bikers Polo",
      price: "$100.00",
      availability: "Still in stock",
      percentage: "5% off",
      percentageOff: "$5.99",
      rating: "★★★★☆",
      image:
        "https://i.pinimg.com/736x/8c/cd/c9/8ccdc91d6c1830e95ddeafc8b086dea2.jpg",
    },
    {
      id: 16,
      name: "JBL Max 100",
      price: "$60.00",
      availability: "Still in stock",
      percentage: "10% off",
      percentageOff: "$10.99",
      rating: "★★★★☆",
      image:
        "https://i.pinimg.com/736x/1a/11/02/1a1102b3237a99cc31b40d6c88c67cc6.jpg",
    },
    {
      id: 17,
      name: "AirPods Pro 10",
      price: "$10.00",
      availability: "Out of stock",
      percentage: "20% off",
      percentageOff: "$20.99",
      rating: "★★★★☆",
      image:
        " https://i.pinimg.com/236x/16/33/44/163344a296be2887f176612bde602d30.jpg",
    },
    {
      id: 18,
      name: "Ultra Light weight slippers",
      price: "$70.00",
      availability: "Out of stock",
      percentage: "30% off",
      percentageOff: "$30.99",
      rating: "★★★★☆",
      image:
        "https://i.pinimg.com/736x/4f/60/21/4f60210e1418923f3fadc3291a4874a0.jpg",
    },
    {
      id: 19,
      name: "Aesthetic Women Slippers",
      price: "$40.00",
      availability: "Out of stock",
      percentageOff: "$10.99",
      rating: "★★★★☆",
      image:
        "https://i.pinimg.com/236x/bf/a1/36/bfa136c5feea76490de6a8ddcbf2ff01.jpg",
      percentage: "10% off",
    },
    {
      id: 20,
      name: "Echo 360",
      price: "$100.00",
      availability: "Out of stock",
      percentage: "5% off",
      percentageOff: "$5.99",
      rating: "★★★★★",
      image:
        "https://i.pinimg.com/236x/0a/03/4d/0a034dd6025c9536ce9f8a74c8f46fa3.jpg",
    },
  ];

  const parsePrice = (price) => parseFloat(price.replace("$", ""));

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "low-to-high")
      return parsePrice(a.price) - parsePrice(b.price);
    if (sortOrder === "high-to-low")
      return parsePrice(b.price) - parsePrice(a.price);
    return 0;
  });

  return (
    <>
      <Freedelivery />
      <SearchExample />
      <h1 className="text-[30px] m-5 font-extrabold text-zinc-700">Shop</h1>

      {/* Sort Dropdown */}
      <div className="m-4">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="default">Default</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-[10px] ml-4">
        {sortedProducts.map((product) => (
          <div key={product.id} className="m-1">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
            </div>
            <div>
              <h2>{product.name}</h2>
              <h2 className="m-1 text-orange-600 text-sm">
                {product.availability}
              </h2>
              <div className="flex justify-between">
                <div className="flex">
                  <div className="flex items-center justify-evenly">
                    <div className="flex justify-center">
                      <span className="flex text-gray-400 text-[18px] line-through font-light m-1">
                        {product.percentageOff}
                      </span>
                      <h1 className="text-gray-700 text-[20px] font-bold m-1">
                        {product.price}
                      </h1>
                    </div>
                  </div>
                </div>
                <span className="translate-y-[-100px] flex items-center justify-center bg-blue-300 text-white text-[10px] pt-5 pb-5 pl-3 pr-3 rounded-full z-10">
                  {product.percentage}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Link to={`/products/${product.id}`}>
                <button className="group relative inline-flex items-center px-10 py-3 text-white bg-zinc-700 rounded-sm hover:pr-10 transition-all hover:bg-zinc-500">
                  Details
                  <span className="absolute right-4 opacity-0 translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                    <i className="bx bx-right-arrow-alt text-[23px] m-1"></i>
                  </span>
                </button>
                <br />
                <br />
              </Link>
              <span className="m-2 text-orange-500 ">{product.rating}</span>
              <button onClick={() => addToCart(product)}>
                <i className="bx bx-cart-add mb-4 p-2 border-2 rounded-full hover:bg-gray-500 transition-all text-[23px]"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
