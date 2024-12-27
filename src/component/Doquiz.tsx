import { FC } from "react";

type DoquizProps = {
  numberquiz: number;
  question: string;
  options: string[];
  answer: (selectedAnswer: string) => void;
}
export const Doquiz:FC<DoquizProps> = ({numberquiz,question, options,answer}) => {
  return(
    <div className="quiz-question">
      <h2>{numberquiz} {question}</h2>
      {options.map((option, index) => (
        <button className="answer" key={index} onClick={() => answer(option)}>
          {option}
        </button>
      ))}
    </div>
  )
}