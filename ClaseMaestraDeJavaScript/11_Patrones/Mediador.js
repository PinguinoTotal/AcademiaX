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