// no es una buena practica hacerlo por atributos

//se le añade la clase rojo
document.querySelector('h1').classList.add('rojo');

//se le quita la clase rojo
document.querySelector('h1').classList.remove('rojo');

//el toggle nos soirve como un switch de prendido y apagado de las
//clases
//prendo la clase
document.querySelector('h1').classList.toggle('rojo');
//apago la clase
document.querySelector('h1').classList.toggle('rojo');
//prendo la clase
document.querySelector('h1').classList.toggle('rojo');
//apago la clase
document.querySelector('h1').classList.toggle('rojo');

//añade y remueve la clase del elemento

//saber si un elemento tiene una clase 
document.querySelector('h1').classList.contains('rojo');

//minireto
document.querySelector('li #item-3').classList.add('active');

document.getElementById('item-3').classList.add('active');
