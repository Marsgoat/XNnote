---
outline: deep
---

# Sliding Window

`2023/10/20`

:::warning <div></div>
本篇會以已經知道 Sliding Window 來做介紹，這邊只會整理題目跟分享解題心得，如果還沒有學過的人請先去找資源學習。
:::

基本上 Sliding Window 的題目幾乎都是可以很簡單暴力解的題目，而使用 Sliding Window 可以避免不必要的重複計算，優化時間複雜度。

## 題目整理

### 基礎題型

- [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
- [643. Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)

### 應用題組

這邊是我覺得很適合在面試的時候考的類型，從 easy 題延伸到 medium，很容易包裝，而且前兩題都是非常簡單的邏輯題而已。

- #### 經典題組

  - [485. Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/)
  - [487. Max Consecutive Ones II ](https://leetcode.com/problems/max-consecutive-ones-ii/)
    這題要訂閱 Leetcode Premium 才可以看，不過其實就是第一題延伸，有一次機會將其中一個 0 換成 1，一樣求最長連續`1`的數量。
  - [1004. Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)

::: details 第一題解答

```javascript
function findMaxConsecutiveOnes(nums) {
  let max = 0;
  let count = 0;

  for (const num of nums) {
    if (num === 1) count++;
    else count = 0;

    max = Math.max(max, count);
  }

  return max;
}
```

:::

::: details 第二題解答

```javascript
function longestOnes(nums) {
  let max = 0;
  let leftCount = 0;
  let rightCount = 0;

  for (const num of nums) {
    rightCount++;
    if (num === 0) {
      leftCount = rightCount;
      rightCount = 0;
    }

    max = Math.max(max, leftCount + rightCount);
  }

  return max;
}
```

紀錄 0 左右的 1 數量，當然也可以直接用第三題的方式解，就是把 k 改成 1 而已

:::

::: details 第三題解答

```javascript
function longestOnes(nums, k) {
  let max = 0;
  let count = 0;
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    count++;
    if (nums[i] === 0) {
      zeroCount++;

      while (zeroCount > k) {
        count--;
        if (nums[i - count] === 0) zeroCount--;
      }
    }

    max = Math.max(max, count);
  }

  return max;
}
```

使用 sliding window 的概念
按照順序遍歷 array，使用 zeroCount 紀錄 0 的數量，當 0 的數量大於 k 時，就往前扣掉第一個 0 以前的所有 1。
:::

- #### 同類型換包裝題
  - [1493. Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/)

這類型的題目可以包裝成各種應用題，比如 Max Consecutive Ones 系列題目。

可以包裝成以下問題：

1. 有個人的工作是排班制的，他想知道今年的最長假期是多長，輸入一個班表的`array`裡面只有`0`和`1`，`0`是放假日、`1`是上班日，請輸出最長連續假期天數。
2. 延續上題，如果他有一天的特休可以使用，那他能得到的最長連假是多長？
3. 延續上題，如果他有`k`天的特休可以使用，那他能得到的最長連假是多長？

Sliding Window 包裝起來千變萬化，但其實解法都一模一樣，請一定要完全理解，盡量不要背答案，題目非常多也太不可能寫得完的，如果這種簡單的 coding 技巧題都要用背的，那等進到`DP`時應該會非常痛苦，不看答案永遠寫不出來。

- #### 變化延伸
  - [2024. Maximize the Confusion of an Exam](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/)
  - [2009. Minimum Number of Operations to Make Array Continuous](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/)

這兩題不是題組而是獨立的題目，只是上面題組最後一題換包裝後的小變化。

### 搭配 Hash Table

- #### String 類
  - [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
  - [424. Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
  - [567. Permutation in String](https://leetcode.com/problems/permutation-in-string/)
  - [904. Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)
  - [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
  - [187. Repeated DNA Sequences](https://leetcode.com/problems/repeated-dna-sequences/)
  - [1456. Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)

很多 Sliding Window 的題目都會搭配 Hash Table
