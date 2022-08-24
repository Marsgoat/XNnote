---
outline: deep
---

# 圍棋征子邏輯

`2021/12/19`

來分享點有趣的題目，征子對下圍棋的人來說是個非常基礎的吃子技巧，那要將征子給實作出來呢？其實征子意外的有很多小細節，包含提子等特別的判斷，非常的有趣，感覺可以當一題 Leetcode 的題目來玩了，難度大概是 medium 吧。

## 征子

[征子](https://zh.wikipedia.org/wiki/%E5%BE%81%E5%AD%90)是圍棋的一種吃子技巧，如下圖此時黑棋只要下在 A 位，無論白棋如何掙扎都是無法逃脫的。

![](https://i.imgur.com/GbQi8Gh.png)

![](https://i.imgur.com/MfdLBAh.gif)

征子會讓對方棋子始終保持在 1~2 氣的狀態，從 1 氣被叫吃，跑一手後仍只有 2 氣，只要進攻方注意到緊氣的位置，就能以這種方式把對方給吃掉。

## 實作過程

> 以下的 code 有做一點小修正，主要是可讀性問題，可以看一下[程式碼可讀性](/coding/readability.md)這篇，原本寫不好的地方我就保留當個紀念，其中還有一個小錯誤，有興趣的人可以找找看<br>
> 2022/2/6

### 資料結構

最簡單的就是使用二維陣列來表示盤面狀態，這邊以 9 路棋盤為例：黑棋為 X、白棋為 O、空為.<br>
例：

```javascript
const boardArray = [
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', 'X', '.', '.'],
  ['.', '.', '.', '.', '.', 'X', 'O', 'X', '.'],
  ['.', '.', '.', '.', '.', '.', 'O', 'X', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
];
```

### 判斷同塊棋與氣

首先要先判斷哪些棋子是連接在一起的，只要是相連的棋就視為同一塊，還要紀錄[氣](<https://zh.wikipedia.org/wiki/%E6%B0%A3_(%E5%9C%8D%E6%A3%8B)>)的位置，簡單說就是同一塊棋旁邊的空位就是這塊棋的氣。<br>
想法上就是用遞迴去解，從目標棋子開始，往上下左右四個方向找，如果也是自己的棋，就把這顆子加入棋塊，然後再對這顆子的上下左右去找，為了避免回頭重複找，所以要記錄找過的地方。

#### getStones

`boardArray`盤面<br>
`target`為目標棋子座標，格式為`{x,y}`<br>
`visit`為紀錄拜訪過的點的二維陣列<br>
`isInBounds`用來檢查是否超出邊界，這樣寫很硬要，我只是想要練習 js 的箭頭函式，但顯然很拙劣<br>
`directions`定義上下左右四個方向

```javascript
function getStones(boardArray, target, visit) {
  const stones = [target];
  const color = boardArray[target.y][target.x];
  visit[target.y][target.x] = 1;
  const isInBounds = (point, length) =>
    point.x < length && point.x >= 0 && point.y < length && point.y >= 0;
  const directions = [
    { x: target.x, y: target.y + 1 },
    { x: target.x, y: target.y - 1 },
    { x: target.x + 1, y: target.y },
    { x: target.x - 1, y: target.y },
  ];
  for (const dir of directions) {
    if (!isInBounds(dir, boardArray.length)) {
      continue;
    }
    if (boardArray[target.y][target.x] === color && visit[dir.y][dir.x] === 0) {
      stones = stones.concat(getStones(boardArray, dir, visit));
    }
  }
  return stones;
}
```

#### getLiberties

氣的部分，因為已經有了整塊棋了，所以就直接 for 迴圈去找每顆棋的四周，看有沒有空點。<br>
`getLiberties`用來取得氣的位置的 function<br>
`liberties`氣的英文好像都是翻成 liberty，我也不知道為什麼，以前我都直接取叫 air

```javascript
function getLiberties(boardArray, stones) {
  const liberties = [];
  const isInBounds = (point, length) =>
    point.x < length && point.x >= 0 && point.y < length && point.y >= 0;
  const visit = [];
  for (let i = 0; i < boardArray.length; i++) {
    visit[i] = [];
    for (let j = 0; j < boardArray[i].length; j++) {
      visit[i][j] = 0;
    }
  }
  for (const stone of stones) {
    const directions = [
      { x: stone.x, y: stone.y + 1 },
      { x: stone.x, y: stone.y - 1 },
      { x: stone.x + 1, y: stone.y },
      { x: stone.x - 1, y: stone.y },
    ];
    for (const dir of directions) {
      if (!isInBounds(dir, boardArray.length)) {
        continue;
      }
      if (boardArray[dir.y][dir.x] === '.' && visit[dir.y][dir.x] === 0) {
        liberties.push(dir);
        visit[dir.y][dir.x] = 1;
      }
    }
  }
  return liberties;
}
```

其實數氣這個是研究所時我指導教授開的課的其中一次作業的一個小題，好像就是要把棋子換成氣吧，我之前是用 C++ 寫的，半年前因為工作需要又用 python 寫了一遍，不過這篇是我要練習 js 所以才用 js 重寫了一遍。<br>
當時(半年前用 python)我寫到這正準備測試有沒有問題的時候，突然就發現，欸？！等等，這兩件事不是可以同時做的嗎?我寫成兩個 function 然後讓它找兩遍是在？？？<br>
這邊照慣例分享一下我耍笨的過程，只是我用 js 還原一下當時的心路歷程，我真是佩服我自己...大腦是個好東西，希望我也能有。

#### getStonesAndLiberties

參考了子期的非遞迴寫法改成了下面這個版本，這邊要感謝子期教我 js，包含前面箭頭函式的用法，感恩子期讚嘆子期。<br>
這邊用一個 queue 存放目前的棋子，然後就是檢查四個方向的連接棋塊與氣，如果有連接著的棋子就 push 進 queue 中等待檢查。

```javascript
function getStonesAndLiberties(boardArray, target) {
  const stones = [target];
  const liberties = [];
  const queue = [target];
  const color = boardArray[target.y][target.x];
  const isInBounds = (point, length) =>
    point.x < length && point.x >= 0 && point.y < length && point.y >= 0;
  const visit = [];
  for (let i = 0; i < boardArray.length; i++) {
    visit[i] = [];
    for (let j = 0; j < boardArray[i].length; j++) {
      visit[i][j] = 0;
    }
  }
  while (queue.length > 0) {
    const { x, y } = queue.pop();
    visit[y][x] = 1;
    const directions = [
      { x, y: y + 1 },
      { x, y: y - 1 },
      { x: x + 1, y },
      { x: x - 1, y },
    ];
    for (const dir of directions) {
      if (isInBounds(dir, boardArray.length) && visit[dir.y][dir.x] === 0) {
        if (boardArray[dir.y][dir.x] === color) {
          queue.push(dir);
          stones.push(dir);
        }
        if (boardArray[dir.y][dir.x] === '.') {
          liberties.push(dir);
          visit[dir.y][dir.x] = 1;
        }
      }
    }
  }
  return { liberties, stones };
}
```

### 判斷征子

接下來終於進入到征子最重要的部分了，一方要進攻一方要逃跑，其實又是個 minimax 的概念了，對這部分有興趣的可以去刷 Leetcode 中的 StoneGame 系列，還可以練習怎麼用 DP(dynamic programming)優化，不過那個石頭是愈拿愈少，但圍棋是愈下愈多，在征子這邊沒辦法用一樣的方式優化就是了。<br>
進攻方嘗試緊氣去吃掉對方，防守方要逃跑增加氣，所以要先標註出氣的位置，這就會利用到前面寫的`getStonesAndLiberties`了，進攻方把所有能緊氣的地方都試下看看，由於征子的特性，進攻方在進攻時讓目標棋子的氣大於 2 氣則為失敗，目標棋子只剩 1 氣時，因為輪到進攻方下，此時就可以直接將對方吃掉，就是征子成功，目標棋子為 0 氣那就更不用說了當然就是已經吃掉了。

`target`為目標棋子，如果是一塊棋那給其中一顆棋子的座標即可<br>
`color`為先手方顏色，O 或 X<br>
`targetColor`為目標棋子顏色<br>
`oppColor`對方棋子顏色

如果先手方顏色與目標顏色不同，那先手方則為進攻方，顏色相同就當然是逃跑方了~

```javascript
function isLadder(boardArray, target, color) {
  const targetColor = boardArray[target.y][target.x];
  const oppColor = color === 'X' ? 'O' : 'X';
  const { stones, liberties } = getStonesAndLiberties(boardArray, target);
  // 進攻方
  if (color !== targetColor) {
    if (liberties.length > 2) return 0; // 目標大於2氣 失敗
    if (liberties.length <= 1) return 1; // 目標小於等於1氣 成功
    let score = -10;
    for (const move of liberties) {
      boardArray[move.y][move.x] = color;
      score = Math.max(isLadder(boardArray, target, oppColor), score);
      boardArray[move.y][move.x] = '.';
      if (score === 1) break;
    }
    return score;
  }
  // 防守方
  if (color === targetColor) {
    if (liberties.length >= 2) return 0;
    let score = 10;
    for (const move of liberties) {
      boardArray[move.y][move.x] = color;
      score = Math.min(isLadder(boardArray, target, oppColor), score);
      boardArray[move.y][move.x] = '.';
      if (score === 0) break;
    }
    return score;
  }
}
```

放上 test 給大家測試，如果能吃掉會回傳 1，吃不掉會回傳 0

```javascript
describe('isLadder', () => {
  describe('測試盤面：征子', () => {
    it('應回傳1', () => {
      const boardArray = [
        ['.', '.', '.', '.', '.', '.', '.', 'X', '.'],
        ['.', '.', '.', '.', '.', '.', 'X', 'O', 'X'],
        ['.', '.', '.', '.', '.', '.', '.', 'O', 'X'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ];
      const result = isLadder(boardArray, { x: 7, y: 2 }, 'X');
      const expected = 1;
      assert.strictEqual(result, expected);
    });
  });
});
```

### 特殊情況

其實上面看似沒問題的征子，還有一個小問題，當征子的路徑上有對方的棋子時，如下圖：

![](https://i.imgur.com/RaeOGY4.png)

![](https://i.imgur.com/6VJGOEv.png)

此時白並不需要繼續逃跑，而是可以在 A 位吃掉黑棋，也能將自己的氣變多，所以其實在防守方的走步要增加一個提子的選項，這時候`stones`就能發揮作用了，不然其實上面根本沒用到這個，要判斷自身周遭包圍自己的對方棋子有沒有只剩下 1 氣的，就可以將其吃掉。<br>
這時又會在衍生出一個問題，如果有棋子被對方吃掉還能夠繼續征子嗎？<br>
以上面的情況當然是不能，但如果是下圖的情況...

![](https://i.imgur.com/8YZg2jo.png)

就算白於 A 位提子...

![](https://i.imgur.com/QuMhMDo.gif)

黑棋仍然能將白棋給吃掉，但是此時要注意的是黑棋緊氣的方式，此時下圖 A 點是不能夠下的禁著點。

![](https://i.imgur.com/CGiXTVx.png)

阿不過這篇我就不展開特殊情況的處理了，有興趣的人可以自己研究研究，或是等待遙遙無期的下一篇 XDD

## 心得

最一開始就連最頂級的圍棋 AI 如 LeelaZero 與絕藝等，都會有征子的 bug(犯跑征子的低級失誤)，在 KataGo 出現後，將一些圍棋技巧的特徵加入訓練，詳細可見[KataGo 論文](https://arxiv.org/pdf/1902.10565.pdf)中的 4.2 Game-specific Features，才將此狀況改善，詳細 code 在[nninnputs.cpp](https://github.com/lightvector/KataGo/blob/master/cpp/neuralnet/nninputs.cpp)中`iterLadders`，有興趣可以研究一下，可見其實征子也是很有學問的吧?!<br>
而且我看了一下好像連 katago 都沒有處理比較特別的征子情況，不過可能也是因為並不需要的關係吧。

## 新登場人物

子期大大！<br>
全端工程師、公司的技術主管？！(其實我不知道詳細職稱 XD)，我會進公司也是透過子期，不知道他現在發現我 code 寫成這樣有沒有很後悔推薦我。<br>
認識子期快要 8 年了，想當初一起住在維哥家然後一起去比賽圍棋，真是令人懷念，恭喜子期與胡老大也在最近結婚了~<br>
我的筆記系列現在有個新目標，就是要把我身旁的大佬們一一~~吹捧~~介紹過一輪。

[回到目錄](/coding/)
