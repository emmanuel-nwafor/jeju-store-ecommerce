import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchExample = () => {
  const items = [
    {
      id: 1,
      name: "Jordan Air 16 Low",
      price: "$20.99",
      image:
        "https://images.pexels.com/photos/10134303/pexels-photo-10134303.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      percentage: "40% off",
    },
    {
      id: 2,
      name: "Nike Awesome Air",
      price: "$50.99",
      image:
        "https://images.pexels.com/photos/8979069/pexels-photo-8979069.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      percentage: "20% off",
    },
    {
      id: 3,
      name: "Nike React Air 87",
      price: "$30.99",

      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
      percentage: "10% off",
    },
    {
      id: 4,
      name: "Adidas Superstar",
      price: "$20.99",

      image:
        "https://images.pexels.com/photos/17918935/pexels-photo-17918935/free-photo-of-shoes-close-up.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

      percentage: "40% off",
    },
    {
      id: 5,
      name: "Puma Suede Classic",
      price: "$35.99",

      image:
        "https://images.pexels.com/photos/12879626/pexels-photo-12879626.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      percentage: "40% off",
    },
    {
      id: 6,
      name: "White & Black",
      price: "$15.00",

      image:
        "https://images.pexels.com/photos/18186105/pexels-photo-18186105/free-photo-of-basic-black-and-white-t-shirts.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      percentage: "50% off",
    },
    {
      id: 7,
      name: "3 Pairs of Jeans ",
      price: "$80.99",

      image:
        "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      percentage: "10% off",
    },
    {
      id: 8,
      name: "Female Crop Top",
      price: "$35.00",

      image:
        "https://i.pinimg.com/236x/a6/f5/18/a6f51874b7e74186395759aace28c44a.jpg",

      percentage: "5% off",
    },
    {
      id: 9,
      name: " Long Hoodie",
      price: "$80.99",
      image:
        "https://i.pinimg.com/736x/ce/72/ad/ce72ade952f54326361f14284d493d9f.jpg",
      percentage: "20% off",
    },
    {
      id: 10,
      name: "Face Cap",
      price: "$40.00",
      image: [
        "https://images.pexels.com/photos/9558758/pexels-photo-9558758.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      percentage: "5% off",
    },
    {
      id: 11,
      name: "300 watts Blender Machine",
      price: "$100.00",
      image: [
        "https://images.pexels.com/photos/1797103/pexels-photo-1797103.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      percentage: "5% off",
    },
    {
      id: 12,
      name: "Black Female Gown",
      price: "$30.00",
      availability: <p className=" text-orange-500 ">Only 10 remaining</p>,
      image:
        "https://i.pinimg.com/736x/fd/35/27/fd3527a97e92d2cf8c7f4dc8291c28cb.jpg",
      percentage: "10% off",
    },
    {
      id: 13,
      name: "Men trackers",
      price: "$100.00",
      availability: <p className=" text-orange-500 ">Still in stock</p>,
      image:
        "https://i.pinimg.com/474x/95/1d/00/951d000caf826eb9329ee88d414080a0.jpg",
      percentage: "5% off",
    },
    {
      id: 14,
      name: "Unisex Footwear",
      price: "$55.00",
      availability: <p className=" text-orange-500 ">Still in stock</p>,
      image:
        "https://i.pinimg.com/736x/39/a4/cd/39a4cdb69beb49514dbfd26908935464.jpg",
      percentage: "15% off",
    },
    {
      id: 15,
      name: "Quality Bikers Polo",
      price: "$100.00",
      availability: <p className=" text-orange-500 ">Still in stock</p>,
      image:
        "https://i.pinimg.com/736x/8c/cd/c9/8ccdc91d6c1830e95ddeafc8b086dea2.jpg",
      percentage: "5% off",
    },
    {
      id: 16,
      name: "JBL Max 100",
      price: "$60.00",
      availability: <p className=" text-orange-500 ">Still in stock</p>,
      image:
        "https://i.pinimg.com/736x/1a/11/02/1a1102b3237a99cc31b40d6c88c67cc6.jpg",
      percentage: "10% off",
    },
    {
      id: 17,
      name: "AirPods Pro 10",
      price: "$10.00",
      availability: <p className=" text-orange-500 ">Still in stock</p>,
      image:
        " https://i.pinimg.com/236x/16/33/44/163344a296be2887f176612bde602d30.jpg",
      percentage: "20% off",
    },
    {
      id: 18,
      name: "Ultra Light weight unisex slippers",
      price: "$70.00",
      availability: <p className=" text-orange-500 ">Still in stock</p>,
      image:
        "https://i.pinimg.com/736x/4f/60/21/4f60210e1418923f3fadc3291a4874a0.jpg",
      percentage: "30% off",
    },
    {
      id: 19,
      name: "Aesthetic Women Slippers",
      price: "$40.00",
      availability: <p className=" text-orange-500 ">Still in stock</p>,
      image:
        "https://i.pinimg.com/236x/bf/a1/36/bfa136c5feea76490de6a8ddcbf2ff01.jpg",
      percentage: "10% off",
    },

    {
      id: 20,
      name: "Echo 360",
      price: "$100.00",
      availability: <p className=" text-orange-500 ">Still in stock</p>,
      image:
        "https://i.pinimg.com/236x/0a/03/4d/0a034dd6025c9536ce9f8a74c8f46fa3.jpg",
      percentage: "5% off",
    },
  ];

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (event) => setQuery(event.target.value);

  const closePopup = () => setQuery("");

  const handleItemClick = (id) => {
    navigate(`/products/${id}`);
    closePopup();
  };

  return (
    <div className="p-4">
      <div className="flex-col items-center ">
        <div className="flex justify-evenly items-center bg-zinc-800 rounded-full">
          <h2 className="font-extrabold text-[30px] m-2 text-gray-100 lg: xl: ">
            JeJu
          </h2>

          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search for an item..."
            className="m-2 w-full p-3 border rounded-full focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <br />
      </div>

      {query && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white m-4 rounded-lg shadow-lg max-w-lg w-full p-6 overflow-y-auto max-h-[80vh]">
            <button
              onClick={closePopup}
              className="text-gray-500 hover:text-gray-700 float-right text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-lg font-semibold mb-4">Search Results</h3>
            <ul className="space-y-4">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center space-x-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                    onClick={() => handleItemClick(item.id)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded"
                    />
                    <div className="grid">
                      <span className="text-gray-700">{item.name}</span>
                      <span>{item.price}</span>
                    </div>
                  </li>
                ))
              ) : (
                <li className="text-red-600">No results found</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchExample;
