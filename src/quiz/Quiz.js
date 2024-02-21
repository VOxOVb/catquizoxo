import { useEffect, useMemo, useState } from "react";
import { aAni, barAni } from "../config";
import cat01 from "./images/cat-01.png";
import cat02 from "./images/cat-02.png";
import cat03 from "./images/cat-03.png";

export default function Quiz({
  progress,
  setProgress,
  questions,
  setScore,
  step,
  setStep,
  isActive,
  setIsActive,
}) {
  const [text, setText] = useState(step);
  const questionList = useMemo(() => {
    return [
      ...questions,
      {
        tag: "",
        question: "",
        options: [
          { id: 1, text: "", isCorrect: false },
          { id: 2, text: "", isCorrect: false },
        ],
        parse: "",
      },
    ];
  }, [questions]);
  useEffect(() => {
    const imgList = [cat01, cat02, cat03];
    imgList.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  useEffect(() => {
    if (step !== questionList.length)
      setTimeout(() => setText((text) => (text = step)), 660);
    if (text === questionList.length - 1 && progress === "startQuiz")
      setTimeout(() => setProgress("quizEnd"), 300);
  }, [step, text, questionList, progress, setProgress]);

  const handleClickAnswer = (e, key) => {
    setScore((score) => [...score, e]);
    setStep((step) => step + 1);
    setIsActive((isActive) => key);
  };

  return (
    progress === "startQuiz" && (
      <div className="quiz">
        <Slider step={step} text={text} />
        <Cat step={step} questionList={questionList} />
        <QuestionItem
          questionList={questionList}
          handleClickAnswer={handleClickAnswer}
          text={text}
          isActive={isActive}
        />
      </div>
    )
  );
}
function Slider({ step, text }) {
  return (
    <nav className="slider-bar">
      <div className="slider">
        <div
          className="process-bar"
          style={
            step > 0
              ? {
                  width: `${text * 10}%`,
                  transition: "width 0.35s ease-in-out",
                }
              : { opacity: "0" }
          }
        ></div>
        <div
          key={step}
          className="can"
          style={{
            left: `${text * 10 - 2}%`,
            transition: "left 0.35s ease-in-out",
            animation: step > 0 ? barAni[1] : barAni[0],
          }}
        ></div>
      </div>
    </nav>
  );
}
function Cat({ step, questionList }) {
  return (
    <main>
      {step < questionList.length / 3 - 1 && (
        <img className="cat" src={cat01} alt="貓"></img>
      )}
      {step >= questionList.length / 3 - 1 &&
        step < (questionList.length / 3) * 2 - 1 && (
          <img className="cat" src={cat02} alt="貓"></img>
        )}
      {step >= (questionList.length / 3) * 2 - 1 &&
        step <= questionList.length && (
          <img className="cat" src={cat03} alt="貓"></img>
        )}
    </main>
  );
}
function QuestionItem({ questionList, handleClickAnswer, text, isActive }) {
  const qOption = questionList[text].options;

  return text === questionList.length - 1 ? (
    ""
  ) : (
    <>
      {/* <div className="desktop">
        <h3 key={text} className="question">
          {questionList[text].question}
        </h3>
        {Array.from({ length: 2 }, (_, i) => i).map((_, j) => (
          <button
            key={`${text}${j}`}
            className={
              `${text}${j}` === isActive
                ? `handle-click answer-${j} p`
                : `answer-${j} p`
            }
            onClick={() =>
              handleClickAnswer(qOption[j].isCorrect, `${text}${j}`)
            }
            style={{ cursor: "pointer" }}
          >
            {qOption[j].text}
          </button>
        ))}
      </div> */}
        <ul>
          <h3 key={text} className="question">
            {questionList[text].question}
          </h3>
          {Array.from({ length: 2 }, (_, i) => i).map((_, j) => (
            <li
              key={`${text}${j}`}
              className={`${text}${j}` === isActive ? "handle-click" : ""}
              onClick={() =>
                handleClickAnswer(qOption[j].isCorrect, `${text}${j}`)
              }
            >
              <button
                className={`answer-${j} p`}
                style={{ animation: aAni.at(j)[0] }}
              >
                {qOption[j].text}
              </button>
            </li>
          ))}
        </ul>
    </>
  );
}
