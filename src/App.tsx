import { FC } from "react";
import './App.css';
import Router from "./routes";
import QuizProvider from "./contexts/QuizContext";

const App: FC = () => {
  return (
    <QuizProvider>
      <Router />
    </QuizProvider>
  );
};

export default App;
