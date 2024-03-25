//ponemos export para que se pueda exportar
// a otros archivos
export function sumar(a,b){
  return a+b;
}

export const PI = 3.14;

export class Servicio{
  tres = 3;

  restarTres(num){
    return num - this.tres;
  }
}

//Esto denota como lo más importante al servicio
//dentro de este script
export default Servicio;

//mini reto
export function eliminarEspacios(texto) {
	return texto.replace(/\s+/g, '');
}