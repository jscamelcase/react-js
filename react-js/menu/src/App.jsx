/* 
1) So we need a container for the contents of the page which restricts the total with, we can call it <PageContainer></PageCointainer> and pass the children Components through.
2) The first child component should be the title component <Title />
3) The next child component should be the <Selection /> component, where the logic of the filter exists, so it has a state variable, which could be equal to either "All", "Breakfast", "Lunch", "Shakes" based on button selection.
4) The <Selection /> component should be made up of a <Display /> component that based off a grid and recieves the state selection made at the <Selection /> component level and also incorporates the external data at this level of the application. 
5) <Display /> element is itself composed of card components <Card /> that are rendrerd itteratively and conditonally based on the state selection and the data passed to them as props.
6 <Card components are built to the spec of the design
*/

import { useState } from "react";
import Card from "./components/Card";
import Display from "./components/Display/Display";
import FilterButton from "./components/FilterButton";
import FilterButtonContainer from "./components/FilterButtonContainer/FilterButtonContainer";
import Title from "./components/Title";
import data from "./data";
import { rmDupStrFromArray } from "./utils/arrayFunctions";
import { capitaliseStringFirstCharacter } from "./utils/stringFunctions";

const App = () => {
  const [menu, setMenu] = useState(data);
  const [filter, setFilter] = useState("All");

  const resetFilter = function (filterName) {
    setFilter(filterName);
  };
  const menuItems = rmDupStrFromArray(
    menu.map((item) => {
      return capitaliseStringFirstCharacter(item.category);
    })
  );
  console.log(menuItems);
  menuItems.unshift("All");
  menuItems.sort();
  const menuButtons = menuItems.map((item, index) => {
    return <FilterButton key={index} catagory={item} reset={resetFilter} />;
  });

  let cards;

  switch (filter) {
    case "All":
      cards = menu.map((item) => {
        return <Card key={item.id} {...item} />;
      });
      break;
    case "Breakfast":
      cards = menu.map((item) => {
        if (item.category === "breakfast") {
          return <Card key={item.id} {...item} />;
        }
      });
      break;
    case "Lunch":
      cards = menu.map((item) => {
        if (item.category === "lunch") {
          return <Card key={item.id} {...item} />;
        }
      });
      break;
    case "Shakes":
      cards = menu.map((item) => {
        if (item.category === "shakes") {
          return <Card key={item.id} {...item} />;
        }
      });
      break;

    default:
      console.log("error");
  }

  return (
    <>
      <Title />
      <FilterButtonContainer>{menuButtons}</FilterButtonContainer>
      <Display>{cards}</Display>
    </>
  );
};
export default App;
