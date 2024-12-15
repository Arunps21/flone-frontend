import React from "react";
import { navIcon } from "../assets";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-5 font-medium">
      <h1 className="text-2xl font-bold uppercase">Flone.</h1>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 uppercase">
        <NavLink to="/">
          <p className="hover:text-coral-red">Home</p>
        </NavLink>
        <NavLink to="">
          <p className="active:text-coral-red">About</p>
        </NavLink>
        <NavLink to="">
          <p className="hover:text-coral-red">products</p>
        </NavLink>
        <NavLink to="">
          <p className="hover:text-coral-red">contact us</p>
        </NavLink>
      </ul>
      <div className="flex gap-6">
        {navIcon &&
          navIcon.map((icon, index) => (
            <a href={icon.href} key={index} rel="noopener noreferrer">
              <img
                src={icon.icon}
                alt={icon.altText || "Navigation icon"}
                width={25}
              />
            </a>
          ))}
      </div>
    </nav>
  );
};

export default Nav;
