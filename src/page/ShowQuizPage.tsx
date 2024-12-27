import { FC, useContext } from "react";
import { ShowQuiz } from "../component/ShowQuiz";
import { QuizContext } from "../contexts/QuizContext";
import { useNavigate } from "react-router-dom";

export const ShowQuizPage: FC = () => {
  const { quizs, deleteQuiz, } = useContext(QuizContext);
  const navigate = useNavigate();
  return (
    <div>
      <ShowQuiz quizs={quizs} deleteQuiz={deleteQuiz} startEditing={(id: number) => navigate(`/edit/${id}`)} />
    </div>
  );
};
