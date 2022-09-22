import classes from "./NFTPage.module.scss";
import { useUserData } from "../../store/UserDataProvider/UserDataProvider.js";
import { useFormik } from "formik";
import { object, shape, string, ref } from "yup";
import { useRouter } from "next/router";
import axios from "../../axios.js";
import { AspectRatio } from "react-aspect-ratio";
import "react-aspect-ratio/aspect-ratio.css";
import Image from "next/image";
import { GoThreeBars } from "react-icons/go";
import { BsFilter } from "react-icons/bs";
import { useState, useEffect } from "react";

const NFTPage = () => {
  const [showDesktopSidebar, setShowDesktopSidebar] = useState(true);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    setMobileView(window.innerWidth <= 990);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 990);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sidebarOff = (event) => {
    setShowDesktopSidebar(false);
  };

  const sidebarOn = (event) => {
    setShowDesktopSidebar(true);
  };

  return (
    <div className={classes.NFTPage}>
      <div className={classes.Header}>
        <h2>Explore</h2>
      </div>
      <div className={classes.MainSection}>
        <div
          className={classes.DesktopNavigation}
          style={{
            display: showDesktopSidebar && !mobileView ? "flex" : "none",
          }}
        >
          <div className={classes.FiltersPanel}>
            <div className={classes.FiltersHeader}>Filters</div>
            <GoThreeBars
              size={24}
              className={classes.SidebarIcon}
              onClick={sidebarOff}
            ></GoThreeBars>
          </div>
        </div>
        <div className={classes.NFTsSection}>
          <div className={classes.NFTsHeader}>
            <button
              className={classes.FilterButtonDesktop}
              type="button"
              onClick={sidebarOn}
              style={{ display: showDesktopSidebar ? "none" : "flex" }}
            >
              {" "}
              <BsFilter
                size={27}
                className={classes.FilterIconHeader}
              ></BsFilter>
              Filters
            </button>
          </div>
          <div className={classes.NFTs}>
            <AspectRatio
              ratio="60/103"
              className={
                showDesktopSidebar
                  ? classes.NFTSidebarOn
                  : classes.NFTSidebarOff
              }
            >
              <div
                className={
                  showDesktopSidebar
                    ? classes.NFTSidebarOnInner
                    : classes.NFTSidebarOffInner
                }
              >
                <div
                  className={
                    showDesktopSidebar
                      ? classes.NFTSidebarOnInnerInner
                      : classes.NFTSidebarOffInnerInner
                  }
                >
                  <div className={classes.ImageContainer}>
                    <Image
                      src="/NFTPlaceholders/EpicPaintingOfRussiaAsGodsDream.png"
                      layout="fill"
                      objectFit="cover"
                    ></Image>
                  </div>
                  <div className={classes.InformationBox}>
                    <div className={classes.PriceInformation}>
                      <p className={classes.EditionsMinted}>
                        1 Editions minted
                      </p>
                      <p className={classes.NFTName}>Loaded Lion 5692</p>
                      <div className={classes.PriceAndType}>
                        <div className={classes.PriceBox}>
                          <div className={classes.PriceLabel}>PRICE</div>
                          <div className={classes.Price}>$20</div>
                        </div>
                        <div className={classes.TypeBox}>
                          <div className={classes.TypeLabel}>MADE WITH</div>
                          <div className={classes.Type}>Dall-e 2</div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.UserInformation}>
                      <div className={classes.ProfilePictureContainer}>
                        <Image
                          src="/Russia.jpeg"
                          width={40}
                          height={40}
                          className={classes.ProfilePicture}
                        ></Image>
                      </div>
                      <div className={classes.UsernameContainer}>
                        <div className={classes.Username}>FriendlyRussian</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AspectRatio>
            <AspectRatio
              ratio="60/103"
              className={
                showDesktopSidebar
                  ? classes.NFTSidebarOn
                  : classes.NFTSidebarOff
              }
            >
              <div
                className={
                  showDesktopSidebar
                    ? classes.NFTSidebarOnInner
                    : classes.NFTSidebarOffInner
                }
              >
                <div
                  className={
                    showDesktopSidebar
                      ? classes.NFTSidebarOnInnerInner
                      : classes.NFTSidebarOffInnerInner
                  }
                >
                  <div className={classes.ImageContainer}>
                    <Image
                      src="/NFTPlaceholders/EpicPaintingOfRussiaAsGodsDream.png"
                      layout="fill"
                    ></Image>
                  </div>
                  <div className={classes.InformationBox}>
                    <div className={classes.PriceInformation}>
                      <p className={classes.EditionsMinted}>
                        1 Editions minted
                      </p>
                      <p className={classes.NFTName}>Loaded Lion 5692</p>
                      <div className={classes.PriceAndType}>
                        <div className={classes.PriceBox}>
                          <div className={classes.PriceLabel}>PRICE</div>
                          <div className={classes.Price}>$20</div>
                        </div>
                        <div className={classes.TypeBox}>
                          <div className={classes.TypeLabel}>MADE WITH</div>
                          <div className={classes.Type}>Dall-e 2</div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.UserInformation}>
                      <div className={classes.ProfilePictureContainer}>
                        <Image
                          src="/Russia.jpeg"
                          width={40}
                          height={40}
                          className={classes.ProfilePicture}
                        ></Image>
                      </div>
                      <div className={classes.UsernameContainer}>
                        <div className={classes.Username}>FriendlyRussian</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AspectRatio>
            <AspectRatio
              ratio="60/103"
              className={
                showDesktopSidebar
                  ? classes.NFTSidebarOn
                  : classes.NFTSidebarOff
              }
            >
              <div
                className={
                  showDesktopSidebar
                    ? classes.NFTSidebarOnInner
                    : classes.NFTSidebarOffInner
                }
              >
                <div
                  className={
                    showDesktopSidebar
                      ? classes.NFTSidebarOnInnerInner
                      : classes.NFTSidebarOffInnerInner
                  }
                >
                  <div className={classes.ImageContainer}>
                    <Image
                      src="/NFTPlaceholders/EpicPaintingOfRussiaAsGodsDream.png"
                      layout="fill"
                    ></Image>
                  </div>
                  <div className={classes.InformationBox}>
                    <div className={classes.PriceInformation}>
                      <p className={classes.EditionsMinted}>
                        1 Editions minted
                      </p>
                      <p className={classes.NFTName}>Loaded Lion 5692</p>
                      <div className={classes.PriceAndType}>
                        <div className={classes.PriceBox}>
                          <div className={classes.PriceLabel}>PRICE</div>
                          <div className={classes.Price}>$20</div>
                        </div>
                        <div className={classes.TypeBox}>
                          <div className={classes.TypeLabel}>MADE WITH</div>
                          <div className={classes.Type}>Dall-e 2</div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.UserInformation}>
                      <div className={classes.ProfilePictureContainer}>
                        <Image
                          src="/Russia.jpeg"
                          width={40}
                          height={40}
                          className={classes.ProfilePicture}
                        ></Image>
                      </div>
                      <div className={classes.UsernameContainer}>
                        <div className={classes.Username}>FriendlyRussian</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AspectRatio>
            <AspectRatio
              ratio="60/103"
              className={
                showDesktopSidebar
                  ? classes.NFTSidebarOn
                  : classes.NFTSidebarOff
              }
            >
              <div
                className={
                  showDesktopSidebar
                    ? classes.NFTSidebarOnInner
                    : classes.NFTSidebarOffInner
                }
              >
                <div
                  className={
                    showDesktopSidebar
                      ? classes.NFTSidebarOnInnerInner
                      : classes.NFTSidebarOffInnerInner
                  }
                >
                  <div className={classes.ImageContainer}>
                    <Image
                      src="/NFTPlaceholders/EpicPaintingOfRussiaAsGodsDream.png"
                      layout="fill"
                    ></Image>
                  </div>
                  <div className={classes.InformationBox}>
                    <div className={classes.PriceInformation}>
                      <p className={classes.EditionsMinted}>
                        1 Editions minted
                      </p>
                      <p className={classes.NFTName}>Loaded Lion 5692</p>
                      <div className={classes.PriceAndType}>
                        <div className={classes.PriceBox}>
                          <div className={classes.PriceLabel}>PRICE</div>
                          <div className={classes.Price}>$20</div>
                        </div>
                        <div className={classes.TypeBox}>
                          <div className={classes.TypeLabel}>MADE WITH</div>
                          <div className={classes.Type}>Dall-e 2</div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.UserInformation}>
                      <div className={classes.ProfilePictureContainer}>
                        <Image
                          src="/Russia.jpeg"
                          width={40}
                          height={40}
                          className={classes.ProfilePicture}
                        ></Image>
                      </div>
                      <div className={classes.UsernameContainer}>
                        <div className={classes.Username}>FriendlyRussian</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AspectRatio>
            <AspectRatio
              ratio="60/103"
              className={
                showDesktopSidebar
                  ? classes.NFTSidebarOn
                  : classes.NFTSidebarOff
              }
            >
              <div
                className={
                  showDesktopSidebar
                    ? classes.NFTSidebarOnInner
                    : classes.NFTSidebarOffInner
                }
              >
                <div
                  className={
                    showDesktopSidebar
                      ? classes.NFTSidebarOnInnerInner
                      : classes.NFTSidebarOffInnerInner
                  }
                >
                  <div className={classes.ImageContainer}>
                    <Image
                      src="/NFTPlaceholders/EpicPaintingOfRussiaAsGodsDream.png"
                      layout="fill"
                    ></Image>
                  </div>
                  <div className={classes.InformationBox}>
                    <div className={classes.PriceInformation}>
                      <p className={classes.EditionsMinted}>
                        1 Editions minted
                      </p>
                      <p className={classes.NFTName}>Loaded Lion 5692</p>
                      <div className={classes.PriceAndType}>
                        <div className={classes.PriceBox}>
                          <div className={classes.PriceLabel}>PRICE</div>
                          <div className={classes.Price}>$20</div>
                        </div>
                        <div className={classes.TypeBox}>
                          <div className={classes.TypeLabel}>MADE WITH</div>
                          <div className={classes.Type}>Dall-e 2</div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.UserInformation}>
                      <div className={classes.ProfilePictureContainer}>
                        <Image
                          src="/Russia.jpeg"
                          width={40}
                          height={40}
                          className={classes.ProfilePicture}
                        ></Image>
                      </div>
                      <div className={classes.UsernameContainer}>
                        <div className={classes.Username}>FriendlyRussian</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AspectRatio>
            <AspectRatio
              ratio="60/103"
              className={
                showDesktopSidebar
                  ? classes.NFTSidebarOn
                  : classes.NFTSidebarOff
              }
            >
              <div
                className={
                  showDesktopSidebar
                    ? classes.NFTSidebarOnInner
                    : classes.NFTSidebarOffInner
                }
              >
                <div
                  className={
                    showDesktopSidebar
                      ? classes.NFTSidebarOnInnerInner
                      : classes.NFTSidebarOffInnerInner
                  }
                >
                  <div className={classes.ImageContainer}>
                    <Image
                      src="/NFTPlaceholders/EpicPaintingOfRussiaAsGodsDream.png"
                      layout="fill"
                    ></Image>
                  </div>
                  <div className={classes.InformationBox}>
                    <div className={classes.PriceInformation}>
                      <p className={classes.EditionsMinted}>
                        1 Editions minted
                      </p>
                      <p className={classes.NFTName}>Loaded Lion 5692</p>
                      <div className={classes.PriceAndType}>
                        <div className={classes.PriceBox}>
                          <div className={classes.PriceLabel}>PRICE</div>
                          <div className={classes.Price}>$20</div>
                        </div>
                        <div className={classes.TypeBox}>
                          <div className={classes.TypeLabel}>MADE WITH</div>
                          <div className={classes.Type}>Dall-e 2</div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.UserInformation}>
                      <div className={classes.ProfilePictureContainer}>
                        <Image
                          src="/Russia.jpeg"
                          width={40}
                          height={40}
                          className={classes.ProfilePicture}
                        ></Image>
                      </div>
                      <div className={classes.UsernameContainer}>
                        <div className={classes.Username}>FriendlyRussian</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AspectRatio>
          </div>
        </div>
      </div>
    </div>
  );
};

// <Image
//                     src="/NFTPlaceholders/EpicPaintingOfRussiaAsGodsDream.png"
//                     layout="fill"
//                   ></Image>
export default NFTPage;

// <div className={classes.NFTSidebarOn}></div>
// <div className={classes.NFTSidebarOn}></div>
// <div className={classes.NFTSidebarOn}></div>
// <div className={classes.NFTSidebarOn}></div>
// <div className={classes.NFTSidebarOn}></div>
// <div className={classes.NFTSidebarOn}></div>
// <div className={classes.NFTSidebarOn}></div>
