import CenterImage from "./components/CenterImage";
import data from "./data";

const App = () => {
  return (
    <>
      <CenterImage imgSrc={data[0].image} />
    </>
  );
};
export default App;
