import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
interface propTypes {
  children: ReactNode;
}
const Layout = ({ children }: propTypes) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
