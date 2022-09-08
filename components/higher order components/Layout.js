import React from "react";
import Header from "../Header/Header.js";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div>{children}</div>
    </>
  );
};

export default Layout;
