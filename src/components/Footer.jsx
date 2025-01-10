import React from "react";

function Footer() {
  return (
    <>
      <div className=" bg-zinc-200 flex-col items-center justify-center">
        <div className="flex max-md:flex-col items-center justify-evenly p-14">
          <h1 className="text-center text-[22px] max-md:text-[24px] font-extrabold m-3 ">
            Je <span className="text-zinc-500 ">Ju</span> Stores
          </h1>{" "}
          <div className="flex items-center justify-evenly">
            <i
              className="bx bxl-twitter p-2 m-3 border-2 border-black rounded-full text-md
            hover:bg-blue-500 hover:text-white hover:translate-y-[-8px] hover:border-white transition duration-300"
            ></i>
            <i
              className="bx bxl-facebook p-2 m-3 border-2 border-black rounded-full text-md
            hover:bg-blue-500 hover:text-white hover:translate-y-[-8px]  hover:border-white hover:border-[2px] transition duration-300"
            ></i>
            <i
              className="bx bxl-instagram p-2 m-3 border-2 border-black rounded-full text-md
            hover:bg-pink-500 hover:text-white hover:translate-y-[-8px] hover:border-white  hover:border-[2px] transition duration-300"
            ></i>
          </div>
        </div>
        <p className="text-center text-sm">&copy;copyright Jeju-stores 2025</p>
      </div>
    </>
  );
}

export default Footer;
