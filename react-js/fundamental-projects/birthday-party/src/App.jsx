import data from "./data.js";
import Header from "./components/Header/Header.jsx";
import List from "./components/List/List.jsx";

const App = () => {
  return (
    <div className="container">
      <Header listLength={data.length} />
      <List />
    </div>
  );
};
export default App;
