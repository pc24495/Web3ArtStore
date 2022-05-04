import { useState } from "react";
import classes from "./Header.module.scss";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { IoPersonOutline, IoBagOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const [counter, setCounter] = useState(0);

  return (
    <nav className={classes.Header}>
      <div className={classes.AnnouncementBar}>
        NEW USERS GET $5 IN CREDITS WITH THEIR FIRST PURCHASE!
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
            <div className={classes.MobileSidebarBurgerDiv}>
              <HiMenu size={26}></HiMenu>
            </div>
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
            <div className={classes.MobileIcons}>
              <GoSearch size={24}></GoSearch>
              <IoBagOutline
                size={24}
                style={{ marginLeft: "10px" }}
              ></IoBagOutline>
            </div>
          </div>
          <ul className={classes.TextCenter}>
            <li>
              <a>Album Drops</a>
              <div></div>
            </li>
            <li>
              <a>Art</a>
            </li>
            <li>
              <a>Music</a>
            </li>
            <li>
              <a>Photos</a>
            </li>
            <li>
              <a>Stories</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// <p>{counter}</p>

export default Header;
