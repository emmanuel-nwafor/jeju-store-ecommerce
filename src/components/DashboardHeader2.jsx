import React from "react";
import img3 from "/src/assets/img3.png";

function DashboardHeader2() {
  return (
    <div className="">
      <div className=" m-0 h-[20vh] bg-zinc-50 flex items-center justify-evenly">
        <div className=" ">
          <h1 className="text-[30px] max-md:text-[20px] font-semibold m-2 ">
            Cart
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
          className="h-[60px] sm:h-[60px] md:h-[100px] lg:h-[100px] xl:h-[100px] "
        />
      </div>
    </div>
  );
}

export default DashboardHeader2;
