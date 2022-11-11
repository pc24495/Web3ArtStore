import React from "react";
import classes from "./AdminNavItem.module.scss";
import Link from "next/link";
import { MdProductionQuantityLimits } from "react-icons/md";

const AdminNavItem = ({ children, active, label, display, sub, href }) => {
  const black = "rgb(32, 34, 35)";
  const gray = "rgb(109, 113, 117)";
  const green = "rgb(0, 123, 92)";
  sub = sub ?? false;

  const getColor = () => {
    if (active) {
      return green;
    } else {
      if (sub) {
        return gray;
      }
      return black;
    }
  };

  return (
    <div
      className={classes.AdminNavItemContainer}
      style={{ display: display ?? true }}
    >
      <div
        className={classes.ActiveIndicator}
        style={{ backgroundColor: active ? green : "white" }}
      ></div>
      <div className={classes.NavItem}>
        <div
          className={classes.NavItemInner}
          style={{ backgroundColor: active ? "#edeeef" : "white" }}
        >
          <div className={classes.IconContainer}>{children}</div>
          <div className={classes.LabelContainer}>
            <p className={classes.Label} style={{ color: getColor() }}>
              {label}
            </p>
          </div>
        </div>
      </div>
      {href && (
        <div className={classes.LinkContainer}>
          <Link href={href}>
            <a></a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AdminNavItem;
