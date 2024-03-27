# Clase Mestra del Dom

## Consultas
### Consultas por id
~~~javascript
//agarrando el elemento del html
//por el id que le dimos en el html
document.getElementById('app');
~~~
### Consultas por class
~~~javascript
//tomar todos los documentos que tienen la misma clase
document.getElementsByClassName('uk-card-media-top');

//tomar todos los elementos por tag
document.getElementsByTagName('img');
~~~
### Propiedades
~~~javascript
//seleccionando el ultimo elemento que seleccione
$0
~~~
### Consultas usando selectores de css
~~~javascript
//todos los siguientes solo retornan el primer elemento que encuentren 
//seleccionando los elementos como si fuera css
document.querySelector('body');

//seleccionando el elemento id
document.querySelector('#app');

//seleccionando una clase
document.querySelector('.app');

//con este seleecionas todos los elementos
document.querySelectorAll('div')


~~~
### Reto: Consultas
~~~javascript
document.querySelector('body');

document.querySelector('#btn-primary');

document.querySelector('.tarjeta');

document.querySelector('footer');
~~~

## CRUD
### Crear
~~~javascript
//tomamos el h1 de la pagina y lo guardamos en 
//una variable 
let titulo = document.querySelector('h1');

//creando un elemento span 
let span = document.createElement('span');

//dentro del span le ponemos el texto ?
span.textContent = '?';

//le metemos el span dentro del codigo html
//<h1><span>?</span></h1>
//es el ultimo elemento hijo de h1
titulo.appendChild(span);


titulo.insertAdjacentElement('beforebegin', span);
//beforebegin, lo pone antes de h1, no es un hijo
//afterbegin lo pone despues de h1 su primer hijo
//beforeend es appendchild
//afteren, pone el elemento despues de h1
~~~
### Navegar por el DOM
~~~javascript
//buscando todas las imagenes
document.querySelectorAll('img');

//entro al indice 1 de las imagenes como si fuera un array 
document.querySelectorAll('img')[1];

//accedo al contenedor que lo esta teniendo
document.querySelectorAll('img')[1].parentElement;

let contenedor = document.querySelector('img')[1].parentElement.parentElement.parentElement;

//accediendo a los hijos del contenedor
contenedor.children[0].children;

//accediendo al primer hijo
contenedor.firstElementChild;

//accediendo al ultimo hijo
contenedor.lastElementChild;

//mini reto
document.querySelector('#mi_elemento').parentElement;
~~~
### Editar
~~~javascript
//cambiando lo que dice en la parte del texto de un h1
document.querySelector('h1').textContent = 'Parques Nacionales';

//con esta opcion entro dentro del html y puedo escribir lo que sea
//siendo esto texto normal o tambien codigo
document.querySelector('h1').innerHTML = '<b>Parques Ncionales</b>';

//mini reto
let navegación = document.querySelector('nav ul');
let info = document.createElement('li');
info.textContent = 'Más información';
navegación.insertAdjacentElement('beforeend', info);
~~~
### Remover
~~~javascript
//remover elementos
$0.remove();

//remover el hijo de alguien 
$0.removerChild($0.children[0]);

//minireto
//cualquiera de las dos sirve 
document.querySelector('#myElement').remove();

document.getElementById('myElement').remove();
~~~
### Reto: CRUD
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="RetoCRUD.css">
  <title>Document</title>
</head>
<body>
  <header>
    <h1>Página de tarjetas añadibles</h1>
  </header>
  <main>
    <div id="listaDeComponentes">
      <h2>Lista de Componentes</h2>
      <div id="componentes">
        <div class="componenteAgregadoNormal">
          <h3>Nombre De La WEB</h3>
          <p>Descripcion de la web</p>
          <button class="editar">Editar</button>
          <button class="elimar">Eliminar</button>
        </div>
      </div>
      <button id="Agregar">Agregar Componente</button>
    </div>

  </main>
  <footer>
    <p>&copy; Mi pagina de Manipulación del DOM. Todos los derechos reservados</p>
  </footer>
  <script src="RetoCRUD.js"></script>
</body>
</html>
~~~
~~~css
*{
  margin: 0;
  padding: 0;
}
header{
  background-color: #6A77E6;
  padding: 35px;
  color: white;
  text-align: center;
  font-size: 25px;
}
footer{
  background-color: #6A77E6;
  padding: 25px;
  color: white;
  text-align: center;
}
#listaDeComponentes{
  width: 500px;
  text-align: center;
  margin: 0px auto;
  margin-top: 20px;
  margin-bottom: 20px;
  h2{
    margin-bottom: 20px;
    font-size: 25px;
  }
  button{
    padding: 5px;
    border-radius: 5px;
  }
}

.componenteAgregadoNormal{
  margin: 0px auto;
  width: 300px;
  background-color: #ccc;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  h3{
    margin-bottom: 10px;
  }
}

.componenteAgregadoEditado{
  margin: 0px auto;
  width: 300px;
  background-color: #E76767;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  h3{
    margin-bottom: 10px;
  }
}
~~~
~~~javascript
let componentes = document.querySelector('#componentes');
function AgregarElemento(){
  let componenteAInsertar = document.createElement('div');
  componenteAInsertar.classList = 'componenteAgregadoNormal';
  componenteAInsertar.innerHTML = `<h3>Nombre De La WEB</h3>
                                  <p>Descripcion de la web</p>
                                  <button class="editar">Editar</button>
                                  <button class="elimar">Eliminar</button>`;
  componentes.append(componenteAInsertar);
}

let botonAgregar = document.querySelector('#Agregar');
botonAgregar.addEventListener('click', function(){
  AgregarElemento();
});

componentes.addEventListener('click', function(event){
  if(event.target.tagName == 'BUTTON'){
    let father = event.target.parentElement;
    if(event.target.classList.contains('editar')){
      father.classList.remove("componenteAgregadoNormal");
      father.classList.add("componenteAgregadoEditado");
      father.innerHTML = `<h3>Componente Editado</h3>
      <p>Este es el nuevo contenido del componente</p>
      <button class="editar">Editar</button>
      <button class="elimar">Eliminar</button>`;
    }else{
      father.remove();
    }
    
  }
  
});
~~~

## Modificaciones
### CSS
es importante decir que depende del enfoque del proyecto como se modificara el css, ya que a veces es mejor hacer todo el css en la pagina del css y mediante el dom ir cambiando las clases
~~~javascript

//de esta manera se añaden como atributos en el html
$0.style.color = 'blue';

$0.style.fontSize = '40px';

$0.style.fontSize = '100px';

//esto es lo mismo que arriba pero simplificado
$0.style.cssText = 'color; blue; font-size: 100px';

//en el dom se utiliza camelcase para el css

//mini reto:
~~~
### Atributos
~~~javascript
$0.setAttribute('style', 'color: blue; font-size: 100px');

//mini reto
$0.style.cssText = 'font-family: Lato; color : black; font-size : 40px;';
$1.setAttribute('style', 'background-color : white;');
~~~
### Classes
~~~javascript
// no es una buena practica hacerlo por atributos

//se le añade la clase rojo
document.querySelector('h1').classList.add('rojo');

//se le quita la clase rojo
document.querySelector('h1').classList.remove('rojo');

//el toggle nos soirve como un switch de prendido y apagado de las
//clases
//prendo la clase
document.querySelector('h1').classList.toggle('rojo');
//apago la clase
document.querySelector('h1').classList.toggle('rojo');
//prendo la clase
document.querySelector('h1').classList.toggle('rojo');
//apago la clase
document.querySelector('h1').classList.toggle('rojo');

//añade y remueve la clase del elemento

//saber si un elemento tiene una clase 
document.querySelector('h1').classList.contains('rojo');

//minireto
document.querySelector('li #item-3').classList.add('active');

document.getElementById('item-3').classList.add('active');
~~~
### Reto: Modificaciones
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Manipulacion del DOM</title>
</head>
<body>
  <header class="negro-blanco">
    <h1>Mi Página de Manipulación del DOM</h1>
  </header>
  <main>
    <div id="container">
      <div id="circle" class="circulo-verde">
        ¡Haz clic para cambiar el estilo!
      </div>
      <button id="cambio">Cambiar estilos</button>
    </div>
  </main>
  <footer class="negro-blanco">&copy; Mi Pagina de Manipulación del DOM. todos los derechos reservados</footer>
  
  <script src="Reto_Modificaciones.js"></script>
</body>
</html>
~~~
~~~css
*{
  margin: 0;
  padding: 0;
}

.negro-blanco{
  color: white;
  background-color: #333333;
  text-align: center;
}

h1{
  padding: 30px;
}

main{
  background-color: #8CC0F5;
}

#container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
  padding: 20px;
  width: 300px;
  height: auto;
  text-align: center;
  background-color: rebeccapurple;
}


.circulo-verde{
  background-color: #33FF57;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  line-height: 300px;
  border: 2px solid black;
  transition: all .5s;
}

.circulo-rojo{
  background-color: red;
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  border: 2px solid black;
  transition: all .5s;

}

#cambio{
  margin-top: 25px;
  padding: 5px;
}

footer{
  padding: 20px;
}
~~~
~~~javascript
let BtnEstilo = document.querySelector('#cambio');
let Circulo = document.querySelector('#circle');

BtnEstilo.addEventListener('click', function(){
  if(Circulo.classList.contains('circulo-verde')){
    Circulo.classList.remove('circulo-verde');
    Circulo.classList.add('circulo-rojo');
    Circulo.setAttribute('style', 'font-size: 10px');
  }else{
    Circulo.classList.remove('circulo-rojo');
    Circulo.classList.add('circulo-verde');
    Circulo.setAttribute('style', 'font-size: 20px');
  }
  
});
~~~

## Eventos 
### Monitoreo de eventos
mientras se esta en una pagina web apsasn muchos eventos al mismo tiempo sobre ella, lo que se puede hacer es en la consola poner **monitorEvents(document)** y asi se podran ver todos los eventos que estan pasando en la pagina y se detiene con **unmonitorEvents(document)**
~~~javascript
//mini reto
let boton = document.querySelector('button');
monitorEvents(boton,    'click');
~~~
### Escuchar a eventos
~~~javascript
//escuchando todos los clicks en cualquier parte de 
//la pagina
document.addEventListener('click',()=>{
  console.log('recibi un click');
});

//escuchando el click en una clase determinada
document.querySelector('.svg-skill').addEventListener('click',()=>{
  //despues de darle click a algun eelemento de esta clase, al que le 
  //dimos click escalalo 2 veces 
  document.querySelector('.svg-skill').computedStyleMap.trasform = 'scale(2)';
})

//minireto
document.getElementById('miBoton').addEventListener('click',()=>{
  alert('¡Has hecho click en el botón!');
});
~~~
### Burbujeo
~~~javascript
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


~~~
### El objeto evento
~~~javascript
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
~~~
### Parar propagacíon
~~~javascript
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
~~~
### Prevenir el comportamiento predeterminado
~~~javascript
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
~~~
### Carga
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    html{
      height: 100%;
      margin: 0;
      padding: 0;
    }

    body{
      min-height: 100%;
      display: grid;
      grid-template-columns: 100px auto;
      grid-template-rows: 40px auto 100px;
      gap: 10px;
    }

    nav,
    aside,
    main,
    footer{
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    nav{
      background-color: lightsalmon;
      justify-content: space-around;
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start:1 ;
      grid-column-end: 3;
    }

    aside{
      background-color: violet;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    main{
      background-color: greenyellow;
      grid-row-start: 2;
      grid-row-end: 3;
    }

    footer{
      background-color: lightseagreen;
      grid-row-start: 3;
      grid-row-end: 4;
      grid-column-start:1 ;
      grid-column-end: 3;
    }
  </style>
  
  <title></title>
</head>
<body>
  <nav>
    <a href="/home">Hogar</a>
    <a href="/more">Aprende</a>
    <a href="/about">Acerca De</a>
  </nav>
  <aside>Contenido Lateral</aside>
  <main>Contenido Principal</main>
  <footer>
    &copy; Xavier Reyes Ochoa 2025
  </footer>
  
  <script>
    //lo mejor es pasar el script al final del body 

    //con esta linea de codigo hacemos que siempre corra esto despues
    //de cargar toda la pagina por completo
    document.addEventListener('DOMContentLoaded', ()=>{
      document.querySelector('main').style.backgroundColor = 'red';
    })

    
  </script>
  <!--Mini reto-->
  <!--con defer hacemos que no coora el programa hasta que se cargue
  correctamente toda la pagina -->
  <script defer>
    console.log('Hola Mundo');
  </script>
</body>
</html>
~~~
### Dejar de escuchar eventos
~~~javascript
//haciendo más grande el elemento
function agrandar(){
  document.querySelector('.svg-skill').style.transform = 'scale(2)';
}

//haciendo que se llame la funcion cuando se da el click
document.querySelector('.svg-skill').addEventListener('click', agrandar);

//dejando de escuchar el evento
document.querySelector('.svg-skill').removeEventListener('click', agrandar);
//se tiene que pasar los mismos parametros

//mini reto
function quitar(i){
  let item =  document.querySelectorAll('#resultados li')[i];
  item.classList.add('esconder');
  item.removeEventListener('click', quitar);
}
~~~
### Reto: Eventos
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Tienda en Línea</title>
</head>
<body>
  <header>
      <h1>Tienda en Línea</h1>
      <nav>
        <ul>
          <li><a href="/Inicio">Inicio</a></li>
          <li><a href="/Productos">Productos</a></li>
          <li><a href="/Contacto">Contacto</a></li>
        </ul>
      </nav>
  </header>
  <div id="mensaje" class="mensaje-invisible">
    Producto añadido al carrito: Producto #
  </div>
  <main>
    <div class="tarjeta">
      <img src="assets/hamburguesa.jpg" alt="Producto 1">
      <h2>Producto 1</h2>
      <p>Descripción del producto 1.</p>
      <button id="Prod1">Agregar al Carrito</button>
    </div>

    <div class="tarjeta">
      <img src="assets/hamburguesa.jpg" alt="Producto 2">
      <h2>Producto 2</h2>
      <p>Descripción del producto 2.</p>
      <button id="Prod2">Agregar al Carrito</button>
    </div>

    <div class="tarjeta">
      <img src="assets/hamburguesa.jpg" alt="Producto 3">
      <h2>Producto 3</h2>
      <p>Descripción del producto 3.</p>
      <button id="Prod3">Agregar al Carrito</button>
    </div>
  </main>
  <footer>
    <p>&copy; Tienda en Línea. Todos los derechos reservados</p>
  </footer>
  <script src="main.js"></script>
</body>
</html>
~~~
~~~css
*{
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

header{
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #333333;
  color: white;
  padding: 50px;

  h1{
    font-size: 45px;
  }
}
header nav{
  display: flex;
  margin-top: 20px;
}
header nav ul{
  display: flex;
  justify-content: space-between;
  width: 350px;
  list-style: none;
}
header ul li{
  float: left;
}

header ul li a{
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  transition: all .2s;
}

header ul li a:hover{
  color: #4CAF50;
}

.mensaje-invisible{
  background-color: #4CAF50;
  width: 150px;
  padding: 20px;
  position: absolute;
  top: 50px;
  left: 50px;
  border-radius: 10px;
  opacity: 0;
  transition: all .5s;
}

.mensaje-opaco{
  opacity: 1;
}



main{
  display: flex;
  padding: 20px;
  justify-content: space-around;
}

.tarjeta{
  width: auto;
  height: 360px;
  border: 1px solid #DDDDDD;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  transition: all .3s;

  img{
    width: 250px;
    height: 150px;
    border-radius: 5px;
  }

  h2{
    font-size: 30px;
    font-weight: bold;
    margin-top: 25px;
  }

  p{
    font-size: 20px;
    margin-top: 25px;
  }
}

.tarjeta button{
  margin-top: 25px;
  font-size: 23px;
  padding: 12px 15px;
  border-radius: 10px;
  border: 0;
  background-color: #4CAF50;
  color: white;
  transition: all .5s;
}

.tarjeta button:hover{
  cursor: pointer;
  background-color: #347938;
}

.tarjeta:hover{
  scale: 1.05;
}

footer{
  background-color: #333333;
  color: white;
  text-align: center;
  padding: 60px;
  font-size: 20px;
}
~~~
~~~javascript
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
~~~

## El Motor de Javascript
### Pedidos
### Web APIs
### La pila de llamadas
### Web APIs y la cola de callbacks
### La cola de callbacks
### Repintado y Reflujo
### Depuracion
### Reto: El motor de javascript

## Proyecto: Portafolio
### Análisi de Diseño
### Implementación de JavaScript: Menú de Hamburguesa
### Implementación de JavaScript: Menú Fijo

## Productividad
### JavaScript con ChatGPT
### Pedidos a APIs con ChatGPT

## Siguientes Pasos
### Evaluación
### Recursos
### ¿Que viene despues?
### Preguntas de entrevista

~~~javascript

~~~