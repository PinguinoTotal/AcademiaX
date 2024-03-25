# Clase Maestra de JavaScript

### Hola mundo 
~~~javascript
console.log("Hello World");
console.log(5);
console.log([1,2,3]); 
console.log({key: 'value'});

//Mini reto
console.log("Hola Universo");
~~~
### Comentarios
~~~javascript
console.log("Hello World");
console.log(5);
console.log([1,2,3]); //estos son numeros
console.log({key: 'value'});

/*
este es un comentario multilitnea
asies
*/

//este es un comentario
//Mini reto

~~~

## Variables y tipos de datos
### Variables
~~~javascript
//asi se declaran las variables
var a = 5;
// sobreescribiendo el valor de a 
a = 20;
//tambien se puede usar let y se debe intentar usar let
let b = 50;
//valores constantes este valor nunca va a cambiar 
const c = 40;  
//se pueden declarar multiples variable en un solo renglon
var d= 25, e = 50;
console.log(palabra);
/*tambien es posible imprimir varios valores en 
en un mismo console log*/
console.log(d,e)

//mini reto
const pi = 3.1416;
let radio = 50;
~~~
### Texto
~~~javascript
let libro = "Harry potter";
//lo mejor es solo utilizar un tipo de comilla
// asi se pone un salto de linea en el texto
libro = 'Harry\n\
Potter \nCastle';

let primerLibroNuevo = 'Happry Potter\n';
let segundoLibro = 'Pragmatic Programmer';

console.log(primerLibroNuevo, segundoLibro);

//mini Reto
const nombre = 'tu_nombre';
~~~
### Métodos de Texto
~~~javascript
let texto = "Pink Floyd";
//saca conteo de las letras del texto
console.log(texto.length); 
//volver todo le texto en mayusculas
console.log(texto.toUpperCase()); 
//volver todo el texto en minusculas
console.log(texto.toLowerCase());
//Saber si el texto incluye la palabra
console.log(texto.includes('Floyd')); 

//miniReto
let palabra = 'filipinas';
console.log(palabra.toUpperCase());
~~~
### Número
~~~javascript
//numeros enteros
let numero = 5;
//numeros con decimales
let decimales = 5.2315654987;
//numeros con negativos
let negativos = -10;
//un numero infinito
let infinito = Infinity;

console.log(NaN);//esto dice, not a number

Math.PI;//math es la libreria de matematicas
//redondea un numero decimal
console.log(Math.round(decimales));
//lanza un numero random 
console.log(Math.random());

//mini Reto
let numero2 = 5;
~~~
### Lista
~~~javascript
let listaVacia = []; //asi se declara un array
let listaDeNumeros = [1,2,3,4,5]; //array de numeros
//array de textos o de strings 
let listaDeTextos = ['Lunes','Martes','Miercoles'];
//javascript puede guardar todo tipo de datos en sus listas al 
//mismo tiempo
let listaRandom = [1,'lunes', true, {}, ['lunes', true]];

//es recomendable que en las listas mo se anide mucho
//ya que estos despues suelen dar errores 
console.log(listaRandom[4][1]);
//asi se obtienen los valores que estan en listas
//dentro de listas

//mini reto
let frutas = ['manzana', 'naranja', 'pera','salak'];
~~~
### Métodos de Lista
~~~javascript
let abecedario = ['c', 'b', 'a', 'z', 'y', 'm'];

//saber el tamaño de la lista
console.log(abecedario.length);

//ordenar la lista
console.log(abecedario.sort());

//saber si la lista incluye algo
console.log(abecedario.includes('b'));


//añadir algo al final de la lista
abecedario.push('x')

//retirar el ultimo elemento de la lista
abecedario.pop();

//añadir elemento al inicio de la lista
abecedario.unshift('x');

//eliminar elemento al inicio de la lista 
abecedario.shift();
//elimina elementos dependiendo de cuantos querramos
//eliminar 
abecedario.splice(1,2);

//mini reto
lista.push('final');
~~~
### Regex
~~~javascript
//expreciones regulares
let texto1 = "Me encanta la música de Charlly García.";
let texto2 = "me encanta la música de Led Zeppelin.";
let texto3 = "encanta la música de Calle 13.";
let texto4 = "la música de Meshuggah.";
let texto5 = "música de Daft Punk.";
let texto6 = "Me gusta Diplo.";
let texto7 = "No me gusta Diplo";

//let regex = /Me/i;

/*esto sirve para buscar palabras en diferentes oraciones
primero se da una variable con el texto que se va a buscar
luego se hace el test a esa variable compranadola 
contra los demas textos que estamos probando, regex si
detecta si algoes mayuscula o minuscula, pero si le ponemos 
la "i" ya no le va a importar 
*/ 
console.log(regex.test(texto1));
console.log(regex.test(texto2));
console.log(regex.test(texto3));
console.log(regex.test(texto4));
console.log(regex.test(texto5));
console.log(regex.test(texto6));
console.log(regex.test(texto7));

//mini reto
let regex = /\b\d{5}\b/;
~~~
### Objeto
~~~javascript
//los nombres de las variables dentro del objeto se
//se pueden poner de esas 2 maneras
let objeto = {numero: 1,
              texto: 'texto',
              'lista': [],
              boolean: true,
              objeto: {
                objeto2: 'Hola'
              }
  }

//acceder a estas propiedades del objeto
//console.log(objeto.objeto.objeto2);

//asi se borran las propiedades de los objetos
delete objeto.objeto; 

let usuario = {
  nombre: 'xavier',
  apellidos: 'reyes ochoa',
  alias: 'Programador X'
};

let numero1 = 1;
let numero2 = numero1;
numero2 = 3;

console.log(numero1, numero2);
/*
aunque se crea una nueva variable y a esta se le cambia 
el valor, realmente se le cambia el valor a toda la memoria
asi que la variable 1 sera afectada
*/
let usuario2 = usuario;
//asi se crea un nuevo objeto con los valores 
//de usuario y al modificarse no se modificara 
//el usuario1
let usuario3 = JSON.parse(JSON.stringify(usuario));
usuario2.alias = "Programador Z";
console.log(usuario);

//mini reto
const persona = {
  nombre: 'tu_nombre',
  edad: 21
};
~~~
### Tipos
~~~javascript
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
~~~
### Plantillas de texto y Coercíon
~~~javascript
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
~~~
### Reto: Variables y tipos de datos
~~~javascript
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

~~~

## Operadores
### Operadores Comparativos de Números
~~~javascript
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
~~~
### Operadores Comparativos de Texto
~~~javascript
let a = 'a';
let b = 'b';

//porque a va antes que b en el alfabeto
console.log(a > b); //false
console.log(a < b); //true

let A = 'A';

//porque las mayusculas van primero que las minusculas
console.log(A < a); //true
console.log(A > a); //false

//porque z es mayor que A, porque va despues
console.log('z' > A)//true

//lo mejor seria hacer la comparacion haciendo todo mayusculas

//mini reto
console.log(str1 === str2);
~~~
### Comprar por valor vs por referencia
~~~javascript
//mini reto
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a === b); // false

//ver clase, ya que esta esta escrita y es intresante 
//las referencias y los valores
~~~
### Operadores Aritmeticos
~~~javascript
console.log(3 + 4);
console.log(3 - 4);
console.log(3 * 4);
console.log(12 / 4);
console.log(12 % 7);

//par o impar 
console.log(12 % 2);
console.log(11 % 2);

//todo esto es sumarle uno a a 
let a = 10;
a = a+1;
a +=1;
a++;

a = a-1;
a -=1;
a--;

console.log(a);

//mini reto
a = 10;
let b = 5;
let c = 3;

console.log(a+b);
console.log(a*b);
console.log(a-b);
console.log(c*c);
console.log(125/b);
~~~
### Operadores Lógicos
~~~javascript
//Y &&
//O ||
let a = 'java';
let b = 'javascript';
let c = 'c#'

//! negar
console.log(((a === 'java') && !(c !== 'javascript')) || b === 'javascript')

//operadores logicos, vamos esto ya lo sabemos

//mini reto
const respuesta = 5 > 2 && 3 < 7;
~~~
### Reto: Operadores
~~~javascript
let n1 = 3;
let n2 = 2;
let texto1 = 'Hola';
let texto2 = 'Hola mundo';
let objeto1 = {objeto: 'Hola'};
let objeto2 = {objeto: 'Hola mundo'}

console.log(`¿El número 1 es mayor que el numero 2? ${n1>n2}`);
console.log(`¿El número 1 es menor que el numero 2? ${n1<n2}`);
console.log(`¿El número 1 es igual al numero 2? ${n1===n2}`);
console.log(`¿El texto 1 es igual al texto 2? ${texto1===texto2}`);
console.log(`¿Los objetos son iguales? ${objeto1===objeto2}`);
console.log(`AND lógico: ${true && false}`);
console.log(`OR lógico: ${true || false}`);
console.log(`La suma de 10 + 3: ${10+3}`);
console.log(`La resta de 10 - 3: ${10-3}`);
console.log(`La multiplicación de 10 * 3: ${10*3}`);
console.log(`La division de 10 / 3: ${10/3}`);
console.log(`10 módulo de 3: ${10%3}`);
~~~

## Condicionales
### Condicional if else
~~~javascript
let usuario = 'pedro';

/*
peimero va un if que checa como la primer primicia
luego se checan más casos particulares y al final
se checan todos los casos que no estan englobados en esta
sentencia  
*/ 
if (usuario === 'pedro'){
  console.log('autorizado');
} else if(usuario === 'Emilia'){
  console.log('autorizado con privilegios');
} else{
  console.log('No autorizado');
}

// mini reto
if (boton === 'next') {
  console.log('The Weeknd');
}else if(boton === 'previous'){
  console.log('Eminem');
}
~~~
### Condicional switch
~~~javascript
let admin = 'xavier';
let usuario = admin;

switch(usuario){
  case 'pedro':
    console.log('Autorizado');
    // si quitamos el break el codigo seguira corriendose en cascada
    //hasta que ecuentre otro break
    break;
  case 'Emilia':
    console.log('Autorizado con privilegios');
    break;
  default:
    //en el default van todos los casos que no 
    //estan planteados
    console.log('No autorizado');
}

//mini reto
let numero = 2; 
let color = '';
switch(numero){
    case 1:
        color = 'rojo';
        break;
    case 2:
        color = 'azul';
        break;
    case 3:
        color = 'verde';
        break;
    default:
        color = 'negro';
}
~~~
### Operador Ternario
~~~javascript
let usuario = 'Emilia';
//esta sentencia solo sirve si tenbemos pocos condicionales o más bien 1

// si usuario == emilia entonces autorizado = autorizado si no, autorizado = no autorizado
let autorizado = usuario === 'Emilia' ? 'Autorizado' : 'No Autorizado';

console.log(autorizado);

//mini reto
let numero = 3;
let resultado = (numero >= 0) ? 'Es positivo' : 'Es negativo';
~~~
### Reto: Condicionales
~~~javascript
let edad = 25;
let accion = 'crear';
let numero = 3;

if(edad >= 18){
  console.log('Eres mayor de edad.');
}else{
  console.log('Eres menor de edad.');
}

switch(accion){
  case 'crear':
    console.log('La acción es crear.');
    break;
  case 'colocar':
    console.log('La acción es colocar.');
    break;
  case 'actualizar':
    console.log('La acción es actualizar.');
    break;
  case 'borrar':
    console.log('La acción es borrar.');
    break;
}

if(numero%2 === 0){
  console.log('El número ingresado es par');
} else{
  console.log('El número ingresado es impar');
}
~~~

## Bucles
### Bucle for
~~~javascript
// valor inicial, valor de corte, aumento
for (let i = 0; i < 10; i +=2) {
  console.log(i);
}
let lista = ['gato', 'perro', 'elefante', 'dinosaurio', 'tortuga'];
for (let j = 0; j < lista.length; j++) {
  let animal  = lista[j];
  console.log(animal);
  if(animal==='dinosaurio'){
    break; //esto rompe el bucle;
    continue; //el continue hace que ya no se corra la parte
    //en cascada del codigo y continua iterando
  }
}

//mini reto
for (let i = 0; i < 30; i++) {
  console.log('<section></section>');
}
~~~
### Bucle for of
~~~javascript
let lista = [1,2,3,5,8];

for (let elemento of lista) {
  //ahi se toman todos los elementos de la lista 
  console.log(elemento + 4);
}

//mini reto
const lista2 = ['manzana', 'naranja', 'uva'];
for (const elemento of lista2) {
    console.log(elemento);
}
~~~
### Bucle for in
~~~javascript
//los bucles for in son para los objetos y los 
//forof para las listas

let traductor = {
  bucle: 'loop',
  lista: 'array',
  declaracion: 'declaration',
  objeto: 'object'
};

for (const etiqueta in traductor) {
  console.log(etiqueta +' en ingles es: '+ traductor[etiqueta]);
}

//minin reto
const persona = {nombre: 'Juan', edad: 25, ciudad: 'Madrid'};
for (let prop in persona){
    console.log(prop, persona[prop]);    
}
~~~
### Bucle while
~~~javascript
let is = 0;

while(i<100){
  console.log(i);
  i++;
}

//mini reto
let i = 1;

while(i<=5){
    console.log(i);
    i++;
}
~~~
### Bucle do while
 ~~~javascript
//con este bucle aseguras que el bucle minimo hara una iteracion 

do{
  console.log('una vez');
  i++;
}while(i<4);


//mini reto
let i = 1;
do{
  console.log(i);
  i++;
}while(i<=10);
~~~
### Reto: Bucles
~~~javascript
let colores = ['rojo','verde','azul','amarillo'];

let persona = {
  nombre: 'María',
  edad: 27,
  profesion: 'diseñadorea'
};

for (let i = 1; i < 6; i++) {
  console.log(i);
}

console.log('-----------------');

for (const color of colores) {
  console.log(color);
}

console.log('-----------------');

for (const etiqueta in persona) {
  console.log(etiqueta+': '+persona[etiqueta]);
}

console.log('-----------------');

let i = 0;
while (i**2<100) {
  i++;
}
console.log('El número más cercano a 100 cuyo cuadrado es menor que 100 es: '+i);

console.log('-----------------');

i=2;
do {
  console.log(i);
  i+=2;
} while (i<=10);
~~~

## Funciones
### Declarar funciones 
~~~javascript
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
~~~
### Declaración vs Expresión
~~~javascript
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
~~~
### Retorno
~~~javascript
function sumar(a,b){
  console.log(a+b);
  //no todas las funcione sregresan algo y si le 
  //ponemos el console log este regresa undefined
}

let usuario = {
  nombre: 'Ana',
  apellido: 'Perez'
};

function cambiarApellido(objeto){
  objeto.apellido = 'Ochoa';
  //la mutacion es cuando cambias el objeto original 
  //que se paso como parametro
}

//lo mejor es no cambiar los valores originales y regersar copias
function cambiarApellido2(objeto){
  let copia = JSON.parse(JSON.stringify(objeto)); //haciendo copia
  copia.apellido = 'Ochoa';
  return copia;
}

//mini reto
function retorno() {
  return 27; 
}
~~~
### Métodos
~~~javascript
/*los metodos son funciones que se implementan 
dentro de los objetos*/

let perro ={
  nombre: 'firulais',
  ladra: function(){
    console.log('Woof!');
  }
};

perro.ladra();

//mini reto
let ciudades = ['Busan', 'Hakone', 'Yogjakarta'];
ciudades.unshift('Moulboul');
~~~
### Ámbito
~~~javascript
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
~~~
### Ámbito: var vs let
~~~javascript
//la diferencia entre var y let 

//let tien eun alcance de bloque no de funcion 

//mini reto
var x = 5;
var y;
{
	let y = 5;
    x = 10;
    y = 10;
}
console.log(x,y); // 10 undefined
~~~
### Callback
~~~javascript
//funciones que son argumentos que son llamdos por una funcion 

//aqui al llamar a llamar el callback es el console.log y a es 200;
function llamar(callback, a){
  callback(33 + a);
}

llamar(console.log, 200);

function exitoso(enExito, enError){
  let exito = true;
  if(exito){
    enExito();
  }else{
    enError();
  }
}

exitoso(
  function() {console.log('Exito');},
  function() {console.log('Error');}
);

//mini reto
function suma(a, b, callback) {
	let resultado = a+b;
    callback(resultado);
}

~~~
### Funciones Flecha
~~~javascript
function exitoso(enExito, enError){
  let exito = true;
  if(exito){
    enExito();
  }else{
    enError();
  }
}

//estas son las funciones de flecha, son como la abreviacion 
//de las funciones normales
exitoso(
  () => console.log('Exito'),
  () => console.log('Error')
);

//callback en el foreach
//e es el numero que esta en el array y i es el indice
[1,2,3,40].forEach((e,i) => console.log(e,i));

//mini reto
const sumar = (a,b) => a+b;
~~~
### Reto: Funciones
~~~javascript
let validarFormulario = (personaObjeto) => {
  return personaObjeto.Nombre && personaObjeto.Email && personaObjeto.Mensaje;
}

let enviarFormulario = (personaObjeto) => {
  if(validarFormulario(personaObjeto)){
    console.log("¡Formulario enviado con éxito!");
  }else{
    console.log("Por favor completa todos los campos.");
  }
};

let persona = {
  Nombre: 'Persona1',
  Email: 'Persona1@per.com',
  Mensaje: 'Hola soy una persona'
};

enviarFormulario(persona);
~~~

## Programación Orientada a Objetos
### Contexto
~~~javascript
let auto = {
  modelo: 'Modelo 3',
  año: 2021,
  marca: 'Tesla',
  //al usar this nos referimos a este objeto
  //en el cual estamos justo ahora
  info: function(){
    return 'Este es un auto ' + this.marca
    +', ' +this.modelo +' del año ' + this.año;
  }
};

console.log(auto.info());

//mini reto
const item = { id: '1234556', getId: function() { console.log(this.id); } };
item.getId();
~~~
### Getter y Setter
~~~javascript
//mini reto
let persona = {
	_nombre: '',
	_edad: 0,

  get datos(){
    return this._nombre + ' ' + this._edad;
  },

  set datos(valor){
    const splitValor = valor.split(' ');
    this._nombre = splitValor[0];
    this._edad = splitValor[1];
  }
};

~~~
### Vinculación
~~~javascript
//vincular los metodos nos sirve para no repetir los metodos
//en los diferentes objetos, solo los vinculas
function info(a) {
  console.log(this, a);
}

let auto = {
  modelo: "Modelo 3",
  año: 2021,
  marca: "Tesla",
  //vinculacion implicita
  //que se vinculan de manera natural
  info: info,
};

//vinculacion explicita, vincular funciones con un objeto
//bind, tall, apply

//los ultimos () son para llamar a la funcion
//info.bind(auto)();

//esta la corre sin necesidad de llamrla
//info.call(auto,10);

//esta igual a la aneterior, pero los parametros
//se pasan por array
info.apply(auto, [10, 20]);

console.log(auto.info(10));

//mini reto
function suma(a, b) {
  return a + b;
}

function sumarConCall(num1, num2) {
  return suma.call(null, num1, num2);
}
function sumarConApply(num1, num2) {
  return suma.apply(null, [num1, num2]);
}
function sumarConBind(num1, num2) {
  return suma.bind(null,num1,num2)();
}
~~~
### POO
~~~javascript
let auto1 = {
  modelo: 'Modelo 3',
  año: 2021,
  marca: 'Tesla'
};

let auto2 = {
  modelo: 'Hummer EV',
  año: 2022,
  marca: 'GMC'
};

let servicio = {
  nombre: 'Transforma modelos a mayúsculas',
  transformar: function(auto){
    auto.modelo = auto.modelo.toUpperCase();
  }
};
//en la programacion orienteada a objetos siempre
//intentamos que todo sea un objeto 
servicio.transformar(auto1);
console.log(auto1);

//mini reto
const javascript = {
  nombre: 'JavaScript',
  año: 1995,
  autor: 'Brendan Eich',
  obtenerInfo(){
    return `${this.nombre} fue creado en ${this.año} por
     ${this.autor}.`;
  }
};
~~~
### Nuevo
~~~javascript
//Haciendo una nueva clase
function Auto(modelo, año, marca){
  this.modelo = modelo;
  this.año = año;
  this.marca = marca;
}

console.log(new Auto('Modelo 3', 2021, 'Tesla'));
console.log(new Auto('Hummer EV', 2022, 'GMC'));

//mini reto
function Perro(nombre) {
  this.nombre = nombre;
}

new Perro('Firulais');
~~~
### Prototype
~~~javascript
function Auto(modelo, año, marca){
  this.modelo = modelo;
  this.año = año;
  this.marca = marca;
}

//con el prototipe "obligamos" que todos los objetos creados
//del tipo auto tengan la funcion info, pero no la creamos
//dentro de el objeto, si no que todos la comparten 
Auto.prototype.info = function(){
  return this.modelo + ' - ' + this.marca + ' - ' + this.año;
}

const auto1 = new Auto('Modelo 3', 2021, 'Tesla');
const auto2 = new Auto('Hummer EV', 2022, 'GMC');

console.log(auto1.info());
console.log(auto2.info());

//mini reto
function Persona(nombre) {
	this.nombre = nombre;
}

Persona.prototype.saludar = function(){
  console.log('Hola, mi nombre es '+this.nombre);
}

~~~
### Clases
~~~javascript
//esta es lo más nuevo para hcer clases
class Auto{
  constructor(modelo, año, marca){
    this.modelo = modelo;
    this.año = año;
    this.marca = marca;
  }

  info(){
    return this.modelo + ' - ' + this.marca + ' - ' + this.año;
  }
}

//mini reto

class Canal{
  constructor(canal,tipo,espectadores,url){
    this.canal = canal;
    this.tipo = tipo;
    this.espectadores = espectadores;
    this.url = url;
  }

  ir(){
    console.log(this.url);
  }
}

const canal = new Canal('RollingStone', 'Music', 1432, 'https://www.twitch.tv/rollingstone');
canal.ir();
~~~
### Herencia
~~~javascript
function Padre(nombre, apellido, soy){
  this.nombre = nombre;
  this.apellido = apellido;
  this.soy = soy;
}

Padre.prototype.saludo = function(){
  console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy}`);
}

function Hijo(nombre,apellido, soy, tengo){
  //con esto se pasan las propiedades del padre al hijo
  //y luego se rellenan con el constructor del padre, pasando como 
  //contexto al hijo
  Padre.call(this, nombre, apellido, soy)
  this.tengo = tengo;
}

//todo esto esta bien pero aun no heredamos los metodos del 
//padre al hijo, por eso se hace:
Hijo.prototype = Padre.prototype;

const padre = new Padre('Ramon Antonio Gerardo', 'Estevez', 'el padre');
const hijo = new Hijo('Carlos Irwin', padre.apellido, 'el hijo', 55);

console.log(padre);
console.log(hijo);
padre.saludo();
hijo.saludo();

// mini reto
function Animal() {}

function Perro() {}
Perro.prototype = new Animal();
Perro.prototype.ladra = function() { console.log('guau'); };

const perro = new Perro();
perro.ladra();
~~~
### Extender
~~~javascript
class Padre{
  constructor(nombre, apellido, soy){
    this.nombre = nombre;
    this.apellido = apellido;
    this.soy = soy;
  }

  saludo(){
    console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy}`);
  }
}

//asi le avisamos a la clase hijo que va a heredar del padre
class Hijo extends Padre{
  constructor(nombre, apellido, soy, tengo){
    //con super mandamos los valores metidos 
    //a las propiedades del padre que ahora
    //tambien son de esta clase
    super(nombre, apellido, soy);
    this.tengo = tengo;
  }

  saludoHijo(){
    console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy} y tengo ${this.tengo}`);
  }
}

const padre = new Padre('Ramon Antonio Gerardo', 'Estevez', 'el padre');
const hijo = new Hijo('Carlos Irwin', padre.apellido, 'el hijo', 55);

console.log(padre);
console.log(hijo);
padre.saludo();
hijo.saludo();

//mini reto
class Rectangulo {
	constructor(alto, ancho) {
		this.alto = alto;
		this.ancho = ancho;
	}

	area() {
		return this.alto * this.ancho;
	}
}

class Cuadrado extends Rectangulo {
  constructor(lado){
    
    super(lado,lado);
  }
}
~~~
### Herencia Prototípica
~~~javascript
//todo hereda de objeto
const computadora = { marca: 'Dell', modelo: 'Latitude', ram: 16 };
console.log(typeof computadora);
~~~
### Reto: Programación Orientada a Objetos
~~~javascript
class Vehiculo {
  constructor(numRuedas){
    this.numRuedas = numRuedas;
  }
  detallesGenerales(){
    return `Este vehiculo tiene ${this.numRuedas} ruedas. ` ; 
  }
}

class VehiculoDePasajeros extends Vehiculo{
  constructor(numRuedas, pasajeros){
    super(numRuedas);
    this.pasajeros = pasajeros;
  }
  imprimirMensajePasajeros(){
    let ruedas = super.detallesGenerales();
    console.log(`${ruedas}${this.pasajeros}`);
  }
}

class Vehiculo2Ruedas extends Vehiculo{
  constructor(numRuedas, descripcion){
    super(numRuedas);
    this.descripcion = descripcion;
  }
  imprimirMensaje2ruedas(){
    let ruedas = super.detallesGenerales();
    console.log(`${ruedas}${this.descripcion}`);
  }
}

let camion = new VehiculoDePasajeros(4, 'Puede transportar 5 pasajeros.')
let bicicleta = new Vehiculo2Ruedas(2,'Es una bicicleta de tipo Montaña.');

camion.imprimirMensajePasajeros();
bicicleta.imprimirMensaje2ruedas();
~~~

## Módulos
### Exportar
~~~javascript
//ponemos export para que se pueda exportar
// a otros archivos
export function sumar(a,b){
  return a+b;
}

export const PI = 3.14;

export class Servicio{
  tres = 3;

  restarTres(num){
    return num - this.tres;
  }
}

//Esto denota como lo más importante al servicio
//dentro de este script
export default Servicio;

//mini reto
export function eliminarEspacios(texto) {
	return texto.replace(/\s+/g, '');
}
~~~
### Importar
~~~javascript
//asi se importan las funciones de otros scripts 
import { sumar, PI, Servicio } from "./Exportar.js";
let resultado = sumar(1,2);
console.log(resultado);
console.log(PI);
//creando el servicio que ya teniamos
const servicio = new Servicio();
console.log(servicio.restarTres(4));

//aqui exportamos lo que tiene el default de mi archivo
//export
import cualquierNombre from './Exportar.js';
console.log(new cualquierNombre().restarTres(4));

//importando toda la libreria
import * as todo from './Exportar.js';
console.log(todo.sumar(4,5));
console.log(todo.Servicio);

//lo mejor seria tener codigos pequeños
//como de 400 lineas de codigo para que sea comprensible el codigo
//en lugar de tener archivos gigantes de miles de lineas de codigo

//mini reto
import {conectar} from './bluetooth.js';

const url = 'https://academia.x/bt/server';
conectar(url);
~~~
### Reto: Módulos
script de donde se exporta
~~~javascript
export function validarCorreo(correo){
  function elementoComun(listaA, listB){
    return listaA.some(item => listB.includes(item));
  }
  let invalidSimbols = [" ", ","];
  let correoList = correo.split("");
  if(correoList.includes('@') &&
      correoList.length>10 &&
      !elementoComun(correoList,invalidSimbols)){
        return true;
      } else{
        return false;
      }
}
~~~
script de donde se importa 
~~~javascript
import { validarCorreo } from "./Reto_ModulosValidar.js";

let correo = "usuario.usuario@hotmail.com"

if(validarCorreo(correo)){
  console.log("Correo valido");
}else{
  console.log("Introduce un correo valido");
}
~~~

## Asincronía
### Temporizador: setTimeout
~~~javascript
console.log('antes');

//esto se ocupa mucho con la asyncronia
let timeout = setTimeout(()=>{
  console.log('Cualquier codigo');
},3000); //el tiempo se mide en mili segundos
//la asyncronia es correr codigo que no entorpezca el demás codigo 
console.log('despues');

clearTimeout(timeout); //cancelando el settimeout

//si existen mas setTimeOuts ellos deberan esperar haciendo una cola

//mini reto
setTimeout(
  mostrarMensaje
, 2000);

~~~
### Temporizador: setInterval
~~~javascript
let i=0;
//esta es parecida a set time out solo qeu esta corre varias veces 
//dependiendo el tiempo que le des
let interval = setInterval(()=>{
  console.log(i++);
},100); //cada dos segundo suma uno a i 

setTimeout(()=>{
  clearInterval(interval); //eliminando o cuancelandoi el intervalo 
},5000);

//mini reto
setInterval(() => 
    console.log('Alarma')
, 3000);
~~~
### Promesas
~~~javascript
//las promesas pueden demorarce asi que se hacen de manera 
//asyncrona 

/*
let promesa = new Promise((seCumple, rechazar) =>{
  //se cumple la promesa
  //seCumple('Muy bien');

  //no se cumple la promesa
  rechazar('Muy mal')
});
*/

let promesa =  new Promise((reciboDatos, noReciboDatos) => {
  setTimeout(()=>{
    reciboDatos('datos')
  }, 5000);
  
});

promesa
//esto se dispara despues de que la promesa da algun tipo
//de resultado
  //lo que llegue sea lo qeu sea le hago esto
  .then(texto => texto + 'Datos procesados')
  .then(texto => texto + 'Datos procesados otra vez')
  .then(texto => console.log(texto))
  //el catch se usa cuando la promesa falla o cuando en nuestro 
  //codigo falla, no solo la promesa
  .catch(problema => console.log('x ' + problema))
  //finally se ejecuta una vez que terminamos con la promesa 
  .finally(()=> console.log('Todo listo'));

//primero correra este pedazo de codigo mientras sigue
//trabajando en la promesa
console.log('Quiero ejecutar lo más pronto posible')

//mini reto
new Promise(resolve =>
  resolve('Éxito')
);
~~~
### Multiples Promesas
~~~javascript
let promesa1 = new Promise((recibiDatos, noRecibiDatos) =>{
  setTimeout(()=> {recibiDatos('datos1'); }, 5000)
});
let promesa2 = new Promise((recibiDatos, noRecibiDatos) =>{
  setTimeout(()=> {recibiDatos('datos2'); }, 2000)
});
//si se necesitan varias promesas para resolver algo
//hacemos esto si no sabemos cuanto se van a tardar
//retorna los resultados de las 2 promesas 
//esto se hace hasta que tengamos todas las promesas completadas
Promise.all([promesa1, promesa2])
  //en esto sale un alista
  //.then((lista)=>{
  .then(([resultado1, resultado2])=> {
    console.log(resultado1);
    return resultado2;
  })
  .then(resultado2 => {
    console.log(resultado2.toUpperCase());
  })

  //mini reto
  const promesa3 = new Promise((resolve) => {
    setTimeout(() => { resolve('Hola'); }, 1000);
  });
  const promesa4 = new Promise((resolve) => {
    setTimeout(() => { resolve('Mundo') }, 2000);
  });
  
  Promise.all([promesa3, promesa4])
      .then(([result1, result2]) =>{
          console.log(result1 + ' ' + result2);
  });

~~~
### Funciones async
~~~javascript
let promesa = new Promise((reciboDatos, noRecibidoDatos) => {
  setTimeout(()=>{
    reciboDatos('datos');
  }, 5000);
});

(async function asincrona(){
  let resultado = await promesa;
  console.log(resultado.toUpperCase());
})(); //con esto se hace para que inicie la funcion

//mini reto
async function recibirCelulares () {
	const celulares = await obtenerDatos();
	console.log(celulares);
	}
recibirCelulares();
~~~
### Fetch Web API
~~~javascript
fetch("www.xaviro.com")
  .then(response => response.json) //lo volvemos json
  .then(json => {
    console.log(json);
  });

//mini reto
const url = 'https://jsonplaceholder.typicode.com/users/1';
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data.name))
  .catch(error => console.error(error));
~~~
### Errores
~~~javascript
try {
  let objeto = {};

  //esto iria en vez del await 
  //console.log(objeto.c.a)
  await

} catch (error) {
  console.log('Error: ' + error);
} finally{
  console.log('finally');
}

//mini reto
function divide(a, b) {
  try{
    return a / b;
  }catch(error){
    console.log('Error: ', error);
  }
}
~~~
### Reto: Asincronía
~~~javascript
setTimeout(() =>{
  console.log('Datos obtenidos de la API: [')
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((datos) => datos.json()) 
  .then(datos => console.log(datos))
  .catch(error => console.log('Error '+ error))
}, 3000);

console.log('Iniciando solicitud a la API');

~~~
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <script src="RetoAsincronia.js"></script>
</body>
</html>
~~~

## Proyecto: Rocola
### Rocola Digital: Pregunta 
~~~javascript
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

~~~
### Rocola Digital: Código
este codigo es la logica del profesor
~~~javascript
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
~~~

## Patrones
### Constructor
~~~javascript
const instancia1 = {};

const instancia2 = Object.create(Object.prototype);

const instancia3 = new Object();

class Pelicula{
  constructor(nombre, año){
    this.nombre = nombre;
    this.año = año;
  }

  toString(){
    return `La pelicual ${this.nombre} es del año ${this.año}`;
  }
}

console.log(new Pelicula('Roma', 2018).toString()); 
console.log(new Pelicula('Twelve Monkeys', 1995).toString()); 
console.log(new Pelicula('The Fountain', 2006).toString()); 

//mini reto
function ObraDeArte(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.mostrarDetalles = function() {
return this.titulo + ' fue creado por ' + this.autor;
}
}
~~~
### Singleton
~~~javascript
let contar = 0;

const contador = {
  getInstancia(){
    return this;
  },

  getContar(){
    return contar;
  },

  incrementar(){
  return ++contar;    
  }
}

//asi exportamos a otros archivos nuestro singleton
//con freeze nos aseguramos que no sea modificado 
Object.freeze(contador);
export {contador};

//a pesar de que el singlketon es un patron de programacion 
/*actualmente ya no e stan usado y es considerado un patron
antipatron, ya que puede ser cambiado facilmente y eso generaria
errores en el codigo  */

//mini reto
const juego 
	= {resultado:  null,
	
	lanzarDado() {
		this.resultado = Math.floor(Math.random() * 6) + 1;
		return this.resultado;
	}
};

Object.freeze(juego);

export { juego };
~~~ 
### Proxy
~~~javascript
const controlJuego = new Proxy(jugador,{
	get: (objeto, propiedad) => {
		if (propiedad === 'nivel') {
			console.log(`Nivel obtenido: ${objeto,nivel}`);
		}
		return objeto[propiedad];
	},
	set: (objeto, propiedad, valor) => {
		if (propiedad === 'puntaje') {
			console.log(`Nuevo puntaje: ${valor}`);
		}
		objeto[propiedad] = valor;
	}
});
~~~
### Prototipo
es más bien una clase en la que enseña como funciona el prototipado en javascript, sineod como la herencia que tienen los hijos con los padres y los nietos
### Módulo
~~~javascript
export function cuadrado(x){
  privada(x * x);
}

export function removerDuplicados(lista){
  //set quita los duplicados de un alista o mas bien 
  //crea una nueva lista que no tiene duplciados
  privada([...new Set(lista)]);
}

function privada(x){
  console.log(x)
}
~~~
~~~javascript
import { cuadrado as cuadradoNum, removerDuplicados } from "./modulos.mjs";

cuadradoNum(2);

removerDuplicados([1,2,3,3,3,4]);
//no podemos llamar a la funcion "Privada"
//porque no la tenemos para exportar 

//se dice que evita colisiones porque con esto hacemos que
//se pueda usar el mismo nombre que tenemos en donde 
//declaramos los modulos haciendo que cuadrado se importe 
//con el nombre de cuadradoNum
function cuadrado(){
  console.log('colision');
}
~~~
### Mezcla
~~~javascript
//se recomienda no usar la herencia 

class Estudiante{
  constructor(nombre){
    this.nombre = nombre;
  }
}

const persona = {
  saludar(){
    console.log(`Hola mi nombre es ${this.nombre}`);
  }
}

//asi le damos caracteristicas que puede usar
Object.assign(Estudiante.prototype, persona);

const estudiante = new Estudiante('Danna');

estudiante.saludar();

//mini reto
class Gadget {
	constructor(nombre, precio) {
		this.nombre = nombre;
		this.precio = precio;
	}
}

const info = {
	mostrarInfo: function () {
		console.log(`${this.nombre} tiene un precio de $${this.precio}`);
	}
};

Object.assign(Gadget.prototype, info);

const iphone = new Gadget('iPhone', 999);

iphone.mostrarInfo();
~~~
### Medidor
~~~javascript
class Uber{
  comunicar(conductor, mensaje){
    console.log(`${Date.now()} [${conductor.nombre}]: ${mensaje}`);
  }
}

class Conductor{
  constructor(nombre, servicio){
    this.nombre = nombre;
    this.servicio = servicio;
  }

  enviar(mensaje){
    this.servicio.comunicar(this,mensaje);
  }
}

const servicio = new Uber();

const conductor1 = new Conductor('Mixhael Schumacher', servicio);
const conductor2 = new Conductor('Ayrton Sena', servicio);

conductor1.enviar('Estoy disponible');
conductor2.enviar('Estoy ocupado');

//mini reto
class VoluntariadoMediador {
	comunicar(nombre, mensaje) {
		console.log(`Voluntario: ${nombre} - Mensaje: ${mensaje}`);
	}
}

const mediador = new VoluntariadoMediador();

class PersonaVoluntario {
	constructor(nombre) {
		this.nombre = nombre;
	}

	enviar(mensaje) {
		mediador.comunicar(this.nombre, mensaje);
	}
}

const voluntario1 = new PersonaVoluntario('Juan');
const voluntario2 = new PersonaVoluntario('María');
voluntario1.enviar('Quisiera unirme a una organización de voluntariado');
// Voluntario: Juan - Mensaje: Quisiera unirme a una organización de voluntariado

voluntario2.enviar('Tengo experiencia en trabajos sociales');
// Voluntario: María - Mensaje: Tengo experiencia en trabajos sociales
~~~
### Reto: Patrones
~~~javascript
let listaDeUsriarios= [];

export function AgregarUsuario(nombreUsuario){
  listaDeUsriarios.push(nombreUsuario);
  console.log(`Usuario '${nombreUsuario}' agregado.`)
}

export function MostrarListaDeUsuarios(){
  console.log('Lista de usuarios:')
  for (let i = 0; i < listaDeUsriarios.length; i++) {
    console.log(listaDeUsriarios[i]);
  }
}
~~~
~~~javascript
import { AgregarUsuario, MostrarListaDeUsuarios } from "./Reto_Patrones_1.mjs";

AgregarUsuario('Juan');
AgregarUsuario('María');
MostrarListaDeUsuarios();
~~~
## Productividad
### Algoritmos con ChatGPT
pues usar chatGPT