import { createContext, FC, PropsWithChildren } from "react";
import { QuestionContextType} from "../types/question";
import { Quizhook } from "../hook/Quizhook";

export const QuizContext = createContext<QuestionContextType>({
  quizs: [],
  createQuiz: () => {},
  editQuiz: () => {},
  deleteQuiz: () => {},
  quizIndex: 0,
  score: 0,
  handleAnswer: () => {},
  resetQuiz: () => {},
});

const QuizProvider: FC<PropsWithChildren> = ({ children }) => {
 const quizValue = Quizhook();

  return <QuizContext.Provider value={quizValue}>{children}</QuizContext.Provider>;
};

export default QuizProvider;
