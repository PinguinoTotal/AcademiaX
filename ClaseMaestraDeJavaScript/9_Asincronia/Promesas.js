//las promesas pueden demorarce asi que se hacen de manera 
//asyncrona 

/*
let promesa = new Promise((seCumple, rechazar) =>{
  //se cumple la promesa
  //seCumple('Muy bien');

  //no se cumple la promesa
  rechazar('Muy mal')
});
*/

let promesa =  new Promise((reciboDatos, noReciboDatos) => {
  setTimeout(()=>{
    reciboDatos('datos')
  }, 5000);
  
});

promesa
//esto se dispara despues de que la promesa da algun tipo
//de resultado
  //lo que llegue sea lo qeu sea le hago esto
  .then(texto => texto + 'Datos procesados')
  .then(texto => texto + 'Datos procesados otra vez')
  .then(texto => console.log(texto))
  //el catch se usa cuando la promesa falla o cuando en nuestro 
  //codigo falla, no solo la promesa
  .catch(problema => console.log('x ' + problema))
  //finally se ejecuta una vez que terminamos con la promesa 
  .finally(()=> console.log('Todo listo'));

//primero correra este pedazo de codigo mientras sigue
//trabajando en la promesa
console.log('Quiero ejecutar lo más pronto posible')

//mini reto
new Promise(resolve =>
  resolve('Éxito')
);