//With ES6
// var reverseString = function (s) {
// 	return s.reverse();
// };

//Manual
const reverseString = function (s) {
	let a;
	const len = s.length;

	for (let i = 0; i < len / 2; i++) {
		a = s[i];
		s[i] = s[len - i - 1];
		s[len - i - 1] = a;
	}
	return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
