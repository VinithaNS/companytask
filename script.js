// To find the average of a list of integers


const arr = [1, 2, 3, 4, 5,6,7,8,9,10];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average);