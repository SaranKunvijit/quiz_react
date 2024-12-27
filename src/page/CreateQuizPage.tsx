import { FC, useContext } from 'react';
import { QuizForm } from '../component/QuizForm';
import { QuizContext } from '../contexts/QuizContext';
import { useNavigate } from 'react-router-dom';


export const CreateQuizPage: FC = () => {
  const navigate = useNavigate();
  const { createQuiz } = useContext(QuizContext);

  const handleFormSubmit = (quizText: string, options: string[], correctAnswer: string) => {
    createQuiz({ quizText, options: options, correctAnswer: correctAnswer });
    alert('สร้างคำถามเรียบร้อย');
    navigate('/show-quiz');
  }

  return (
    <div className="container">
      <QuizForm
        OnSubmit={handleFormSubmit}
        isEdit={false} 
      />
    </div>
  );
};
