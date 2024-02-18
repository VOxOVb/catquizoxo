import { useEffect, useState } from "react";
import { questionMerge, questionPick } from "./question";
import Landing from "./landing/Landing";
import Quiz from "./quiz/Quiz";
import Result from "./result/Result";
import Answer from "./answer/Answer";
import QuestionList from "./questionList/QuestionList";

export default function App() {
  const [progress, setProgress] = useState("landing");
  const [btnClass, setBtnClass] = useState("btn btn-blank");
  const [step, setStep] = useState(0);
  const [isActive, setIsActive] = useState("");
  const questionlist = questionPick(questionMerge, 9);
  const [questions, setQuestions] = useState(questionlist);
  const [score, setScore] = useState([]);
  const [totalScore, setTotalScore] = useState(null);
  const [reward, setReward] = useState(null);
  const [imgPick, setImgPick] = useState(0);
  const [imgUpload, setImgUpload] = useState(null);
  const [nickname, setNickname] = useState("");

  const handleTryAgain = () => {
    setProgress("landing");
    setBtnClass("btn btn-blank");
    setQuestions(questionlist);
    setScore([]);
    setStep(0);
    setIsActive("");
    setTotalScore(null);
    setReward(null);
    setImgPick(0);
    setImgUpload(null);
    setNickname("");
  };
  return (
    <div className="container">
      <Landing
        progress={progress}
        setProgress={setProgress}
        btnClass={btnClass}
        setBtnClass={setBtnClass}
      />
      <Quiz
        progress={progress}
        setProgress={setProgress}
        questions={questions}
        setScore={setScore}
        step={step}
        setStep={setStep}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <Result
        progress={progress}
        setProgress={setProgress}
        score={score}
        setScore={setScore}
        questions={questions}
        setQuestions={setQuestions}
        handleTryAgain={handleTryAgain}
        totalScore={totalScore}
        setTotalScore={setTotalScore}
        reward={reward}
        setReward={setReward}
        imgPick={imgPick}
        setImgPick={setImgPick}
        imgUpload={imgUpload}
        setImgUpload={setImgUpload}
        nickname={nickname}
        setNickname={setNickname}
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
