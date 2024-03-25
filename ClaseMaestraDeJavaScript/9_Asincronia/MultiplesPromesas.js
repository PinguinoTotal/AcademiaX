let promesa1 = new Promise((recibiDatos, noRecibiDatos) =>{
  setTimeout(()=> {recibiDatos('datos1'); }, 5000)
});
let promesa2 = new Promise((recibiDatos, noRecibiDatos) =>{
  setTimeout(()=> {recibiDatos('datos2'); }, 2000)
});
//si se necesitan varias promesas para resolver algo
//hacemos esto si no sabemos cuanto se van a tardar
//retorna los resultados de las 2 promesas 
//esto se hace hasta que tengamos todas las promesas completadas
Promise.all([promesa1, promesa2])
  //en esto sale un alista
  //.then((lista)=>{
  .then(([resultado1, resultado2])=> {
    console.log(resultado1);
    return resultado2;
  })
  .then(resultado2 => {
    console.log(resultado2.toUpperCase());
  })

  //mini reto
  const promesa3 = new Promise((resolve) => {
    setTimeout(() => { resolve('Hola'); }, 1000);
  });
  const promesa4 = new Promise((resolve) => {
    setTimeout(() => { resolve('Mundo') }, 2000);
  });
  
  Promise.all([promesa3, promesa4])
      .then(([result1, result2]) =>{
          console.log(result1 + ' ' + result2);
  });
