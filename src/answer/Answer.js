import cross from "./images/cross.png";
import btnTryagain from "../shared/images/btn_tryagain_p.png";
import btnQuestionList from "./images/btn_questionlist.png";
export default function Answer({
  progress,
  setProgress,
  questions,
  setQuestions,
  handleTryAgain,
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
        <div className="answer-scrollbox">
          <div className="title"></div>
          <div className="answer-list">
            {questions.map((item, index) => (
              <div key={`q-${index}`} className="answer-box">
                <button key={index} onClick={() => handleToggle(index)}>
                  <h3>Q.{item.question}</h3>
                  {item.toggle === false ? (
                    <svg
                      clipRule="evenodd"
                      fillRule="evenodd"
                      strokeLinejoin="round"
                      strokeMiterlimit="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#444"
                        d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"
                      />
                    </svg>
                  ) : (
                    <svg
                      clipRule="evenodd"
                      fillRule="evenodd"
                      strokeLinejoin="round"
                      strokeMiterlimit="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#444"
                        d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"
                      />
                    </svg>
                  )}
                  <div className="cross">
                    {item.score === false ? (
                      <img src={cross} alt="錯誤標示"></img>
                    ) : (
                      ""
                    )}
                  </div>
                </button>
                {item.toggle === false ? (
                  ""
                ) : (
                  <p className="p">A:{item.parse}</p>
                )}
              </div>
            ))}
          </div>
          <div className="button-box">
            <button
              className="button-question-list"
              onClick={handleQuestionList}
            >
              <img src={btnQuestionList} alt="檢定題庫"></img>
            </button>
            <button className="button-tryagain" onClick={handleTryAgain}>
              <img src={btnTryagain} alt="再測一次"></img>
            </button>
          </div>
        </div>
      </div>
    )
  );
}
