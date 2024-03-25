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