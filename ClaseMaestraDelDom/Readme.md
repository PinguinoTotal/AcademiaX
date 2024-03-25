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
### Escuchar a eventos
### Burbujeo
### El objeto evento
### Parar propagacíon
### Prevenir el comportamiento predeterminado
### Carga
### Dejar de escuchar eventos
### Reto: Eventos

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