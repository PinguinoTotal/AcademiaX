//hacemos que no salten los eventos por default, como poor
//ejemplo un link hacemos que no conduzca a la siguiente pagina
$0.addEventListener('click', evento=>{
  console.log(evento);
  evento.preventDefault();
}); 

//mini reto
const link = document.querySelector('a');
link.addEventListener('click', (evento)=>{
  evento.preventDefault();
}); 