//buscando todas las imagenes
document.querySelectorAll('img');

//entro al indice 1 de las imagenes como si fuera un array 
document.querySelectorAll('img')[1];

//accedo al contenedor que lo esta teniendo
document.querySelectorAll('img')[1].parentElement;

let contenedor = document.querySelector('img')[1].parentElement.parentElement.parentElement;

//accediendo a los hijos del contenedor
contenedor.children[0].children;

//accediendo al primer hijo
contenedor.firstElementChild;

//accediendo al ultimo hijo
contenedor.lastElementChild;

//mini reto
document.querySelector('#mi_elemento').parentElement;