import Form from "./Form/Form";
import ColorList from "./ColorList/ColorList";
import { useState, useEffect } from "react";
import Values from "values.js";

const App = () => {
  const [listColor, setListColor] = useState("#ffffff");
  const [color, setColor] = useState("#ffffff");
  const completeColorList = new Values(listColor).all(10);

  const handleChange = function (e) {
    const newColor = e.target.value;
    setColor(newColor);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    setListColor(color);

    console.log(listColor);
  };

  useEffect(() => {
    console.log(listColor);
  }, [listColor]);

  return (
    <>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        listColor={listColor}
        color={color}
      />
      <ColorList colorList={completeColorList} />
    </>
  );
};
export default App;
