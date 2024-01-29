import { useState } from "react";
import { questionlist } from "./question";
import Landing from "./landing/Landing";
import Quiz from "./quiz/Quiz";
import Result from "./result/Result";
import Questions from "./questions/Questions";

export default function App() {
  // const [progress, setProgress] = useState("startQuiz");
  // const [progress, setProgress] = useState("result");
  // const [progress, setProgress] = useState("quizEnd");
  const [progress, setProgress] = useState("landing");
  const [questions, setQuestions] = useState(questionlist);
  const [score, setScore] = useState([]);

  return (
    <div className="container">
      <Landing progress={progress} setProgress={setProgress} />
      <Quiz
        progress={progress}
        setProgress={setProgress}
        questions={questions}
        setScore={setScore}
      />
      <Result
        progress={progress}
        setProgress={setProgress}
        score={score}
        setScore={setScore}
        questions={questions}
        setQuestions={setQuestions}
      />
      <Questions
        progress={progress}
        setProgress={setProgress}
        questions={questions}
        score={score}
      />
    </div>
  );
}
