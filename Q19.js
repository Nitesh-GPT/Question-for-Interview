//Sorting the array in decending order
let arr = [4,5,3,6,7];
for(let i = 0; i<arr.length; i++){
    
    for(let j=0; j<arr.length-1; j++){
        
        if(arr[j]<arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;

        }
    }
}
console.log(arr);
//Output: [ 7, 6, 5, 4, 3 ]