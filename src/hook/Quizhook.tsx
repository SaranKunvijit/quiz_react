import { useState, useEffect } from "react";
import { createQuiz, deleteQuiz, getQuizzes, updateQuiz } from "../api";
import { Question, QuizForm } from "../types/question";

export const Quizhook = () => {
  const [quizs, setQuizs] = useState<Question[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const response = await getQuizzes();
      setQuizs(response.data);
    } catch (error) {
      console.error("Error fetching quizzes", error);
    }
  };

  const createQuizFunc = async (formValue: QuizForm) => {
    try {
      await createQuiz(formValue);
      fetchQuizzes();
    } catch (error) {
      console.error(error);
    }
  };

  const editQuizFunc = async (formValue: Question) => {
    try {
      await updateQuiz(formValue);
      fetchQuizzes();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteQuizFun = async (id: number) => {
    try {
      await deleteQuiz(id);
      setQuizs(quizs.filter((q) => q.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === quizs[quizIndex]?.correctAnswer) {
      setScore((prev) => prev + 1);
    }
    if (quizIndex + 1 < quizs.length) {
      setQuizIndex((prev) => prev + 1);
    } else {
      setQuizIndex(quizs.length);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setQuizIndex(0);
  };

  return {
    quizs,
    createQuiz: createQuizFunc,
    editQuiz: editQuizFunc,
    deleteQuiz: deleteQuizFun,
    quizIndex,
    score,
    handleAnswer,
    resetQuiz,
  };
};
