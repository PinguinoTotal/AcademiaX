/*permite modificar y consultar un objeto de manera indirecta
se crea un objeto mensajero llamado proxy*/

const persona = {
  nombre: 'Oswaldo Guayasamin',
  edad: 80
}

//primero le pasamos a que objeto lo vamos a mandar
const mensajero = new Proxy(persona,{
  get: (objeto, propiedad) =>{
    //aqui consulatmos los valores uqe queremos saber
    //si no usamos reflect estamos en una refrencia de la propiedad
    console.log(`El valor es ${Reflect.get(objeto,propiedad)}`);
  },
  set: (objeto, propiedad, valor) => {
    //los proxy nos pueden ayudar a hacer validaciones de los valores
    //que le metemos a un objeto
    if (!valor) {throw new Error('Necesita un valor!');}
    console.log(`Cambiando de ${Reflect.get(objeto,propiedad)} a ${valor}`);
    Reflect.set(objeto, propiedad, valor);
  }
});

mensajero.nombre;
mensajero.nombre = 'Fito perez';
mensajero.nombre = '';

//mini reto
const jugador = {
	nombre: 'Juan',
	nivel: 5,
	puntaje: 100
};

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