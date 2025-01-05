import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QuizContext } from "../contexts/QuizContext";
import { Question } from "../types/question";

//hook ทำคำถาม
export const doQuizhook = () => {
  const { quizs, quizIndex, score, handleAnswer, resetQuiz } = useContext(QuizContext);
  const isFinished = quizIndex >= quizs.length;

  return { quizs, quizIndex, score, handleAnswer, resetQuiz, isFinished, };
};

// Custom Hook สำหรับสร้างคำถามใหม่
export const createQuizhook = () => {
  const navigate = useNavigate();
  const { createQuiz } = useContext(QuizContext);

  const handleCreateQuiz = (quizText: string, options: string[], correctAnswer: string) => {
    createQuiz({ quizText, options, correctAnswer });
    alert("สร้างคำถามเรียบร้อย");
    navigate("/show-quiz");
  };

  return { handleCreateQuiz };
};

export const editQuizhook = () => {
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
  
    const handleEditQuiz = (quizText: string, options: string[], correctAnswer: string) => {
      if (id) {
        const updatedQuiz: Question = {
          id: parseInt(id),
          quizText,
          options,
          correctAnswer,
        };
        editQuiz(updatedQuiz);
        navigate("/show-quiz");
      }
    };
  
    return {
      editQuizValue,
      handleEditQuiz,
    };
  };

  export const showQuizhook = () => {
    const { quizs, deleteQuiz } = useContext(QuizContext);
    const navigate = useNavigate();
  
    const startEditing = (id: number) => {
      navigate(`/edit/${id}`);
    };
  
    return {
      quizs,
      deleteQuiz,
      startEditing,
    };
  };