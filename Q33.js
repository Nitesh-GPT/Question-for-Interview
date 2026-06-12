//move the zero to the end of the array

let arr = [1,2,6,0,8,6,0,2,5,0,6,0];
let temp1 = [];
let temp2 = [];
for(let i=0; i<arr.length; i++){
    if(arr[i] !==0){
        temp1.push(arr[i]);
    }
    else{
        temp2.push(arr[i]);
    }

}
console.log("Result: ", temp1.concat(temp2));
/* OP= Result:  [
  1, 2, 6, 8, 6,
  2, 5, 6, 0, 0,
  0, 0
]*/