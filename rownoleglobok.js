var pole = "rownoleglobok";

function ile(a,b,h){
  switch(pole)
    {
      case "postokat":
        console.log(a*b);
        break;
      case "rownoleglobok":
        console.log(a*h);
        break;
      case "trapez":
        console.log((a+b)*h/2);
        break;
      case "trojkat":
        console.log((a*h)/2);
        break;
    }
}
ile(1,0,6);
