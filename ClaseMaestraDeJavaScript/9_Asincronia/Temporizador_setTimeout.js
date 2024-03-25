console.log('antes');

//esto se ocupa mucho con la asyncronia
let timeout = setTimeout(()=>{
  console.log('Cualquier codigo');
},3000); //el tiempo se mide en mili segundos
//la asyncronia es correr codigo que no entorpezca el demás codigo 
console.log('despues');

clearTimeout(timeout); //cancelando el settimeout

//si existen mas setTimeOuts ellos deberan esperar haciendo una cola

//mini reto
setTimeout(
  mostrarMensaje
, 2000);
