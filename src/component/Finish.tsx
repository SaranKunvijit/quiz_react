import { FC } from "react";
type QuizFinishProps = {
    score: number;
    totalQuiz: number;
    reset: () => void;
}
export const Finish: FC<QuizFinishProps> = ({score , totalQuiz, reset}) => {
    return (
        <>
            <h2>ยินดีด้วยคุณทำสำเร็จ!</h2>
            <p>
                คะแนนของคุณ {score} / {totalQuiz}
            </p>
            <button onClick={reset}>เริ่มใหม่</button>
        </>
    )


}