import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { QuestionContextType, Question, QuizForm } from "../types/question";
import { createQuiz, deleteQuiz, getQuizzes, updateQuiz } from "../api";

export const QuizContext = createContext<QuestionContextType>({
  quizs: [],
  createQuiz: () => {},
  editQuiz: () => {},
  deleteQuiz: () => {},
  quizIndex: 0,
  score: 0,
  handleAnswer: () => {},
  resetQuiz: () => {},
});

const QuizProvider: FC<PropsWithChildren> = ({ children }) => {
  const [quizs, setQuizs] = useState<Question[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);

  // ดึงข้อมูลคำถามจาก API
  useEffect(() => {
    fetchQuizzes();
  }, []);

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === quizs[quizIndex]?.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    // ถ้ามีคำถามเหลือให้เพิ่ม Index
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

  const fetchQuizzes = async () => {
    try {
      const response = await getQuizzes();
      setQuizs(response.data); // ตั้งค่าคำถามที่ได้จาก API
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

  const quizValue = {
    quizs,
    createQuiz: (formValue: QuizForm) => createQuizFunc(formValue),
    editQuiz: (formValue: Question) => editQuizFunc(formValue),
    deleteQuiz: (id: number) => deleteQuizFun(id),
    quizIndex,
    score,
    handleAnswer,
    resetQuiz,
  };

  return <QuizContext.Provider value={quizValue}>{children}</QuizContext.Provider>;
};

export default QuizProvider;
