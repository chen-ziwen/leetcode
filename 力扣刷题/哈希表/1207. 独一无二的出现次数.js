/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const o = {};
 
    for(let i = 0; i < arr.length; i++) {
      o[arr[i]] = (o[arr[i]] || 0) + 1;
    }
    
    const set = new Set();
    for(let values of Object.values(o)) {
      set.add(values);
    }
   
    return set.size === Object.keys(o).length;
 };