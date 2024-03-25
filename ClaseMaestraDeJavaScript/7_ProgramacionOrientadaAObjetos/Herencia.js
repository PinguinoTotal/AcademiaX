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