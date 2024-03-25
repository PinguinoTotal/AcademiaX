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
