import Home from "./components/Home";
import { HiMenu } from "react-icons/hi";
import HamburgerIcon from "./components/HamburgerIcon";
import ModalButton from "./components/ModalButton";

function App() {
  return (
    <Home>
      <HamburgerIcon homePage={true} />
      <ModalButton>Show Modal</ModalButton>
    </Home>
  );
}

export default App;
