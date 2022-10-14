import { useEffect } from "react";
import axios from "../../axios.js";
import { useUserData } from "../../store/UserDataProvider/UserDataProvider.js";

const DataLoader = (props) => {
  const { setUserData } = useUserData();

  useEffect(() => {
    axios.get("/users").then((response) => {
      if (response.data.user) {
        setUserData((prev) => {
          return {
            ...prev,
            username: response.data.user.username,
            profile_pic_cloudinary_public_id:
              response.data.user.profile_pic_cloudinary_public_id,
            user_id: response.data.user.id,
          };
        });
      }
    });
  }, []);

  return <div></div>;
};

// <p>{counter}</p>

export default DataLoader;
