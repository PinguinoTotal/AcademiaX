let Mundo = '¡Hola mundo!';
let Mi = 'Mi nombre en';
let juan = 'Juan';
let lista = [1,2,3,4,5];
let sevilla = 'La lluvia en Sevilla es una maravilla';
let regex = /lluvia/;
let ans = sevilla.match(regex);

console.log(`${Mundo} Soy ${juan}`);
console.log(`${Mi} mayusculas es: ${juan.toUpperCase()}`);
console.log(`${Mi} minúsculas es: ${juan.toLowerCase()}`);
console.log(`El mensaje de "${Mundo}" tiene ${Mundo.length} caracteres.`);
console.log(`El tercer múmero del array con los calores '${lista[0]}, ${lista[1]},${lista[2]},${lista[3]},${lista[4]}' es: ${lista[2]}`);

lista.push(6);
console.log(`Se añade el número que sigue en orden al final del arreglo y es : ${lista[lista.length-1]}`);

console.log(`Se encontró el patrón 'lluvia' en el texto '${sevilla}', por lo que el resultado es: ${ans}`);
