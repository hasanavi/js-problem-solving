const ROMANTOINT_LOOKUP = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

// const EXCEPTION_LOOKUP = {
// 	IV: 4,
// 	IX: 9,
// 	XL: 40,
// 	XC: 90,
// 	CD: 400,
// 	CM: 900,
// };

//BRUTE FORCE
// const romanToInt = (s) => {
// 	const romanString = s.toUpperCase();
// 	const exceptionNumberArray = [];

// 	romanString;
// 	let regularRomanStr = romanString.replace(
// 		/IV|IX|XL|XC|CD|CM/gi,
// 		function (matched) {
// 			exceptionNumberArray.push(EXCEPTION_LOOKUP[matched]);
// 			return "-";
// 		}
// 	);
// 	const romanArr = regularRomanStr.split("");
// 	let exceptionArrayIndex = 0;

// 	let integerNumber = romanArr.reduce((prev, cur, index) => {
// 		let prevNumber;
// 		let curNumber;
// 		if (prev === "-") {
// 			prevNumber = exceptionNumberArray[exceptionArrayIndex++];
// 		} else {
// 			if (index <= 1) {
// 				prevNumber = ROMANTOINT_LOOKUP[prev];
// 			} else prevNumber = prev;
// 		}
// 		if (cur === "-") {
// 			curNumber = exceptionNumberArray[exceptionArrayIndex++];
// 		} else {
// 			curNumber = ROMANTOINT_LOOKUP[cur];
// 		}

// 		return prevNumber + curNumber;
// 	});

// 	if (integerNumber.length === 1) {
// 		integerNumber =
// 			integerNumber === "-"
// 				? exceptionNumberArray[exceptionArrayIndex]
// 				: ROMANTOINT_LOOKUP[integerNumber];
// 	}

// 	return integerNumber;
// };

// Read number from the end
// const romanToInt = (s) => {
// 	let romanStr = s.toUpperCase();
// 	const intArr = [];

// 	while (romanStr.length > 0) {
// 		const romanLetters = romanStr.slice(romanStr.length - 2);
// 		const romanLetter = romanStr.slice(romanStr.length - 1);
// 		if (EXCEPTION_LOOKUP[romanLetters]) {
// 			intArr.push(EXCEPTION_LOOKUP[romanLetters]);
// 			romanStr = romanStr.slice(0, romanStr.length - 2);
// 		} else {
// 			intArr.push(ROMANTOINT_LOOKUP[romanLetter]);
// 			romanStr = romanStr.slice(0, romanStr.length - 1);
// 		}
// 	}
// 	return intArr.reduce((prev, cur) => prev + cur, 0);
// };

// shortest possible solution
const romanToInt = (s) => {
	let total = 0;
	for (let index = 0; index < s.length; index++) {
		ROMANTOINT_LOOKUP[s[index]] < ROMANTOINT_LOOKUP[s[index + 1]]
			? (total -= ROMANTOINT_LOOKUP[s[index]])
			: (total += ROMANTOINT_LOOKUP[s[index]]);
	}
	return total;
};

console.log(romanToInt("XXVI"));
console.log(romanToInt("XXIV"));
console.log(romanToInt("D"));
console.log(romanToInt("M"));
console.log(romanToInt("IV"));
console.log(romanToInt("XIV"));
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("MCDLXXVI")); //1476
