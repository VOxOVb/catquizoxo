import { useEffect, useState } from "react";
import { randomNickname } from "./randomNickname";
export default function Result({ progess, setProgess, score }) {
  const [totalScore, setTotalScore] = useState(null);
  const [reward, setReward] = useState(null);
  const [imgPick, setImgPick] = useState(0);
  const [imgUpload, setImgUpload] = useState(null);
  const [nickname, setNickname] = useState("");

  const calcScore = (score) => {
    let points = score.filter((i) => i === false);
    points.length === 0
      ? (points = 100)
      : (points = Math.floor((10 - points.length + Math.random()) * 10));
    return points;
  };

  useEffect(() => {
    if (score.length === 9) {
      setTotalScore(calcScore(score));
    }
  }, [score]);
  useEffect(() => {
    totalScore &&
      (totalScore < 65
        ? setReward("copper")
        : totalScore < 85
        ? setReward("silver")
        : setReward("gold"));
    totalScore && nickname !== "" && setNickname(randomNickname);
  }, [totalScore, nickname]);

  const handlePrevious = () => {
    if (imgPick > 0) setImgPick((imgPick) => imgPick - 1);
  };
  const handleNext = () => {
    if (imgPick < 5) setImgPick((imgPick) => imgPick + 1);
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        console.log(event);
        const dataUrl = event.target.result;
        setImgPick(5);
        setImgUpload(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleInput = (e) => {
    setNickname(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setProgess("result");
    nickname === "" && setNickname(randomNickname);
  };

  return progess === "quizEnd" ? (
    <div className="quizend">
      <div className="title"></div>
      <form onSubmit={handleSubmit}>
        <main className="photo">
          {Array.from({ length: 6 }, (_, i) => i).map(
            (_, j) =>
              j === imgPick &&
              (j !== 5 ? (
                <img
                  key={`image-${j}`}
                  src="images/img_border.png"
                  alt="選擇中的圖片"
                  style={{ backgroundImage: `url(images/img_0${j}.jpg)` }}
                ></img>
              ) : (
                <label
                  key={`label-${j}`}
                  htmlFor="fileInput"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    key={`image-${j}`}
                    src="images/img_border.png"
                    alt="上傳圖片"
                    style={{
                      backgroundImage:
                        imgUpload !== null
                          ? `url(${imgUpload})`
                          : `url(images/img_0${j}.jpg)`,
                    }}
                  ></img>
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                </label>
              ))
          )}
        </main>
        <div className="btn">
          <button
            type="button"
            className="btn-prev"
            onClick={handlePrevious}
          ></button>
          <button
            type="button"
            className="btn-next"
            onClick={handleNext}
          ></button>
        </div>
        <h3 className="question">輸入暱稱並決定證書照片吧!</h3>
        <input
          className="int p"
          type="text"
          placeholder="至多5個字的暱稱_"
          value={nickname}
          onChange={handleInput}
        ></input>
        <button className="submit" type="submit">
          <img src="images/btn_result_p.png" alt="看結果"></img>
        </button>
      </form>
    </div>
  ) : (
    progess === "result" && (
      <div className="result">
        <div className="title"></div>
        <div className="license">
          <h3 className="license-nickname">{nickname}</h3>
          <div className="license-title"></div>
          <div className="license-name"></div>
          <div className="license-star"></div>
          <div className="license-loading">
            <div></div>
          </div>
          <div
            className="license-reward"
            style={{ backgroundImage: `url(images/reward_${reward}.png)` }}
          >
            <img
              src="images/img_border.png"
              alt="選擇中的圖片"
              style={{
                backgroundImage:
                  imgUpload !== null
                    ? `url(${imgUpload})`
                    : `url(images/img_0${imgPick}.jpg)`,
              }}
            ></img>
          </div>
          <img
            className="license-reward-name"
            src={`images/result_${reward}_p.png`}
            alt="稱號"
            style={{ backgroundImage: `url(images/result_${reward}_bg.png)` }}
          ></img>
          <div className="license-score"></div>
          <div className="license-textbox">
            <small>你拿到了{totalScore}分!</small>
            {reward === "copper" && (
              <>
                <small>差強人意...多多補充相關知識</small>
                <small>和喵星人的相處能更融洽喔~</small>
                <small>加油好嗎(=^-ω-^=)</small>
              </>
            )}
            {reward === "silver" && (
              <>
                <small>還不錯的成績</small>
                <small>獲取更多貓知識</small>
                <small>提高喵星人好感度吧!(=^ΦωΦ^=)</small>
              </>
            )}
            {reward === "gold" &&
              (totalScore === 100 ? (
                <>
                  <small>太厲害了!滿分!!</small>
                  <small>喵星人能和你在一起</small>
                  <small>太幸福啦!└(=^･ω･^=)┐</small>
                </>
              ) : (
                <>
                  <small>獲得高分!</small>
                  <small>想必是個和喵星人相處融洽的優秀貓奴</small>
                  <small>要好好愛他們喔!ヽ(=^･ω･^=)丿</small>
                </>
              ))}
          </div>
        </div>
        <div className="button-box">
          <button className="button-share">
            <img src="images/btn_share_p.png" alt="分享好友"></img>
          </button>
          <button className="button-question">
            <img src="images/btn_question_p.png" alt="題目解析"></img>
          </button>
          <button
            className="button-tryagain"
            onClick={() => setProgess("landing")}
          >
            <img src="images/btn_tryagain_p.png" alt="再測一次"></img>
          </button>
        </div>
      </div>
    )
  );
}
