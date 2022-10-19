import React, { useState } from "react";
import { Link } from "gatsby";
import { Bars } from "@styled-icons/fa-solid";
import { routes } from "./routes";

const Mobile = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handlerOnClick = () => {
    setIsVisible(true);
  };

  return (
    <div className="w-1/2 text-right lg:hidden">
      <button type="button" onClick={handlerOnClick}>
        <Bars width={20} height={20} />
      </button>
      <nav className={`${isVisible ? `block` : `hidden`}`}>
        <ul>
          {routes &&
            routes.map((value, index) => (
              <li className="py-2" key={index}>
                <Link className="text-secondary" to={value.slug}>
                  {value.title}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Mobile;
