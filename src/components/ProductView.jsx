import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext";
import Recommended from "./Recommended";
import Freedelivery from "./Freedelivery";
import Footer from "./Footer";

const products = [
  {
    id: 1,
    name: "Jordan Air 16 Low",
    price: "$20.99",
    details: (
      <p>
        Jordan air ,men Breathable Lightweight <br /> running shoes
      </p>
    ),
    image: [
      "https://images.pexels.com/photos/10134303/pexels-photo-10134303.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/11820507/pexels-photo-11820507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    percentage: "40% off",
    availability: <p className=" text-orange-500 ">16 items remaining</p>,
  },
  {
    id: 2,
    name: "Nike Awesome Air",
    price: "$50.99",
    details: <p>Compatible runners sneakers available in unisex</p>,
    image: [
      "https://images.pexels.com/photos/8979069/pexels-photo-8979069.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/8979070/pexels-photo-8979070.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    ],
    percentage: "20% off",
    availability: <p className=" text-orange-500 ">Almost sold out</p>,
  },
  {
    id: 3,
    name: "Nike React Air 87",
    price: "$30.99",
    details: (
      <p>
        One of our new arrivals Ultimate <br /> Nike React Air 87 men sneakers
        <br /> for sports and comes in different sizes
      </p>
    ),
    image: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    percentage: "10% off",
    availability: <p className=" text-orange-500 ">Still in stock</p>,
  },
  {
    id: 4,
    name: "Adidas Superstar",
    price: "$20.99",
    details: (
      <p>
        Adisas suparstar. Comes in <br /> different sizes and also unisex
      </p>
    ),
    image: [
      "https://images.pexels.com/photos/17918935/pexels-photo-17918935/free-photo-of-shoes-close-up.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/17918934/pexels-photo-17918934/free-photo-of-shoes-close-up.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    ],
    percentage: "40% off",
    availability: <p className=" text-orange-500 ">Almost sold out</p>,
  },
  {
    id: 5,
    name: "Puma Suede Classic",
    price: "$35.99",
    details: (
      <p>
        Puma Suede Classic runner sneakers <br /> comes in differnt sizes and
        colors.
      </p>
    ),
    image: [
      "https://images.pexels.com/photos/12879628/pexels-photo-12879628.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/12879626/pexels-photo-12879626.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    ],
    percentage: "40% off",
    availability: <p className=" text-orange-500 ">Only 4 remaining</p>,
  },
  {
    id: 6,
    name: "White & Black Polo",
    price: "$20.99",
    details: (
      <p>
        White and black polo available <br /> for both men and women
      </p>
    ),
    image: [
      "https://images.pexels.com/photos/18186105/pexels-photo-18186105/free-photo-of-basic-black-and-white-t-shirts.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/9558567/pexels-photo-9558567.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/9558716/pexels-photo-9558716.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    ],
    percentage: "50% off",
    availability: <p className=" text-orange-500 ">Almost sold out</p>,
  },
  {
    id: 7,
    name: "3 Pairs of Jeans ",
    price: "$100.99",
    details: (
      <p>
        3 pairs of men jeans. Comes in <br /> different color sizes.
      </p>
    ),
    image: [
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/4109759/pexels-photo-4109759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    percentage: "10% off",
    availability: <p className=" text-orange-500 ">Only 20 remaining</p>,
  },
  {
    id: 8,
    name: "Female Crop Top",
    price: "$30.00",
    details: <p>Female crop top ,Pink and Black.</p>,
    image: [
      "https://i.pinimg.com/236x/a6/f5/18/a6f51874b7e74186395759aace28c44a.jpg",
      "https://i.pinimg.com/736x/ee/e2/98/eee29807ce1b68ef941de033254db0ad.jpg",
    ],
    percentage: "5% off",
    availability: <p className=" text-orange-500 ">Sold out</p>,
  },
  {
    id: 9,
    name: " Long Hoodie",
    price: "$80.99",
    details: (
      <p>
        Long hoodie availble for men and women. <br /> Comes in different sizes
        and colors
      </p>
    ),
    image: [
      "https://i.pinimg.com/736x/ce/72/ad/ce72ade952f54326361f14284d493d9f.jpg",
      "https://i.pinimg.com/736x/da/10/47/da10474f751797f66f15841f7f2a31f8.jpg",
      "https://i.pinimg.com/736x/ce/9c/5f/ce9c5fac0c68c36e81d7b9b5d3207de1.jpg",
    ],
    percentage: "20% off",
    availability: <p className=" text-orange-500 ">Only 5 remaining</p>,
  },
  {
    id: 10,
    name: "Face Cap",
    price: "$40.00",
    details: (
      <p>
        Quality facecap. Comes in different <br /> sizes and color
      </p>
    ),
    availability: <p className=" text-orange-500 ">Still in stock </p>,
    image: [
      "https://images.pexels.com/photos/9558758/pexels-photo-9558758.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/2570145/pexels-photo-2570145.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1040150/pexels-photo-1040150.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
  },
  {
    id: 11,
    name: "300 watts Blender Machine",
    price: "$100.00",
    details: (
      <p>
        300 watts heavy duty blender for <br /> house hold use
      </p>
    ),
    availability: <p className=" text-orange-500 ">Still in stock</p>,
    image: [
      "https://images.pexels.com/photos/1797103/pexels-photo-1797103.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3094227/pexels-photo-3094227.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    percentage: "5% off",
  },
  {
    id: 12,
    name: "Black Female Gown",
    price: "$30.00",
    details: (
      <p>
        Female gown. Comes in different <br /> size and colors
      </p>
    ),
    availability: <p className=" text-orange-500 ">Only 10 remaining</p>,
    image: [
      "https://i.pinimg.com/736x/fd/35/27/fd3527a97e92d2cf8c7f4dc8291c28cb.jpg",
      "https://i.pinimg.com/236x/54/1c/96/541c960b84ceffb8ac3edb9de9c5c64a.jpg",
      "https://i.pinimg.com/236x/e8/0d/9b/e80d9b79ab11706c2051e8fed8e943f3.jpg",
    ],
  },
  {
    id: 13,
    name: "Men trackers",
    price: "$55.00",
    details: (
      <p>
        Quality men trackers available <br /> in different sizes and colors
      </p>
    ),

    availability: <p className=" text-orange-500 ">Still in stock</p>,
    image: [
      "https://i.pinimg.com/236x/1d/c2/81/1dc281783d34e55a4098d876582656a3.jpg",
      "https://i.pinimg.com/236x/5c/3b/a7/5c3ba75cb1cd09952f3ace43ccdc6798.jpg",
      "https://i.pinimg.com/236x/d1/3c/b4/d13cb413c462a71a079cdbf77aec59ed.jpg",
    ],
  },
  {
    id: 14,
    name: "Unisex Footwear",
    price: "$100.00",
    details: (
      <p>
        Quality unisex footwear available <br /> in different sizes, color and
        sttyles
      </p>
    ),
    availability: <p className=" text-orange-500 ">Still in stock</p>,
    image: [
      "https://i.pinimg.com/736x/39/a4/cd/39a4cdb69beb49514dbfd26908935464.jpg",
      "https://i.pinimg.com/236x/24/8e/29/248e29311623ed4c5aa3e3de3378e371.jpg",
      "https://i.pinimg.com/236x/37/d0/16/37d016b9035a5b019177c5c8e0701a8d.jpg",
    ],
  },
  {
    id: 15,
    name: "Quality Bikers Polo",
    price: "$100.00",
    details: (
      <p>
        Quality polo for bikers and motorists. <br /> Comes in different styles,
        color and sizes
      </p>
    ),
    availability: <p className=" text-orange-500 ">Still in stock</p>,
    image: [
      "https://i.pinimg.com/736x/8c/cd/c9/8ccdc91d6c1830e95ddeafc8b086dea2.jpg",
      "https://i.pinimg.com/474x/35/57/be/3557bef27ba17b017373d828ea2ef19b.jpg",
      "https://i.pinimg.com/236x/13/1a/a2/131aa20d58f268308cc03b0d67b81789.jpg",
    ],
  },
  {
    id: 16,
    name: "JBL Max 100",
    price: "$60.00",
    details: (
      <p>
        JBL woofer and wireless bluetooth <br /> headphone, comes in different
        color and styles.
      </p>
    ),
    availability: <p className=" text-orange-500 ">Still in stock</p>,
    image: [
      "https://i.pinimg.com/736x/1a/11/02/1a1102b3237a99cc31b40d6c88c67cc6.jpg",
      "https://i.pinimg.com/474x/3e/86/74/3e8674feadd7e609219bf5e3c1cd4f24.jpg",
      "https://i.pinimg.com/236x/ac/15/46/ac1546bdc3e8f4cd2d3753ba5d5f4919.jpg",
    ],
  },

  // Add other products similarly
];

const ProductView = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((item) => item.id === parseInt(id));

  const [mainImage, setMainImage] = useState(product?.image[0] || "");

  if (!product) {
    return (
      <div className="text-center grid items-center justify-center h-[70vh] ">
        <img
          src="/src/assets/home.png"
          alt="out of stock"
          className=" h-[200px] m-20 "
        />
        <h1 className="text-red-500">
          This Product is <b>out of Stock.</b>
        </h1>
      </div>
    );
  }

  const [size, setSize] = useState("normal");

  return (
    <>
      <Freedelivery />

      <div className="grid items-center justify-center h-full ">
        <h1 className="text-[30px] m-4 md:m-5 font-extrabold text-zinc-700">
          Details
        </h1>

        <div className="flex max-md:flex-col justify-evenly  m-4">
          <div className="flex max-md:flex-col">
            {/* Image Gallery Section */}
            <div className=" flex-col ">
              <img
                src={mainImage}
                alt={product.name}
                className="h-[260px]  w-full lg:w-full m-1 "
              />

              <div className="flex m-2 space-x-2">
                {product.image.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
                      mainImage === img ? "border-blue-500" : "border-gray-300"
                    }`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            </div>

            {/* Product Details Section */}
            <div className="flex-col m-2">
              <h1 className="text-2xl font-bold m-2 text-orange-700">
                {product.name}
              </h1>
              <p className="text-4xl max-md:text-[24px] font-extrabold text-gray-600 m-2">
                {product.price}
              </p>
              <p className="text-gray-700 m-2 lg:text-gray-500">
                {product.details}
              </p>
              <div className="flex m-3 items-center">
                <img
                  className=" h-[40px] w-[40px] border-2 border-white rounded-full "
                  src="https://i.pinimg.com/736x/ce/9c/5f/ce9c5fac0c68c36e81d7b9b5d3207de1.jpg"
                  alt={product.name}
                />
                <img
                  className=" h-[40px] w-[40px] border-2 border-white translate-x-[-20px] rounded-full "
                  src="https://images.pexels.com/photos/10134303/pexels-photo-10134303.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt={product.name}
                />
                <img
                  className=" h-[40px] w-[40px] border-2 border-white translate-x-[-40px] rounded-full "
                  src="https://images.pexels.com/photos/12879626/pexels-photo-12879626.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt={product.name}
                />
              </div>
              <p className="text-orange-700 m-2">300+ Sales</p>

              <p className="text-gray-700 m-2 lg:text-gray-500">
                Size: {size}{" "}
              </p>

              {/* <br /> */}
              <p className="m-2"> {product.availability} </p>
              <div className="flex">
                <button
                  onClick={() => {
                    setSize("small");
                  }}
                  className="m-2 bg-gray-200 rounded-md h-10 w-10 hover:bg-gray-600 transition-all hover:text-white"
                >
                  S
                </button>
                <button
                  onClick={() => {
                    setSize("medium");
                  }}
                  className="m-2 bg-gray-200 rounded-md h-10 w-10 hover:bg-gray-600 transition-all hover:text-white"
                >
                  M
                </button>
                <button
                  onClick={() => {
                    setSize("large");
                  }}
                  className="m-2 bg-gray-200 rounded-md h-10 w-10 hover:bg-gray-600 transition-all hover:text-white"
                >
                  L
                </button>
                <button
                  onClick={() => {
                    setSize("extra large");
                  }}
                  className="m-2 bg-gray-200 rounded-md h-10 w-10 hover:bg-gray-600 transition-all hover:text-white"
                >
                  XL
                </button>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="m-2 justify-between group relative inline-flex
            items-center px-10 py-3 text-white bg-zinc-700 rounded-sm hover:pr-20 transition-all
             hover:bg-zinc-500"
              >
                Add to cart
                <span className="absolute right-4 opacity-0 translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                  <i className="bx bx-shopping-bag text-[23px] m-1"></i>
                </span>
              </button>
            </div>
          </div>
          <aside>
            <Recommended />
          </aside>
        </div>
      </div>
      <div className=" ">
        <Footer />
      </div>
    </>
  );
};

export default ProductView;
