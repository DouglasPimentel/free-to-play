import React from "react";
import { Link } from "gatsby";

const Logo = () => {
  return (
    <div className="w-1/2 lg:w-1/4">
      <Link to="/">
        <h2 className="text-2xl font-bold">Free To Play</h2>
      </Link>
    </div>
  );
};

export default Logo;
