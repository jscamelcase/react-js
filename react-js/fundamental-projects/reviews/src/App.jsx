import { useState } from "react";
import CardCenterImage from "./components/CardCenterImage";
import data from "./data";
import { capitaliseFullName } from "./utils/formatting";
import CardName from "./components/CardName";
import CardDescription from "./components/CardDescription/CardDescription";
import CardControls from "./components/CardControls/CardControls";
import CardButtonRandom from "./components/CardButtonRandom/CardButtonRandom";
import CardContainer from "./components/CardContainer/CardContainer";

const App = () => {
  const [list, setList] = useState(data);
  const [slideshowPosition, setslideshowPosition] = useState(0);
  const handleRightMove = function () {
    if (slideshowPosition < list.length - 1) {
      setslideshowPosition((previous) => {
        return previous + 1;
      });
    } else {
      setslideshowPosition(0);
    }
  };
  const handleLeftMove = function () {
    if (slideshowPosition > 0) {
      setslideshowPosition((previous) => {
        return previous - 1;
      });
    } else {
      setslideshowPosition(list.length - 1);
    }
  };

  const randomSlide = function () {
    const randomIndex = Math.floor(Math.random() * list.length);
    setslideshowPosition(randomIndex);
  };
  //data object deconstruction
  let { id, job, name, image, text } = list[slideshowPosition];
  name = capitaliseFullName(name);
  job = job.toUpperCase();

  return (
    <CardContainer>
      <CardCenterImage imgSrc={image} />
      <CardName name={name} job={job} />
      <CardDescription text={text} />
      <CardControls
        leftOnClick={handleLeftMove}
        rightOnClick={handleRightMove}
      />
      <CardButtonRandom onClick={randomSlide} />
    </CardContainer>
  );
};
export default App;
