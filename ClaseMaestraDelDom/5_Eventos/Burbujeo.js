//los eventos se senzan en 'cascada' por asi llamarlo 
//del documento al body y despues a la imagen 

//el burbujeo es que que el eventoi empieza a fluir desde el 
//elemento hasta la raiz, en este casos eraid esde la imagne hacia 
//el doucmento 

document.querySelector('.svg-skill').addEventListener('click', ()=>{
  console.log('click en imagne');
}); 

document.querySelector('body').addEventListener('click', ()=>{
  console.log('click en body');
});

document.addEventListener('click', ()=>{
  console.log('click en document');
});

//si le pusieramos un evento listener a una imagen puesta en el body
//se veria que se imprime de esta manera

//click en imagen 
//click en body
//click en documento

//si el ponemos lo siguiente, los ebentos saltan al ser capturados y 
//no en la fase de burbujeo 

document.querySelector('.svg-skill').addEventListener('click', ()=>{
  console.log('click en imagne');
}, true); //con el true hacemos que se dispare en la captura

document.querySelector('body').addEventListener('click', ()=>{
  console.log('click en body');
}, true); //con el true hacemos que se dispare en la captura

document.addEventListener('click', ()=>{
  console.log('click en document');
}, true); //con el true hacemos que se dispare en la captura

//ahora tenemos 
//click en documento
//click en body
//click en imagen 

//mini reto
function configurarEvento() {
	const elementoPadre = document.getElementById('padre');
	const elementoHijo = document.getElementById('hijo');
	elementoPadre.addEventListener('click', (event) => {
		console.log(event);
	}, true);
	elementoHijo.addEventListener('click', (event) => {
		console.log(event);
	}, true);
}

