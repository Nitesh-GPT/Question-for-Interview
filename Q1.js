#WAP to find the max number IN the given array array;


let arrayA = [1,4,53,6,5,77,22,33];

let MAXValue = arrayA[0];

for (i=0; i<arrayA.length; i++); {
    if (arrayA[i] > MAXValue); {
        arrayA[i] = MAXValue;
    }
}
console.log(MAXValue);