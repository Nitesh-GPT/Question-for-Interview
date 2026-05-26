//second largest value in array

    const arr = [4, 8, 2, 15, 1];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr) {

    if (num > largest) {
        secondLargest = largest;
        largest = num;
        }

    else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}
console.log("largest value:", largest, "second largest:", secondLargest);
console.log(`largest value: ${largest} second largest: ${secondLargest}`);


