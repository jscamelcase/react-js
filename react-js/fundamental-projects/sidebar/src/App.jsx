import Home from "./components/Home";
import { HiMenu } from "react-icons/hi";
import HamburgerIcon from "./components/HamburgerIcon";
import ModalButton from "./components/ModalButton";
import Modal from "./components/Modal";
import ModalMessage from "./components/ModalMessage";
import ModalX from "./components/ModalX";
import { PageContext } from "./contexts/PageContext";
import { useState } from "react";
import PageAside from "./components/PageAside";
import PageAsideHeading from "./components/PageAsideHeading";
import PageAsideLogo from "./components/PageAsideLogo";
import PageAsideLinks from "./components/PageAsideLinks";
import { links } from "./../data.jsx";
import PageAsideLinkItem from "./components/PageAsideLinkItem/PageAsideLinkItem.jsx";
import React from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle((prev) => !prev);
    console.log("hello");
  }
  return (
    <PageContext.Provider value={{ handleToggle, toggle }}>
      <Home>
        <HamburgerIcon homePage={true} />
        <ModalButton>Show Modal</ModalButton>
        <Modal>
          <ModalMessage>Modal Content</ModalMessage>
          <ModalX />
        </Modal>
        <PageAside>
          <PageAsideHeading>
            <PageAsideLogo />
            <ModalX />
          </PageAsideHeading>
          <PageAsideLinks>
            {links.map((link) => {
              return (
                <PageAsideLinkItem
                  key={link.id}
                  iconSize={24}
                  iconColor={"#334155"}
                >
                  {link.icon}
                  <a href={link.url}>{link.text}</a>
                </PageAsideLinkItem>
              );
            })}
          </PageAsideLinks>
        </PageAside>
      </Home>
    </PageContext.Provider>
  );
}

export default App;
