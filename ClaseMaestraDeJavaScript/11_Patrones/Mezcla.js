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