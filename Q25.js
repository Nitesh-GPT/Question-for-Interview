//print the right triangle star pattern
//outer loop for rows
//inner loop for column, where we print the srar

let row=5;
for(let i=1; i<=row; i++){
    let star ="";
    for(let j=1; j<=i; j++){
        star+="*";
    }
    console.log(star);
}