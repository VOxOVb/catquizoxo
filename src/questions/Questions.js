import cross from "./images/cross.png";
export default function Questions({
  progress,
  setProgress,
  questions,
  setQuestions,
  score,
}) {
  const handleToggle = () => {};

  return (
    progress === "questions" && (
      <div className="questions">
        <div className="title"></div>
        <div className="questions-list">
          {questions.map((item, index) => (
            <div key={`q-${index}`} className="questions-box">
              <h3>
                Q.{item.question}
                <button
                  key={index}
                  onClick={handleToggle({ index })}
                  style={{ fontSize: "25px", color: "#444" }}
                >
                  {item.toggle === false ? "⯈" : "⯆"}
                </button>
                {item.score === false ? (
                  <img src={cross} alt="錯誤標示"></img>
                ) : (
                  ""
                )}
              </h3>
              <p className="p">A:{item.parse}</p>
            </div>
          ))}
        </div>
      </div>
    )
  );
}
