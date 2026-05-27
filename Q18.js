// Manual sorting using loop
let arr = [8,5,6,4];
for(let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr.length-1; j++)
        if(arr[j]>arr[j+1]){
        let temp = arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
        
            
}
}
console.log(arr);