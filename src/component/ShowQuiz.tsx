import { FC } from "react";
import '../Css/showquiz.css';

type Question = {
  id: number;
  quizText: string;
  options: string[];
  correctAnswer: string;
};

type ShowQuizProps = {
  quizs: Question[];
  deleteQuiz: (id: number) => void;
  startEditing: (id: number) => void;
};

const ShowQuiz: FC<ShowQuizProps> = ({ quizs, deleteQuiz, startEditing }) => {
  return (
    <div className="showquiz">
      <h3 className="detail">ข้อมูลคำถาม</h3>
      <div>
        {quizs.map((question, index) => (
          <div key={question.id} className="quiz-item">
            <p className="quiz-text">{index + 1} {question.quizText}</p>
            <button className="btn delete" onClick={() => deleteQuiz(question.id)}>Delete</button>
            <button className="btn edit" onClick={() => startEditing(question.id)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ShowQuiz };
