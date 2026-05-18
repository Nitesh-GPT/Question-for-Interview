// find the min number in the given array.

let numbers = [1,7,6,9,3,2,1,5,];

let Minvalue = numbers[0];

for (let i=1; i<numbers.length; i++){
    if (numbers[i] < Minvalue){

       Minvalue = numbers[i];

    }
}
console.log(Minvalue); 
