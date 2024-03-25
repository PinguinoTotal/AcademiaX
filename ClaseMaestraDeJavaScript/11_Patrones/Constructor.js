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