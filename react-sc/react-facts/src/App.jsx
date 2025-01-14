import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react-logo.png";

function App() {
  console.log(<h1>Hello World</h1>);
  return (
    <>
      <header className="header">
        <img className="header__img" src={reactLogo} alt="react-logo" />
      </header>
      <main className="main">
        <h1 className="main__heading">Fun facts about React</h1>
        <ul className="main__list">
          <li className="main__list-item">Was first released in 2013</li>
          <li className="main__list-item">
            Was originally created by Jordan Walke
          </li>
          <li className="main__list-item">Has well over 100k star on GitHub</li>
          <li className="main__list-item">Is maintained by Meta</li>
          <li className="main__list-item">
            Powers thousands of enterprise apps, including mobile apps
          </li>
        </ul>
      </main>
    </>
  );
}

export default App;
