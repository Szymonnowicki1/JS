var auto = {
  rok: 2020,
  przebieg: 300000,
  cena_wyjsciowa: 100000,
  cena_koncowa: 95000,
  }

function zwiekszCeneOTysiac(){
    auto.cena_wyjsciowa=auto.cena_wyjsciowa+1000;
  }

function obnizCeneKoncowa(){
let rok = 2023-auto.rok;
auto.cena_koncowa = auto.cena_wyjsciowa-(rok*1000);
}


function obnizCeneKoncowaV2(){
  var rabat=0;
  var przebieg = auto.przebieg;
  while(przebieg>=100000){
    przebieg= przebieg-100000;
    rabat++;
  }
  auto.cena_koncowa -= rabat*10000;
}

function dopiszDoAuta(przebieg2, rok2){
auto.przebieg=przebieg2;
auto.rok=rok2;
zwiekszCeneOTysiac();
obnizCeneKoncowa();
obnizCeneKoncowaV2();
 console.log(auto.cena_koncowa);
}
  
dopiszDoAuta(400000,2021);


var auta = [];

function dopiszAutoDoTablicy(auto){
if(auto.cena_koncowa>10000){
  auta.push(auto);
}
}

dopiszAutoDoTablicy(auto);
console.log(auta);

function zwiekszRokOJeden(auta) {
for (let i = 0; i < auta.length; i++) {
  auta[i].rok++;
}
}

console.log('Przed:', auta);
zwiekszRokOJeden(auta);
console.log('Po: ', auta);

