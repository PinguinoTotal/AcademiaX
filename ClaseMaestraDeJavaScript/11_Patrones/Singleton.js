let contar = 0;

const contador = {
  getInstancia(){
    return this;
  },

  getContar(){
    return contar;
  },

  incrementar(){
  return ++contar;    
  }
}

//asi exportamos a otros archivos nuestro singleton
//con freeze nos aseguramos que no sea modificado 
Object.freeze(contador);
export {contador};

//a pesar de que el singlketon es un patron de programacion 
/*actualmente ya no e stan usado y es considerado un patron
antipatron, ya que puede ser cambiado facilmente y eso generaria
errores en el codigo  */

//mini reto
const juego 
	= {resultado:  null,
	
	lanzarDado() {
		this.resultado = Math.floor(Math.random() * 6) + 1;
		return this.resultado;
	}
};

Object.freeze(juego);

export { juego };