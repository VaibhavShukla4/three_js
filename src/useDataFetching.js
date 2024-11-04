/** @format */

// src/useDataFetching.js

import { useState, useEffect } from 'react';

function useDataFetching(dataSource) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isSubscribed = true; // To prevent state updates after unmounting

    const fetchData = async () => {
      try {
        const response = await fetch(dataSource);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        if (isSubscribed) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        if (isSubscribed) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to handle component unmounting
    return () => {
      isSubscribed = false;
    };
  }, [dataSource]);

  return { data, loading, error };
}

export default useDataFetching;
