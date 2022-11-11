import React, { useState, useContext, createContext } from "react";

const mobileSidebarContext = createContext();

export function ProvideMobileSidebarData({ children }) {
  const mobileSidebarData = useProvideMobileSidebarData();
  return (
    <mobileSidebarContext.Provider value={mobileSidebarData}>
      {children}
    </mobileSidebarContext.Provider>
  );
}

export const useMobileSidebar = () => {
  return useContext(mobileSidebarContext);
};

function useProvideMobileSidebarData() {
  const [mobileSidebarData, setMobileSidebarData] = useState({
    showSidebar: false,
  });

  //   const changeMobileSidebarData = (newMobileSidebarData) => {
  //     setMobileSidebarData(newMobileSidebarData);
  //   };

  return {
    mobileSidebarData,
    setMobileSidebarData,
  };
}
