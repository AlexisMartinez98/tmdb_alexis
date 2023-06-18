import React from "react";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#0d253f]">
      <div className="flex items-center flex-shrink-0 text-white mr-8 ml-5">
        <h1>alexis</h1>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <h2>hola</h2>
      </div>
    </nav>
  );
};

export default NavBar;
