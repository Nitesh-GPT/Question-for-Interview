let rows = Number(prompt("Entar the number: "));
for(let i=1; i<=rows; i++){
    let star="";
    for(let k=rows; k>=i; k--){
        star+= "*";
    }
    console.log(star);
}

/*Entar the number: 6
******
*****
****
***
**
*

Decreasing cone */