import React from "react";
import error from "/src/assets/error.png";
function Error() {
  return (
    <>
      <div className=" flex items-center justify-center h-[70vh] ">
        <img src={error} alt="" className=" h-[250px] " />
      </div>
      <h1 className="text-center text-[23px] ">Ooops Page not found</h1>
    </>
  );
}

export default Error;
