import { useState, useEffect } from "react";
import useFetchData from "./CustomHooks/useFetchData";
import JobCard from "./components/JobCard/JobCard";
import SideBar from "./components/SideBar/SideBar";
import TabContainer from "./components/TabContainer";
const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const { data, isLoading, hasError, itemSelected, setItemSelected } =
    useFetchData(url);
  const findSelectedListing = function (array, id) {
    return array.find((item) => item.id === id);
  };

  const handleID = function (id) {
    setItemSelected(id);
  };

  if (isLoading) {
    return <h1>Is Loading</h1>;
  }

  if (hasError) {
    return <h2>Tabs Error</h2>;
  }

  const matchedListing = (
    <JobCard {...findSelectedListing(data, itemSelected)} />
  );

  return (
    <>
      <TabContainer>
        <SideBar data={data} onClick={handleID} selected={itemSelected} />
        {matchedListing}
      </TabContainer>
    </>
  );
};
export default App;
