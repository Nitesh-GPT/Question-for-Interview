// find the missing elements in the array
//rule = (n*n+1)/2 means n=8, n+1=8+1 .then/2
let arr = [1,3,4,5,6,8];
let set = new Set(arr);

for(let i=1; i<=8; i++){
   if(!set.has(i)){
    console.log(i);
   }
}

