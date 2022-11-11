import React from "react";
import DataLoader from "../DataLoader/DataLoader.js";
import MobileSidebar from "../MobileSidebar/MobileSidebar.js";

const OuterLayout = ({ children }) => {
  return (
    <>
      <MobileSidebar></MobileSidebar>
      <DataLoader></DataLoader>
      {children}
    </>
  );
};

export default OuterLayout;
