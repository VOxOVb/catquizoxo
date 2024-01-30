import { behaviorQ, itemQ, foodQ } from "../question";
import tagBehavior from "./images/tag_p_behavior.png";
import tagFood from "./images/tag_p_food.png";
import tagItem from "./images/tag_p_item.png";
export default function QuestionList({progress}) {
  return progress === "questionList" && (
    <div className="questionlist">
      <div className="title"></div>
      <div className="tag-box">
        <button className="tag"><img src={tagBehavior} alt="標籤_貓行為"></img></button>
        <button className="tag"><img src={tagFood} alt="標籤_貓飲食"></img></button>
        <button className="tag"><img src={tagItem} alt="標籤_貓用品"></img></button>
      </div>
    </div>
  );
}
