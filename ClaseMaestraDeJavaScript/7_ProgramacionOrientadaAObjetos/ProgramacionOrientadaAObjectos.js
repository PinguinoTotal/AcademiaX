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