//With String
// const isPalindrome = (x) => {
// 	const palindromStr = x + "";
// 	const revertStr = palindromStr.split("").reverse().join("");

// 	return revertStr === palindromStr;
// };

//Without String
const isPalindrome = (x) => {
	if (x < 0 || (x !== 0 && x % 10 == 0)) return false;

	let revertedNumber = 0;

	while (x > revertedNumber) {
		revertedNumber = revertedNumber * 10 + (x % 10);
		x = ~~(x / 10);
	}

	return x === revertedNumber || x === ~~(revertedNumber / 10);
};

console.log(isPalindrome(121));
console.log(isPalindrome(11));
console.log(isPalindrome(10));
console.log(isPalindrome(22));
console.log(isPalindrome(15));
