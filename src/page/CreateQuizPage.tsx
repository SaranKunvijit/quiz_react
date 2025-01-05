import { FC } from 'react';
import { QuizForm } from '../component/QuizForm';
import { createQuizhook } from '../hook/hookpage';


export const CreateQuizPage: FC = () => {
  const { handleCreateQuiz } = createQuizhook();

  return (
    <div className="container">
      <QuizForm
        OnSubmit={handleCreateQuiz}
        isEdit={false}
      />
    </div>
  );
};
