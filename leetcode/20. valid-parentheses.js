/**
 * @param {string} s
 * @return {boolean}
 */

const OPENING_BRACKET = ["(", "{", "["];
const BRACKET_MATCH = new Map();

BRACKET_MATCH.set("(", ")");
BRACKET_MATCH.set("{", "}");
BRACKET_MATCH.set("[", "]");

const isValid = (s) => {
	const stack = [];

	for (let i = 0; i < s.length; i++) {
		const char = s.charAt(i);

		if (OPENING_BRACKET.some((elem) => elem === char)) {
			stack.push(char);
		} else {
			if (stack.length === 0) return false;

			const lastElement = stack[stack.length - 1];
			if (BRACKET_MATCH.get(lastElement) !== char) break;
			else stack.pop();
		}
	}

	return stack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("({})[]")); // true
console.log(isValid(")[]")); // false
console.log(isValid("({}))[]")); // false
