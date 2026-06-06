let row = Number(Prompt("Enter The Row: "));

for(let i=1; i<=row; i++){

    let star="";
    for(let j=1; j>=i-row; j--){
        star+=" ";
    }
    for(let k=1; k<=i; k++ ){
        star+="*";
    
    }
    console.log(star);
}

/*Enter The Row: 5
      * 
     * * 
    * * * 
   * * * * 
  * * * * * 

*/