import { useState, useEffect } from "react";
import Loading from "./../Loading/Loading.jsx";
import Tour from "./../Tour/Tour.jsx";

function Tours(prop) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tourData, setTourData] = useState(null);

  const getTours = async function () {
    try {
      const res = await fetch(prop.url);
      if (!res.ok) {
        throw new Error(`Response Error ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setTourData(data);
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getTours();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h1>There is an error</h1>;
  }

  return (
    <div>
      {tourData.map((tour) => {
        const { id, image, info, name, price } = tour;
        return (
          <Tour key={id} image={image} info={info} name={name} price={price} />
        );
      })}
    </div>
  );
}

export default Tours;
