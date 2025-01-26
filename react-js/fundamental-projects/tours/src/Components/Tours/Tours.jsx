import { useState, useEffect } from "react";
import Loading from "./../Loading/Loading.jsx";
import Tour from "./../Tour/Tour.jsx";
import ToursContainer from "../ToursContainer/ToursContainer.jsx";
import styles from "./Tours.module.css";

function Tours(prop) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tourData, setTourData] = useState(null);
  const [isEmptyTours, setIsEmptyTours] = useState(false);
  const [hasRefresh, setHasRefresh] = useState(false);

  const getTours = async function () {
    try {
      const res = await fetch(prop.url);
      if (!res.ok) {
        throw new Error(`Response Error ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setTourData(data);
      setIsEmptyTours(false);
    } catch (error) {
      setIsError(error);
      console.error("Error fetching tours:", error);
    }
    setIsLoading(false);
  };

  const removeTour = function (id) {
    setTourData((previousData) => {
      const updatedData = previousData.filter((tour) => tour.id !== id);

      // Check if the updated array is empty
      if (updatedData.length === 0) {
        console.log("empty");
        setIsEmptyTours(true);
      }

      return updatedData;
    });
  };

  const refreshTours = function () {
    setHasRefresh((previousRefresh) => {
      return !previousRefresh;
    });
  };

  useEffect(() => {
    getTours();
  }, [hasRefresh]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h1>There is an error</h1>;
  }

  if (isEmptyTours) {
    return (
      <>
        <h1 className={styles.tours__heading}>No Tours Left</h1>
        <button onClick={refreshTours} className={styles.tours__resetButton}>
          Refresh Tours
        </button>
      </>
    );
  } else {
    return (
      <>
        <h1 className={styles.tours__heading}>Our Tours</h1>
        <div className={styles.tours}>
          <ToursContainer>
            {tourData.map((tour) => {
              const { id, image, info, name, price } = tour;
              return (
                <Tour
                  key={id}
                  image={image}
                  info={info}
                  name={name}
                  price={price}
                  onClick={removeTour}
                  id={id}
                />
              );
            })}
          </ToursContainer>
        </div>
      </>
    );
  }
}

export default Tours;
