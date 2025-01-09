/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var validSubstringCount = function (word1, word2) {
    // 题意就是，word1中包含多少个字符串可以满足以下条件：
    // 1. 子字符串可以重新排列字符顺序
    // 2. 重排列后的子字符串必须包含word2字符前缀
    // 3. 子字符串中必须包含word2中相同数量的相同字符
    const map = new Map();
    let count = 0;
    for (let i = 0; i < word2.length; i++) {
        map.set(word2[i], (map.get(word2[i]) || 0) + 1);
        count++;
    }
    let l = 0, ans = 0;
    for (let r = 0; r < word1.length; r++) {
        if (map.get(word1[r]) > 0) count--;
        map.set(word1[r], map.get(word1[r]) - 1);
        while (count == 0) {
            if (map.get(word1[l]) == 0) count++;
            map.set(word1[l], map.get(word1[l]) + 1);
            l++;
        }
        ans += l;
    }
    return ans;
};