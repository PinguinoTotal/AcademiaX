# Clase Maestra de CSS

## Primeros pasos
### Hola mundo
~~~css
/*Selector*/
p{
    /*La linea completa se llama declaracion*/
    /*Color es la propiedad
    y red es el valor*/
    color: red;
}

/*Mini reto*/
h1{
    color: red;
}
~~~
### Uso
existen tres maneras de utilizarlo
*agregar el archivo con un link
*poner hasta arriba con la etiqueta style
*poner en cada linea de html el codigo css
~~~css
        a{
            color: red;
            text-decoration: none;
        }
        
        /*hover es pasar sobre el elemento*/
        a:hover{
            color: green;
        }


        /*Active es cuando le damos click*/
        a:active{
            text-decoration: underline;
        }
~~~

### Rests
es posible predefinir otro tipo de fuente o estilos iniciales en el css siendo que en los navegadores se vea diferente, hay alguna manera de verlo igaul en todos (ver la clase)
~~~css
*{
    margin: 0;
    padding: 0;
}

ul{
    list-style: none;
}
~~~

## Fundamentos
### Sintaxis
Como vimos anteriormente, las reglas de CSS consisten de selectores y bloques declarativos. El selector apunta al elemento de HTML que queremos estilizar. Los bloques declarativos poseen una o más declaraciones separadas por punto y coma, y cada declaración possee una propiedad junto con su valor.
~~~css
/*Mini reto*/
p {
  color: red;
  text-align: center;
}
~~~

### Selectores
~~~css
/*selector de elemento y se aplica a todos
los elementos de la pagina*/
p{
    color: blue;
    font-size: 25px;
}

/*Selector de clase*/
.claseTexto{
    color: red;
}

/*Selector de ID*/
#elementoUnico{
    color: green;
}

/*le haremos esto a los span
que tengan como padre la clasetexto*/
.claseTexto span{
    color: blueviolet;
}

/*asi selecciono todos los parrafos y 
todos los span*/
p, span{
    text-decoration: underline;
}

/*mini reto*/
/*Esto es el hijo inmediato de lo que acabo de entrar*/
div > h2{
    color: red;
}
div > p{
    color: blue;
}
div > button{
    color: green;
}
~~~
### Cascada y herencia
esto quiere decir que le aplicamos el ultimo estilo qeu leimos, si esta en una hoja externa pues se le aplcia el del html pues fue el ultimo en leerse

y tambien que si le damos estilos a un padre los estilos seran heredados a el hijo
### Especificidad
~~~css
p.textos#texto1{
    /*Esto es mucho más especifoco, ya que buscamos un parrafo 
    con clase textos con un id texto1*/
    color: blue !important;
    /*se puede poner el importantan pero no es tan buena practica
    ya que puede ocacionar conflictos*/
}
#texto1{
    /*el id es más especifico que la clase por ende 
    le gana*/
    color: yellow;
}
.textos { 
    /*la clase textos es más especifica que el p
    por ende le gana al p*/
    color: orange;
}
p{
    /*p es el hijo de body por ende gana al
    ser más especifico*/
    color: red;
}
body {
    /*le ponemos el color purpura a todos
    los elementos del body*/
    color: purple;
    font-size: 25px;
}

/*Mini reto*/
#span-id{
    color: black;
}
~~~
### Unidades
~~~css
body{
            margin: 0;
            width: 50%;
            font-size: 50%;
        }
        h1{
            background-color: greenyellow;
            width: 300px;
            /*Los pixeles son una unidad aobsoluta, que el valor
            asegura que va a tomar 300 px siempre*/
            width: 100%;
            /*El porcentaje es un valor retalivo al padre */
            font-size: 1.5em;
            /*el em es una unidad relativa para las fuentes*/
            font-size: 1.5rem;
            /*el rem es una unidad relativa a la raiz que es html
            las dos se usan en pantallas responsivas que uqeremos que el texto
            cambie */
        }
~~~
### Reto: Fundamentos
~~~html
<!DOCTYPE html>
<html lang="es">
  <head>
    <link rel="stylesheet" href="Reto_Fundamentos.css" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fundamentos</title>
  </head>
  <body>
    <header>
      <h1>Mi Página Atractiva</h1>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Acerca de</a>
        <a href="#">Servicios</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
    <main>
      <h2>Contenido principal</h2>
      <p>
        Bienvenido a mi página web atractiva y minimalista. Aqui encontrarás
        informacion interesante sobre diversos temas.
        <a href="#">¡Haz clic aqui!</a>
      </p>
      <p>Contenido 1</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a mattis
        risus, id elementum nulla. Phasellus posuere purus at elit interdum
        fringilla. Maecenas nec interdum odio, vitae feugiat ex. Mauris non odio
        luctus, varius nisi sed, fringilla tortor. Praesent ultrices ligula ut
        diam venenatis hendrerit. Aliquam id lorem nec nibh bibendum finibus.
        Integer a tortor ultricies, euismod nisi at, dictum ante. Donec a lacus
        euismod, condimentum magna id, finibus odio. Vivamus volutpat quis ante
        ut ullamcorper. Mauris ex ligula, condimentum ac aliquam non, sagittis
        ac nisl. In posuere nisi eu mi hendrerit euismod. Aliquam faucibus justo
        sed justo pulvinar consectetur. Suspendisse in tristique justo. Aenean
        tristique, eros vitae cursus vestibulum, nibh odio condimentum velit,
        quis porta nisi massa eget ex.
      </p>
    </main>
  </body>
</html>

~~~
~~~css
*{
    margin: 0px;
    padding: 0px;
}
header{
    background-color: #333333;
    height: 110px;
    color: white;
    text-align: center;
    padding-top: 40px;
}
header h1{
    font-size: 50px;
}
header a{
    color: white;
    text-decoration: none;
    margin-right: 20px;
    font-size: 20px;
}
nav{
    padding-top: 20px;
}
main{
    width: 80%;
    margin: 0px auto;
    margin-top: 20px;
    
}
p{
    margin-top: 20px;
    font-size: 20px;
}
a{
    color: #4B8AD4;
}
~~~

## Texto
### Fuentes
~~~css
p{
        /*si noi encuentro esta fuente biscare la que sigue
        y asi sucesivamente*/
        font-family: Arial, Helvetica, sans-serif;
        /*que tan gruesa es la letra*/
        font-weight: 700;
        /*y el style pues es el formato de la letra*/
        font-style: italic;
        /*Tmaño de la fuente*/
        font-size: 20px;

        
      }
      /*Mini reto*/
      p{
      font-family: TwitterChirp;
~~~

### Transformar
~~~html
<style>
  div{
    /*texto en mayusculas: uppercase*/
    /*texto en minusculas: lowercase*/
    /*primeras letras en mayusculas: capitalize*/
    text-transform: capitalize;
  }
</style>
<div>Texto en mayusculas</div>
~~~
### Espaciamiento
~~~html
<style>
  /*Esta liena hace que preserve lso espacios que le damos en 
  html a la clase que se lo apliquemos*/
  .preserve{
    white-space: pre;
    /*Este es que se vea normal comosiempre */
    white-space: normal;
    /*Hacer que el texto no se rompa uanque la pagina cambie de tamaño*/
    white-space: nowrap;
  }

  .romper{
    /*Esto hace que el navegador rompa la palabra y la acomode 
    aunque no tenga espacios*/
    word-wrap: break-word;
  }
</style>
<p class="preserve">
  Este texto no se rompe y tampoco hace saltos de linea
</p>
<p class="romper">
  Palabraslargasquetendriaquedividirenlineas,
</p>
~~~
### Envoltura
~~~html
<style>
  p{
    /*Esto hace que la pagina no haga pequeño el parrafo aunque 
    la ventana cambie de tamaño*/
    text-wrap: nowrap;
    /*white spaces se enfoca en los saltos de linea*/

    /*css hace que se balanceen las lineas, osease que si hay 2 lineas
    estas sean del mismo largo de letras*/
    text-wrap: balance;

    /*asegura que haya al menos dos palabras cuando se corte la 
    pagina*/
    text-wrap: pretty;
    
  }
</style>
<p>Domina la ingenieria de software en 6 
  mese y asegura tu empleo en tech. </p>
~~~
### Alineamiento
~~~html
<style>
  span{
    /*Espaciado entre las letras*/
    letter-spacing: 2px;
    /*espaciado entre palabras*/
    word-spacing: 10px;
  }
  .justificado-izquierda{
    /*justifica a la izquierda*/
    text-align: left;
    /*justifica a la derecha*/
    text-align: right;
    /*justifica al centro*/
    text-align: center;
    /*texto justificado*/
    text-align: justify;

  }
</style>
<span>Espaciado entre las letras aumentado</span>
<div class="justificado-izquierda">Texto justificado a la izquierda</div>
~~~
### Efectos
~~~html
<style>
  div{
    /*vertical horizontal borroso color*/
    text-shadow: 2px 3px 4px;
    /*texto subrayado*/
    text-decoration: line-through;
    /*texto con linea arriba*/
    text-decoration: overline;
  }
  a{
    text-decoration: none;
  }
</style>
<div>Texto con sombra.</div>
<a href="#">Enlace</a>
~~~
### Reto: Texto
~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="Reto_Texto.css">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Landing Page</title>
  </head>
  <body>
    <header>
      <h1>Bienvenido a Nuestra Landing Page</h1>
    </header>

    <main>
      <section id="productos">
        <h2>Descubre Nuestros Productos</h2>
        <p>
          Descubre nuestros productos de alta calidad que te ayudarán a alcanzar
          tus metas. Nuestra misión es proporcionarte soluciones excepcionales
          que marcan la diferencia.
        </p>
      </section>

      <section id="Comunidad">
        <h2>Únete a Nuestra Comunidad</h2>
        <p>
          Únete a una comunidad apasionada que comparte intereses. Encuentra 
          nuevas amistades, aprende cosas nuevas y comprate tus experiencias.
        </p>
      </section>

      <section id="Contacto">
        <h2>Contacto</h2>
        <p>
          ¿Tienes alguna pregunta? Np dudes en <a href="#">contactarnos</a>. Estamos aquí para ayudarte.
        </p>
      </section>
    </main>

    <footer>
      <p>&copy; 2023 Mi Landing Page Completa</p>
    </footer>
  </body>
</html>

~~~
~~~css
*{
  margin: 0px;
  padding: 0px;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
}
header{
  height: 130px;
  background-color: #8B1818;
  color: white;
  text-align: center;
  line-height: 130px;
}
h1{
  font-size: 50px;
}
main{
  margin-top: 50px;
}
section{
  margin: 0px auto;
  width: 90%;
}
p{
  margin-top: 30px;
  margin-bottom: 30px;
}
a{
  color: #0077CC;
}
footer{
  height: 50px;
  background-color: black;
  color: white;
  text-align: center;
  line-height: 50px;
  margin-top: 50px;
}
footer p{
  font-size: 20px;
  font-style: oblique;
}
~~~

## Modelo de caja
### Caja
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    body{
      /*el body por lo general ya trae ciertas cosas configuradas
      por ende podriamos borrarlas*/
      margin: 0;
    }
    /*el span no ocupa todo el espacio ya quw este se dedica
    a ser usado en linea por ende no llena toda la "caja"*/
    span{
      background-color: red;
    }
    div{
      background-color: red;
      /*margen interno*/
      padding: 10px;
      /*Bordes*/
      border: 10px solid blue;
      /*margenes, espacio más haya de la caja */
      margin: 20px;
      /*ancho*/
      width: 100px;
      /*alto*/
      height: 100px;
      /*content-box: la caja va a tener el tamaño del contenido
      border-box: considera al borde y al padding*/
      box-sizing: content-box;
    }

    /*mini reto*/
    div {
	width: 200px;
    height: 150px;
    border: 1px solid blue;
    margin: 20px;
    padding: 10px; 
    background-color: yellow;
}
  </style>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <div>BOX MODEL</di>
</body>
</html>
~~~
### Margen y relleno
~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      body {
        margin: 0;
      }
      div,
      span {
        background-color: red;
        /*el padding se aplica arriba, derecha, abajo, izquierda
      pero si solo pusieramos 3 seria arriba, derechaizquierda, abajo
      con dos valores es: arribaAbajo y IzquierdaDerecha
      y de uno es arribaAbajoIzqueirdaDerecha*/
        padding: 10px 20px 30px 40px;
        /*los span se comportan como en linea por ende no ocupal
      todo el espacio*/
        /*y el margin se comporta como el padding, pero de afuera*/
        margin: 10px;
        display: inline-table;
      }

      /*Mini reto*/
      .caja-azul {
        background-color: lightblue;
        width: 100px;
        height: 100px;
      }
      .caja-roja {
        background-color: lightcoral;
        width: 100px;
        height: 100px;
        margin-left: 16px;
        padding-top: 16px;
      }
    </style>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!--<div>BOX MODEL</div>-->
    <!--Al estar en linea se mantienen en linea al recortar la pagina
  y no ocupan todo el espacio como lo haria un div-->
    <span>SPAN MODEL</span>
    <span>SPAN MODEL</span>
    <span>SPAN MODEL</span>
    <span>SPAN MODEL</span>
  </body>
</html>

~~~
### Borde
~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      body {
        margin: 0;
      }
      span {
        display: inline-block;
        padding: 20px;
        /*tipo de borde, tamaño del borde y color*/
        border: groove 15px red;
        /*dotted: puntitos
        solid: solido
        double: borde doble
        ridge: borde en 3d
        groove: borde en 3d pero luz de otro lado
        inset
        outset
      */
      }

      /*mini reto*/
      div {
        border: 4px dashed blue;
      }
    </style>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <span>BOX MODEL</span>
  </body>
</html>

~~~
### Contorno
~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      body {
        margin: 0;
      }
      span {
        display: inline-block;
        padding: 20px;
        /*el otline es parecido al border, solo que este no genera una 
      parte de una caja que recorre el elemento para que se vea
      por lo general se utiliza para las personas que navegan con tabs
      y quieren ver donde se encuentra su cursor*/
        outline: solid 20px red;

        margin: 20px;
      }

      /*mini reto*/
      div {
        width: 100px;
        height: 100px;
        background-color: yellow;
        outline: 2px solid blue;
      }
    </style>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <span>BOX MODEL</span>
  </body>
</html>

~~~
### Reto: Modelo de Caja
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Landing Page de Productos de Comida</title>
</head>
<body>
  <header>
    <h1>Bienvenido a Nuestro Landing <br><span class="underline">Page de Comida</span></h1>
  </header>
  <div id="container">
    <div class="product">
      <img src="https://th.bing.com/th/id/OIP.HM-q3ReNk-W4xCy523GJfQHaE5?pid=ImgDet&rs=1" alt="">
      <h2>Producto 1</h2>
      <p>
        Descripción del producto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <a href="">Ver más</a>
    </div>

    <div class="product">
      <img src="https://th.bing.com/th/id/OIP.HM-q3ReNk-W4xCy523GJfQHaE5?pid=ImgDet&rs=1" alt="">
      <h2>Producto 2</h2>
      <p>
        Descripción del producto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <a href="">Ver más</a>
    </div>
  </div>
  <footer>
    &copy; 2023 Landing Page de Productos de Comida
  </footer>
</body>
</html>
~~~
~~~css
body{
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  background-color: #FF3300;
  padding: 0;
}
header{
  color: white;
  text-align: center;
  margin: 0px auto;
  padding: 20px 0;
}

h1{
  border-bottom: 4px solid white;
  padding-bottom: 5px;
  width: 30%;
  margin: auto;
}

#container{
  padding: 20px;
  width: 95%;
  margin: 0px auto;
  background-color: #FFFFFF;
  
}

.product{
  background-color: #F5F5F5;
  margin: 0px auto;
  border: 1px solid #D9D9D9;
  width: 90%;
  margin-bottom: 20px;
  padding: 20px;
}

h2{
  color: #FF6700;
}
a{
  text-decoration: none;
  color: #5098D6;
}
img{
  height: 150px;
  width: 270px;
}
footer{
  color: white;
  text-align: center;
  margin-top: 15px;
}
~~~

## Estilos
### Fondo
### Color
### Modelos
### Mezcla
### Colores relativos
### Reto: Estilos

## Disposicion
### Diseños
### Posiciones
### Flotados
### Caja flexible
### Cuadricula
### Reto: Disposición

## Diseño adaptable
### Consulta de medios
### Móvil primero
### Consultas de contenedores
### Reto: Diseño adaptable

## Selectores avanzados
### Pseudoclases
### Pseudoelementos
### Anidamientos
### Capas

## Dinamismo
### Transformaciones
### Transiciones
### Animaciones
### Reto: Dinamismo

## Complementos
### Prefijos y soporte
### Centrar

## Proyecto: Paleta
### Analisis de Diseño
### Implementación

## Productividad
### CSS con ChatGPT

## Proyecto: Portafolio
### Análisis de Diseño
### Implementacion de CSS: Secciones
### Implementacion de CSS: Header
### Implementacion de CSS: Barra de Navegacion
### Implementacion de CSS: Portafolio
### Implementacion de CSS: Habilidades
### Implementacion de CSS: Experiencia
### Implementacion de CSS: Formulario

## Siguientes pasos
### Recursos
### Evaluacion de CSS
### ¿Que viene despues?
### Preguntas de entrevista

----------------------
~~~css

~~~