import { FC, useState } from "react";
import '../Css/quizform.css'
type QuizFormProps = {
  quizText?: string;
  options?: string[];
  correctAnswer?: string;
  OnSubmit: (quizText: string, options: string[], correctAnswer: string) => void;
  isEdit: boolean;
};

export const QuizForm: FC<QuizFormProps> = ({
  quizText = "", // ค่าปริยายเป็นค่าว่างเพื่อให้ไม่เกิดปัญหาถ้าไม่มีข้อมูล
  options = ["", "", "", ""], 
  correctAnswer = "",
  OnSubmit,
  isEdit,
}) => {
  const [currentQuizText, setCurrentQuizText] = useState(quizText); // 
  const [currentOptions, setCurrentOptions] = useState(options); // 
  const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState(correctAnswer);


  const handleSubmit = () => {
    OnSubmit(currentQuizText, currentOptions, currentCorrectAnswer); // ส่งข้อมูลเมื่อกรอกเสร็จ
  };

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...currentOptions];
    updatedOptions[index] = value; // อัปเดตค่าตัวเลือกที่เลือก
    setCurrentOptions(updatedOptions);
  };

  return (
    <div className="con">
      <h3 className="heads">{isEdit ? 'แก้ไขคำถาม' : 'สร้างคำถาม'}</h3>

      <input
        type="text"
        placeholder="คำถาม"
        value={currentQuizText} // ตั้งค่า value ให้เป็น state
        onChange={(e) => setCurrentQuizText(e.target.value)} // แก้ไขเมื่อพิมพ์ใน input
      />
      <br />

      {currentOptions.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            name="correctAnswer"
            value={option}
            checked={currentCorrectAnswer === option} // ตรวจสอบว่าตัวเลือกนี้เป็นคำตอบที่ถูกต้องหรือไม่
            onChange={() => setCurrentCorrectAnswer(option)} // อัปเดตคำตอบที่ถูกต้อง
          />
          <input
            type="text"
            placeholder="ตัวเลือก"
            value={option} // ตั้งค่า value ของตัวเลือกเป็นค่าใน state
            onChange={(e) => handleOptionChange(index, e.target.value)} // แก้ไขตัวเลือก
          />
        </label>
      ))}
      <br />
      <button onClick={handleSubmit}>
        {isEdit ? "อัปเดตคำถาม" : "สร้างคำถาม"}
      </button>
    </div>
  );
};
