//Recursion function,  allows you to call a function repeatedly
//  until a base-case is reached. Unlike a traditional loop, recursion
//  allows you to handle something with an unknown depth,
const recurionCallFun = (number) =>{
    if(number<1){
        return;
    }
    console.log(number);
    recurionCallFun(number-1);
    
}
recurionCallFun(10);
// output = 10,9,8,7,6,5,4,3,2,1   java-script uses call stack(last-in-first-out) 
// and here j.s stores the process and call 