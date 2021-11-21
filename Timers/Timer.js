function printNumbers(from,to){
    let i=from;
    setTimeout(function run() {   
    console.log(i); 
    if (i<to) {
    setTimeout(run, 1000);  
    }
    i++;         
    },   1000);
   

//console.log(i);
}
printNumbers(1,3);
