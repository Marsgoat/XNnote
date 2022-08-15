# Merge Intervals

> Jul 30, 2022

[56. Merge Intervals](https://leetcode.com/problems/merge-intervals/)

來補之前[面試白板題](/coding/interview2022-leetcode.md)沒解的題目了，本來想學學唐豪寫一篇專門的 leetcode 筆記，但總覺得只寫刷題的內容真的是挺無聊的，而且我也不是每題都有耍笨的題材可以寫，所以就不特別開新的分類，有比較好玩或者有故事的再來寫一篇分享。

## Merge Intervals

這題其實最早我不是在 leetcode 上看到的，是我剛開始上班時為了練習 js，無意間找到的一個練習題，本質與這題相同就只是描述不一樣而已，過幾個月跟著唐神刷題的時候，看到他寫了這題我就跟著寫，面試的時候也剛好被問到差不多的題目，運氣真好，感恩唐神讚嘆唐神。

### 題目描述

面試的時候面試官是說給你一串時間紀錄，有開始與結束的時間，如果發現有重疊的時間，就要將它合併，輸出就是沒有重疊的時間區間紀錄。

leetcode 範例：

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
```

`[1, 3]`跟`[2, 6]`有重複的區間所以要合併成`[1, 6]`

### 想法

這題我分享一下第一次寫這題時的想法好了，我一開始想著的是把這些時間排序，先標記每個時間是開始(start)還是結束(end)，然後直接排序成`1、2、3、6、8、10、15、18`，從左到右掃一遍，第一個遇到的開始時間一定就是區間的開始，遇到連續的開始就代表有重疊的時間，所以有幾個開始就要有幾個結束，後面不管遇到是開始還是結束時間，只要遇到的開始與結束時間數量一樣，那就結束這個區段。<br>
<font v-pre color="#c2534c">開始時間數量為 1 的時候紀錄成區間的開始時間，當開始時間數量與結束時間數量相同時就紀錄成區間的結束時間。</font>

![](https://i.imgur.com/wnLGw4l.png){:width='75%'}

只要一個區間結束就把開始與結束時間的數量重置為 0，繼續找尋下一個區間。

### 實作

這邊直接拿之前用 js 寫的 code 稍做修改，還原我當時有多蠢

```javascript
function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];
  const newIntervals = [];
  // 標註開始與結束  這邊完全是多此一舉XDDD
  for (const interval of intervals) {
    newIntervals.push({ value: interval[0], state: 'start' });
    newIntervals.push({ value: interval[1], state: 'end' });
  }
  // 根據時間排序
  newIntervals.sort((a, b) => a.value - b.value);
  const mergedIntervals = [];
  let startCount = 0; // 紀錄遇到幾個開始時間
  let endCount = 0; // 紀錄遇到幾個結束時間
  for (let i = 0; i < newIntervals.length; i++) {
    if (newIntervals[i].state === 'start') {
      startCount++;
      if (startCount === 1) {
        // 第一個開始時間一定是一個區間的開始
        mergedIntervals.push([newIntervals[i].value]);
      }
    } else if (newIntervals[i].state === 'end') {
      endCount++;
      if (startCount === endCount) {
        // 當開始時間與結束時間數量相等時，代表這個區間已經結束
        mergedIntervals[mergedIntervals.length - 1].push(newIntervals[i].value);
        startCount = 0; // 重置
        endCount = 0;
      }
    }
  }
  return mergedIntervals;
}
```

其實這樣寫會有個小問題，例如：`[[1, 4],[4, 7]]`這種相連的就會有問題，但是他也是屬於要合併的區間！

以兩個區間來討論的話，只會有四種情況。

1. 兩個區間完全分開<br>
   ![](https://i.imgur.com/uolUzuF.png){:width='50%'}
2. 兩個區間完全重疊，其中一個包含在另一個裡面<br>
   ![](https://i.imgur.com/qC9YYQ2.png){:width='50%'}
3. 兩個區間有部分重疊<br>
   ![](https://i.imgur.com/XwF9avA.png){:width='50%'}
4. 兩個區間是接續的沒有重疊<br>
   ![](https://i.imgur.com/q7k7GYh.png){:width='50%'}

我就是忽略了第 4 種情況，所以要加上下面這段，判斷是不是相連。

```javascript
if (i !== newIntervals.length - 1) {
  if (newIntervals[i].value === newIntervals[i + 1].value) {
    continue; // 如果跟下一項是一樣的就跳過
  }
}
```

### 正解

這邊我就參考[唐神筆記-56. Merge Intervals](https://hackmd.io/@XZs7etbeS0ScwmeiGjHDug/SkycrTZhY)寫的用 Java 改寫了，唐神這題甚至連 Thinking Process 都空白，顯然就是覺得這題跟呼吸一樣自然，沒有寫的必要。<br>
也是一樣做排序，只是不用多此一舉去標開始與結束，因為其實第一項就是開始、第二項就是結束啊，我特別標記他要幹嘛，`array[i][0]`就是開始時間`array[i][1]`就是結束時間。<br>
而且就只要往後比較，如果有發生重疊或連續的情況(上圖 2、3 跟 4)，就直接取結束時間最晚的那個當結束時間就好了，這樣就一次搞定三種情況。

```java
public int[][] merge(int[][] intervals) {
    if (intervals.length == 0) return new int[][]{};
    Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));
    ArrayList<int[]> result = new ArrayList<>();
    int[] current = intervals[0];
    for (int i = 1; i < intervals.length; i++) {
        // 如果當前區間的開始時間小於等於前面的結束時間，代表有重疊或連續的情況
        if (intervals[i][0] <= current[1]) {
            // 取結束時間的最大值為新的結束時間
            current[1] = Math.max(current[1], intervals[i][1]);
        } else {
            // 沒重疊也沒連續就直接加入list中
            result.add(current);
            current = intervals[i];
        }
    }
    result.add(current);
    return result.toArray(new int[result.size()][]);
}
```

兩個解法的時間複雜度都是 $O(nlogn)$ 主要就是排序的時間，排好後只要 $O(n)$ 就做完合併了。<br>
但是唐神的解法簡單易懂，不像我寫了一大堆的 if，然後還有沒判斷到的情況，還要再加更多的 if 進去，這就是我與唐神的差距啊！<br>
很多好解法的 code 都一個比一個精簡，但我每次做一道新的題目都是像上面那樣寫得又臭又長，然後還可能是錯的 XDD

[986. Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/)<br>
這題其實想法一樣，只是變成取交集而已，我就不寫了～

## reference

[唐神筆記-56. Merge Intervals](https://hackmd.io/@XZs7etbeS0ScwmeiGjHDug/SkycrTZhY)

## 心得

記得我第一次寫 leetcode 的時候，幾乎都要想非常久，思考過程也是蠢得不行，就算想到了，要寫出來也是要花點時間，真的是最爛的那種。<br>
本來以為刷題是為了訓練思考邏輯能力，後來發現我練習到比較多的應該是要注意邊界，要先把所有可能情況列出來再開始思考，我真的很常忽略了一些例外情況，之前工作上寫圍棋邏輯的東西也是會忘記一些邊界情況，其實現在也還是ㄏㄏ。<br>
應該有不少人覺得刷題很無聊或是毫無章法很像在背答案的，這邊分享一下我自己的做法，<font v-pre color="#c2534c">我都會把一些題目轉化成生活中的例子，或是找一些有趣的應用來連結，還會用我一些生活經驗來做記憶</font>，比如之前分享過的洗牌演算法跟 LIS，這樣子寫過都很難忘掉，我自己覺得這樣刷起題來還蠻快樂的。

## 新登場人物

唐豪：<br>
唐神，研究所同學，是個只要給他個死線就能把大象塞進冰箱的超人，是個低調的強者，打開他的筆電會發現 OS 是 kali linux，會特地給難吃的店五顆星，並寫上這麼優質的店家不能只有我吃到的評論，裸考多益 900 分跟我說畢業門檻很好過，結果我考 500。<br>
順便分享[唐神的 leetcode 筆記](https://hackmd.io/@XZs7etbeS0ScwmeiGjHDug/Hy6Dn9HSY)我都是看這個在學習的。

琛哥：<br>
琛神，研究所同學，是個超級認真負責的人，幾乎每天都在實驗室從早待到晚，是我們這屆最認真的人沒有之一，跟志宏學長一起處理實驗室的大小事，根本是志宏學長接班人，連老師都問他要不要奮力一「博」，老師還是在口試的時候說的，嚇得琛哥人都沒了。

當時與琛哥、唐豪有個小群組，<font v-pre color="#c2534c">琛神唐神與他們的快樂夥伴</font>，沒錯我就是那個快樂夥伴，負責搞笑的，這群組一開始是一起趕論文，後來是一起刷題一起找工作，現在變成我膜拜他們用的群組，感恩琛神唐神讚嘆琛神唐神！<br>
萱姐一直說我們創小群組排擠他，但當時他的論文是最早完成的，所以不用跟我們一起趕，當我們畢業即失業的時候，萱姐早已有工作了，直接進入 intel 跟鬼一樣，根本不用跟我們一起刷題找工作啊。

萱姐：<br>
實驗室之花，研究所同學，馬祖人，據說在馬祖報他的名字就可以呼風喚雨，超愛吃分部門口的神秘花園，老闆娘根本就把萱姐當乾女兒，所以我們去吃都會被老闆娘招待，上次回去老闆娘還把我跟唐豪當成萱姐的學弟ㄏㄏ，好久沒被當成學生了好開心，感恩萱姐讚嘆萱姐。<br>
印象最深的是有一次不知道他是染頭髮還是剪頭髮，結果一整天我、琛哥還有吉神都沒有發現，直到乃元學長進來說：欸？你剪頭髮喔？(或是染或燙吧反正我真的沒看出來)，萱姐才很開心終於有人發現，然後用高 8 度的音調說我們都瞎了。

宣傳一下如果要去馬祖玩可以考慮住[日光春和](https://www.dayspringmatsu.com/)，這是萱姐家開的民宿，冠毅大佛去了都說讚。

[回到目錄](/coding/)
