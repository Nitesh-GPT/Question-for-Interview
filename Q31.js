//find the union of the array
let a=[1,2,3,4,5];
let b=[1,2,3];
for(let i=0; i<a.length; i++){
    let arr=[];
    for(let z=0; z<b.length; z++){
        if(a[i]===b[z]){
            arr=a[i];

        }
        console.log(arr);
    }


};