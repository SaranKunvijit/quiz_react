import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateQuizPage } from "./page/CreateQuizPage";
import { ShowQuizPage } from "./page/ShowQuizPage";
import { DoQuizPage } from "./page/DoQuizPage";
import MainLayout from "./component/Layouts/main";
import EditQuizPage from "./page/EditQuizPage";

const Router = () => {
    return <BrowserRouter>
        <Routes>
            {/* ตั้งค่าให้หน้าเริ่มต้นเป็น CreateQuizPage */}
            <Route element={<MainLayout />}>
                <Route
                    path="/"
                    element={
                        <CreateQuizPage />
                    }
                />
                <Route path="/quiz-create" element={<CreateQuizPage />}/>
                <Route
                    path="/show-quiz"
                    element={
                        <ShowQuizPage />
                    }
                />
                <Route
                    path="/edit/:id"
                    element={
                        <EditQuizPage />
                    }
                />
                <Route path="/do-quiz" element={<DoQuizPage />} />
            </Route>
            {/* <Route path="/do-quiz" element={<DoQuizPage quizs={quizs} />} />
            <Route
                path="/quiz-create"
                element={
                    <CreateQuizPage
                        quizs={quizs}
                        setQuizs={setQuizs}
                        editQuizId={editQuizId}
                        newQuizText={newQuizText}
                        setNewQuizText={setNewQuizText}
                        newOption={newOption}
                        setNewOption={setNewOption}
                        correctAnswers={correctAnswers}
                        setCorrectAnswers={setCorrectAnswers}
                    />
                }
            />
             */}
        </Routes>
    </BrowserRouter>
}

export default Router;