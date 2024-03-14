## 你自認是專業貓奴嗎?貓奴檢定考，等你來挑戰!🐈

> 想養貓，除了對貓咪的愛是不夠的!想跟喵星人相處融洽，他們的心情與行為、豢養所需物品、 身心保健等知識皆不可或缺，透過測驗小遊戲**貓奴檢定**測試自己是不是稱職貓奴吧!

---

### 專案特點 ✨ <code>#React</code> <code>#SCSS</code>

#### **🐈 UI/UX**

![](readme/images/00.png)
![](readme/images/01.png)
![](readme/images/02.png)

**🐈 建立題庫，每次測驗隨機取題，提高使用者遊玩次數**
![](readme/images/question-list.gif)

```js
// 隨機取題
export const questionPick = (arr, count) => {
  let result = [];
  let questions = arr.slice();
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * questions.length);
    result.push(questions[index]);
    questions.splice(index, 1);
  }
  return result;
};
```

**🐈 建立題庫，每次測驗隨機取題，提高使用者遊玩次數**
