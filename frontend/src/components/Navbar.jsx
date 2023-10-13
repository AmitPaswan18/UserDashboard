import { BsWhatsapp, BsTelephoneInbound } from "react-icons/bs";

import Hamburger from "hamburger-react";

const NavBar = () => {
  return (
    <>
      <div
        id="NavBar"
        className="flex list-none md:justify-between items-center text-lg w-full font-semibold  bg-gradient-to-r from-blue-800 to-indigo-900 h-full  shadow-lg">
        <h1 className="lg:text-3xl text-white text-base my-5 font-serif ml-3 font-bold">
          User Dashboard{" "}
        </h1>
        <div className="text-white md:flex hidden ">
          <button type="submit" className="px-4 hover:text-purple-600">
            All User
          </button>
          <button className="px-4 hover:text-purple-600">Project Works</button>
          <button className="px-4 hover:text-purple-600">Services</button>
          <button href="/about" className="hover:text-purple-600 px-4">
            About
          </button>
          <button className="px-4 hover:text-purple-600">Contact Me</button>
        </div>

        <div className="lg:flex cursor-pointer flex-row space-x-10 mx-5 ">
          <button
            className="md:hover:scale-125 hover:text-purple-600 text-sm ease-in md:my-auto duration-150 max-w-md h-10 bg-white p-1 rounded-md "
            type="button">
            Login/ <span>Register</span>
          </button>
        </div>
        <div id="contactIcon" className="flex gap-6  text-white">
          <BsWhatsapp />
          <BsTelephoneInbound />
        </div>
        <div
          className=" flex  gap-4 
        ">
          <div className="sm:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
