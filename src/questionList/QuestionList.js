import { useEffect, useState } from "react";
import { allQuestions } from "../question";
import tagBehavior from "./images/tag_p_behavior.png";
import tagFood from "./images/tag_p_food.png";
import tagItem from "./images/tag_p_item.png";
import btnShare from "../shared/images/btn_share_p.png";
import btnTryagain from "../shared/images/btn_tryagain_p.png";
export default function QuestionList({ progress }) {
  const [all, setAll] = useState(allQuestions);
  const [tag, setTag] = useState("");

  const handleTag = (e) => {
    setTag(e);
  };
  useEffect(() => {
    const scrollView = (e) => {
      const element = document.getElementById(e);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    };
    if (tag !== "") {
      scrollView(tag);
      setTag("");
    }
  }, [tag]);

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
        <div className="nav">
          <div className="title"></div>
          <div className="tag-box">
            <button className="tag" onClick={() => handleTag("behavior")}>
              <img src={tagBehavior} alt="標籤_貓行為"></img>
            </button>
            <button className="tag" onClick={() => handleTag("food")}>
              <img src={tagFood} alt="標籤_貓飲食"></img>
            </button>
            <button className="tag" onClick={() => handleTag("item")}>
              <img src={tagItem} alt="標籤_貓用品"></img>
            </button>
          </div>
        </div>
        <div className="question-list">
          <div id="behavior" className="question-container">
            <div className="border-top">
              <img src={tagBehavior} alt="標籤_貓行為"></img>
            </div>
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
          <div id="food" className="question-container">
            <div className="border-top">
              <img src={tagFood} alt="標籤_貓飲食"></img>
            </div>
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
          <div id="item" className="question-container">
            <div className="border-top">
              <img src={tagItem} alt="標籤_貓用品"></img>
            </div>
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
                          {item.toggle === false ? (
                            <svg
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              stroke-linejoin="round"
                              stroke-miterlimit="2"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z" />
                            </svg>
                          ) : (
                            <svg
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              stroke-linejoin="round"
                              stroke-miterlimit="2"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
                            </svg>
                          )}
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
          <button className="button-share">
            <img src={btnShare} alt="分享好友"></img>
          </button>
          <button className="button-tryagain">
            <img src={btnTryagain} alt="再測一次"></img>
          </button>
        </div>
      </div>
    )
  );
}
