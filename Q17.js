// find the majority element in the array
let arr = [1,8,5,4,6,3,4,4,5];
let obj = {};
for (num of arr){
    if(obj[num]){
      obj[num]++;
    }
    else{
        obj[num] = 1;
    }
}
for(let key in obj){
    if(obj[key]>arr.length/2){
        console.log(key);
    }
}