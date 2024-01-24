import { useState } from "react";
import Landing from "./Landing";
import Quiz from "./Quiz";
import Result from "./Result";

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
