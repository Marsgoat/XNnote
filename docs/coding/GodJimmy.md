# 蜜月橋牌程式優化(位元運算)

> Oct 19, 2021

這篇來分享其中一小段關於蜜月橋牌打牌階段的優化。<br>
紀錄研究所時期(2018~2020)，當時我寫的程式真的是效率極差，彥吉大神表示看不下去，不知道我在亂寫什麼東西，於是動手幫我重寫了一個效率快了 120 倍的 code，明明都是用 C++寫，卻可以差這麼多，只能說彥吉是真 D 神。

## 蜜月橋牌

蜜月橋牌是一種兩人橋牌遊戲，比起一般橋牌多加入了換牌階段，整體來說還蠻有趣的，湊不滿四人時也是一個很好打發時間的遊戲。本來這段是想用來解釋遊戲規則的，但想了一下好像完全不用知道規則也沒關係，所以就來分享一下我與橋牌的緣分。<br>
我高中有段很瘋狂的時期全班都在打橋牌，每天來學校都是吃飯睡覺打橋牌，因為打橋牌打太晚忘了時間被鎖在南樓，段考一堆人提早交卷出來打橋牌，美術課還有一個很神奇的老師會跟我們說打牌的小聲一點，真的只差沒邀老師一起打了，到後來連班服上都有橋牌梗(一個大大的黑桃)。<br>
所以當我跟高中同學說我的論文是跟橋牌有關時，他一開始還不信，以為我在開玩笑。<br>
下圖為段考奇景，有圖有真相

![](https://i.imgur.com/odzXGye.jpg)

圖片來源：強者適楷

## 資料結構

在蜜月橋牌中用 A 贏下 2 跟用 3 贏下 2 效果都是一樣的，都是得到一磴，不會因為數字更大而得到更多的分數，所以這裡使用依大小排列的二元序列來表示雙方手牌，1 表示為先手方手牌，0 表示為後手方手牌，如下圖所示，這副牌表示為`1101101` `1010010` `010010` `000111`。

![](https://i.imgur.com/3pW5Tdn.png)

我們完全不需要管牌的點數到底是多少，只需要知道各花色牌的大小關係。<br>
這樣我們只需要用 26 個 bit 就能表示雙方的手牌了，而且很多牌型都可以視為同一種，比如下圖，先手方有 A、2 與先手方有 Q、5，紀錄方式都為`1001`。

![](https://i.imgur.com/WD8jL03.png)

## 蜜月橋牌打牌階段

換牌階段結束後就是打牌階段，如果過程中有記牌的話，其實就可以知道對方的所有手牌，這時候的策略就變得很單純，只要用[Minimax Algorithm](https://en.wikipedia.org/wiki/Minimax)把所有可能展開就可以得到最佳的打牌方式，對 minimax 不了解的，推薦可以看以下影片，講解得蠻清楚的!。<br>
[Coding Challenge 154: Tic Tac Toe AI with Minimax Algorithm](https://youtu.be/trKjYdBASyQ)<br>
在這裡就是選擇 1 的部分展開，若是到下一層發生先後手轉換的情形，則把盤面與`11111...111`(幾張牌就幾個 1)做 XOR(exclusive or)運算，這樣就可以把 0 跟 1 交換，一樣選擇 1 的部分展開就可以了，這邊要注意的是蜜月橋牌是有可能有連續先手的，max 層的子節點不一定是 min 層，同樣的 min 層的子節點也不一定是 max 層，需要做一些處理或是轉換，或許將來有機會可以分享，讓更多人入坑這個~~糞 game~~。

![](https://i.imgur.com/55KxEbC.png)

然後這邊可以做一個最簡單的剪枝，以梅花為例，我們會發現盤面`000111`中不論我們選擇哪張牌，之後盤面都將變為`00011`，所以相鄰的 1 我們只需要做一次即可。

![](https://i.imgur.com/aixdhoL.png)

## 實作過程

前面廢話了一堆終於進到正題，這邊我們要做 Minimax 就是要展開所有的合法走步，也就是要先取出二元序列中所有的 1 的部分，然後有連續 1 的部分就只取一個。<br>
我的想法很簡單，就是一個 for 迴圈掃過所有的牌，每次左移一個 bit，找到 1 的部分，然後判斷是否有連續的 1，非常直觀，寫起來如下。

### 直覺寫法

`cards`為雙方剩餘手牌總張數<br>
`board`為雙方手牌的二元序列<br>
`newboard`為更新後雙方手牌的二元序列<br>
`reorder`為更新手牌二元序列的函式<br>

```cpp
for (int i = 0; i < cards; i++) {
    if ((board & (1 << i)) == 1 && (board & (1 << (i + 1))) != 1){
        unsigned int newboard = reorder(board, i, cards);
        //do thing...
    }
}
```

判斷連續的 1 我也是用最簡單的想法，直接再往左移一個 bit，如果不是 1 我才取，有 1 的話代表有連續，則再繼續左移，這樣掃完我就可以知道我要取的 1 在哪些位置，然後取出來再更新盤面。<br>
更新盤面我這邊是直接重新排手牌，要把出掉的牌給移掉。<br>
`choose`為選出的那張牌

```cpp
unsigned int reorder(unsigned int board, int choose, int cards){
    unsigned int newboard = 0;
    for (int i = cards - 1; i >= 0; i--){
        if (i != choose){
            newboard <<= 1;
            if ((board & (1 << i)) == 1){
                newboard = newboard + 1;
            }
        }
    }
    return newboard;
}
```

這邊寫法真的是有很大的進步空間，當時應該跟品儒學長好好學學[bitboard](https://en.wikipedia.org/wiki/Bitboard)的，悔不當初。<br>
此時彥吉看了看，搖了搖頭，露出了關愛智障的表情，然後直接現場改寫，以下為吉神教學時間！

### 優化第一版：

`p`為要取出的牌

```cpp
while (board) {
    auto p = board & -board; // uint32_t p = _blsi_u32(board);
    board ^= p; // board = _blsr_u32(board);
    // do thing...
}
```

這邊直接用個範例，假設雙方都還各剩 5 張牌的情況，`board = 0110110100`，與`-board`做 AND 運算就可以很神奇的取得最右邊的 1，最後把取出來的牌與原本的手牌二元序列做 XOR 運算就可以更新手牌資訊了。<br>
`board & -board`可以直接寫成`_blsi_u32(board)`、`board ^ p`也可以寫成`_blsr_u32(board)`出來結果是一樣的。

```cpp
 board = 0110101100
-board = 1001010100
     p = board & -board
     p = 0000000100
board ^= p
 board = 0110101000
```

從一開始的 for 迴圈需要執行 10 次，現在這個 while 迴圈只需要跑 5 次，盤面更新也非常簡單快速，就一行搞定，其實到這我已經是跪著看了，然而還不只是這樣...<br>
我們可以發現雖然這邊迴圈執行次數變少了，但是並沒有判斷連續 1 的剪枝，所以就繼續看下去！

### 優化第二版：

```cpp
while (board) {
    auto p = board & -board; // uint32_t p = _blsi_u32(board);
    board &= board + p;
    // do thing...
}
```

這邊一樣直接給範例，一開始跟前面一樣，不一樣的是`board &= board + p`，這樣會非常神奇的把後面連續的 1 都給消掉。<br>
如此這個 while 迴圈只需要執行 3 次！！！！！！<br>
真的是跪到天花板了，到底是多神才能想到這種寫法，感恩吉神讚嘆吉神！

```cpp
    board = 0110101100
        p = 0000000100
board + p = 0110110000
   board &= board + p
          = 0110100000
```

## 心得

雖然說寫程式不難，但要寫好程式真的好難...<br>
我這邊整個打牌階段的邏輯大概寫了 700 多行的 code，因為還要處理牌的花色分布的問題，王牌非王牌的處理，總之還有一些小細節跟橋牌規則要處理，不過其實也不會很難，但這邊彥吉只用了 200 行左右搞定一切，看那精美的 code 簡約而不簡單，好多地方都是要吉神親自講解我才看得懂他在寫什麼，不過很多我也已經忘記了 XD，所以只能跟大家分享這麼一小段。<br>
120 倍這邊是指建殘局庫所花的時間，其中也包含了學長做了多執行緒的優化，彥吉表示：都 9102 年了還有人只寫單執行緒的 code。搞得我很像原始人...<br>
`_blsi_u32`跟`_blsr_u32`貌似是 x86 的內建函式，反正我是從來沒看過也沒用過，難怪學長們寫程式還會考慮到什麼 cpu 指令集，真的是太強，畢竟我連寫最基本的 for 迴圈都會被學長嫌效率太差 QQ。<br>
真的是跟彥吉大神學到蠻多東西的，雖然之後應該也用不出來，趁著還記得的時候紀錄下來，以後吉神出名時還可以拿出來炫耀炫耀，跟朋友說這位大神曾經幫我改過 code。

[回到目錄](/coding/)