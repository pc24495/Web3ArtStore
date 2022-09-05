import React, { useState, useContext, createContext } from "react";

const profilePicContext = createContext();

export function ProvideProfilePic({ children }) {
  const profilePic = useProvideProfilePic();
  return (
    <profilePicContext.Provider value={profilePic}>
      {children}
    </profilePicContext.Provider>
  );
}

export const useProfilePic = () => {
  return useContext(profilePicContext);
};

function useProvideProfilePic() {
  const [profilePic, setProfilePic] = useState(null);

  const changeProfilePic = (newPic) => {
    setProfilePic(newPic);
  };

  return {
    profilePic,
    changeProfilePic,
  };
}
