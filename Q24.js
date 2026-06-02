// find the median of sorted array
// Manually 
let arr = [3,4,2,5,6,7];
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if (arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;

    }
}
}
let count = arr.length;
if(count % 2==!0){
    console.log( arr[Math.floor(count/2)]);
    
}
else{
    let mid1 = arr[Math.floor(count/2-1)];
    let mid2 = arr[Math.floor(count/2)];
    console.log((mid1+mid2)/2);
}


