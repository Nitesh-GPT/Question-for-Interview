//Find the union
let arr = [1,2,3,4,5];
let arr1 = [3,4,5];
let union = [...arr];
for(let i=0; i<arr1.length; i++){
    if(!union.includes(arr1[i])){
        union.push(arr1[i]);
    }
}
console.log(union);

//OP = union[1,2,3,4,5]