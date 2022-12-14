---
outline: deep
---

# GitHub Copilot

`2021/11/15`

如題，這次要分享的是[GitHub Copilot](https://copilot.github.com/)，簡單說就是 AI 會幫你寫程式！！！<br>

> Copilot 已於 8/22 開始收費了 QAQ<br>
> 2022/8/23

看起來是只要給明確定義的 function 名稱，他就會自動幫你生成程式碼，有興趣的可以點上面連結去看詳細的介紹，比較可惜的是他現在還沒有完全開放給所有人使用，必須去申請排隊，然後等待通知，其實我也不知道會不會有，因為我根本還沒有收到信，所以等收到信之後考慮再來詳細寫一篇。<br>
看到這應該很多人覺得我這篇是在寫心酸的，等等！先別急著關掉，下滑有驚喜啊！

![](https://i.imgur.com/RAnijuL.png)

雖然我沒有但是強者我主管有！<br>
這篇要感謝哲仰大神，少數可以優先嚐鮮的人天選之人！<br>
以下測試都是一中之光哲仰幫忙做的，感恩哲仰讚嘆哲仰！

一開始得先在 vs code 中裝這個套件，但是你得登入 github 才有辦法裝，所以我現在也還是裝不了。

![](https://i.imgur.com/TGHjAnu.png)

## JavaScript 測試

裝完後就可以開始來玩了，這邊哲仰先測試 JavaScript，看起來是只要打上 function 名稱，他就可以開始把剩下的程式碼補完。<br>
首先我們打上`getBlackStonesFromSgf`如同字面上意思，目標就是要從 sgf 檔中取出黑棋。<br>
直接上影片!

<iframe width="560" height="315" src="https://www.youtube.com/embed/0XgUsWZYa1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

WTF!!!!簡直太狂了，他還會自己用`loadSgf`跟`sgfToArray`這兩個 function...<br>
這兩個 function 就如同字面上的意思，一個是用來取出 sgf 的資訊、一個是用來把 sgf 棋子轉成 array 的形式。

![](https://i.imgur.com/ogOCG7B.png)

他還判斷出了 X 就代表著黑棋，太神了...<br>
就是`let sgf = loadSgf(sgf)`這邊有點錯誤就是了，不過因為我們也沒給 input，基本上他的邏輯都是對的，而且還知道要用什麼 function 來處理 sgf 檔，我的天，這真的嚇壞我了。

## Python 測試

這邊測試的 code 承接上一篇[旋轉棋盤](https://hackmd.io/@Marsgoat/rotate)，就是直接把上一篇的所有 function 都丟進去同個檔案中開始測試，大家可以開啟上一篇自己對比一下。<br>
一開始就直接放大招，先把本來的`rotate_move`給刪掉，然後交給 copilot 來自己寫。

![](https://i.imgur.com/5FWZluF.png)

簡潔明瞭！太神了吧，我好慚愧，我怎麼可以這麼爛，慚愧到已經在想我可以轉行做什麼了。<br>
但是此時哲仰發現不太對，因為其實我這個 function 應該要叫做`rotate_moves`，如果只是`rotate_move`不應該是這樣吧，而且他怎麼會知道我們是想要轉 90 度阿？

於是哲仰就換了一個名稱重新再試一次

![](https://i.imgur.com/XhQJeeN.png)

等等...這根本是在抄我的 code 吧，寫得跟我一樣爛，我標記棋子使用 M 單純只是 move 的縮寫，毫無意義，他也用 M 這絕對是抄我的 code，copilot 你這個抄襲仔，要抄也不抄好一點的。<br>
我的變數名稱都是隨心所欲流，只要自己看得懂就好，這點常常被哲仰嘴，跟我共事果然是很困擾呢 XDD，現在我都會先問過他，哲仰根本是取名專家。

再換一個名稱再試一次！

![](https://i.imgur.com/ShRV155.png)

這次就很強了，雖然還是錯的，不是所有棋子都是黑棋啊，應該要一個 B 一個 W 才對，還是我的`get_sgf_moves`寫得太爛了？但是他居然自己判讀出了 sgf 的格式，然後把棋子拼裝回去，真的是有點厲害。

最後跟 js 一樣也來個取棋子吧，這次換取白棋。

![](https://i.imgur.com/osrZjEb.png)

簡潔明瞭，可惜是錯的，`if x [0] == 0`這邊應該是`if x [0] == W`才對，而且其實我的`get_sgf_moves`已經把 B 跟 W 還有中括弧給拿掉了，所以這樣改也是沒用的，但是他能寫成這樣我已經很驚訝了。

## 心得

整體來說邏輯上都沒有什麼大問題，真的很強，這邊是測試一些算是很少見的功能，copilot 居然還能生出有模有樣的 code 來，而且像是`getWhiteMoves`這樣寫他居然就能猜到意思，這真的是非常令我驚訝，看了一下介紹好像多寫一些註解的話效果還會更好的樣子，如果是很常見的邏輯或是演算法他都是輕輕鬆鬆搞定的，雖然應該都是抄別人的 code 來給你，但這樣讓你連 google 的時間都省下來了，他還會根據你整份 code 幫你寫好，需要修改的地方也不會太多，甚至可能直接就能用了，先不考慮資安問題，這讓我這個 cv 工程師(不要誤會，不是 computer vision，而是 ctrl+c、ctrl+v)情何以堪，未來最先被淘汰的貌似就是我了 QQ，他寫得又快又好，到底要我幹麻？感受到科技進步的同時，也感受到自己的不足，真的是既期待又害怕受傷害 XDD<br>
感覺跟整份 code 的 function 命名跟數量多寡也是有點關係，如果是那種小功能都寫得很完善的檔案應該會更好用才對，未來我也可以裝的時候我再來寫一些玩具跟大家詳細分享吧～

[回到目錄](/coding/)
