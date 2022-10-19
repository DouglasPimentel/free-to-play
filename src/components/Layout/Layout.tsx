import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type LayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full">
      <Header />
      <main className="px-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
