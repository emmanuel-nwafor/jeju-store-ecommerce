import React from "react";
import img3 from "/src/assets/img3.png";

function DashboardHeader() {
  return (
    <div className="">
      <div className=" m-0 h-[16vh] bg-zinc-100 flex items-center justify-evenly">
        <div className=" ">
          <h1 className="text-[30px] max-md:text-[17px] font-semibold m-2 ">
            Explore All Products
          </h1>
        </div>
        <div className="">
          <input
            type="search"
            placeholder="Search"
            className=" max-md:hidden "
          />
        </div>
        <img
          src={img3}
          alt="headphone"
          className="h-[50px] sm:h-[80px] md:h-[120px] lg:h-[150px] xl:h-[60px] "
        />
      </div>
    </div>
  );
}

export default DashboardHeader;
