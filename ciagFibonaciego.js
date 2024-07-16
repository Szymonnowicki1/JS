
function ciagFibonaciego(n) {
    if(n < 2) 
  return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        b += a;
        a = b - a;
    }
    return b;
}
var c =8;
for(i = 0; i < c; i++) console.log(ciagFibonaciego(i));
