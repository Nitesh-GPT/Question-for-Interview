//Recursion advance
const recu = (number) =>{
    if(number<1){
        return;
    }
    recu(number-1);
    console.log(number);
}
recu(5);
// here console.log do not print the value because this process will be stored in call stack and 
//after reached the base case call stack will return all the process and values and process will resume 