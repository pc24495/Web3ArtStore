import React from "react";
import classes from "./MobileSidebar.module.scss";
import { useMobileSidebar } from "../../store/MobileSidebarProvider/MobileSidebarProvider.js";
import { useUserData } from "../../store/UserDataProvider/UserDataProvider.js";
import { AiOutlineDown } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import Image from "next/image";

const MobileSidebar = (props) => {
  const { mobileSidebarData, setMobileSidebarData } = useMobileSidebar();
  const { userData } = useUserData();

  const closeSidebar = (event) => {
    setMobileSidebarData((prev) => {
      return { ...prev, showSidebar: false };
    });
  };

  const sidebarStyling = {
    width: "0px",
  };

  return (
    <div
      className={classes.SidebarBackdrop}
      style={{ display: mobileSidebarData.showSidebar ? "block" : "none" }}
    >
      <div
        className={classes.Sidebar}
        style={mobileSidebarData.showSidebar ? null : sidebarStyling}
      >
        <div className={classes.SidebarInner}>
          <div className={classes.UserInfoBox}>
            <Image src="/Music.jpeg" width={100} height={100}></Image>
            <h2>PrajwalChummar</h2>
          </div>
          <div className={classes.SectionHeaderContainer}>
            <h2 className={classes.SectionHeader}>Dall-e 2</h2>
            <AiOutlineDown
              className={classes.SectionHeaderCaret}
              size={25}
            ></AiOutlineDown>
          </div>
          <div className={classes.SectionHeaderContainer}>
            <h2 className={classes.SectionHeader}>ArtBreeder</h2>
            <AiOutlineDown
              className={classes.SectionHeaderCaret}
              size={25}
            ></AiOutlineDown>
          </div>
          <div className={classes.SectionHeaderContainer}>
            <h2 className={classes.SectionHeader}>NightCafe</h2>
            <AiOutlineDown
              className={classes.SectionHeaderCaret}
              size={25}
            ></AiOutlineDown>
          </div>
          <div className={classes.SectionHeaderContainer}>
            <h2 className={classes.SectionHeader}>Learn About Crypto</h2>
          </div>
          <div className={classes.SectionHeaderContainer}>
            <h2 className={classes.SectionHeader}>Charities</h2>
          </div>
        </div>
        <GrClose
          className={classes.CloseButton}
          size={20}
          onClick={closeSidebar}
        ></GrClose>
      </div>
    </div>
  );
};

export default MobileSidebar;
