import { useState, useEffect } from "react";
import classes from "./Header.module.scss";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { IoPersonOutline, IoBagOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { MdLogout } from "react-icons/md";
// import { useUsername } from "../../store/UsernameProvider/UsernameProvider.js";
import Link from "next/link";
import axios from "../../axios.js";
import { useUserData } from "../../store/UserDataProvider/UserDataProvider.js";
import { Image as CloudinaryImage } from "cloudinary-react";
import NFTPreview from "./NFTPreview/NFTPreview.js";
import cn from "classnames";

const Header = (props) => {
  const { userData, setUserData } = useUserData();
  const [usernameIsHovering, setUsernameIsHovering] = useState(false);
  const img_src = "/NFTPlaceholders/EpicPaintingOfRussiaAsGodsDream.png";

  const [numPreviews, setNumPreviews] = useState(5);
  const testNFTs = [
    {
      name: "Galaxy Basketball",
      price_in_cents: 1000,
      price_in_cents_sold: 0,
      cloudinary_id: "web-3-art-store/development/mlufkegb58wabt8futdy",
      username: "Prajwal Chummar",
    },
    {
      name: "Oil Painting of River",
      price_in_cents: 700,
      price_in_cents_sold: 0,
      cloudinary_id: "web-3-art-store/development/ozawnunztrlp4vzeoufw",
      username: "Prajwal Chummar",
    },
    {
      name: "Watercolor of Future City",
      price_in_cents: 300,
      price_in_cents_sold: 0,
      cloudinary_id: "web-3-art-store/development/qgzpup2illlcxgbpotgn",
      username: "Prajwal Chummar",
    },
    {
      name: "Sailboat Circled by Birds",
      price_in_cents: 400,
      price_in_cents_sold: 0,
      cloudinary_id: "web-3-art-store/development/ig5omdhbku4sn5v9a8gl",
      username: "Prajwal Chummar",
    },
    {
      name: "Oil Painting Robot Playing Chess",
      price_in_cents: 600,
      price_in_cents_sold: 0,
      cloudinary_id: "web-3-art-store/development/kwoyzd4yjynwqchnacje",
      username: "Prajwal Chummar",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setNumPreviews(3);
      } else if (window.innerWidth <= 1300) {
        setNumPreviews(4);
      } else {
        setNumPreviews(5);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hoverUsername = (event) => {
    setUsernameIsHovering(true);
  };

  const blurUsername = (event) => {
    setUsernameIsHovering(false);
  };

  // console.log(userData);

  const logout = async (event) => {
    await setUsernameIsHovering(false);
    await setUserData((prev) => {
      return {
        ...prev,
        username: null,
        profile_pic_cloudinary_public_id: null,
        user_id: null,
      };
    });
    axios.post("/logout");
  };

  const numPreviewConfigs = {
    3: {
      0: "ltr",
      1: "ltr",
      2: "rtl",
    },
    4: {
      0: "ltr",
      1: "ltr",
      2: "rtl",
      3: "rtl",
    },
    5: {
      0: "ltr",
      1: "ltr",
      2: "ltr",
      3: "rtl",
      4: "rtl",
    },
  };

  return (
    <nav className={classes.Header}>
      <div className={classes.AnnouncementBar}>
        BUY\SELL NFTS AND DONATE THE PROCEEDS TO YOUR FAVORITE CHARITY!{" "}
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
              <Link href="/">
                <h3>Web3ArtStore</h3>
              </Link>
            </div>
            <div className={classes.Icons}>
              {userData.profile_pic_cloudinary_public_id ? (
                <CloudinaryImage cloudName="dk1q4n7bt"></CloudinaryImage>
              ) : null}
              {userData.username ? (
                <div
                  className={classes.UsernameContainer}
                  onMouseOver={hoverUsername}
                  onMouseLeave={blurUsername}
                >
                  <Link
                    className={classes.Username}
                    href={`/admin/${userData.user_id}`}
                  >
                    {userData.username}
                  </Link>
                  <div
                    className={classes.UsernameDropdown}
                    style={{ display: usernameIsHovering ? "flex" : "none" }}
                    onClick={logout}
                  >
                    {" "}
                    <MdLogout></MdLogout> Logout
                  </div>
                </div>
              ) : (
                <Link href="/login">
                  <a className={classes.PersonIconContainer}>
                    <IoPersonOutline size={24}></IoPersonOutline>
                  </a>
                </Link>
              )}
              <IoBagOutline
                size={24}
                className={classes.BagIcon}
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
              <a>Dall-e 2</a>
              <div className={classes.AlbumDrops}>
                {testNFTs.map((nft, index) => {
                  return (
                    <NFTPreview
                      direction={numPreviewConfigs[numPreviews][index]}
                      key={"" + index + "-nftpreview"}
                      display={index < numPreviews}
                      name={nft.name}
                      price_in_cents={nft.price_in_cents}
                      price_in_cents_sold={nft.price_in_cents_sold}
                      cloudinary_id={nft.cloudinary_id}
                      username={nft.username}
                    ></NFTPreview>
                  );
                })}
              </div>
            </li>
            <li>
              <Link href="/nfts">Album Drops</Link>
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
