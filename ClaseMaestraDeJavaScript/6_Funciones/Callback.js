//funciones que son argumentos que son llamdos por una funcion 

//aqui al llamar a llamar el callback es el console.log y a es 200;
function llamar(callback, a){
  callback(33 + a);
}

llamar(console.log, 200);

function exitoso(enExito, enError){
  let exito = true;
  if(exito){
    enExito();
  }else{
    enError();
  }
}

exitoso(
  function() {console.log('Exito');},
  function() {console.log('Error');}
);

//mini reto
function suma(a, b, callback) {
	let resultado = a+b;
    callback(resultado);
}
