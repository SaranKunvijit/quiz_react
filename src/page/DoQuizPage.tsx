import { FC, useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";
import "../Css/quiz.css";
import { Finish } from "../component/Finish";
import { Doquiz } from "../component/Doquiz";

export const DoQuizPage: FC = () => {
  const { quizs, quizIndex, score, handleAnswer, resetQuiz } = useContext(QuizContext);
  const isFinished = quizIndex >= quizs.length;

  return (
    <div className="cons">
      {isFinished ? (
        <div className="finish">
          <Finish score={score} totalQuiz={quizs.length} reset={resetQuiz} />
        </div>
      ) : quizs.length > 0 && quizIndex < quizs.length ? (
        <Doquiz
          numberquiz={quizIndex + 1}
          question={quizs[quizIndex]?.quizText}
          options={quizs[quizIndex]?.options || []}
          answer={handleAnswer}
        />
      ) : (
        <p>ไม่มีแบบทดสอบ กรุณาสร้างคำถาม!</p>
      )}
    </div>
  );
};
