# 程式碼可讀性

> Feb 21, 2022

前陣子關於程式碼可讀性的問題，從前輩那得到了一些啟發(~~其實是被嘴爛~~)，所以來寫一篇給大家笑一下。

## 壞習慣

關於我的寫 code 習慣，可以參考一下這篇[忍者程式碼](https://lenchen.medium.com/%E5%BF%8D%E8%80%85%E7%A8%8B%E5%BC%8F%E7%A2%BC-ninja-code-cc5e4a70bafc)，雖然沒有這麼誇張，但是可以從我之前幾篇的筆記中略知一二，基本上就是隨心所欲流，可能小時候看太多火影忍者，心中也有個成為火影的夢想吧？！

> 隨心所欲的寫 code，這就是我的忍道！

結果變成了嘴遁忍者，都用嘴在寫 code？！

其實我開始工作後因為要跟人合作的關係，就有比較注意可讀性問題了，以前研究所時期的 code 更是可怕，那時候是會寫出下面這種東西的。

```cpp
int complay(int tempf, int tempn) {
    // do something
}

int complay2(int f, int n) {
    // do something
}
```

有夠可怕，不寫註解的話我自己都看不懂這兩個的差別是啥，還有 f 跟 n 是什麼鬼啦，簡寫到最極致欸，而且上千行程式碼也沒在分檔的，基本上就是寫完過陣子回頭看自己也看不懂的那種。<br>
可憐了接手我程式的學弟，那時候也沒想過有人會想接蜜月橋牌這個項目，看學弟這樣我也覺得很不好意思，就想說我可以幫忙他一起重寫，結果學弟說不需要，他可能覺得這學長怎麼能爛成這樣，等等一起寫還要修我這邊的 bug 那還不如一開始就自己寫，真是辛苦他了。

## 前輩建議

後來某一天 Jim 大神看到我寫的 code，他大概是以下的狀態。

![](https://i.imgur.com/LVCSg3B.png){:width='60%'}

他也是用一種關愛智障的表情看著我，覺得我寫 code 習慣差到有點離譜，建議我有些地方可以修改一下，只要改一點點就好了。<br>
真的就是一點點...QAQ

![](https://i.imgur.com/zZYX0AI.png){:width='65%'}

這邊推薦一下 Jim 大神所寫的[應用心理學提升程式碼可讀性](https://code-readability.gentleinfo.com/readme)，用心理學的角度來解釋程式碼可讀性問題，其中有一個分散注意力效應的範例二，確實可讀性會高很多，是我從來沒想過的寫法，蠻特別的，不過除非公司有規定，不然我自己寫 code 可能還是不會這樣寫。

## 程式碼風格規範

### ESLint

應該所有用 JS 開發的人都會使用[ESLint](https://en.wikipedia.org/wiki/ESLint)吧?或是可能其他的套件我也不知道，那反正我現在待的公司是使用 ESLint + Prettier，我記得我剛進公司就是 Jim 大神教學怎麼設定 ESLint 跟 Prettier，不過當時我主要負責的專案還是用 python 開發的，所以那時候也沒有很在意，當時這塊與 unit test 的部分都被我聽聽就過去了，後面還要自己花時間學，真是悔不當初。

### Airbnb JavaScript Sytle Guide

[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
當然我自己的 ESLint 沒有裝 Airbnb 的版本，但還是可以參考一下，很多規範寫得蠻完整的，不過也有些我覺得不太喜歡啦，例如 if 中有多行判斷時`&&`或`||`要放在該行的最前面，我是覺得放在後面讓前面對齊比較好看啦，不過這個可能也見仁見智，詳細請看[Control Statements17.1](https://github.com/airbnb/javascript#control-statements)。

```javascript
// bad
if (foo === 123 && bar === 'abc') {
  thing1();
}

// good
if (foo === 123 && bar === 'abc') {
  thing1();
}
```

這個例子我就覺得 bad 的版本比較好看，不過如果多幾行的話可能真的放前面比較好一點，而且後面也會是對齊的。

## 修改範例

這邊我就拿上次[圍棋征子邏輯](/coding/goLadders.md)中的 code 當範例來修改了。

首先`getStones`這邊其實是寫錯的(第 18 行)，stones 用了 const 還在後面重新賦值有點搞笑，如果有用 ESLint 就會被檢查出來了，但`getStones`和`getLiberties`是還原搞笑心路歷程用的，我是直接在 HackMD 上手寫，所以沒有發現這個愚蠢的錯誤，虧我當時還有認真再檢查一遍排版，結果連這種基礎錯誤都沒發現，寫 code 能力低落 QQ

```javascript
const stones = [];

// 搞笑
stones = stones.concat(array);

// 修正後
stones.push(...array);
```

接下來我主要針對`getStonesAndLiberties`和`isLadder`的問題做修改。

### 1. for 迴圈命名混亂

這邊`directions`是用來取得上下左右四個方向的點座標，for 迴圈中的每個方向我直接簡寫成`dir`，Jim 大神就表示這樣寫不行，這樣誰看得懂，`dir`也很容易被誤解，別人要知道這個`dir`是什麼都要重新回去看我的 for 迴圈，依照心理學的說法就是增加別人的認知負荷。

```javascript
const directions = [
  { x, y: y + 1 },
  { x, y: y - 1 },
  { x: x + 1, y },
  { x: x - 1, y },
];

// bad
for (const dir of directions) {
  // do something
}

// good
for (const direction of directions) {
  // do something
}
```

最後把`directions`改成了`neighbors`，然後因為這個功能未來如果要補坑有提子狀況的征子的話會用到比較多次，所以直接拉出來寫一個`getNeighbors`。

```javascript
getNeighbors = ({ x, y }) => [
  { x, y: y + 1 },
  { x, y: y - 1 },
  { x: x + 1, y },
  { x: x - 1, y },
];

const neighbors = getNeighbors({ x, y });
for (const neighbor of neighbors) {
  // do something
}
```

### 2. 回傳值意義不明

在`isLadder`中，如果是征子則回傳 1，失敗則回傳 0，但是直接回傳 True or False 就好了，回傳 0 或 1 還要讓別人猜到底是什麼意思，可能還會造成誤解。

```javascript
// bad
function isLadder(boardArray, target, color) {
  // do something
  if (liberties.length > 2) return 0;
}

// good
function isLadder(boardArray, target, color) {
  // do something
  if (liberties.length > 2) return false;
}
```

### 3. 重新賦值給參數

這邊我是參考[Never reassign parameters](https://github.com/airbnb/javascript#functions--reassign-params)，雖然我這邊是 array 中的值狀況不太一樣，但還是改動到我原來的`boardArray`了，我實際的作法是有寫個`getNewBoardArray`來更新盤面，因為要處理提子問題，我上一篇會寫成直接改`boardArray`是想說這樣比較簡單，但沒想到這樣其實更難讀懂。

```javascript
// bad
for (const move of liberties) {
  boardArray[move.y][move.x] = color; // 這邊是要嘗試下這手棋在棋盤上
  // do something
  boardArray[move.y][move.x] = '.'; // 所以做完還要將該點重新設為空
}

// good
for (const liberty of liberties) {
  const newBoardArray = getNewBoardArray(boardArray, liberty, color);
  // do something
}
```

### 4. 分散注意力效應

這邊直接參考 Jim 大神的文章，其中範例一的說明，簡單說就是我原先的`visit`是 1 就是拜訪過、0 就是尚未拜訪，這樣可能不夠直觀，按照他範例中的改法應該改成以下這樣。

```javascript
// bad
visit[i][j] = 0;
visit[i][j] = 1;

// good
visits[i][j] = 'unvisited';
visits[i][j] = 'visited';
```

這邊公司的後端工程師 Joe 也有給我一些意見，像是 visit 應該要+s 比較好之類的，很多小細節他都會提醒我，是個很嚴謹的人。<br>
其實這邊因為只會有 0 跟 1，依照 Jim 大神的例子應該是有多個值的時候直接改成有意義的字串會更好，這邊這個例子我自己寫可能還是會用 0 跟 1 吧，感覺算是很通用的寫法，不過寫成文字確實閱讀上方便很多。

### 5. 其他

有一些像是註解應該擺在上方，或是區塊結束後與下個語法之間要換行之類的，我就沒有很嚴格執行，我覺得只有單行的註解放在後面其實好像也沒影響，只要那行不要太長被換行就好了，區塊結束後的換行有些確實會變得更清楚，不會全部程式碼都擠在一起，不過有些換行我也覺得不是很有必要。<br>
比較特別的是關於 if 只有單行要不要加大括號的問題，雖然 airbnb 給的規範是都可以，但是我有在網路上找到不同的說法，是為了 code review 方便，如下例：

```javascript
if (a > b) a - b;
```

如果今天要多加一行變成

```javascript
if (a > b) {
  a - b;
  c++;
}
```

<font v-pre color="#c2534c">實際上只有增加一行 code</font>，但有在用 git 之類的應該就知道，這在<font v-pre color="#c2534c">修改記錄上會是修改了四行</font>，如果不小心改到一些東西，如下

```javascript
if (a < b) {
  a - b;
  c++;
}
```

所以還要特別注意 if 的判斷有沒有被改到之類的問題，如果一開始就寫成大括號的形式就不會有這個問題了，但是我覺得只有 return true or false 的好像還是擺在後面好看，而且中間應該是不太有機會加東西，所以我以下還是就不加大括號，如果是寫一串邏輯的，我就會加大括號了，反正這種東西就是見仁見智，與你共同工作的人看得舒服就可以了(吧)。

### 最終的 code

```javascript
function getStonesAndLiberties(boardArray, target) {
  const stones = [target];
  const liberties = [];
  const queue = [target];
  const color = boardArray[target.y][target.x];
  const visits = [];
  for (let i = 0; i < boardArray.length; i++) {
    visits[i] = [];
    for (let j = 0; j < boardArray[i].length; j++) {
      visits[i][j] = 'unvisited';
    }
  }

  visits[target.y][target.x] = 'visited';
  while (queue.length > 0) {
    const neighbors = getNeighbors(queue.pop());
    for (const neighbor of neighbors) {
      if (
        isInBounds(neighbor, boardArray.length) &&
        visits[neighbor.y][neighbor.x] === 'unvisited'
      ) {
        const neighborColor = boardArray[neighbor.y][neighbor.x];

        // 加入相連棋子
        if (neighborColor === color) {
          queue.push(neighbor);
          stones.push(neighbor);
        }

        // 加入氣
        if (neighborColor === '.') {
          liberties.push(neighbor);
        }

        visits[neighbor.y][neighbor.x] = 'visited';
      }
    }
  }

  return { stones, liberties };
}
```

```javascript
function isLadder(boardArray, target, color) {
  const targetColor = boardArray[target.y][target.x];
  if (targetColor === '.') return true; // 目標為空或被已被吃掉

  const opponentColor = color === 'X' ? 'O' : 'X';
  const liberties = getStonesAndLiberties(boardArray, target).liberties;

  // 進攻方
  if (color !== targetColor) {
    if (liberties.length > 2) return false; // 目標大於2氣 失敗
    if (liberties.length === 1) return true; // 目標小於等於1氣 成功

    for (const liberty of liberties) {
      const newBoardArray = getNewBoardArray(boardArray, liberty, color);
      if (isLadder(newBoardArray, target, opponentColor)) return true;
    }

    return false;
  }

  // 防守方
  if (color === targetColor) {
    if (liberties.length >= 2) return false;

    for (const liberty of liberties) {
      const newBoardArray = getNewBoardArray(boardArray, liberty, color);
      if (!isLadder(newBoardArray, target, opponentColor)) return false;
    }

    return true;
  }
}
```

這樣應該可讀性是有比較高了吧，`isLadder`中的 for 迴圈其實可以拉出來，但是我這樣寫是為了之後的提子問題考慮的，下一篇我才不用改太多。

## 心得

其實程式碼可讀性真的蠻重要的，本來因為我幾乎都只有跟哲仰協作而已，所以大部分都是我們雙方看得懂就 ok，就沒有考慮太多，甚至有個默契是當我不知道怎麼取名稱的時候都會直接寫 Steven，讓哲仰來改 XDD，現在寫 code 有更注重可讀性了，包含會多寫一些註解跟使用說明的文檔，看了一些規範之後真的是學到不少，上面的 code 真的要改還有很多地方可以改進，<font v-pre color="#c2534c">但我自己覺得可讀性這方面只要跟共同工作的人有共識就行了</font>，不需要真的這麼嚴謹或是過度要求，當然身為嘴遁忍者的我，之前常常會被哲仰抱怨 XDDD，希望之後可以避免~~

## 新登場人物

哲仰：<br>
雖然之前介紹過了，但我還是想再寫一次，強者我主管 aka 一中之光，因為我認識每個台中一中畢業的都強得跟鬼一樣，所以看到一中我就是先跪，常常被我拍照做成梗圖，現在看到我拿起手機都會反射性的躲開，也常常在公司跟我一起耍白痴，可以寫的太多了，反正之後登場的機會還很多，之後再來慢慢介紹。

Joe：<br>
後端工程師 aka 大美食家，只要是他推薦的食物百分之百不會雷，我常常和他還有哲仰一起去吃午餐，做什麼都超認真，玩遊戲也超認真，非常喜歡邏輯推理，有點潔癖，包含語言文字上的潔癖，很在意發音之類的，很討厭公司的貓，覺得貓很髒，對於我們的撸貓行為表示不解，他說他才是對那隻貓最好的人，他最尊重貓咪的身體自主權。

Jim 大神：<br>
資深全端工程師 aka 心理學大師，我都叫他大哲學家，喜歡探討哲學問題，面試新人時一定會問一題哲學問題，常常用關愛智障的表情看著我，跟看公司的貓一樣，不知道有沒有被他發現其實都是小笨貓在幫我寫 code 的。

![](https://i.imgur.com/f2yf9BF.jpg)

上圖那隻就是公司的貓 bubu，但我都叫他小笨貓，是隻懼高的笨貓。
他還有自己的[IG 粉專](https://www.instagram.com/cutebubu999/)，歡迎大家去支持一下。
