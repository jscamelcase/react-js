/* 
1) So we need a container for the contents of the page which restricts the total with, we can call it <PageContainer></PageCointainer> and pass the children Components through.
2) The first child component should be the title component <Title />
3) The next child component should be the <Selection /> component, where the logic of the filter exists, so it has a state variable, which could be equal to either "All", "Breakfast", "Lunch", "Shakes" based on button selection.
4) The <Selection /> component should be made up of a <Display /> component that based off a grid and recieves the state selection made at the <Selection /> component level and also incorporates the external data at this level of the application. 
5) <Display /> element is itself composed of card components <Card /> that are rendrerd itteratively and conditonally based on the state selection and the data passed to them as props.
6 <Card components are built to the spec of the design
*/

import Card from "./components/Card";

const App = () => {
  return <Card />;
};
export default App;
