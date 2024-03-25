//mini reto
let persona = {
	_nombre: '',
	_edad: 0,

  get datos(){
    return this._nombre + ' ' + this._edad;
  },

  set datos(valor){
    const splitValor = valor.split(' ');
    this._nombre = splitValor[0];
    this._edad = splitValor[1];
  }
};
