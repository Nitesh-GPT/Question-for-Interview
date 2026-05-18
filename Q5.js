// count all the prime numbers

let array = [1,2,3,4,5,6,7,9];
let sum = 0;

for (let i=0; i<array.length; i++){
    if (array[i]%2 === 1){
        sum++
    }
} 
console.log(sum);