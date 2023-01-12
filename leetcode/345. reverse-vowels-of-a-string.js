/**
 * @param {string} s
 * @return {string}
 */

const VOWELS = ["a", "e", "i", "o", "u"];

const isVowel = (letter) => {
	const lowercaseLetter = letter.toLowerCase();
	return VOWELS.some((vowel) => vowel === lowercaseLetter);
};

// Inefficient
// const reverseVowels = function (s) {
// 	const letters = s.split("");
// 	const len = letters.length;
// 	let leftIndex = 0;
// 	let rightIndex = len - 1;
// 	let tmp;

// 	while (leftIndex < rightIndex) {
// 		while (!isVowel(letters[leftIndex]) && leftIndex < rightIndex) {
// 			leftIndex++;
// 		}
// 		while (!isVowel(letters[rightIndex]) && leftIndex < rightIndex) {
// 			rightIndex--;
// 		}

// 		tmp = letters[leftIndex];
// 		letters[leftIndex] = letters[rightIndex];
// 		letters[rightIndex] = tmp;
// 		leftIndex++;
// 		rightIndex--;
// 	}

// 	return letters.join("");
// };

//Efficeient
const reverseVowels = function (s) {
	const letters = s.split("");
	const length = letters.length;
	const vowelPosition = [];
	let temp;

	for (let i = 0; i < length; i++) {
		if (isVowel(letters[i])) {
			vowelPosition.push(i);
		}
	}

	for (let i = 0; i < vowelPosition.length / 2; i++) {
		temp = letters[vowelPosition[i]];

		letters[vowelPosition[i]] =
			letters[vowelPosition[vowelPosition.length - 1 - i]];
		letters[vowelPosition[vowelPosition.length - 1 - i]] = temp;
	}

	return letters.join("");
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
console.log(reverseVowels("a"));
console.log(reverseVowels("ab"));
console.log(reverseVowels("abau"));
console.log(reverseVowels("ebcda"));
console.log(reverseVowels("bfz"));
console.log(reverseVowels("ai"));
