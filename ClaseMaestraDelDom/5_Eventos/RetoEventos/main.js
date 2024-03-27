let but_p1 = document.querySelector('#Prod1');
let but_p2 = document.querySelector('#Prod2');
let but_p3 = document.querySelector('#Prod3');
const mensajePanel = document.querySelector('#mensaje');
let mensajePuesto = false;

function imprimeMensaje(mensaje){
  let mensajeHTML = `Producto añadido al carrito: ${mensaje}`;
  mensajePanel.innerHTML = mensajeHTML;
  mensajePanel.classList.add('mensaje-opaco');
  setTimeout(function(){
    mensajePanel.classList.remove('mensaje-opaco');
  },3000);
  
  
}

but_p1.addEventListener('click', () =>{
  imprimeMensaje('Producto 1');
});
but_p2.addEventListener('click', ()=>{
  imprimeMensaje('Producto 2');
});
but_p3.addEventListener('click', ()=>{
  imprimeMensaje('Producto 3');
});