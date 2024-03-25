//TIPOS DE DATOS PRIMITIVOS
let texto = 'texto';
let numero = 3.547;
let boolean = true;
let indefinido;
// no muy utilizados 
let bigInt = BigInt(34561285631548123548);
//let symbol = symbol('Symbolo');//crea un simbolo irrepetible

//TIPOS DE DATOSESTRUCTURALES
let objeto = {0: 'Xavier'};
//los array son lo mismo que los objetos
let listaEsObjeto = ['Xavier'];
let regex = /asd/;
//Otros objetos: Map, set, weakmap, weakset, date, regExp

let funcion = function(){};// funciones

let nulo = null

console.log('texto es: '+ typeof texto);
console.log('numero es: '+ typeof numero);
console.log('booleano es: '+ typeof boolean);
console.log('indefinido es: '+ typeof indefinido);
console.log('bigInt es: '+ typeof bigInt);
//console.log('symbol es: '+ typeof symbol);
console.log('objeto es: '+ typeof objeto);
console.log('lista es: '+ typeof listaEsObjeto);
console.log('funcion es: '+ typeof funcion);
console.log('nulo es: '+ typeof nulo);

//mini reto
let miVariable = 5;
console.log(typeof miVariable);