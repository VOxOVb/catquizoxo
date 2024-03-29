import { useEffect, useMemo, useRef } from "react";
import html2canvas from "html2canvas";
import { randomNickname } from "../randomNickname";
import border from "./images/img_border.png";
import result from "./images/btn_result_p.png";
import photo00 from "./images/img_00.jpg";
import photo01 from "./images/img_01.jpg";
import photo02 from "./images/img_02.jpg";
import photo03 from "./images/img_03.jpg";
import photo04 from "./images/img_04.jpg";
import photo05 from "./images/img_05.jpg";
import photoDefault from "./images/img_default.png";
import resultBg from "./images/result_bg.png";
import copper from "./images/reward_copper.png";
import silver from "./images/reward_silver.png";
import gold from "./images/reward_gold.png";
import copperP from "./images/result_copper_p.png";
import silverP from "./images/result_silver_p.png";
import goldP from "./images/result_gold_p.png";
import copperBg from "./images/result_copper_bg.png";
import silverBg from "./images/result_silver_bg.png";
import goldBg from "./images/result_gold_bg.png";
import imgbox from "./images/imgbox.png";
import btnShare from "../shared/images/btn_share_p.png";
import btnQuestions from "./images/btn_question_p.png";
import btnTryagain from "../shared/images/btn_tryagain_p.png";

export default function Result({
  progress,
  setProgress,
  score,
  questions,
  setQuestions,
  handleTryAgain,
  totalScore,
  setTotalScore,
  reward,
  setReward,
  imgPick,
  setImgPick,
  imgUpload,
  setImgUpload,
  nickname,
  setNickname,
}) {
  const photoList = useMemo(
    () => [
      photo00,
      photo01,
      photo02,
      photo03,
      photo04,
      photo05,
      photoDefault,
      resultBg,
    ],
    []
  );
  const calcScore = (score) => {
    let points = score.filter((i) => i === false);
    points.length === 0
      ? (points = 100)
      : (points = Math.floor((10 - points.length + Math.random()) * 10));
    return points;
  };

  useEffect(() => {
    photoList.forEach((image) => {
      new Image().src = image;
    });
  }, [photoList]);

  useEffect(() => {
    if (score.length === 9) {
      setTotalScore(calcScore(score));
    }
  }, [score, setTotalScore]);
  useEffect(() => {
    totalScore &&
      (totalScore < 70
        ? setReward(copper)
        : totalScore < 85
        ? setReward(silver)
        : setReward(gold));
  }, [totalScore, setReward]);

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
    setProgress("result");
    nickname === "" && setNickname(randomNickname);
  };

  const questionsA = useMemo(() => {
    return questions.map((item, index) => ({
      id: index,
      ...item,
      score: score[index],
      toggle: score.includes(false)
        ? score[index] === false
          ? true
          : false
        : index === 0
        ? true
        : false,
    }));
  }, [questions, score]);

  const handleQuestions = () => {
    setProgress("answer");
    setQuestions(questionsA);
  };

  const imgBox = useRef(null);
  const handleImgDownload = () => {
    html2canvas(imgBox.current, {
      backgroundColor: "null",
    }).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "測驗結果.png";
      link.href = dataUrl;
      link.click();
    });
  };

  return progress === "quizEnd" ? (
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
                  src={border}
                  alt="選擇中的圖片"
                  style={{ backgroundImage: `url(${photoList[j]})` }}
                ></img>
              ) : (
                <label
                  key={`label-${j}`}
                  htmlFor="fileInput"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    key={`image-${j}`}
                    src={border}
                    alt="上傳圖片"
                    style={{
                      backgroundImage:
                        imgUpload !== null
                          ? `url(${imgUpload})`
                          : `url(${photoList[j]})`,
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
            style={{ opacity: imgPick === 0 ? "0" : "1" }}
          ></button>
          <button
            type="button"
            className="btn-next"
            onClick={handleNext}
            style={{ opacity: imgPick === 5 ? "0" : "1" }}
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
          <img src={result} alt="看結果"></img>
        </button>
      </form>
    </div>
  ) : (
    progress === "result" && (
      <div className="result">
        <div className="title"></div>
        <div id="license" className="license">
          <h3 className="license-nickname">{nickname}</h3>
          <div className="license-loading">
            <div></div>
          </div>
          <div
            className="license-reward"
            style={{ backgroundImage: `url(${reward})` }}
          >
            <img
              src={border}
              alt="選擇中的圖片"
              style={{
                backgroundImage:
                  imgPick === 5
                    ? imgUpload !== null
                      ? `url(${imgUpload})`
                      : `url(${photoList[6]})`
                    : `url(${photoList[imgPick]})`,
              }}
            ></img>
          </div>
          <img
            className="license-reward-name"
            src={
              reward === copper ? copperP : reward === silver ? silverP : goldP
            }
            alt="稱號"
            style={{
              backgroundImage:
                reward === copper
                  ? `url(${copperBg})`
                  : reward === silver
                  ? `url(${silverBg})`
                  : `url(${goldBg})`,
            }}
          ></img>
          <div className="license-score"></div>
          <div className="license-textbox">
            <small>你拿到了{totalScore}分!</small>
            {reward === copper && (
              <>
                <small>差強人意...多多補充相關知識</small>
                <small>和喵星人的相處能更融洽喔~</small>
                <small>加油好嗎(=^-ω-^=)</small>
              </>
            )}
            {reward === silver && (
              <>
                <small>還不錯的成績</small>
                <small>獲取更多貓知識與喵星人</small>
                <small>提高好感度吧!(=^ΦωΦ^=)</small>
              </>
            )}
            {reward === gold &&
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
        <div ref={imgBox} className="imgbox">
          <div className="title"></div>
          <div className="license">
            <img src={imgbox} alt=""></img>
            <h3 className="license-nickname">{nickname}</h3>
            <div
              className="license-reward"
              style={{ backgroundImage: `url(${reward})` }}
            >
              <img
                src={border}
                alt="選擇中的圖片"
                style={{
                  backgroundImage:
                    imgPick === 5
                      ? imgUpload !== null
                        ? `url(${imgUpload})`
                        : `url(${photoList[6]})`
                      : `url(${photoList[imgPick]})`,
                }}
              ></img>
            </div>
            <img
              className="license-reward-name"
              src={
                reward === copper
                  ? copperP
                  : reward === silver
                  ? silverP
                  : goldP
              }
              alt="稱號"
              style={{
                backgroundImage:
                  reward === copper
                    ? `url(${copperBg})`
                    : reward === silver
                    ? `url(${silverBg})`
                    : `url(${goldBg})`,
              }}
            ></img>
            <div className="license-score"></div>
            <div className="license-textbox">
              <small>你拿到了{totalScore}分!</small>
              {reward === copper && (
                <>
                  <small>差強人意...多多補充相關知識</small>
                  <small>和喵星人的相處能更融洽喔~</small>
                  <small>加油好嗎(=^-ω-^=)</small>
                </>
              )}
              {reward === silver && (
                <>
                  <small>還不錯的成績</small>
                  <small>獲取更多貓知識與喵星人</small>
                  <small>提高好感度吧!(=^ΦωΦ^=)</small>
                </>
              )}
              {reward === gold &&
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
        </div>
        <div className="button-box">
          <button className="button-share" onClick={handleImgDownload}>
            <img src={btnShare} alt="分享好友"></img>
          </button>
          <button className="button-question" onClick={handleQuestions}>
            <img src={btnQuestions} alt="題目解析"></img>
          </button>
          <button className="button-tryagain" onClick={handleTryAgain}>
            <img src={btnTryagain} alt="再測一次"></img>
          </button>
        </div>
      </div>
    )
  );
}
