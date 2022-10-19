import React from "react";
import { Link } from "gatsby";
import { routes } from "./routes";

const Navbar = () => {
  return (
    <nav className="w-1/2 hidden lg:block">
      <ul className="flex items-center justify-end space-x-8">
        {routes &&
          routes.map((value, index) => (
            <li className="py-2" key={index}>
              <Link
                className="text-base text-secondary hover:underline"
                to={value.slug}
              >
                {value.title}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;
