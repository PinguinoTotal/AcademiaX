let admin = 'xavier';
let usuario = admin;

switch(usuario){
  case 'pedro':
    console.log('Autorizado');
    // si quitamos el break el codigo seguira corriendose en cascada
    //hasta que ecuentre otro break
    break;
  case 'Emilia':
    console.log('Autorizado con privilegios');
    break;
  default:
    //en el default van todos los casos que no 
    //estan planteados
    console.log('No autorizado');
}

//mini reto
let numero = 2; 
let color = '';
switch(numero){
    case 1:
        color = 'rojo';
        break;
    case 2:
        color = 'azul';
        break;
    case 3:
        color = 'verde';
        break;
    default:
        color = 'negro';
}