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