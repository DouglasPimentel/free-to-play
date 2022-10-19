import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-5 px-6 text-center">
      <span>{`© ${year} Free To Play`}</span>
    </footer>
  );
};

export default Footer;
