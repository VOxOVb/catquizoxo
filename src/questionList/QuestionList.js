import { useState } from "react";
import { allQuestions } from "../question";
import tagBehavior from "./images/tag_p_behavior.png";
import tagFood from "./images/tag_p_food.png";
import tagItem from "./images/tag_p_item.png";
import btnTryagain from "../shared/images/btn_tryagain_p.png";
export default function QuestionList({ progress }) {
  const [all, setAll] = useState(allQuestions);
  const handleToggle = (index) => {
    setAll((all) =>
      all.map((item) =>
        index === item.id ? { ...item, toggle: !item.toggle } : item
      )
    );
  };

  return (
    progress === "questionList" && (
      <div className="questionlist">
        <div className="title"></div>
        <div className="tag-box">
          <button className="tag">
            <img src={tagBehavior} alt="標籤_貓行為"></img>
          </button>
          <button className="tag">
            <img src={tagFood} alt="標籤_貓飲食"></img>
          </button>
          <button className="tag">
            <img src={tagItem} alt="標籤_貓用品"></img>
          </button>
        </div>
        <div className="question-list">
          <div className="question-container">
          <div className="border-top"><img src={tagBehavior} alt="標籤_貓行為"></img></div>
          <div className="border-middle">
            {all.map(
              (item, index) =>
                item.tag === "behavior" && (
                  <div key={`q-${index}`} className="question-box">
                    <h3>
                      Q.{item.question}
                      <button
                        key={index}
                        onClick={() => handleToggle(index)}
                        style={{ fontSize: "25px", color: "#444" }}
                      >
                        {item.toggle === false ? "⯈" : "⯆"}
                      </button>
                    </h3>

                    {item.toggle === false ? (
                      ""
                    ) : (
                      <p className="p">A:{item.parse}</p>
                    )}
                  </div>
                )
            )}
          </div>
          <div className="border-bottom"></div>
          </div>
          <div className="question-container">
          <div className="border-top"><img src={tagFood} alt="標籤_貓飲食"></img></div>
          <div className="border-middle">
            {all.map(
              (item, index) =>
                item.tag === "food" && (
                  <div key={`q-${index}`} className="question-box">
                    <h3>
                      Q.{item.question}
                      <button
                        key={index}
                        onClick={() => handleToggle(index)}
                        style={{ fontSize: "25px", color: "#444" }}
                      >
                        {item.toggle === false ? "⯈" : "⯆"}
                      </button>
                    </h3>

                    {item.toggle === false ? (
                      ""
                    ) : (
                      <p className="p">A:{item.parse}</p>
                    )}
                  </div>
                )
            )}
          </div>
          <div className="border-bottom"></div>
          </div>
          <div className="question-container">
          <div className="border-top"><img src={tagItem} alt="標籤_貓用品"></img></div>
          <div className="border-middle">
            {all.map(
              (item, index) =>
                item.tag === "item" && (
                  <div key={`q-${index}`} className="question-box">
                    <h3>
                      Q.{item.question}
                      <button
                        key={index}
                        onClick={() => handleToggle(index)}
                        style={{ fontSize: "25px", color: "#444" }}
                      >
                        {item.toggle === false ? "⯈" : "⯆"}
                      </button>
                    </h3>

                    {item.toggle === false ? (
                      ""
                    ) : (
                      <p className="p">A:{item.parse}</p>
                    )}
                  </div>
                )
            )}
          </div>
          <div className="border-bottom"></div>
          </div>
        </div>
        <div className="button-box">
        <button className="button-tryagain">
            <img src={btnTryagain} alt="再測一次"></img>
          </button>
        </div>
      </div>
    )
  );
}
