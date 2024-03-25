let texto1 = 'texto entre comillas simples';
let texto2 = "texto entre comillas inglesas";

let plantillas = "(plantillas literales)";
let texto3 = `los acentos graves van con alt+96 ${plantillas}`;

//un string primitivo
let objeto = new String('primitivo');

console.log(typeof texto1);
console.log(typeof objeto);

// mini reto
const nombre = 'Juan';
const saludo = `Hola ${nombre}`;