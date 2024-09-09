import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-center items-center gap-6">
        <img src="./assets/Logo.svg" alt="logo" />
        <button className="bg-gradient-to-r from-orange-400 to-red-500 text-xs text-white px-2.5 py-2.5 rounded-2xl">Hoster is hiring</button>
      </div>
      <ul className="hidden lg:flex gap-6 font-lato justify-between text-gray-500 items-center">
        <li>
          <a href="#" >Plans</a>
        </li>
        <li>
          <a href="#" >Find Domain</a>
        </li>
        <li>
          <a href="#" >Why Hosterr</a>
        </li>
      </ul>
      <div className="hidden lg:flex justify-center items-center gap-6">
        <a className='text-gray-700' href="#">Sign in</a>
        <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
      </div>
      <div className="text-3xl lg:hidden">
        <FaBars  />
      </div>

    </div>
  );
};

export default Header;
