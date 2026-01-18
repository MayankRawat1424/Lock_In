import React from "react";
import { IoLogoGithub } from "react-icons/io";
const Header = () => {
  return (
    <div className="flex justify-between py-4 bg-white text-black items-center mb-32 px-8 lg:px-32">
      <h1 className="font-semibold font-serif text-xl">Lock_In .</h1>
      <ul className=" flex items-center justify-center gap-8">
        <a
          href="https://www.mayankrawat.info/"
          className="hover:underline text-sm"
        >
          Contact
        </a>
        <a
          href="https://github.com/MayankRawat1424/Lock_In"
          className="text-2xl"
        >
          <IoLogoGithub />
        </a>
      </ul>
    </div>
  );
};

export default Header;
