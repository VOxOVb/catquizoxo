import { useState } from "react";
import Landing from "./landing/Landing";
import Quiz from "./quiz/Quiz";
import Result from "./result/Result";

export default function App() {
  // const [progess, setProgess] = useState("startQuiz");
  // const [progess, setProgess] = useState("result");
  // const [progess, setProgess] = useState("quizEnd");
  const [progess, setProgess] = useState("landing");
  const [score, setScore] = useState([]);

  return (
    <div className="container">
      <Landing progess={progess} setProgess={setProgess} />
      <Quiz progess={progess} setProgess={setProgess} setScore={setScore} />
      <Result
        progess={progess}
        setProgess={setProgess}
        score={score}
        setScore={setScore}
      />
    </div>
  );
}
