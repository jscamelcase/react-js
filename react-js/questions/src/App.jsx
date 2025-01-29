import { useState } from "react";
import Card from "./components/Card";
import PageContainer from "./components/PageContainer";
import "./App.css";
import data from "./data";

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <PageContainer>
      <h1>Questions</h1>
      {questions.map((question) => {
        return <Card key={question.id} {...question} />;
      })}
    </PageContainer>
  );
};
export default App;
