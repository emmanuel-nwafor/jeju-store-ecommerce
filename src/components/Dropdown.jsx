import React, { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="relative m-4">
        <button onClick={toggleDropdown} className="flex items-center">
          <p className=" max-md:text-sm hover:underline ">Contact Us</p>
          <svg
            className={`w-5 h-5 ml-2 transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isOpen && (
          <div className=" max-md:flex absolute right-0 z-10  w-[200px] max-md:h-[120px] max-md:w-[200px] origin-top-right bg-white border border-gray-200 rounded-md shadow-lg">
            <div className="  ">
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Whatsapp
              </a>
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Email
              </a>
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Twitter
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
