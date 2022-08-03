import React from "react";
import Header from "../Header/Header.js";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
