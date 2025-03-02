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
import { links, social } from "./../data.jsx";
import PageAsideLinkItem from "./components/PageAsideLinkItem/PageAsideLinkItem.jsx";
import Link from "./components/Link/Link.jsx";
import PageAsideSocialLinks from "./components/PageAsideSocialLinks/PageAsideSocialLinks.jsx";
import PageAsideSocialLink from "./components/PageAsideSocialLink/PageAsideSocialLink.jsx";

function App() {
  console.log(social);
  const [toggle, setToggle] = useState(false);
  const [asideToggle, setAsideToggle] = useState(false);
  function handleToggle() {
    setToggle((prev) => !prev);
    console.log("hello");
  }

  function handleAsideToggle() {
    setAsideToggle((prev) => !prev);
    console.log("hello");
  }
  return (
    <PageContext.Provider
      value={{ handleToggle, toggle, asideToggle, handleAsideToggle }}
    >
      <Home>
        <HamburgerIcon homePage={true} />
        <ModalButton>Show Modal</ModalButton>
        <Modal>
          <ModalMessage>Modal Content</ModalMessage>
          <ModalX type="modal" />
        </Modal>
        <PageAside>
          <PageAsideHeading>
            <PageAsideLogo />
            <ModalX type="aside" />
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
                  <Link href={link.url}>{link.text}</Link>
                </PageAsideLinkItem>
              );
            })}
          </PageAsideLinks>
          <PageAsideSocialLinks>
            {social.map((item) => {
              return (
                <PageAsideSocialLink
                  key={item.id}
                  href={item.url}
                  iconSize={"24px"}
                  iconColor={"#49A6E9"}
                >
                  {item.icon}
                </PageAsideSocialLink>
              );
            })}
          </PageAsideSocialLinks>
        </PageAside>
      </Home>
    </PageContext.Provider>
  );
}

export default App;
