/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const n = s.length, set = new Set();
    let left = 0, l = 0;
    for (let i = 0; i < n; i++) {
        while (set.has(s[i])) {
            set.delete(s[left++]);
        }
        set.add(s[i]);
        l = Math.max(l, set.size);
    }
    return l;
};