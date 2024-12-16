import React, { useState } from "react";
// import { navIcon } from "../assets";
import { Link, NavLink } from "react-router-dom";
import { cart, cross, menu, profile, search } from "../assets/icons/icons";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="flex justify-between items-center py-5 font-medium ">
      {/* name */}
      <a href="/" className="text-3xl font-bold uppercase">
        Flone.
      </a>

      {/* navbar routes */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 uppercase">
        <NavLink to="/">
          <p className="hover:text-coral-red">Home</p>
        </NavLink>
        <NavLink to="">
          <p className="active:text-coral-red">About</p>
        </NavLink>
        <NavLink to="/collection">
          <p className="hover:text-coral-red">Collections</p>
        </NavLink>
        <NavLink to="">
          <p className="hover:text-coral-red">contact us</p>
        </NavLink>
      </ul>
      {/* <div className="flex items-center gap-6">
        {navIcon &&
          navIcon.map((icon, index) => (
            <a href={icon.href} key={index} rel="noopener noreferrer">
              <img
                src={icon.icon}
                alt={icon.altText || "Navigation icon"}
                className="w-5 cursor-pointer"
              />
            </a>
          ))}
      </div> */}

      {/* icons */}
      <div className="flex items-center gap-6">
        <img src={search} alt="Search Icon" className="w-5 cursor-pointer" />

        <div className="group relative">
          <img
            src={profile}
            alt="Profile Icon"
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-2 px-5 bg-slate-50 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-coral-red">My Account</p>
              <hr />
              <p className="cursor-pointer hover:text-black">Orders</p>
              <hr />
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="" className="relative">
          <img src={cart} alt="" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            5
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={menu}
          alt=""
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* sidebar menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600 relative">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center absolute gap-4 p-3 right-4 top-2 cursor-pointer"
          >
            <img src={cross} alt="" className="h-4 " />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 text-lg mt-28">
          <NavLink onClick={()=>setVisible(false)} to="/">Home</NavLink>
          <NavLink onClick={()=>setVisible(false)} to="">About</NavLink>
          <NavLink onClick={()=>setVisible(false)} to="">Products</NavLink>
          <NavLink onClick={()=>setVisible(false)} to="">Contact us</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
