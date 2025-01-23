import { useState } from "react";
import data from "./data.js";
import Header from "./Components/Header/Header.jsx";
import ListItems from "./components/ListItems/ListItems.jsx";
import ListContainer from "./components/ListContainer/ListContainer.jsx";
import Item from "./components/Item/Item.jsx";
import ClearButton from "./components/ClearButton/ClearButton.jsx";

const App = () => {
  const [birthdays, setBirthdays] = useState(
    data.map((item) => ({
      ...item,
      alt: item.name,
    }))
  );

  const deleteBirthDay = function (id) {
    setBirthdays((previousBirthdays) => {
      return previousBirthdays.filter((birthday) => {
        return birthday.id !== id;
      });
    });
  };

  const deleteAllBirthDays = function () {
    setBirthdays([]);
  };

  return (
    <ListContainer>
      <Header listLength={birthdays.length} />
      <ListItems>
        {birthdays.map((birthDay) => (
          <Item
            key={birthDay.id}
            birthDay={birthDay}
            deleteOnClick={deleteBirthDay}
          />
        ))}
      </ListItems>
      <ClearButton deleteBirthDay={deleteAllBirthDays} />
    </ListContainer>
  );
};
export default App;
