setTimeout(() =>{
  console.log('Datos obtenidos de la API: [')
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((datos) => datos.json()) 
  .then(datos => console.log(datos))
  .catch(error => console.log('Error '+ error))
}, 3000);

console.log('Iniciando solicitud a la API');

