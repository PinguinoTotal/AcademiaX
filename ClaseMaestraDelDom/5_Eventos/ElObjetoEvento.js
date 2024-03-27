//captrurando el evento
document.querySelector('.svg-skill').addEventListener('click', (evento)=>{
  console.log('click en imagne', evento);
}, true);

//con el objeto evento nos brinda más informacion de quien 
//esta recibiendo este evento y por donde esta entrando este

//el event.target nos dice exactamente el elemento que disaro el evento

//mini reto 

document.addEventListener('pointerdown', (event) =>{
  console.log(event.type);
});