let canciones = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P'];
let kiu = [];
let cancionesQueDebenPasar =4;

function EscogerCancion() {
  let min = 0;
  let max = canciones.length-1;
  let cancionATocar = Math.floor(Math.random()*(max-min+1) + min);
  console.log(`Se esta reproduciendo la cancion: ${canciones[cancionATocar]}`);
  kiu.push(canciones[cancionATocar]);
  canciones.splice(cancionATocar,1);
  console.log(canciones);
  console.log(kiu);

  if(kiu.length>cancionesQueDebenPasar){
    canciones.push(kiu[0]);
    kiu.shift();
  }
}

setInterval(()=>{
  EscogerCancion();
}, 2000);