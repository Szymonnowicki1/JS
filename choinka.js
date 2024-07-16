function choinka(x) {
    for (let i = 1; i <= x; i++) {
      let rzad = "";
  
      for (let j = 1; j <= i; j++) {
        rzad = rzad + '*';
      }
      console.log(rzad);
    }
  };
  
  choinka(5);
