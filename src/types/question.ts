export type QuizForm = {
    quizText: string;
    options: string[];
    correctAnswer: string;
}

export type Question = { id: number } & QuizForm;

// export type Question = {
//     id: number;
//     quizText: string;
//     options: string[];
//     correctAnswer: string;
// };

export type QuestionContextType = {
    quizs: Question[],
    createQuiz: (formValue: QuizForm) => void;
    editQuiz: (formValue: Question) => void;
    deleteQuiz: (id: number) => void;
    quizIndex: number;
    score: number;
    handleAnswer: (selectedAnswer : string) => void;
    resetQuiz: ()=> void;
 
}