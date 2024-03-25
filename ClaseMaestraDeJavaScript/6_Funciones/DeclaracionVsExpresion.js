//esto es declarar una funcion 
function sumar(a,b){
  return a+b;
}

//esto es una exprecion, una funcion dentro de una variable
let sumar2 = function(a,b){
  return a+b;
}

console.log(sumar(1,2));//3
console.log(sumar2(1,2));//3 

//las funciones pueden ser echas en cualquier parte del 
//codigo y se podran utilizar donde sea ya que javascript
//internamente sube las funciones hasta arriba para evitar errores

//mini reto
const multiplicar = function(a,b) {
  console.log(a*b);
};