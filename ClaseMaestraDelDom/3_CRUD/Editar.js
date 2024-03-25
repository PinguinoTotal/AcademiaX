//cambiando lo que dice en la parte del texto de un h1
document.querySelector('h1').textContent = 'Parques Nacionales';

//con esta opcion entro dentro del html y puedo escribir lo que sea
//siendo esto texto normal o tambien codigo
document.querySelector('h1').innerHTML = '<b>Parques Ncionales</b>';

//mini reto
let navegación = document.querySelector('nav ul');
let info = document.createElement('li');
info.textContent = 'Más información';
navegación.insertAdjacentElement('beforeend', info);