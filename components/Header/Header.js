import { useState } from "react";
import classes from "./Header.module.scss";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { IoPersonOutline, IoBagOutline } from "react-icons/io5";

const Header = () => {
  const [counter, setCounter] = useState(0);

  return (
    <nav className={classes.Header}>
      <div className={classes.AnnouncementBar}>
        FREE STANDARD SHIPPING ON ORDERS OVER $49
      </div>
      <div className={classes.Socials}>
        <a href="https://www.linkedin.com/in/prajwal-c/">
          <BsLinkedin></BsLinkedin>
        </a>
        <a href="https://twitter.com/prajwalc1998/">
          <BsTwitter></BsTwitter>
        </a>
      </div>
      <div className={classes.SiteHeader}>
        <div className={classes.SiteHeaderInner}>
          <div className={classes.LayoutCenter}>
            <div className={classes.Navigation}>
              <GoSearch size={22}></GoSearch>
            </div>
            <div className={classes.Logo}>
              <h3>Web3ArtStore</h3>
            </div>
            <div className={classes.Icons}>
              <IoPersonOutline size={24}></IoPersonOutline>
              <IoBagOutline
                size={24}
                style={{ marginLeft: "10px" }}
              ></IoBagOutline>
            </div>
          </div>
          <div className={classes.TextCenter}></div>
        </div>
      </div>
    </nav>
  );
};

// <p>{counter}</p>

export default Header;
