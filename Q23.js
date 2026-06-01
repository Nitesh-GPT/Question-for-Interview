// find missing elements manually
let arr = [1,3,5,6,9];
for(let i=1; i<=9; i++){
    if(!arr.includes(i)){
        console.log(i);
    }
}
//OP = 2,4,7,8