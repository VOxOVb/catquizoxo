const nicknameList = [
    "貓貓工程師",
    "財富自由貓",
    "喵星人最棒",
    "英國短毛貓",
    "狗子不如貓",
    "魔幻假面貓",
    "短尾虎斑貓",
    "喵喵喵喵喵",
    "(=^-ω-^=)",
    "(=^ΦωΦ^=)",
    "ヽ(=^･ω･^=)丿",
    "(=^･ω･^=)",
]

const randomPick = (arr) => {
    const random = Math.floor(Math.random() * arr.length);
    const randomNickname = arr[random];
    return randomNickname;
}

export const randomNickname = randomPick(nicknameList);