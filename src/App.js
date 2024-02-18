import { useEffect, useState } from "react";
import { questionMerge, questionPick } from "./question";
import Landing from "./landing/Landing";
import Quiz from "./quiz/Quiz";
import Result from "./result/Result";
import Answer from "./answer/Answer";
import QuestionList from "./questionList/QuestionList";

export default function App() {
  const [progress, setProgress] = useState(null);
  const questionlist = questionPick(questionMerge, 9);
  const [questions, setQuestions] = useState(questionlist);
  const [score, setScore] = useState([]);

  const handleTryAgain = () => {
    setProgress("landing");
  };
  useEffect(() => {
    if (progress === "landing") {
      setQuestions(questionlist);
      setScore([]);
    }
  }, [progress]);

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
        handleTryAgain={handleTryAgain}
      />
      <Answer
        progress={progress}
        setProgress={setProgress}
        questions={questions}
        setQuestions={setQuestions}
        handleTryAgain={handleTryAgain}
      />
      <QuestionList progress={progress} handleTryAgain={handleTryAgain} />
    </div>
  );
}
