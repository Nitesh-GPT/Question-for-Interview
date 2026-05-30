//Find the missing number in the array
let arr = [1,2,3,4,6];
let n = arr.length +1;
let temp = 0;
let expectednum = n*(n+1)/2;
for(let i = 1; i<arr.length; i++){
    temp += arr[i]
}
    
console.log(expectednum-temp);