const behaviorQ = [
  {
    tag: "behavior",
    question: "喵星人喜歡在電腦上躺著...",
    options: [
      { id: 1, text: "因為想幫你工作", isCorrect: false },
      { id: 2, text: "因為電腦很溫暖", isCorrect: true },
    ],
    parse:
      "貓咪喜歡溫暖的地方，電腦運作時會產生熱量，因此貓咪會喜歡躺在電腦上。此外，貓咪也喜歡主人的注意力，當主人在使用電腦時，貓咪可能會躺在電腦上以引起主人的注意。",
  },
  {
    tag: "behavior",
    question: "喵星人比較喜歡女生...",
    options: [
      { id: 1, text: "因為女生的音頻通常比較高", isCorrect: true },
      { id: 2, text: "因為女生比較容易投餵零食", isCorrect: false },
    ],
    parse:
      "貓咪在潛意識中認為聲音高的人通常身形小，而這代表著「安全」，因為女性的聲音通常比較高，所以貓咪比較容易親近女性。 ",
  },
  {
    tag: "behavior",
    question: "喵星人喜歡玩紙箱...",
    options: [
      { id: 1, text: "因為紙箱很香", isCorrect: false },
      { id: 2, text: "因為有安全感", isCorrect: true },
    ],
    parse:
      "貓咪喜歡有遮蔽的地方，紙箱可以提供他們躲藏，富有安全感。此外，因為紙箱的材質帶來的磨爪回饋，也深受多數喵星人喜愛。",
  },
  {
    tag: "behavior",
    question: "喵星人飛機耳...",
    options: [
      { id: 1, text: "飛機準備起飛!", isCorrect: false },
      { id: 2, text: "再鬧我開咬喔", isCorrect: true },
    ],
    parse:
      "耳朵平貼也就是俗稱的飛機耳，這時候，貓咪處於警戒或不耐煩的狀態，再繼續逗弄貓咪的話，極有可能被怒吼，甚至慘遭貓爪攻擊喔",
  },
  {
    tag: "behavior",
    question: "喵星人搖尾巴...",
    options: [
      { id: 1, text: "我好興奮啊!", isCorrect: false },
      { id: 2, text: "我在生氣別惹我", isCorrect: true },
    ],
    parse:
      "當貓咪的尾巴快速擺動的時候，就不要再逗貓咪啦！這時候貓咪心情煩躁，尾巴正說著「我在生氣，別惹我！」如果搞不清楚貓咪的身體語言，還以為貓咪是像狗狗一樣在「搖尾巴」的話，可就免不了挨上幾爪了喔",
  },
  {
    tag: "behavior",
    question: "喵星人露出水汪汪大眼...",
    options: [
      { id: 1, text: "裝可愛撒嬌，快賞我肉泥", isCorrect: false },
      { id: 2, text: "在非常興奮專注的狀態", isCorrect: true },
    ],
    parse:
      "當貓咪露出水汪汪大眼的時候，就代表他們對眼前的東西很感興趣，才會露出專注、好奇的眼神！這些東西通常是裝著食物的罐頭或小鳥等獵物。吃東西時，看到貓主子使出水汪汪大眼誘惑，可別因此心軟投降而任意餵食唷。",
  },
  {
    tag: "behavior",
    question: "喵星人踏踏...",
    options: [
      { id: 1, text: "心情很放鬆", isCorrect: true },
      { id: 2, text: "最可愛麵包師傅上工", isCorrect: false },
    ],
    parse:
      "可能因為貓咪小時候與母貓在一起時，會踩踏媽媽的胸部刺激奶水分泌，進而將踏踏和快樂的記憶連結起來。踏踏行為通常發生在柔軟、舒適的地方，如床上、毯子上或你的腿上。這種行為可以幫助貓咪放鬆和感到安全。",
  },
  {
    tag: "behavior",
    question: "喵星人呼嚕...",
    options: [
      { id: 1, text: "心情很放鬆", isCorrect: true },
      { id: 2, text: "他踩下油門他的引擎大聲", isCorrect: false },
    ],
    parse:
      "貓媽媽會藉由呼嚕聲讓小貓找到他，而幼兒期又是貓咪過的最安逸的日子，這讓貓咪養成一種習慣，只要覺得現在很幸福，有近似在媽媽懷抱中的安心感，也會像小貓一樣發出呼嚕聲回應。不過也有研究表示，當貓咪不舒服時也會呼嚕，因為在呼嚕時會分泌一種叫做內啡肽的物質。這種物質的功效跟鴉片類似，可以緩解疼痛也能安定神經。除了呼嚕聲也要觀察貓咪的其他行為喔。",
  },
];

const foodQ = [
  {
    tag: "food",
    question: "在喵星人的罐罐中加水...",
    options: [
      { id: 1, text: "你想把我淹死嗎", isCorrect: false },
      { id: 2, text: "多喝水還不錯", isCorrect: true },
    ],
    parse:
      "貓罐頭加水「會不會稀釋營養價值」？貓罐頭中的營養成分非常充足，加水只會變得濕潤，對貓咪的營養攝取並不會產生影響，且可以幫助貓咪補充水分，減輕鈉含量負擔，可謂一舉數得！",
  },
  {
    tag: "food",
    question: "喵星人吃巧克力...",
    options: [
      { id: 1, text: "不行!我會毒死", isCorrect: true },
      { id: 2, text: "給我吃一點沒關係啦", isCorrect: false },
    ],
    parse:
      "巧克力含有對貓咪有毒的物質「可可鹼」，即使只是少量，也可能導致貓咪中毒，嚴重時甚至可能危及生命。因此，絕對不要讓貓咪吃巧克力。",
  },
  {
    tag: "food",
    question: "喵星人喝牛奶...",
    options: [
      { id: 1, text: "動畫裡的喵星人都喜歡喝牛奶", isCorrect: false },
      { id: 2, text: "我不可以喝", isCorrect: true },
    ],
    parse:
      "雖然貓咪可能會喜歡牛奶的味道，但是為了避免腸道不適，建議不要給貓咪喝牛奶，或淺嘗即可，食用後若出現症狀可能就代表貓咪乳糖不耐喔！",
  },
];

const itemQ = [
  {
    tag: "item",
    question: "和喵星人玩雷射筆...",
    options: [
      { id: 1, text: "我超愛這玩具", isCorrect: false },
      { id: 2, text: "抓不到讓我好挫折", isCorrect: true },
    ],
    parse:
      "貓咪追逐雷射筆光點需要全神貫注，長期使用下來對眼睛有一定的損傷（地板或牆壁反光都有可能照到眼睛）；且雷射光點總是讓牠們抓不到，久而久之會產生一種挫折感。如果家裡貓咪對真的逗貓棒沒有興趣，建議先選擇弱光性的雷射筆，且在引起他興趣的時候切換回實體逗貓棒（可以碰觸的玩具），避免挫折感。如果貓咪真的只喜歡雷射筆，也盡量在他抓到光點時給牠一點零食獎勵。",
  },
  {
    tag: "item",
    question: "喵星人對於貓薄荷...",
    options: [
      { id: 1, text: "沒錯我超愛", isCorrect: true },
      { id: 2, text: "我會成癮不好", isCorrect: false },
    ],
    parse:
      "貓咪對貓薄荷會表現出興奮、愉快的行為。但也有一部分的貓咪對貓薄荷沒有反應，這是因為對貓薄荷反應的基因是隨機遺傳的，也有可能隨著年紀增加而逐漸對貓薄荷失去興趣，所以如果家中貓咪不領情，貓奴們也不用太訝異或傷心啦～。",
  },
  {
    tag: "item",
    question: "喵星人對於貓草...",
    options: [
      { id: 1, text: "我不喜歡", isCorrect: false },
      { id: 2, text: "沒錯我超愛", isCorrect: true },
    ],
    parse:
      "貓草其實不是一種草!是泛指可以促進貓咪腸胃蠕動、幫助排除腸道內毛球的植物，富含植物纖維、維生素及礦物質等營養成分，市面上常見貓草有小麥草、大麥草、燕麥草等等。野外貓咪沒有化毛膏、排毛粉可以吃，就是靠這些貓草排出體內的毛球，有些腸胃不適的貓咪吃貓草也能減輕症狀喔～",
  },
  {
    tag: "item",
    question: "喵星人的廁所...",
    options: [
      { id: 1, text: "安靜隱蔽的角落", isCorrect: true },
      { id: 2, text: "人來人往的走廊，通風避免臭臭", isCorrect: false },
    ],
    parse:
      "貓咪在如廁時會感到脆弱，所以貓砂盆應該放在安靜且隱蔽的地方，讓貓咪感到安全。",
  },
  {
    tag: "item",
    question: "喵星人洗澡...",
    options: [
      { id: 1, text: "我自己會洗澡", isCorrect: true },
      { id: 2, text: "梳毛都是口水，應該要幫我洗", isCorrect: false },
    ],
    parse:
      "貓咪自己會用舔舐身體達到清潔效果，除非在特殊情況下（例如貓咪身上沾染了有毒物質），否則通常不需要人為幫助貓咪洗澡。",
  },
  {
    tag: "item",
    question: "幫喵星人穿衣服...",
    options: [
      { id: 1, text: "我的皮毛就很好看了", isCorrect: true },
      { id: 2, text: "我超喜歡", isCorrect: false },
    ],
    parse:
      "大部分的貓咪並不喜歡穿衣服，因為這會限制他們的活動。如果貓咪有皮膚病的情況下，可以給醫生評估是否給貓咪穿衣服。",
  },
  //   {
  //     tag: "item",
  //     question: "抓喵星人前腳抱抱...",
  //     options: [
  //       { id: 1, text: "我超級喜歡", isCorrect: false },
  //       { id: 2, text: "我不喜歡", isCorrect: true },
  //     ],
  //     parse:
  //       "每隻貓咪的性格都不同，有的貓咪喜歡被抱抱，有的則不喜歡。最重要的是要尊重貓咪的意願，不要強迫貓咪做他不喜歡的事情。",
  //   },
  {
    tag: "item",
    question: "幫喵星人剪指甲...",
    options: [
      { id: 1, text: "我很需要", isCorrect: true },
      { id: 2, text: "我自己就會磨爪，不需要", isCorrect: false },
    ],
    parse:
      "貓咪的指甲會不斷生長，如果不定期剪指甲，可能會導致指甲過長刺入肉裡，造成疼痛和感染。所以貓咪需要定期剪指甲。",
  },
];
const questions = [...behaviorQ, ...foodQ, ...itemQ];

// 隨機取題
const questionPick = (arr, count) => {
  let result = [];
  let questions = arr.slice();
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * questions.length);
    result.push(questions[index]);
    questions.splice(index, 1);
  }
  return result;
};
export const questionlist = questionPick(questions, 9);
