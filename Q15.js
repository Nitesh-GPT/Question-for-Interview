//Frequence counter program

let alfa = "nitesh gupta";
let objct = {};
for (let char of alfa){
    if(objct[char]){
        objct[char]++;
    }
    else{
        objct[char] = 1;
    }
}
console.log(objct);
