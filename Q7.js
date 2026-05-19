//Remove negative number from the Array?
let positive = [];
let array = [1,-2,4,-5,6];
for (let i=0; i<array.length; i++){
    if (array[i]>=0){
        positive.push(array[i])

    }
}
console.log(positive);