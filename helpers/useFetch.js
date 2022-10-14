import { useState, useEffect, useCallback, useRef } from "react";
import axios from "../axios.js";
import qs from "qs";
import isDeepEqual from "./isDeepEqual.js";

function useFetch(page, filters) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [NFTList, setNFTList] = useState([]);
  const [done, setDone] = useState(false);
  const [userPicsMap, setUserPicsMap] = useState(new Map());
  const [displayList, setDisplayList] = useState([]);
  const IDs = useRef("");
  const pageRef = useRef(1);
  const filtersRef = useRef({
    madeWith: [],
    minPrice: 0,
    maxPrice: Number.MAX_SAFE_INTEGER,
    sortBy: "Alphabet",
  });
  const remove = useRef(null);

  const sendQuery = useCallback(async () => {
    if (pageRef.current === page && isDeepEqual(filtersRef.current, filters)) {
      return;
      console.log("Same");
    } else {
      pageRef.current = page;
      filtersRef.current = filters;
    }

    console.log(page);
    console.log(filters);
    // await setLoading(true);
    // setTimeout(async () => {
    //   await setLoading(false);
    // }, 2000);
    console.log(NFTList);
    let NewNFTList = NFTList.filter((NFT) => {
      const { madeWith, minPrice, maxPrice } = filters;
      return (
        madeWith.includes(NFT.madeWith) &&
        NFT.priceInCents >= minPrice &&
        NFT.priceInCents <= maxPrice
      );
    });

    // console.log(NewNFTList);
    // console.log(loading);

    // try {
    //   await setLoading(true);
    //   await setError(false);
    // const res = await axios.get("/products", {
    //   params: {
    //     postIDs: NFTList.map((post) => post.post_id),
    //     userIDs: [...userPicsMap.keys()],
    //     filters,
    //   },
    //   paramsSerializer: (params) => {
    //     return qs.stringify(params);
    //   },
    //   headers: {
    //     "x-access-token": localStorage.getItem("token"),
    //   },
    // });

    //   await setList(NFTList.concat(res.data.posts));
    //   await setUserPicsMap(
    //     (prev) =>
    //       new Map([...prev, ...new Map(JSON.parse(res.data.userPics))])
    //   );
    //   if (res.data.posts.length < 4) {
    //     await setDone(true);
    //   }
    //   setLoading(false);
    // } catch (err) {
    //   setError(err);
    // }
  }, [page, filters]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, page, filters]);

  return { loading, error, NFTList, setNFTList, done, userPicsMap };
}

export default useFetch;
