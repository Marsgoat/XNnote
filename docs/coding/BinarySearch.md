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

- 部分排序或有重複值

  - [162. Find Peak Element](https://leetcode.com/problems/find-peak-element/)
  - [852. Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/)
  - [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
  - [540. Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/)

- 二維陣列

  - [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)
  - [240. Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/)

- 旋轉類

  - [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
  - [81. Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)
  - [153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
  - [154. Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)

- 數學類

  - [69. Sqrt(x)](https://leetcode.com/problems/sqrtx/)
  - [367. Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/)
  - [1201. Ugly Number III](https://leetcode.com/problems/ugly-number-iii/)
  - [668. Kth Smallest Number in Multiplication Table](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/)

- 不知道怎麼分類
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

如果跟我有一樣困擾的人，這邊一律推薦使用模板 XDD

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

每題都變成只要考慮第八行中`if`的條件，其他部分都不用動，再也不用想什麼`+1` `-1` `<`跟`<=`了

以 704 題為例，直接上參考答案，這是我使用模板後寫的。

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

我問了不少人，包含我自己，一開始寫的時候都是像下面這樣寫的。<br>
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

再來看一題 2187. Minimum Time to Complete Trips<br>
使用模板的優點超明顯，主要程式的部分幾乎一模一樣，只要思考`canFinish`的部分

::: code-group

```python
class Solution:
    def minimumTime(self, time: List[int], totalTrips: int) -> int:
        def canFinish(time, totalTrips, mid) -> bool:
            trips = 0
            for t in time:
                trips += mid // t
            return trips >= totalTrips

        left = 0
        right = max(time) * totalTrips
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

  let left = 0;
  let right = Math.max(...time) * totalTrips;

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
        long long left = 0;
        long long right = 1LL *  *max_element(time.begin(), time.end()) * totalTrips;

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
        long left = 0;
        int maxTime = 0;
        for (int t : time) {
            maxTime = Math.max(maxTime, t);
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

<br>
一開始使用模板可能會稍微有點不習慣，因為每個人的寫 code 習慣都不同，硬是要改成一個制式化的寫法，應該很多人都不喜歡，尤其不打週賽的人更會覺得沒必要，但我覺得一個好的模板不只是讓你打週賽時更快的解決問題而已，在面試時也可以<font v-pre color="#c2534c">更容易讓面試官看得懂</font>，所以平常在刷題時我不是追求要什麼 beat 99%，<font v-pre color="#c2534c">我更在乎的是我寫出來的 code 可讀性高不高，能不能清楚的表達我在寫什麼東西</font>，這時候一個好的模板就很方便了，畢竟你看過我看過獨眼龍也看過，面試官當然也會看過囉，有可能你都不必解釋太多，面試官看兩行就知道你想寫什麼了，尤其是對於我這種新手來說直接學習大神們寫的 code 會更容易上手。

最後附上一個勸退大家使用模板的人，但他的寫法剛好就是我覺得最好用的模板寫法 XD，我覺得他的解釋寫得很好，還沒完全理解 binary search 的可以去看看，模板好用是好用，但還是得先理解過後才能得心應手。<br>

[Come on, forget the binary search pattern/template! Try understand it!](https://leetcode.com/problems/search-insert-position/solutions/249092/come-on-forget-the-binary-search-pattern-template-try-understand-it/)

### 參考解答

陸續更新中
