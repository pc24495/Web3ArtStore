import { useState, useEffect, useCallback, useRef } from "react";
import axios from "../../axios.js";
import qs from "qs";

function useFetch(page, filters) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [postList, setList] = useState([]);
  const [done, setDone] = useState(false);
  const [userPicsMap, setUserPicsMap] = useState(new Map());
  const IDs = useRef("");
  const pageRef = useRef(0);
  const remove = useRef(null);

  const sendQuery = useCallback(async () => {
    if (pageRef.current === page) {
      return;
    } else {
      pageRef.current = page;
    }

    try {
      await setLoading(true);
      await setError(false);
      const res = await axios.get("/api/posts", {
        params: {
          postIDs: postList.map((post) => post.post_id),
          userIDs: [...userPicsMap.keys()],
          filters,
        },
        paramsSerializer: (params) => {
          return qs.stringify(params);
        },
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });

      await setList(postList.concat(res.data.posts));
      await setUserPicsMap(
        (prev) => new Map([...prev, ...new Map(JSON.parse(res.data.userPics))])
      );
      if (res.data.posts.length < 4) {
        await setDone(true);
      }
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [page, filters]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, page, filters]);

  return { loading, error, postList, done, userPicsMap };
}

export default useFetch;
