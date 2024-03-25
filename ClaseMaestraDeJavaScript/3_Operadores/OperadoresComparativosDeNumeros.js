let diez = 10;
let once = 10;

//javascript es un lenguaje debilm ente tipado, 
//la variable puede ser numero, texto objeto, etc
once = '10';
console.log(diez == once); //true
//con los 3 iguales hacemos que tenga que ser del mismo tipo
console.log(diez === once); //false

//con los diferentes pasa algo chistoso ya que primero se 
//pregunta si el numero es diferente y luego el tipo

console.log(diez != once); //false
console.log(diez !== once); //true, son 10 pero diferente tipo

console.log(10 > 11);
console.log(10 < 11);
console.log(10 <= 11);
console.log(diez >= once);

//minireto
let objeto = {numero1: 20, numero2: 10};
console.log(objeto.numero1>= objeto.numero2);