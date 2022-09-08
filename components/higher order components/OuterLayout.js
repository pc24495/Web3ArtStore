import React from "react";
import DataLoader from "../DataLoader/DataLoader.js";

const OuterLayout = ({ children }) => {
  return (
    <>
      <DataLoader></DataLoader>
      {children}
    </>
  );
};

export default OuterLayout;
