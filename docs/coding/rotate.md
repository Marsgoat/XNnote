# 旋轉棋盤

> Nov 6, 2021

這次是一個蠻搞笑的經驗，就是一個明明很簡單的事情，我用了比較複雜且白癡的方式去做，導致哲仰看我的眼神也變得跟彥吉一樣了，我把很搞笑的心路歷程也都寫出來，分享一下給大家笑一笑。

![](https://i.imgur.com/P16ZjF0.jpg)

## 旋轉棋盤

其實要做的就只是像下圖一樣的棋盤旋轉<br>
(本局為第二十六屆三星盃四強：申真諝執黑中盤勝楊鼎新)<br>
![](https://i.imgur.com/stLYCoh.png)<br>
下圖為上圖逆時針選轉 90 度<br>
![](https://i.imgur.com/i60C4Pn.png)<br>
沒錯！就是這麼簡單的小功能

## sgf 資料格式

首先要先了解一下棋譜的[sgf 格式](https://en.wikipedia.org/wiki/Smart_Game_Format)，以下為上面這盤棋的棋譜，`SZ[19]`就是棋盤的 size，這邊是 19x19 的大小，`B`就是黑棋、`W`就是白棋，`[]`中放的就是那手棋的座標位置，以 19 路棋盤為例最左上角的點就是 aa、右下角為 ss，就是 1~19 改為 a~s 的座標，這邊每一手棋都是有順序的，所以可以看到`B`跟`W`交替出現，其他資訊以這次例子來說不太重要就不提了。

```
(;CA[big5]SZ[19]AP[MultiGo:4.4.4]MULTIGOGM[1]
;B[pd];W[dd];B[pp];W[dp];B[cq];W[dq];B[cp];W[do];B[bn];W[qc];B[pc];W[qd];B[pe];W[rf]
;B[fc];W[kd];B[ic];W[ec];B[fd];W[df];B[hq];W[kq];B[ho];W[nq];B[oq];W[np];B[pn];W[jo]
;B[hm];W[el];B[qb];W[rb];B[re];W[pb];B[qe];W[ob];B[qi];W[cr];B[br];W[bo];B[co];W[cn]
;B[dr];W[cm];B[dn];W[dm];B[en];W[gp];B[hp];W[fn];B[eo];W[fp];B[fm];W[bq];B[cs];W[bp]
;B[cr];W[gn];B[em];W[gm];B[fl];W[hn];B[ep];W[fr];B[in];W[gl];B[eq];W[io];B[ck];W[an]
;B[kr])
```

所以這邊拿到一個 sgf 格式的棋譜需要先做一些字串處理，將其中的走步給取出來，這邊我是使用玉山大神寫的一些處理 sgf 的程式，很多功能都還蠻好用的一直被我沿用到了現在，感恩玉山讚嘆玉山。<br>
玉山是我高中時期非常要好的學弟，coding 能力強到爆炸，是從高中就開始打比賽的那種大神，但是他叫我不要吹捧他，只好之後再找機會分享他有多神了。

```python
def get_sgf_moves(sgf):
    moves = [x[2:4] for x in re.findall('[^A]([B|W]\[..\])+', sgf)]
    return moves
```

這邊加上`[^A]`是因為 sgf 格式中有 AB 跟 AW，我們這裡只要單純的走步，如果只是上面的棋譜用不到這個，這邊的正規表達式也是玉山教我的，可能沒有在寫爬蟲或是常做字串處理真的會對正規表達式很不熟悉吧，反正我就爛。

## 實作過程

### 耍寶心路歷程

這邊我的想法很簡單，就是把這些 sgf 格式的字母座標轉換成數字座標，用一個二維陣列存起來，然後將這個二維陣列做旋轉，就很直覺是一個旋轉棋盤的概念，旋轉後再將這些數字座標轉回字母座標。

```python
def rotate_board(sgf, size):
    board_array = []
    for i in range(size):
        board_array.append(['.']*size)
    new_sgf_moves = []
    Bmoves = get_Bmoves(sgf)
    Wmoves = get_Wmoves(sgf)
    for move in Bmoves:
        board_array[move[1]][move[0]] = 'X'
    for move in Wmoves:
        board_array[move[1]][move[0]] = 'O'
    board_array = np.rot90(board_array)
    board_array = board_array.tolist()
    for i in range(size):
        for j in range(size):
            if board_array[i][j] == 'X' or board_array[i][j] == 'O':
                new_moves.append(num_to_char(j)+num_to_char(i))
    return new_sgf_moves
```

先分別把黑棋白棋取出來，然後塞進`board_array`中，`sgf`用的是上面的 sgf 棋譜，`size`為棋盤大小，然後用 numpy 的`np.rot90`做矩陣的旋轉。

```python
def get_Bmoves(sgf):
    B = [x[1:3] for x in re.findall('[^A]B(\[..\])+', sgf)]
    return [(char_to_num(x[0]), char_to_num(x[1])) for x in B]
```

```python
def get_Wmoves(sgf):
    W = [x[1:3] for x in re.findall('[^A]W(\[..\])+', sgf)]
    return [(char_to_num(x[0]), char_to_num(x[1])) for x in W]
```

`get_Bmoves`和`get_Wmoves`分別用來取得黑走步跟白走步，然後直接轉為數字座標形式

```python
def num_to_char(num):
    char_coor = 'abcdefghijklmnopqrs'
    return char_coor[num]
```

```python
def char_to_num(char):
    char_coor = 'abcdefghijklmnopqrs'
    num_dict = dict()
    for i in range(len(char_coor)):
        num_dict[char_coor[i]] = i
    return num_dict[char]
```

`char_to_num`是用來將字母座標轉成數字座標的<br>
`num_to_char`是用來將數字座標轉回字母座標的

![](https://i.imgur.com/Bl3Aodg.png)

print 出來的話就是由上圖轉成下圖

![](https://i.imgur.com/HP7irJL.png)

接下來只要把棋子取出來重新轉回 sgf 格式即可?!<br>
然而並不是，這邊完全是我在搞笑，轉完之後每一手的順序全都沒了，而且看看上面煞有其事的兩張圖，其實有一些提子的地方就沒有顯示出來了，會比原先的棋譜少了幾手，所以我們得一手一手塞進去，再一手一手取出來，以下為修改後的版本。

### 修正版本

```python
def rotate_board(sgf, size):
    board_array = []
    for i in range(size):
        board_array.append(['.']*size)
    new_moves = []
    moves = get_sgf_moves(sgf)
    for move in moves:
        board_array[move[1]][move[0]] = 'm'
        board_array = np.rot90(board_array)
        board_array = board_array.tolist()
        for i in range(size):
            for j in range(size):
                if board_array[i][j] == 'm':
                    board_array[i][j] = '.'
                    new_moves.append(num_to_char(j)+num_to_char(i))
    return new_moves
```

```python
def get_sgf_moves(sgf):
    moves = [x[2:4] for x in re.findall('[^A]([B|W]\[..\])+', sgf)]
    return [(char_to_num(x[0]), char_to_num(x[1])) for x in moves]
```

這邊就預設棋譜都是黑白輪流一人一手，所以接著把`new_moves`一手黑一手白組裝成新的 sgf 就行了，如果要處理其他情況的話，就要將黑白的資訊也給取出來額外處理了，甚至是變化圖等，但這邊就不另外展開了。<br>
到這看似一切圓滿了，此時一中之光哲仰回頭一看，滿頭問號的問我在寫什麼鬼。

### 最終版本

哲仰表示：不是阿你是有什麼困難，這個不就很單純的事情，你怎麼會寫成這樣，他就只是個旋轉，反正我們這個只會轉 90 度，你就把點翻過去另一邊(一邊做手勢)，然後再把 x , y 座標交換就好了啊(以下略...我已經忘記他當時在跟我解釋什麼了)。<br>
我記得那時已經快要下班，且那天會議特別多，我已經是一個腦袋也在旋轉的狀態了，所以完全聽不進去，大概就是一個癡呆狀態吧，隔天來，我仔細了想了一想，終於恍然大悟，然後最終版本如下：

![](https://i.imgur.com/j7uSDuC.png)

```python
def rotate_move(sgf, size):
    new_moves = []
    moves = get_sgf_moves(sgf)
    for move in moves:
        y = size-1-move[0]
        x = move[1]
        new_moves.append(num_to_char(x)+num_to_char(y))
    return new_moves
```

嗯...我本來到底在幹麻?

### 原理

其實這邊就是高中數學嗎?!我已經全忘光了，我先承認我數學超爛，所以我一直很崇拜念數學系的人，念數學系的根本都是鬼，我身邊念數學系或是數學系轉資工所的那些人，根本都是只能仰望的存在。<br>
平面上的座標[旋轉](<https://en.wikipedia.org/wiki/Rotation_(mathematics)>)，如果以原點為中心，逆時鐘旋轉 θ 度後，原座標為$(x,y)$、新座標為$(x',y')$，以矩陣的方式表示如下：

$$
\begin{bmatrix}
x' & y'
\end{bmatrix} =
\begin{bmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
$$

那棋盤就是以天元(棋盤正中央那個點)為中心做旋轉，因為只會轉 90、180、270，所以其實就很簡單，以旋轉 90 度來看，cosθ 為 0、sinθ 為 1<br>
$x'=-y$<br>
$y'=x$<br>
這邊可以去 google 一下，轉一些奇怪的角度要怎麼寫，還蠻有趣的，我這就不展開了。<br>
反正圍棋應該是沒有人要轉 45 度之類的吧?!這樣轉很多棋子都被轉出棋盤外了...<br>
如果有，那你自己寫。

## 心得

這邊真的蠻搞笑的，想起律濃學長前陣子跟我的對話<br>
律濃學長：你寫 code 都用不到數學嗎?<br>
我：用不到阿，寫什麼會用得到數學?<br>
我：阿!用到加減乘除這樣算嗎? 我數學只有國中生程度欸<br>
律濃學長：...好喔<br>
原來不是用不到阿!而是我根本就不會~~<br>
以此篇作為紀念，希望未來搞笑的次數會慢慢減少~~
