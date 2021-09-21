import { useState, useEffect, useCallback } from "react";

interface RequestProps<T> {
  url: RequestInfo;
  init?: RequestInit;
  processData?: (data: any) => T
}

// export type DogImageType = { message: string; status: string };

export const useFetch = <T>({ url, init, processData }: RequestProps<T>) => {
  // Response state
  const [data, setData] = useState<T>();

  const [stringifiedUrl, stringifiedInit] = [JSON.stringify(url), JSON.stringify(init)];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const processJson = useCallback(processData || ((jsonBody: any) => jsonBody as T), []);

  useEffect(() => {

    const fetchData = async () => {
    try {
      // Fetch data from REST API
      const response = await fetch(url, init);

      if (response.status === 200) {
        // Extract json
        const rawData: any = await response.json();
        const processedData = processJson(rawData);
        setData(processedData);
      } else {
        console.error(`Error ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Error ${error}`);
    }
  };

  fetchData();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [stringifiedUrl, stringifiedInit, processJson]);

  return data;
};