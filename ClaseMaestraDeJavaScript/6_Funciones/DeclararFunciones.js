let inicial = 3;
function sumar(){
  inicial +=4;
  return inicial;
}

console.log(sumar());
console.log(sumar());
console.log(sumar());

//asi se le pone los valores iniciales
function sumarAB(a = 0,b = 0){
  return a + b;
}

console.log((sumarAB(0,3)));
console.log((sumarAB(4,5)));
console.log((sumarAB(100,2)));

function sumarInf(){
  let suma = 0;
  //arguments se puede utilizar dentro de las funciones
  //y es una lista de los argumentos que le pasamos
  for (let numero of arguments) {
    suma += numero;
  }
  return suma;
}

console.log(sumarInf(1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9))

//mini reto
function postear(texto){
  validar(texto);
  guardar(texto);
  enviar(texto);
}

postear('Hoy aprendí a usar funciones en Academia X');