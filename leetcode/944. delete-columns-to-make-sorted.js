const isSorted = (alphabetArray) => {
	let sorted = false;
	let i = 0;

	for (i; i < alphabetArray.length - 1; i++) {
		const firstCharCode = alphabetArray[i].charCodeAt(0);
		const secondCharCode = alphabetArray[i + 1].charCodeAt(0);

		if (firstCharCode > secondCharCode) {
			break;
		}
	}

	if (i === alphabetArray.length - 1) {
		sorted = true;
	}

	return sorted;
};

var minDeletionSize = function (strs) {
	const strLen = strs[0].length;
	let deletedColumns = 0;

	for (let i = 0; i < strLen; i++) {
		let alphabetArr = [];
		for (let j = 0; j < strs.length; j++) {
			const element = strs[j];
			alphabetArr.push(element[i]);
		}
		if (!isSorted(alphabetArr)) {
			deletedColumns++;
		}
	}
	return deletedColumns;
};

console.log(minDeletionSize(["cba", "daf", "ghi"]));
console.log(minDeletionSize(["a", "b"]));
console.log(minDeletionSize(["zyx", "wvu", "tsr"]));
