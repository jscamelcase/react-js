import Form from "./Form/Form";
import ColorList from "./ColorList/ColorList";
import { useState, useEffect } from "react";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [listColor, setListColor] = useState("#ffffff");
  const [color, setColor] = useState("#ffffff");
  const [pendingColor, setPendingColor] = useState(null); // NEW: Track color update

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Color:", color);

    if (color.charAt(0) !== "#" || color.length !== 7) {
      toast.error("Bad input!", { icon: "❌", autoClose: 1000 });
    } else {
      toast.success("Awesome!", { icon: "✅", autoClose: 1000 });

      // ✅ Store the color temporarily instead of setting it directly
      setPendingColor(color);
    }
  };

  // ✅ Effect to update `listColor` AFTER the toast has appeared
  useEffect(() => {
    if (pendingColor) {
      setTimeout(() => {
        setListColor(pendingColor);
        setPendingColor(null); // Reset pending color
      }, 100); // Ensure toast appears first
    }
  }, [pendingColor]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={50} />

      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        listColor={listColor}
        color={color}
      />
      <ColorList colorList={new Values(listColor).all(10)} />
    </>
  );
};

export default App;
