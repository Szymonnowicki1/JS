function trojkaPitagorejska(a, b, c){
    if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
         console.log("jest pitagorejski");
     } 
     else {
         console.log("nie jest");
     }
     
 }
 trojkaPitagorejska(5,12,13);
 trojkaPitagorejska(1,2,3);
