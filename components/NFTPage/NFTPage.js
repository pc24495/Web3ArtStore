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
import { useState, useEffect, useRef, useCallback } from "react";
import { Dna } from "react-loader-spinner";
import isDeepEqual from "../../helpers/isDeepEqual.js";
import qs from "qs";
import madeWithOptions from "../../configs/madeWith.js";

const NFTPage = () => {
  const [showDesktopSidebar, setShowDesktopSidebar] = useState(true);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [showTypeFilters, setShowTypeFilters] = useState(true);
  const MAX_POSTGRES_INT = 2147483647;

  const mockNFT = {
    numEditions: 2,
    name: "Loaded Lion 5692",
    priceInCents: 2000,
    madeWith: "DALL-E 2",
    user: "FriendlyRussian",
    profilePic: "/NFTPlaceholders/EpicPaintingOfRussiaAsGodsDream.png",
    id: 5,
  };
  const [NFTState, setNFTState] = useState({
    NFTData: Array(7).fill(mockNFT),
    NFTs: Array(7).fill(mockNFT),
  });
  const [filters, setFilters] = useState({
    madeWith: [],
    minPrice: 0,
    maxPrice: MAX_POSTGRES_INT,
    sortBy: "Alphabet",
  });
  const [page, setPage] = useState(1);
  const pageRef = useRef(1);
  const filtersRef = useRef({
    madeWith: [],
    minPrice: 0,
    maxPrice: MAX_POSTGRES_INT,
    sortBy: "Alphabet",
  });
  const NFTLoader = useRef(null);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    if (
      !isDeepEqual(filters, filtersRef.current) ||
      !(page === pageRef.current)
    ) {
      pageRef.current = page;
      filtersRef.current = filters;
      await setLoading(true);

      let newNFTs = NFTState.NFTData.filter((NFT) => {
        const { madeWith, minPrice, maxPrice } = filters;
        return (
          madeWith.includes(NFT.madeWith) &&
          NFT.priceInCents >= minPrice &&
          NFT.priceInCents <= maxPrice
        );
      });

      if (newNFTs.length < 6) {
        // console.log(NFTState.NFTData);
        const res = await axios
          .get("/products", {
            params: {
              productIDs: NFTState.NFTData.map((product) => product.id),
              filters,
              numResults: 3,
            },
            paramsSerializer: (params) => {
              return qs.stringify(params);
            },
          })
          .then((response) => {
            console.log(response.data.products);
            setNFTState((prev) => {
              return {
                NFTData: prev.NFTData.concat(response.data.products),
                NFTs: prev.NFTs.concat(response.data.products),
              };
            });
          });
      }
    }
  }, [page, filters]);

  const handleObserver = useCallback((entries) => {
    console.log("handleObserver");
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (NFTLoader.current) observer.observe(NFTLoader.current);
  }, [handleObserver]);

  useEffect(async () => {
    await setMobileView(window.innerWidth <= 990);
    // await setNFTList();
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
    await setLoading(true);
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

  console.log("rerender");

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
          <div className={classes.NFTs} style={{ display: "flex" }} id="NFTBox">
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
            <div
              className={classes.NFTLoadingBox}
              ref={NFTLoader}
              style={{ display: "flex" }}
            >
              <div className={classes.NFTLoadingBoxInner}>
                <div className={classes.NFTLoadingBoxInnerInner}>
                  <Dna
                    visible={true}
                    height="120"
                    width="120"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.WhileFiltering}></div>
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
