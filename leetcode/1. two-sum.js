//Brute Force
// const twoSum = function (nums, target) {
// 	for (let i = 0; i < nums.length - 1; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			const firstElem = nums[i];
// 			const secondElem = nums[j];

// 			if (firstElem + secondElem == target) {
// 				return [i, j];
// 			}
// 		}
// 	}
// };

// Hash
const twoSum = function (nums, target) {
	const hashMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		hashMap.set(nums[i], i);
	}

	for (let i = 0; i < nums.length; i++) {
		const otherElement = target - nums[i];

		if (hashMap.has(otherElement) && hashMap.get(otherElement) !== i) {
			return [i, hashMap.get(otherElement)];
		}
	}
};

const a = { a: true };
const b = { a: false };

a, b;
// console.log(twoSum([3, 3], 6)), [undefined]
// console.log(twoSum([3, 3], 6));
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
