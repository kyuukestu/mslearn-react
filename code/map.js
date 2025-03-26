const numbers = [2, 5, 8];

const squared = numbers.map((number, index) => {
	console.log(`Processing item ${index + 1}`);
	return number * number;
});

console.log(squared);
