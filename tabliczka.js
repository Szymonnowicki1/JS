
function tabliczka(n){
var calc = [];
for (i = 0; i < n; i++) {
   calc.push([]);

   for (let j = 0; j < n; j++) {
   calc[i][j] =  (i+1) * (j+1) + "   ";
   };

 console.log( calc[i].join(""));  
 }
}
tabliczka(4);
