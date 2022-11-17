import React from "react";
import classes from "./AdminPageLayout.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import AdminNavItem from "./AdminNavItem/AdminNavItem.js";
import { useUserData } from "../../store/UserDataProvider/UserDataProvider.js";

const AdminPageLayout = ({ children }) => {
  const route = useRouter().route;
  const black = "rgb(32, 34, 35)";
  const gray = "rgb(109, 113, 117)";
  const green = "rgb(0, 123, 92)";
  const { user_id } = useUserData().userData;
  const icons = {
    Home: (
      <AiOutlineHome
        size={20}
        className={classes.Icon}
        color={route === "/admin/[user_id]" ? green : black}
      ></AiOutlineHome>
    ),
    Products: (
      <MdProductionQuantityLimits
        size={20}
        className={classes.Icon}
        color={route.startsWith("/admin/[user_id]/products") ? green : black}
      ></MdProductionQuantityLimits>
    ),
  };

  const placeHolder = <div style={{ height: "28px", width: "20px" }}></div>;

  return (
    <div className={classes.AdminPageLayout}>
      <nav className={classes.AdminSidebar}>
        <AdminNavItem
          active={route === "/admin/[user_id]"}
          label="Home"
          href={`/admin/1`}
        >
          {icons.Home}
        </AdminNavItem>
        <AdminNavItem
          active={route.startsWith("/admin/[user_id]/products")}
          label="Products"
          href={`/admin/1/products`}
        >
          {icons.Products}
        </AdminNavItem>
        <AdminNavItem>{placeHolder}</AdminNavItem>
      </nav>
      {children}
    </div>
  );
};

export default AdminPageLayout;
