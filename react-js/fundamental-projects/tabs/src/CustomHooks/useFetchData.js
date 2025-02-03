import { useEffect, useState } from "react";

export default function useFetchData(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); //Reset loading state
      setHasError(false); //Clear previous error

      try {
        const res = await fetch(url);

        if (!res.ok) {
          let errorMessage = `Error ${res.status}: ${res.statusText}`;

          try {
            const errorData = await res.json();
            errorMessage = errorData.message || errorMessage;
          } catch (jsonError) {
            const errorText = await res.text();
            if (errorText) errorMessage = errorText;
          }
          throw new Error(errorMessage);
        }
        const data = await res.json();
        console.log(data);
        setIsLoading(false);
        setData(data);
        setItemSelected(data[0].id);
      } catch (error) {
        console.error("Fetch error:", error.message);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading, hasError, itemSelected, setItemSelected };
}
