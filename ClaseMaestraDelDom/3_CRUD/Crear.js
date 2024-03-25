//tomamos el h1 de la pagina y lo guardamos en 
//una variable 
let titulo = document.querySelector('h1');

//creando un elemento span 
let span = document.createElement('span');

//dentro del span le ponemos el texto ?
span.textContent = '?';

//le metemos el span dentro del codigo html
//<h1><span>?</span></h1>
//es el ultimo elemento hijo de h1
titulo.appendChild(span);


titulo.insertAdjacentElement('beforebegin', span);
//beforebegin, lo pone antes de h1, no es un hijo
//afterbegin lo pone despues de h1 su primer hijo
//beforeend es appendchild
//afteren, pone el elemento despues de h1

