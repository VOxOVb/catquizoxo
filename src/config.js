// status
const status =
  {
    landing: 1,
    startQuiz: 2,
    quizEnd: 3,
    result: 4,
  }

// animation
export const qAni = [
  "q-show 0.7s cubic-bezier(0.33, 1, 0.68, 1)",
  "q-hide 0.7s cubic-bezier(0.68, 1, 0.33, 1)",
];
export const aAni = [
  [
    "a-top-show 0.8s cubic-bezier(0.65, 0, 0.35, 1)",
    "a-top-hide 1s cubic-bezier(0.35, 1, 0.65, 0)",
  ],

  [
    "a-bottom-show 1s cubic-bezier(0.65, 0, 0.35, 1)",
    "a-bottom-hide 0.8s cubic-bezier(0.35, 1, 0.65, 0)",
  ],
];
export const barAni = [
  "can-rotate 1s cubic-bezier(0.65, 0, 0.35, 1)",
  "can-process 1s cubic-bezier(0.65, 0, 0.35, 1)",
];

// [show, hideThenShow, hide]

// "q-hide-then-show 1.2s cubic-bezier(0.68, 1, 0.33, 1)",
// "a-top-hide-then-show 1.3s cubic-bezier(0.35, 1, 0.65, 0)",
// "a-bottom-hide-then-show 1.5s cubic-bezier(0.35, 1, 0.65, 0)",

