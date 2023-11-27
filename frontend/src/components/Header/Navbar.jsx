import { BsWhatsapp, BsTelephoneInbound } from "react-icons/bs";
import Hamburger from "hamburger-react";
import { useState } from "react";
import Login from "../Login.jsx";
import Signup from "../Signup.jsx";
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = () => {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const handleLoginclick = () => {
    setLogin(true);
    setSignup(false);
  };
  const handleSignupclick = () => {
    setLogin(false);
    setSignup(true);
  };
  return (
    <>
      <div
        id="NavBar"
        className="flex list-none md:justify-between items-center text-lg w-full font-semibold  bg-gradient-to-r from-blue-800 to-indigo-900 h-full  shadow-lg">
        <h1 className="lg:text-3xl text-white text-sm my-5 md:w-full w-[25%] ml-3 md:font-bold">
          User Dashboard{" "}
        </h1>
        <div className="text-white md:flex hidden ">
          <Router>
            <Link to="/alluser">
              <button type="submit" className="px-4 hover:text-purple-600">
                All User
              </button>
            </Link>
            <Link to="/project">
              <button className="px-4 hover:text-purple-600">
                Project Works
              </button>
            </Link>
            <Link to="/services">
              <button className="px-4 hover:text-purple-600">Services</button>
            </Link>
            <Link to="/about">
              <button className="hover:text-purple-600 px-4">About</button>
            </Link>
            <Link to="/contact">
              <button className="px-4 hover:text-purple-600">Contact Me</button>
            </Link>
          </Router>
        </div>

        <div className="flex justify-center items-center  cursor-pointer flex-row lg:space-x-10 gap-4 lg:mx-5 ">
          <Link to="/login">
            <button
              onClick={handleLoginclick}
              className="md:hover:scale-125 hover:text-purple-600 py- text-sm ease-in md:my-auto duration-150 max-w-md h-10 bg-white md:p-2 px-2 rounded-md "
              type="button">
              Login
            </button>
          </Link>
          <button
            onClick={handleSignupclick}
            className="md:hover:scale-125 hover:text-purple-600 text-sm ease-in md:my-auto duration-150 py-0 h-10  bg-white  rounded-md "
            type="button">
            Signup/ <span>Register</span>
          </button>
        </div>
        <div id="contactIcon" className="flex space-x-3 ml-4 text-white">
          <BsWhatsapp />
          <BsTelephoneInbound />
        </div>
        <div>
          <div className="sm:hidden ">
            <Hamburger />
          </div>
        </div>
      </div>
      <div>
        {" "}
        {login && <Login />}
        {signup && <Signup />}
      </div>
    </>
  );
};

export default NavBar;
