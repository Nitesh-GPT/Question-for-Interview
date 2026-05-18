// Sum all the even numbers

let array = [1,2,3,4,4,2,3];
let sum = 0;
for (let i=0; i<array.length; i++){
    if (array[i]%2 === 0){
        sum = sum + array[i]
    }
}
console.log(sum);