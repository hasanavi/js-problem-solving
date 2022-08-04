/**
 * @param {string[]} strs
 * @return {string}
 */

// Unoptimised - this is what happens when we code with sleepy brain

// const longestCommonPrefix = (strs) => {
// 	let commonPrefix = strs.length === 1 ? strs[0] : "";

// 	const firstString = strs[0];
// 	for (let i = 1; i < strs.length; i++) {
// 		const otherStr = strs[i];
// 		let commonPrefixFor2Str = "";
// 		for (let j = 0; j < otherStr.length; j++) {
// 			if (firstString.charAt(j) === otherStr[j]) {
// 				commonPrefixFor2Str += firstString.charAt(j);
// 			} else {
// 				break;
// 			}
// 		}
// 		if (commonPrefixFor2Str.length === 0) {
// 			commonPrefix = commonPrefixFor2Str;
// 			break;
// 		}

// 		if (commonPrefix.length === 0) {
// 			commonPrefix = commonPrefixFor2Str;
// 		} else if (commonPrefix.length > commonPrefixFor2Str.length) {
// 			commonPrefix = commonPrefixFor2Str;
// 		}
// 	}
// 	return commonPrefix;
// };

//Simple version
const longestCommonPrefix = (strs) => {
	if (strs.length <= 0) return "";

	let firstWord = strs[0].split("");

	for (let i = 1; i < strs.length; i++) {
		const word = strs[i];
		for (let j = 0; j < firstWord.length; j++) {
			if (firstWord[j] !== word.charAt(j)) {
				firstWord.splice(j);
			}
		}
	}

	return firstWord.join("");
};

console.log(longestCommonPrefix([""])); //
console.log(longestCommonPrefix(["d"])); //d
console.log(longestCommonPrefix(["cir", "car"])); //c
console.log(longestCommonPrefix(["c", "acc", "ccc"])); // ''
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ''
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
