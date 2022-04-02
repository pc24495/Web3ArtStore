import React, { useState, useContext, createContext } from "react";

const usernameContext = createContext();

export function ProvideUsername({ children }) {
  const username = useProvideUsername();
  return (
    <usernameContext.Provider value={username}>
      {children}
    </usernameContext.Provider>
  );
}

export const useUsername = () => {
  return useContext(usernameContext);
};

function useProvideUsername() {
  const [username, setUsername] = useState("prajwal-c");

  const changeUsername = () => {
    setUsername("bobby-d");
  };

  return {
    username,
    changeUsername,
  };
}
