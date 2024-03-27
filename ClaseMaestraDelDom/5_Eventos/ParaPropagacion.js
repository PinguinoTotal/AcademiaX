//deteniendo el evento de burbujeo 
document.querySelector('body').addEventListener('click', evento=>{
  console.log('click en body');
});

document.addEventListener('click', evento=>{
  console.log('click en document');
});

//asi aun tendriamos el burbujeo y diria:

//click en body
//click en document

//pero podriamos hacer esto 
document.querySelector('.svg-skill').addEventListener('click', evento=>{
  console.log('click en imagne');
  evento.stopPropagation();
}); 

//esto ya solo podria

//click en imagen 

//y nada más

//mini reto
const button = document.querySelector('#boton');
button.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Botón presionado');
});