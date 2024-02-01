import cross from "./images/cross.png";
import btnTryagain from "../shared/images/btn_tryagain_p.png";
import btnQuestionList from "./images/btn_questionlist.png";
export default function Answer({
  progress,
  setProgress,
  questions,
  setQuestions,
}) {
  const handleToggle = (index) => {
    setQuestions((questions) =>
      questions.map((item) =>
        index === item.id ? { ...item, toggle: !item.toggle } : item
      )
    );
  };
  const handleQuestionList = () => {
    setProgress("questionList");
  };

  return (
    progress === "answer" && (
      <div className="answer">
        <div className="title"></div>
        <div className="answer-list">
          {questions.map((item, index) => (
            <div key={`q-${index}`} className="answer-box">
              <h3>
                Q.{item.question}
                <span>
                <button
                  key={index}
                  onClick={() => handleToggle(index)}
                >
                  {item.toggle === false ? "\u2BC8" : "\u2BC6"}
                </button>
                </span>
                {item.score === false ? (
                  <img src={cross} alt="錯誤標示"></img>
                ) : (
                  ""
                )}
              </h3>
              {item.toggle === false ? "" : <p className="p">A:{item.parse}</p>}
            </div>
          ))}
        </div>
        <div className="button-box">
          <button className="button-question-list" onClick={handleQuestionList}>
            <img src={btnQuestionList} alt="檢定題庫"></img>
          </button>
          <button className="button-tryagain">
            <img src={btnTryagain} alt="再測一次"></img>
          </button>
        </div>
      </div>
    )
  );
}
