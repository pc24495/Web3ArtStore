import React from "react";
import AlwaysMobileHeader from "../Header/AlwaysMobileHeader.js";

const AlwaysMobileLayout = ({ children }) => {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AlwaysMobileHeader></AlwaysMobileHeader>
        <div style={{ flex: "1" }}>{children}</div>
      </div>
    </div>
  );
};

export default AlwaysMobileLayout;
