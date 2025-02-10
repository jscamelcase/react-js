import AppContainer from "./components/AppContainer/AppContainer";
import DeleteButton from "./components/DeleteButton";
import ListItem from "./components/ListItem/ListItem";
import ListItemCont from "./components/ListItemCont";
import SearchBar from "./components/SearchBar";
import Title from "./components/Title/Title";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [groceryList, setGroceryList] = useState([]);
  const [groceryItem, setGroceryItem] = useState("");

  const handleAddItemOnChange = function (e) {
    const groceryItem = e.target.value;
    setGroceryItem(groceryItem);
  };

  const handleAddItemOnSubmit = function (e) {
    e.preventDefault();
    if (!groceryItem.trim()) {
      toast.error("Please input something");
      console.log("This is not working");
    } else {
      const currentStoredList = JSON.parse(localStorage.getItem("grocery"));
      if (currentStoredList !== null) {
        localStorage.setItem(
          "grocery",
          JSON.stringify([...currentStoredList, groceryItem])
        );
        setGroceryList((prev) => [...prev, groceryItem]);
      } else {
        localStorage.setItem(
          "grocery",
          JSON.stringify([...groceryList, groceryItem])
        );
        setGroceryList((prev) => [...prev, groceryItem]);
      }
    }
  };

  const handleDelete = function (name) {
    const newData = groceryList.filter((item) => item !== name); // ✅ Define outside setGroceryList

    setGroceryList(newData); // ✅ Update state with newData
    localStorage.setItem("grocery", JSON.stringify(newData)); // ✅ Save to localStorage

    toast.success("Data Deleted", { autoClose: 3000 }); // ✅ Now this runs c
  };

  useEffect(() => {
    const storedGroceryList = localStorage.getItem("grocery");
    let savedGrocery;
    if (storedGroceryList !== null) {
      try {
        const savedGroceryList = JSON.parse(storedGroceryList);
        setGroceryList(savedGroceryList);
      } catch (error) {
        console.error("Error parsing:", error);
      }
    } else {
      let savedGrocery = [];
      setGroceryList(savedGrocery);
      console.log("this ran");
    }
  }, []);

  useEffect(() => {
    console.log(groceryList);
  });
  return (
    <AppContainer>
      <Title />
      <SearchBar
        onSubmit={handleAddItemOnSubmit}
        onChange={handleAddItemOnChange}
        item={groceryItem}
      />
      {groceryList &&
        groceryList.map((item) => (
          <ListItemCont key={uuidv4()}>
            <ListItem product={item} />
            <DeleteButton product={item} onClick={handleDelete} />
          </ListItemCont>
        ))}
      <ToastContainer
        position="top-right"
        autoClose={3000} // ✅ Ensures all toasts auto-close
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </AppContainer>
  );
};

export default App;
