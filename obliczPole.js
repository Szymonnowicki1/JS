function obliczPole(figura,a,b,h) {
    var pole = {
      prostokat: function(a, b) {
        return a*b;
      },
      trapez: function(a, b, h) {
        return ((a+b)*h)/2;
      },
      rownoleglobok: function(a, h) {
        return a*h;
      },
      trojkat: function(a, h) {
        return (a*h)/2;
      }
    };
  
    return pole[figura](a,b,h);
  }
  
  console.log(obliczPole('prostokat', 2, 3)); 
  console.log(obliczPole('trapez', 1, 11, 3)); 
  console.log(obliczPole('rownoleglobok', 3, 3)); 
  console.log(obliczPole('trojkat', 4, 10)); 
