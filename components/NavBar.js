import Router from "next/router";
import React from "react";

const NavBtn = ({ text, path }) => {
  return (
    <div
      className="text-white text-base hover:text-blue-300 duration-100 cursor-pointer"
      onClick={() => {
        Router.push(path);
      }}
    >
      <p>{text}</p>
    </div>
  );
};

function NavBar() {
  return (
    <div className="text-white bg-black justify-between px-20 py-4 font-bold flex w-full">
      <NavBtn text="Home" />
      <NavBtn text="About Me" />
      <NavBtn text="My Projects" />
      <NavBtn text="Testimonials" />
      <NavBtn text="Sayonara" />
    </div>
  );
}

export default NavBar;
