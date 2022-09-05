import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    if (!url) return;

    (async () => {
      try {
        const responce = await fetch(url);
        if (responce.ok) {
          setData(await responce.json());
        } else {
          throw new Error(responce.status);
        }
      } catch (err) {
        setError(err);
      }
    })();
  }, [url]);

  return [data, error];
};
