import React from "react";
import Dropdown from "./Dropdown";

function Recommended() {
  return (
    <>
      <div className="">
        <h1 className="m-4">Faqs</h1>
        <ul>
          <li className="m-4 hover:underline">How to purchase</li>
          <li className="m-4 hover:underline">Who we are</li>
          <Dropdown />
        </ul>
      </div>
    </>
  );
}

export default Recommended;
