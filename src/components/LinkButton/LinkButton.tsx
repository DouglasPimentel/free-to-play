import React from "react";
import { Link } from "gatsby";
import { ArrowRight } from "@styled-icons/fa-solid";

type LinkButtonProps = {
  primary: boolean;
  slug: string;
  label: string;
};

const LinkButton = ({ primary = true, slug, label }: LinkButtonProps) => {
  return (
    <Link
      className={`w-full px-6 py-2 text-base font-bold text-center border border-secondary rounded transition-all duration-300 ease-in-out lg:w-48 ${
        primary
          ? `bg-secondary text-primary hover:bg-primary hover:text-secondary`
          : `bg-trasparent text-secondary hover:bg-secondary hover:text-primary`
      }`}
      to={slug}
    >
      {label} <ArrowRight width={11} height={11} />
    </Link>
  );
};

export default LinkButton;
