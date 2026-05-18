//WAP to find the max number iN the given  array;


let arrayA = [1, 4, 53, 6, 5, 77, 22, 33];

let MAXValue = arrayA[0];

for (let i = 1; i < arrayA.length; i++) {
    if (arrayA[i] > MAXValue) {

       MAXValue = arrayA[i] ;
    }
}
console.log(MAXValue);