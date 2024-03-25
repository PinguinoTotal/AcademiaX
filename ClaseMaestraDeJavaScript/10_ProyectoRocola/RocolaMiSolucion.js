let canciones = ['cancion0','cancion1','cancion2','cancion3','cancion4',
                  'cancion5','cancion6','cancion7','cancion8','cancion9',
                  'cancion10','cancion11','cancion12','cancion13','cancion14',
                  'cancion15','cancion16','cancion17','cancion18','cancion19'];
let numeroDeRepeticiones = new Array(canciones.length); 
let cancionesQueDebenPasar =4;


//inicializando la lista de numero de reproducciones a 0, porque 
//aun no se reproduce ninguna
for (let i = 0; i < numeroDeRepeticiones.length; i++) {
  numeroDeRepeticiones[i] = 0;
}

/* la funcion cancion play hace que se tome un numero al azar entre 0
y el numero de canciones que existen, prueba si esa cancion ya ha
sido repetida en la lista y si su contador no ha llegado a 0 aun 
no puede reproducirla 
*/
function CancionPlay(){
  let cancionValida = false;

  // restando 1 a los contadores de cada cancion, ya que 
  //se esta buscando una nueva canion que va a reproducirse
  for (let i = 0; i < numeroDeRepeticiones.length; i++) {
    if(numeroDeRepeticiones[i] != 0)
    numeroDeRepeticiones[i] = numeroDeRepeticiones[i]-1;
  }
  
  do {
    //tomando un numero al azar 
    let min = 0;
    let max = canciones.length-1;
    let cancionATocar = Math.floor(Math.random()*(max-min+1) + min);
    console.log('========================================')
    console.log(`se intenta reproducir la : ${canciones[cancionATocar]}`);
    //si el contador de la cancion que se tocara es 0 la reproduce
    if(numeroDeRepeticiones[cancionATocar] == 0){
      console.log(`se esta reproduciendo la : ${canciones[cancionATocar]}`);
      numeroDeRepeticiones[cancionATocar] = cancionesQueDebenPasar;
      cancionValida = true;
    }else{ //si no vuelve a buscar otro numero y verificar si puede tocar esa cancion 
      console.log(`la cancion : ${canciones[cancionATocar]} ya ha sido reproducida y no han pasado más de ${cancionesQueDebenPasar} canciones`);
      cancionValida =false;
    }
  } while (cancionValida == false);

  
}

//con set interval cheque si mi codigo era correcto
setInterval(()=>{
  CancionPlay();
}, 2000);

