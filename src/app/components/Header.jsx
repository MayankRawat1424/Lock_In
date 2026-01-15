import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between px-8 py-4 border-b-2 border-gray-400 mb-16 items-baseline">
      <h1 className="font-semibold font-serif text-xl">Lock_In .</h1>
      <ul className="text-sm">
        <a
          href="https://www.mayankrawat.info/"
          className="hover:underline mr-16"
        >
          Contact
        </a>
        <a href="" className="hover:underline">
          About
        </a>
      </ul>
    </div>
  );
};

export default Header;
