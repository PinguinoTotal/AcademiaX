let edad = 25;
let accion = 'crear';
let numero = 3;

if(edad >= 18){
  console.log('Eres mayor de edad.');
}else{
  console.log('Eres menor de edad.');
}

switch(accion){
  case 'crear':
    console.log('La acción es crear.');
    break;
  case 'colocar':
    console.log('La acción es colocar.');
    break;
  case 'actualizar':
    console.log('La acción es actualizar.');
    break;
  case 'borrar':
    console.log('La acción es borrar.');
    break;
}

if(numero%2 === 0){
  console.log('El número ingresado es par');
} else{
  console.log('El número ingresado es impar');
}