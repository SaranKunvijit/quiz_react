

import { ShowQuiz } from "../component/ShowQuiz";
import { showQuizhook } from "../hook/hookpage";

export const ShowQuizPage = () => {
  const { quizs, deleteQuiz, startEditing } = showQuizhook();

  return (
    <div>
      <ShowQuiz
        quizs={quizs}
        deleteQuiz={deleteQuiz}
        startEditing={startEditing}
      />
    </div>
  );
};

