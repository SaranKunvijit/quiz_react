import { FC } from "react";
import { QuizForm } from "../component/QuizForm";
import { editQuizhook } from "../hook/hookpage";

const EditQuizPage: FC = () => {
  const { editQuizValue, handleEditQuiz } = editQuizhook();

  if (!editQuizValue) return null;

  return (
    <QuizForm
      quizText={editQuizValue.quizText}
      options={editQuizValue.options}
      correctAnswer={editQuizValue.correctAnswer}
      OnSubmit={handleEditQuiz}
      isEdit={true}
    />
  );
};

export default EditQuizPage;
