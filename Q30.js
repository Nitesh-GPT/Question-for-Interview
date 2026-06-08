// Ask user to enter numbers separated by spaces
let input = prompt("Enter numbers separated by spaces:");

// Split the string into array elements
let numbers = input.split(" ").map(Number);
let num = 0;
for(let i=0; i<=numbers; i++){
    num = numbers[i]+[i+1];
    console.log(num);

}



