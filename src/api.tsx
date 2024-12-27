import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/', // URL ของ Backend
});

// ฟังก์ชันสำหรับเพิ่มคำถามใหม่
export const createQuiz = async (quizData: {
  quizText: string;
  options: string[];
  correctAnswer: string;
}) => {
  return await api.post('quiz', quizData); // ส่งคำถามใหม่ไปที่ Backend
};

// ฟังก์ชันสำหรับดึงข้อมูลคำถามทั้งหมด
export const getQuizzes = async () => {
  return await api.get('quiz'); // ดึงคำถามทั้งหมดจาก Backend
};

// ฟังก์ชันสำหรับอัปเดตคำถาม
export const updateQuiz = async (quizData: {
  id: number;
  quizText: string;
  options: string[];
  correctAnswer: string;
}) => {
  return await api.put(`quiz/${quizData.id}`, quizData); // อัปเดตคำถาม
};

// ฟังก์ชันสำหรับลบคำถาม
export const deleteQuiz = async (id: number) => {
  return await api.delete(`quiz/${id}`); // ลบคำถาม
};
