function liczbyZPrzedzialu(a,b,c) {
  if(a >= b){
    console.log("blad");
  }
else {
  for (let i = a; i <= b; i++){
  if(i%c===0){
    console.log(i)
  }

  }
}
}
liczbyZPrzedzialu(2,10,2);
