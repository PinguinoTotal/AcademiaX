let i=0;
//esta es parecida a set time out solo qeu esta corre varias veces 
//dependiendo el tiempo que le des
let interval = setInterval(()=>{
  console.log(i++);
},100); //cada dos segundo suma uno a i 

setTimeout(()=>{
  clearInterval(interval); //eliminando o cuancelandoi el intervalo 
},5000);

//mini reto
setInterval(() => 
    console.log('Alarma')
, 3000);