// find the missing elements in the array
let arr = [1,3,4,5,6,8];
let set = new Set(arr);

for(let i=1; i<=8; i++){
   if(!set.has(i)){
    console.log(i);
   }
}

