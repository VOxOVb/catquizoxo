import { useEffect, useState } from "react";
import cat00 from "./images/cat-00.png";
import btnP from "./images/btn_p_index.png";
export default function Landing({ progess, setProgess }) {
  const [btnClass, setBtnClass] = useState("btn btn-blank");
  const handleStartBtn = () => {
    setBtnClass("btn btn-start");
    setTimeout(() => {
      setProgess("startQuiz");
    }, "850");
  };

  useEffect(() => {
    progess === "result" && setBtnClass("btn btn-blank");
  }, [progess]);

  return (
    progess === "landing" && (
      <>
        <div className="landing">
          <div className="subtitle"></div>
          <div className="title"></div>
          <main>
            <img className="cat" src={cat00} alt="貓"></img>
          </main>
          <p className="p">
            你自認是專業貓奴嗎？
            <br />
            貓奴檢定考，等你來挑戰！
          </p>
          <button className={btnClass} onClick={handleStartBtn}>
            <img src={btnP} alt="開始檢定"></img>
          </button>
        </div>
      </>
    )
  );
}
