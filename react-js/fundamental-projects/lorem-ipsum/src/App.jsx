import { useState } from "react";
import NumberInput from "./components/NumberInput";
import AppContainer from "./components/AppContainer";
import Title from "./components/Title";
import Paragraphs from "./components/Paragraphs";
import data from "./data.js";

const App = () => {
  const [number, setNumber] = useState(1);
  const [paragraphs, setParagraphs] = useState(data);
  const [displayParagraphs, setDisplayParagraphs] = useState(
    paragraphs.slice(0, number)
  );

  const handleSubmit = function (e) {
    e.preventDefault();
    setDisplayParagraphs(paragraphs.slice(0, number));
    console.log("hello");
  };

  const handleInputNumberChange = function (e) {
    const newNumber = Number(e.target.value);
    console.log(e.target.value);
    setNumber(newNumber);
  };

  return (
    <AppContainer>
      <Title />
      <NumberInput
        number={number}
        handleSubmit={handleSubmit}
        handleInput={handleInputNumberChange}
      />
      <Paragraphs paras={displayParagraphs} />
    </AppContainer>
  );
};
export default App;
