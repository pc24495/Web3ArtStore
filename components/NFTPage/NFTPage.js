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
import { BsFilterCircle } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { BiSort } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Dna } from "react-loader-spinner";

const NFTPage = () => {
  const [showDesktopSidebar, setShowDesktopSidebar] = useState(true);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [showTypeFilters, setShowTypeFilters] = useState(true);
  const madeWithOptions = ["DALL-E 2", "ArtBreeder", "NightCafe"];
  const mockNFT = {
    numEditions: 2,
    name: "Loaded Lion 5692",
    priceInCents: 2000,
    madeWith: "DALL-E 2",
    user: "FriendlyRussian",
    profilePic: "/NFTPlaceholders/EpicPaintingOfRussiaAsGodsDream.png",
  };
  const [NFTState, setNFTState] = useState({
    NFTData: Array(7).fill(mockNFT),
    NFTs: Array(7).fill(mockNFT),
    isLoading: false,
  });
  const [filters, setFilters] = useState({
    madeWith: [],
    minPrice: 0,
    maxPrice: Number.MAX_SAFE_INTEGER,
    sortBy: "Alphabet",
  });

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

  const desktopSidebarOff = (event) => {
    setShowDesktopSidebar(false);
  };

  const desktopSidebarOn = (event) => {
    setShowDesktopSidebar(true);
  };

  const mobileSidebarOff = (event) => {
    setShowMobileSidebar(false);
  };

  const mobileSidebarOn = (event) => {
    setShowMobileSidebar(true);
  };

  const toggleTypeFilters = (event) => {
    setShowTypeFilters((prev) => !prev);
  };

  const showDesktopNavigation = showDesktopSidebar && !mobileView;

  const handleMadeWithChange = async (event) => {
    let madeWithSet = new Set(filters.madeWith);
    let oldNFTs = NFTState.NFTData;
    let newNFTs;
    if (event.target.checked) {
      madeWithSet.add(event.target.value);
    } else {
      madeWithSet.delete(event.target.value);
    }

    newNFTs = oldNFTs.filter((NFT) => {
      let isRightMadeWith = true;
      if (madeWithSet.size) {
        isRightMadeWith = madeWithSet.has(NFT.madeWith);
      }
      let isInPriceRange =
        NFT.priceInCents >= filters.minPrice &&
        NFT.priceInCents <= filters.maxPrice;
      return isRightMadeWith && isInPriceRange;
    });
    await setFilters((prev) => {
      return { ...prev, madeWith: Array.from(madeWithSet) };
    });
    await setNFTState((prev) => {
      return { ...prev, NFTs: newNFTs };
    });
  };

  return (
    <div className={classes.NFTPage}>
      <div className={classes.Header}>
        <h2>Explore</h2>
        {!showDesktopNavigation && <h2></h2>}
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
              onClick={desktopSidebarOff}
            ></GoThreeBars>
          </div>
          <div className={classes.MadeWithSectionDesktop}>
            <div
              className={classes.MadeWithHeaderSection}
              onClick={toggleTypeFilters}
            >
              <div className={classes.MadeWithHeader}>Made With</div>
              <AiOutlineDown
                className={classes.MadeWithCaret}
                style={{
                  transform: `rotate(${showTypeFilters ? "-180deg" : "0deg"})`,
                }}
              ></AiOutlineDown>
            </div>
            {madeWithOptions.map((option) => {
              return (
                <div
                  className={classes.MadeWithMainSection}
                  style={{ display: showTypeFilters ? "flex" : "none" }}
                  key={option}
                >
                  <div className={classes.TypeCheckboxLabel}>
                    <input
                      className={classes.TypeCheckbox}
                      type="checkbox"
                      value={option}
                      onChange={handleMadeWithChange}
                      checked={filters.madeWith.includes(option)}
                    ></input>
                    <span>{option}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.NFTsSection}>
          <div className={classes.NFTsHeader}>
            <div
              style={{ display: showDesktopNavigation ? "flex" : "none" }}
            ></div>
            <button
              className={classes.FilterButtonDesktop}
              type="button"
              onClick={mobileView ? mobileSidebarOn : desktopSidebarOn}
              style={{ display: showDesktopNavigation ? "none" : "flex" }}
            >
              {" "}
              <BsFilterCircle
                size={27}
                className={classes.FilterIconHeader}
              ></BsFilterCircle>
              Filters
            </button>
            <button className={classes.SortButtonDesktop} type="button">
              {" "}
              <BiSort size={23} className={classes.SortIcon}></BiSort>
              Sort by:
            </button>
          </div>
          <div
            className={classes.NFTs}
            style={{ display: NFTState.isLoading ? "none" : "flex" }}
          >
            {NFTState.NFTs.map((NFT, index) => {
              return (
                <AspectRatio
                  ratio="60/103"
                  className={
                    showDesktopSidebar
                      ? classes.NFTSidebarOn
                      : classes.NFTSidebarOff
                  }
                  key={index}
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
                          src={NFT.profilePic}
                          layout="fill"
                          objectFit="cover"
                        ></Image>
                      </div>
                      <div className={classes.InformationBox}>
                        <div className={classes.PriceInformation}>
                          <p className={classes.EditionsMinted}>
                            {NFT.numEditions +
                              " Edition" +
                              (NFT.numEditions == 1 ? " " : "s ") +
                              "minted"}
                          </p>
                          <p className={classes.NFTName}>{NFT.name}</p>
                          <div className={classes.PriceAndType}>
                            <div className={classes.PriceBox}>
                              <div className={classes.PriceLabel}>PRICE</div>
                              <div className={classes.Price}>
                                ${(NFT.priceInCents / 100).toFixed(2)}
                              </div>
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
                            <div className={classes.Username}>
                              FriendlyRussian
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AspectRatio>
              );
            })}
          </div>
          <div
            className={classes.NFTsLoadingBox}
            style={{ display: NFTState.isLoading ? "flex" : "none" }}
          >
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        </div>
      </div>
      <div
        className={classes.MobileFilters}
        style={{ display: showMobileSidebar ? "flex" : "none" }}
      >
        <div className={classes.MobileFiltersMain}>
          <div className={classes.MobileFiltersHeader}>
            <div className={classes.MobileFilterIconBox}>
              <BsFilterCircle
                size={16}
                className={classes.MobileFilterIcon}
              ></BsFilterCircle>
              <p className={classes.MobileFilterLabel}>Filter</p>
            </div>
            <GrClose
              className={classes.MobileFilterCloseButton}
              size={16}
              onClick={mobileSidebarOff}
            ></GrClose>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTPage;
