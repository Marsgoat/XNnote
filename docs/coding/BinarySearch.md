---
outline: deep
---

# Binary Search

`2023/9/11`

:::warning <div></div>
本篇會以已經知道 Binary Search 的前提下分享解題心得、練習順序以及模板分享。
如果還沒有學過的人請先去找資源學習。
:::

如果在面試時你已經解出了一個 $O(n)$ 的解，面試官仍然不滿意，那 99%就是要你使用 Binary Search 了，除非是有 $O(1)$ 的解，但我覺得這比較少見，有些可能都是用數學解，比較不容易在面試時出現(吧)。

以下是我整理過的題目，推薦給大家，讓新手可以有個比較好的學習順序，如果是老手也能在複習的時候快速的找到題目。

### 基礎題

一開始就直接寫這題吧，題目都告訴你是 Binary Search 了

- [704. Binary Search](https://leetcode.com/problems/binary-search/)

如果沒辦法在 3 分鐘內 AC 的話代表可能還不夠熟練，可以繼續練習以下題目<br>

- [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)
- [278. First Bad Version](https://leetcode.com/problems/first-bad-version/)
- [374. Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/)

### 變化題

其實二維陣列跟旋轉的題目都是讓你練習陣列的操作而已，可以各挑一題練一下即可。<br>
數學類有些題目都有很神奇的解法 (比如 $O(1)$ 解) ，用 Binary Search 反而有點搞笑，所以我就挑了幾題我自己覺得比較有意義的題目。<br>

不知道從哪題開始的話每一類的順序都建議由上往下寫

- #### 部分排序或有重複值

  - [162. Find Peak Element](https://leetcode.com/problems/find-peak-element/)
  - [852. Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/)
  - [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
  - [540. Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/)

- #### 二維陣列

  - [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)
  - [240. Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/)

- #### 旋轉類

  - [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
  - [81. Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)
  - [153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
  - [154. Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)

- #### 數學類

  - [69. Sqrt(x)](https://leetcode.com/problems/sqrtx/)
  - [367. Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/)
  - [1201. Ugly Number III](https://leetcode.com/problems/ugly-number-iii/)
  - [668. Kth Smallest Number in Multiplication Table](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/)

- #### 不知道怎麼分類

  - [1539. Kth Missing Positive Number](https://leetcode.com/problems/kth-missing-positive-number/)

### 應用題

這邊是我自己認為沒寫過類似題會想不到可以用 Binary Search 來解的題目，<font v-pre color="#c2534c">這邊應該就是 Binary Search 的精華了</font>，畢竟前面的題目考了大家都會，只有考這類應用題才有一點鑑別度，有時候不只會用到 Binary Search，不過寫多了這邊題目也都大同小異，只有縮小邊界的條件不一樣而已。<br>
可以自己挑題目練習也可以依照題目難度來寫，前五題我覺得都是一樣的，看起來是比較新的題目分數較低，可能因為週賽參賽的人數越來越多，有變比較難打，或是類似題多了大家也變得更強了，畢竟現在網路上資源也越來越多了，開始卷起來了。

| 題目                                                                                                                                                  | 分數 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| [2187. Minimum Time to Complete Trips](https://leetcode.com/problems/minimum-time-to-complete-trips/)                                                 | 1640 |
| [2226. Maximum Candies Allocated to K Children](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/)                               | 1646 |
| [1870. Minimum Speed to Arrive on Time](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/)                                               | 1675 |
| [1011. Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)                               | 1725 |
| [875. Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)                                                                        | 1765 |
| [2064. Minimized Maximum of Products Distributed to Any Store](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/) | 1885 |
| [2602. Minimum Operations to Make All Array Elements Equal](https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/)       | 1903 |
| [2594. Minimum Time to Repair Cars](https://leetcode.com/problems/minimum-time-to-repair-cars/)                                                       | 1915 |
| [1552. Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/)                                             | 1919 |
| [1760. Minimum Limit of Balls in a Bag](https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/)                                               | 1939 |
| [1482. Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/)                           | 1945 |
| [2448. Minimum Cost to Make Array Equal](https://leetcode.com/problems/minimum-cost-to-make-array-equal/)                                             | 2005 |
| [2517. Maximum Tastiness of Candy Basket](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/)                                           | 2020 |
| [719. Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/)                                              |      |
| [410. Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)                                                                |      |

其實還有很多題，不過我覺得已經夠多了，第一次可以先挑幾題寫，之後複習再寫沒寫過的。<br>
這樣 Binary Search 的相關題目應該就無敵了。

### Template

初學 Binary Search 要思考三個問題

1. 定義邊界
2. 迴圈的結束條件
3. 縮小邊界的條件跟縮小方式

設定上下界時應該包含到所有可能，如果沒設好可能就會找不到答案。<br>
迴圈的結束條件一開始寫會有很多困惑，比如什麼時候要用`<`什麼時候用`<=`<br>
縮小邊界的方式什麼時候`-1`什麼時候`+1`，迴圈結束時要回傳什麼值？<br>
我最一開始在練習時很常寫出無窮迴圈，要不就是迴圈結束後出來的值不是我要的答案...<br>
然後就開始嘗試把`+1` `-1` `<` `<=` 的各種組合都試一次，最後 AC 我也不知道是為什麼。<br>

如果跟我有一樣困擾的人，這邊一律推薦無腦使用模板 XDD<br>
(開玩笑的，請認真理解過後再使用模板，不然一樣沒用)

網路上的模板有很多種，我剛開始寫的時候是用三個模板的版本，看是要找到值的還是要找邊界的，不同使用情境分別使用不同模板，但後來我最喜歡下面這種模板，非常乾淨一招打天下。

[Python Binary Search Template](https://leetcode.com/discuss/general-discussion/786126/Python-Powerful-Ultimate-Binary-Search-Template.-Solved-many-problems)

```python{8}
def binary_search(array) -> int:
    def condition(value) -> bool:
        pass

    left, right = min(search_space), max(search_space) # could be [0, n], [1, n] etc. Depends on problem
    while left < right:
        mid = left + (right - left) // 2
        if condition(mid):
            right = mid
        else:
            left = mid + 1

    return left
```

這邊<font v-pre color="#c2534c">要注意這個模板的區間是 `[left, right)` </font> 所以要注意上界的範圍。<br>
其實這就跟 python 的 [bisect](https://github.com/python/cpython/blob/3.11/Lib/bisect.py) 用的是一樣的，我猜作者應該也是有參考這個的 ，因為不是很像而已是根本一模一樣 XDD<br>
而最後回傳`left`會是<font v-pre color="#c2534c">區間內第一個滿足`condition`的值</font>，如果沒有任何值滿足`condition`則會返回 right 的初始值。<br>

遇到題目先將上下界定好之後，都只需要思考第八行`if`的條件，寫起來都變得非常快速乾淨。<br>
原理我這邊都不解釋了直接用題目分享，如果沒有很熟的人一定要把上面的文章仔細讀過。<br>

#### 題目實例

以 704 題為例，我問了不少人，包含我自己，一開始寫的時候都是像下面這樣寫的。<br>
其實都可以，只是使用模板會方便很多，如果上面的題目有練習過的話應該就會懂我在說什麼。

```python
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            if nums[mid] > target:
                right = mid - 1
            else:
                left = mid + 1

        return -1
```

接下來使用模板改寫

::: code-group

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while left < right:
            mid = (left + right) // 2
            if nums[mid] >= target:
                right = mid
            else:
                left = mid + 1

        return left if nums[left] == target else -1
```

```javascript
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = (left + right) >> 1;
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[left] === target ? left : -1;
}
```

```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left = 0;
        int right = nums.size() - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return nums[left] == target ? left : -1;
    }
};
```

```java
class Solution {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return nums[left] == target ? left : -1;
    }
}
```

:::

只看一題還沒辦法感受模板的魅力，再來看一題 2187. Minimum Time to Complete Trips<br>

![](https://hackmd.io/_uploads/B1S1ITIJ6.png)

題目給了每輛公車行駛一趟的時間`time`，給了目標的趟數`totalTrips`，求完成目標趟數的最短時間。<br>

```
Input: time = [1,2,3], totalTrips = 5
Output: 3
```

最簡單的想法就是暴力解，用猜的。<br>
例如從 1 開始猜，看看所有公車行駛 1 時間後能否完成目標的趟數，發現行使 1 時間只有`time[0]`這台公車可以完成一趟。<br>
行使 2 時間，`time[0]`公車可以完成兩趟、`time[1]`公車可以完成一趟，還是達不到五趟，繼續往下猜。<br>
行使 3 時間，`time[0]`完成了三趟、`time[1]`完成了一趟、`time[2]`完成了一趟，總共五趟達成目標。<br>

再來思考一下，該怎麼優化，我們就會想到用 Binary Search 來猜答案。<br>

解題步驟：

1. 定義邊界：<br>
   可能的最短時間很簡單就是一次完成，最長時間應該會是 `time` 中每趟時間最短的公車直接開到符合`totalTrips`
2. 思考縮小邊界的條件：<br>
   假設我們猜的時間為`t`，每台公車能完成的趟數就是`time[i] / t`，加總後看有沒有符合`totalTrips`，如果小於`totalTrips`就代表我們猜的時間太短了，如果超過了或是一樣，則代表我們可能猜多了或是這就是答案。

::: code-group

```python
class Solution:
    def minimumTime(self, time: List[int], totalTrips: int) -> int:
        def canFinish(time, totalTrips, mid) -> bool:
            trips = 0
            for t in time:
                trips += mid // t
            return trips >= totalTrips

        left = 1
        right = min(time) * totalTrips
        while left < right:
            mid = (left + right) // 2
            if canFinish(time, totalTrips, mid):
                right = mid
            else:
                left = mid + 1

        return left
```

```javascript
function minimumTime(time, totalTrips) {
  function canFinish(time, mid) {
    let trip = 0;
    for (const t of time) {
      trip += Math.floor(mid / t);
    }

    return trip >= totalTrips;
  }

  let left = 1;
  let right = Math.min(...time) * totalTrips;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canFinish(time, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
```

```cpp
class Solution {
public:
    long long minimumTime(vector<int>& time, int totalTrips) {
        long long left = 1;
        long long right = 1LL *  *min_element(time.begin(), time.end()) * totalTrips;

        while(left < right) {
            long long mid = left + (right - left) / 2;
            if(canFinish(time, totalTrips, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }

    bool canFinish(vector<int>& time, int totalTrips, long long mid) {
        long long trips = 0;
        for(int t : time) {
            trips += mid / t;
        }
        return trips >= totalTrips;
    }
};
```

```java
class Solution {
    public long minimumTime(int[] time, int totalTrips) {
        long left = 1;
        int maxTime = 0;
        for (int t : time) {
            maxTime = Math.min(maxTime, t);
        }
        long right = (long) maxTime * totalTrips;

        while (left < right) {
            long mid = left + (right - left) / 2;
            if(canFinish(time, totalTrips, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }

    public boolean canFinish(int [] time, int totalTrips, long mid) {
        long trips = 0;
        for (int t : time) {
            trips += mid / t;
        }
        return trips >= totalTrips;
    }
}
```

:::

使用模板的優點超明顯，主要程式的部分幾乎一模一樣，只要思考`canFinish`的部分，所有題目都可以轉換成這種形式。<br>
可以多練習幾題去感受一下，其他題目我就陸續更新在參考解答區了。

### 心得

一開始使用模板可能會稍微有點不習慣，因為每個人的寫 code 習慣都不同，硬是要改成一個制式化的寫法，應該很多人都不喜歡，尤其不打週賽的人更會覺得沒必要，但我覺得一個好的模板不只是讓你打週賽時更快的解決問題而已，在面試時也可以<font v-pre color="#c2534c">更容易讓面試官看得懂</font>，所以平常在刷題時我不是追求要什麼 beat 99%，<font v-pre color="#c2534c">我更在乎的是我寫出來的 code 可讀性高不高，能不能清楚的表達我在寫什麼東西</font>，這時候一個好的模板就很方便了，畢竟你看過我看過獨眼龍也看過，面試官當然也會看過囉，有可能你都不必解釋太多，面試官看兩行就知道你想寫什麼了，尤其是對於我這種新手來說直接學習大神們寫的 code 會更容易上手。

最後附上一個勸退大家使用模板的人，但他的寫法剛好就是我覺得最好用的模板寫法 XD，我覺得他的解釋寫得很好，還沒完全理解 Binary Search 的可以去看看，模板好用是好用，但還是得先理解過後才能得心應手。<br>

[Come on, forget the binary search pattern/template! Try understand it!](https://leetcode.com/problems/search-insert-position/solutions/249092/come-on-forget-the-binary-search-pattern-template-try-understand-it/)

額外再推薦一個中文教學 [Binary Search 完整教學](https://medium.com/appworks-school/binary-search-%E9%82%A3%E4%BA%9B%E8%97%8F%E5%9C%A8%E7%B4%B0%E7%AF%80%E8%A3%A1%E7%9A%84%E9%AD%94%E9%AC%BC-%E4%B8%80-%E5%9F%BA%E7%A4%8E%E4%BB%8B%E7%B4%B9-dd2cd804aee1)，如果英文真的看不下去，那這篇也寫得非常詳細。

### 參考解答

陸續更新中

#### [2517. Maximum Tastiness of Candy Basket](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/)

題目給一個正整數陣列 `price`，其中 `price[i]` 代表第`i`顆糖果的價格，以及一個正整數`k`。<br>
商店賣的糖果籃子裡有 `k` 個不同的糖果。一個糖果籃子的"美味度"（tastiness）是籃子裡任兩種糖果價格的最小絕對差，最後要回傳最大的美味度。

思路：<br>
暴力解的話就是任選 `k` 個糖果，分別計算最大的美味度，這樣時間複雜度是 $O\left( \binom{n}{k} \times k^2 \right)$。

換個思路想想看：<br>
當 `k` = 2 ，要挑兩顆糖果使他們的美味程度最高的話，一定是挑價格最大跟最小。<br>

當 `k` >= 3 時就比較難一眼看出答案，所以我們可以先將`price`做排序。<br>

```
Input: price = [13,5,1,8,21,2], k = 3
Output: 8
```

```
price = [1,2,5,8,13,21]
```

這樣就比較清楚了，我們就是要從 2,5,8,13 之中選一個距離 1 跟 21 最遠的。<br>
1 跟 21 最遠的應該是兩個的中間值 11，但有可能不會這麼剛好有 11，所以我們就要用距離開始猜答案，從頭開始出發找看看是否能夠符合條件找到 `k` 個糖果。<br>
例如：一開始猜距離為 10，從 1 開始往後找，看有沒有大於等於 11 的數，這樣會找到 13，再繼續往後加 10 找看有沒有大於等於 23 的數，遍歷完整個陣列後發現只找得到 2 個糖果，不符合題目要求 `k` = 3，如果我們猜的距離找不齊 `k` 個糖果，那代表我們猜的距離太大了，反之就是猜得太小。<br>
我覺得只要能夠想到用距離去猜答案，就很快能想到要用 Binary Search 了。

解題步驟：

1. 定義邊界：<br>
   有可能的最小差值為 0(所有糖果價格都一樣)，最大差值就是 $price_{max} - price_{min}$。<br>
   如果是套用上面模板的人要注意一下，因爲區間是 `[left, right)` 實作時要將 `right` + 1 才會把所有可能涵蓋進去。
2. 思考縮小邊界的條件：<br>
   遍歷陣列，檢查是否能找到 `k` 個糖果符合所猜的美味值。<br>
   這邊要注意的是，如果能找到恰好 `k` 個糖果符合，並不代表這一定是最大距離，所以我們要繼續往更大的距離猜，直到猜到沒辦法找到 `k` 個糖果符合時才跳出迴圈，此時找到的值就是最小不符合的距離，要將其減 `1` 才是我們要的答案。<br>

::: code-group

```python
class Solution:
    def maximumTastiness(self, price: List[int], k: int) -> int:
        def isPossible(mid: int) -> bool:
            count = 1
            pre = price[0]
            for p in price[1:]:
                if p - pre >= mid:
                    count += 1
                    pre = p
            return count >= k

        price.sort()
        left = 0
        # 因爲區間是 [left, right) 要注意將 right + 1
        right = price[-1] - price[0] + 1

        while left < right:
            mid = (left + right) // 2
            if not isPossible(mid):
                right = mid
            else:
                left = mid + 1
        return left - 1 # left 是第一個不滿足的，所以要 -1
```

```javascript
function maximumTastiness(price, k) {
  function isPossible(mid) {
    let count = 1;
    let current = price[0];
    for (const p of price) {
      if (p - current >= mid) {
        count++;
        current = p;
      }
    }

    return count >= k;
  }

  price.sort((a, b) => a - b);
  let left = 0;
  let right = price[price.length - 1] - price[0] + 1;

  while (left < right) {
    const mid = (left + right) >> 1;
    if (!isPossible(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left - 1;
}
```

```cpp
class Solution {
public:
    int maximumTastiness(vector<int>& price, int k) {
        sort(price.begin(), price.end());
        int left = 0;
        int right = price[price.size() - 1] - price[0] + 1;

        while (left < right) {
            int mid = left + (right - left) / 2;
            if (!isPossible(price, k, mid)){
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left - 1;
    }

    bool isPossible(vector<int>& price, int k, int mid){
        int count = 1;
        int pre = price[0];
        for (int i = 1; i < price.size(); i++) {
            if (price[i] - pre >= mid) {
                count++;
                pre = price[i];
            }
        }

        return count >= k;
    }
};
```

```java
class Solution {
    public int maximumTastiness(int[] price, int k) {
        Arrays.sort(price);
        int left = 0;
        int right = price[price.length - 1] - price[0] + 1;

        while (left < right) {
            int mid = left + (right - left) / 2;
            if (!isPossible(price, k, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left - 1;
    }

    public boolean isPossible(int[] price, int k, int mid) {
        int count = 1;
        int pre = price[0];
        for (int i = 1; i < price.length; i++) {
            if (price[i] - pre >= mid) {
                count++;
                pre = price[i];
            }
        }

        return count >= k;
    }
}
```

:::
