var removeDuplicates = function (nums) {
	const len = nums.length;

	for (let i = 1; i < len; i++) {
		if (i >= nums.length) {
			break;
		}

		if (nums[i] === nums[i - 1]) {
			nums.splice(i, 1);
			i--;
		}
	}

	return nums.length;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([0, 0, 0]));
