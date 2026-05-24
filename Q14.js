//frequence count program logic
//object is superfast for lookup that's why we use obj here!
let arr = [1,2,2,3,3,2,4,5];
let objct = {};
for(let num of arr){
    if(objct[num]) {
     objct[num] ++;
    }
    else{
        objct[num] = 1;
    }

}
console.log(objct);