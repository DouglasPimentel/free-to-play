import React from "react";

import Logo from "./Logo";
import Search from "./Search";
import Navbar from "./Navbar";
import Mobile from "./Mobile";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 sticky top-0 bg-primary shadow-md flex z-10">
      <Logo />
      <Search />
      <Navbar />
      <Mobile />
    </header>
  );
};

export default Header;
