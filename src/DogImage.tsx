import React, { FC } from "react";
import { useFetch } from "./useFetch";

type DogImageType = { message: string; status: string };

const DogImage: FC = () => {
//   type DogImageType = { message: string; status: string };

    const data = useFetch<DogImageType>({ 
        url: "https://dog.ceo/api/breed/beagle/images/random", 
        processData: (data) => data as DogImageType,
    });

//   const [data, setData] = useState<DogImageType>();

//   useEffect(() => {
//     // Define asynchronous function - since useEffect hook can't handle async directly,
//     // a nested function needs to be defined first and then called thereafter
//     const fetchData = async () => {
//       try {
//         // Fetch data from REST API
//         const response = await fetch("https://dog.ceo/api/breed/beagle/images/random");

//         if (response.status === 200) {
//           // Extract json
//           const rawData: DogImageType = await response.json();
//           setData(rawData);
//         } else {
//           console.error(`Error ${response.status} ${response.statusText}`);
//         }
//       } catch (error) {
//         console.error(`Error ${error}`);
//       }
//     };
//     // Call async function
//     fetchData();
//   }, []);

  return <>{data ? <img alt="dog" src={data.message}></img> : <div>Loading</div>}</>;
};

export default DogImage;