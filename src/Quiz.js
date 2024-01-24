import { useEffect, useState } from "react";
import { qAni, aAni, barAni } from "./config";
import { randomQuestionList } from "./question";

export default function Quiz({ progess, setProgess, setScore }) {
  const [step, setStep] = useState(0);
  const [text, setText] = useState(step);
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    if (step !== randomQuestionList.length)
      setTimeout(() => setText((text) => (text = step)), 660);
    if (text === randomQuestionList.length - 1)
      setTimeout(() => setProgess("quizEnd"), 300);
  }, [step, text, setProgess]);

  const handleClickAnswer = (e, key) => {
    setScore((score) => [...score, e]);
    setStep((step) => step + 1);
    setIsActive((isActive) => key);
  };

  return (
    progess === "startQuiz" && (
      <div className="quiz">
        <Slider step={step} text={text} />
        <Cat step={step} randomQuestionList={randomQuestionList} />
        <QuestionItem
          randomQuestionList={randomQuestionList}
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
function Cat({ step, randomQuestionList }) {
  return (
    <main>
      {step < randomQuestionList.length / 3 - 1 && (
        <img className="cat" src="images/cat-01.png" alt="貓"></img>
      )}
      {step >= randomQuestionList.length / 3 - 1 &&
        step < (randomQuestionList.length / 3) * 2 - 1 && (
          <img className="cat" src="images/cat-02.png" alt="貓"></img>
        )}
      {step >= (randomQuestionList.length / 3) * 2 - 1 &&
        step <= randomQuestionList.length && (
          <img className="cat" src="images/cat-03.png" alt="貓"></img>
        )}
    </main>
  );
}
function QuestionItem({
  randomQuestionList,
  handleClickAnswer,
  text,
  isActive,
}) {
  const qOption = randomQuestionList[text].options;

  return text === randomQuestionList.length - 1 ? (
    ""
  ) : (
    <ul>
      <h3 key={text} className="question" style={{ animation: `${qAni[0]}` }}>
        {randomQuestionList[text].question}
      </h3>
      {Array.from({ length: 2 }, (_, i) => i).map((_, j) => (
        <li
          key={`${text}${j}`}
          className={`${text}${j}` === isActive ? "handle-click" : ""}
          onClick={() => handleClickAnswer(qOption[j].isCorrect, `${text}${j}`)}
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
  );
}
