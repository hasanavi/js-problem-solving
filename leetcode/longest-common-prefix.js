/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  let commonPrefix = strs.length === 1 ? strs[0] : "";

  const firstString = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const otherStr = strs[i];
    let commonPrefixFor2Str = "";
    for (let j = 0; j < otherStr.length; j++) {
      if (firstString.charAt(j) === otherStr[j]) {
        commonPrefixFor2Str += firstString.charAt(j);
      } else {
        break;
      }
    }
    if (commonPrefixFor2Str.length === 0) {
      commonPrefix = commonPrefixFor2Str;
      break;
    }

    if (commonPrefix.length === 0) {
      commonPrefix = commonPrefixFor2Str;
    } else if (commonPrefix.length > commonPrefixFor2Str.length) {
      commonPrefix = commonPrefixFor2Str;
    }
  }
  return commonPrefix;
};

console.log(longestCommonPrefix(["d"]));
console.log(longestCommonPrefix(["cir", "car"])); //c
console.log(longestCommonPrefix(["c", "acc", "ccc"])); // ''
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
