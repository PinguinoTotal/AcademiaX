function exitoso(enExito, enError){
  let exito = true;
  if(exito){
    enExito();
  }else{
    enError();
  }
}

//estas son las funciones de flecha, son como la abreviacion 
//de las funciones normales
exitoso(
  () => console.log('Exito'),
  () => console.log('Error')
);

//callback en el foreach
//e es el numero que esta en el array y i es el indice
[1,2,3,40].forEach((e,i) => console.log(e,i));

//mini reto
const sumar = (a,b) => a+b;