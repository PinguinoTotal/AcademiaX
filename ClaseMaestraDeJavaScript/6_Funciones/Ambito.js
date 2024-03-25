let numero = 4;

//para evitar hacer bolas al porgrama es mejor declrar adentro
//las variables que se van a utilizar dentro de las funciones
function ejemplo(){
  var numero = 10;
  console.log(numero);
}

ejemplo();
console.log(numero);

//mini reto
let multiplicador = 2;

function multiplicar(num) {
    return num * multiplicador;
}

console.log(multiplicar(num));