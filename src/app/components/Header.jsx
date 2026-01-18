import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between py-4 bg-white text-black items-center mb-32 px-8 lg:px-32">
      <h1 className="font-semibold font-serif text-xl">Lock_In .</h1>
      <ul className="text-sm">
        <a href="https://www.mayankrawat.info/" className="hover:underline ">
          Contact
        </a>
      </ul>
    </div>
  );
};

export default Header;
