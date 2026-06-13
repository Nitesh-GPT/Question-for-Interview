//find the intersection
let arr = [1,2,3,4,5,6];
let arr1 = [2,3,4];
let arr2 = [];
for(let i=0; i<arr.length; i++){
    for(let u=0; u<arr1.length; u++){
        if(arr[i]==arr1[u]){
            arr2.push(arr[i]);
            
        }
    }
    
}
console.log(arr2);

//op = [2,3,4]