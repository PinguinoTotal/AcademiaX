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