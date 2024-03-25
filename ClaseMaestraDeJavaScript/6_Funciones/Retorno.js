function sumar(a,b){
  console.log(a+b);
  //no todas las funcione sregresan algo y si le 
  //ponemos el console log este regresa undefined
}

let usuario = {
  nombre: 'Ana',
  apellido: 'Perez'
};

function cambiarApellido(objeto){
  objeto.apellido = 'Ochoa';
  //la mutacion es cuando cambias el objeto original 
  //que se paso como parametro
}

//lo mejor es no cambiar los valores originales y regersar copias
function cambiarApellido2(objeto){
  let copia = JSON.parse(JSON.stringify(objeto)); //haciendo copia
  copia.apellido = 'Ochoa';
  return copia;
}

//mini reto
function retorno() {
  return 27; 
}