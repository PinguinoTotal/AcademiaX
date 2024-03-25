let usuario = 'Emilia';
//esta sentencia solo sirve si tenbemos pocos condicionales o más bien 1

// si usuario == emilia entonces autorizado = autorizado si no, autorizado = no autorizado
let autorizado = usuario === 'Emilia' ? 'Autorizado' : 'No Autorizado';

console.log(autorizado);

//mini reto
let numero = 3;
let resultado = (numero >= 0) ? 'Es positivo' : 'Es negativo';