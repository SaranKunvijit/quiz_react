import { FC, useContext, useEffect, useState } from "react"
import { QuizForm } from "../component/QuizForm"
import { useNavigate, useParams } from "react-router-dom"
import { QuizContext } from "../contexts/QuizContext";
import { Question } from "../types/question";

const EditQuizPage: FC = () => {
    const { id } = useParams();
    const { quizs, editQuiz } = useContext(QuizContext);
    const navigate = useNavigate();
  
    const [editQuizValue, setEditQuizValue] = useState<Question | null>(null);
  
    useEffect(() => {
      if (id && quizs.length > 0) {
        const findQuiz = quizs.find((quiz) => quiz.id.toString() === id);
        if (findQuiz) {
          setEditQuizValue(findQuiz);
        }
      }
    }, [id, quizs]);
  
    const handleFormSubmit = (quizText: string, options: string[], correctAnswer: string) => {
      if (id) {
        const updatedQuiz = {
          id: parseInt(id),
          quizText,
          options,
          correctAnswer
        };
        editQuiz(updatedQuiz);
        navigate('/show-quiz');
      }
    }
  
    if (!editQuizValue) return null;
  
    return (
      <QuizForm
        quizText={editQuizValue.quizText}
        options={editQuizValue.options}
        correctAnswer={editQuizValue.correctAnswer}
        OnSubmit={handleFormSubmit}
        isEdit={true}
      />
    );
  };
  

export default EditQuizPage