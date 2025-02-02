import { useState, useEffect } from "react";
import useFetchData from "./CustomHooks/useFetchData";
import JobCard from "./components/JobCard/JobCard";
const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const { data, isLoading, hasError } = useFetchData(url);
  if (isLoading) {
    return <h1>Is Loading</h1>;
  }

  if (hasError) {
    return <h2>Tabs Starter</h2>;
  }

  return <JobCard />;
};
export default App;
