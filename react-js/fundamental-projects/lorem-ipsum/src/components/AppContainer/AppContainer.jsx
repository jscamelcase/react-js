import sytles from "./AppContainer.module.css";

function AppContainer(props) {
  return <main className={sytles.appContainer}>{props.children}</main>;
}

export default AppContainer;
