import { useState } from "react";
import CardCenterImage from "./components/CardCenterImage";
import data from "./data";
import { capitaliseFullName } from "./utils/formatting";
import CardName from "./components/CardName";
import CardDescription from "./components/CardDescription/CardDescription";
import CardControls from "./components/CardControls/CardControls";

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
    if (slideshowPosition > list.length - 1) {
      setslideshowPosition((previous) => {
        return previous + 1;
      });
    } else {
      setslideshowPosition(0);
    }
  };
  //data object deconstruction
  let { id, job, name, image, text } = list[slideshowPosition];
  name = capitaliseFullName(name);
  job = job.toUpperCase();

  return (
    <>
      <CardCenterImage imgSrc={image} />
      <CardName name={name} job={job} />
      <CardDescription text={text} />
      <CardControls
        leftOnClick={handleLeftMove}
        rightOnClick={handleRightMove}
      />
    </>
  );
};
export default App;
