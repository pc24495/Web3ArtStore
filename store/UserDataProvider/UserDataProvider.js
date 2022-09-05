import React, { useState, useContext, createContext } from "react";

const userDataContext = createContext();

export function ProvideUserData({ children }) {
  const userData = useProvideUserData();
  return (
    <userDataContext.Provider value={userData}>
      {children}
    </userDataContext.Provider>
  );
}

export const useUserData = () => {
  return useContext(userDataContext);
};

function useProvideUserData() {
  const [userData, setUserData] = useState({
    username: null,
    profile_pic_cloudinary_public_id: null,
    user_id: null,
  });

  return {
    userData,
    setUserData,
  };
}
