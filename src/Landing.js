import cat from "./images/cat-00.png";
import btn_p_index from "./images/btn_p_index.png";
import { useEffect, useState } from "react";
export default function Landing({ progess, setProgess }) {
  const [btnClass, setBtnClass] = useState("btn btn-blank");
  const handleStartBtn = () => {
    setBtnClass("btn btn-start");
    setTimeout(() => {
      setProgess("startQuiz");
    }, "850");
  };

  // useEffect(() => {
  //   progess === "result" && setBtnClass("btn btn-blank");
  // },[progess])

  return (
    progess === "landing" && (
      <>
        <div className="landing">
          <div className="subtitle"></div>
          <div className="title"></div>
          <main>
            <img className="cat" src={cat} alt="貓"></img>
          </main>
          <p className="p">
            你自認是專業貓奴嗎？
            <br />
            貓奴檢定考，等你來挑戰！
          </p>
          <button className={btnClass} onClick={handleStartBtn}>
            <img src={btn_p_index} alt="開始檢定"></img>
          </button>
        </div>
      </>
    )
  );
}
