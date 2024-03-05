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
~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      body {
        margin: 0;
        /*background-color: red;*/
        /*los colores pueden ser expresados en html o en 
      rgb*/
        /*rojo verde azul*/
        /*background-color: rgb(red, green, blue);*/
        /*gradiente lineal*/
        background: linear-gradient(blue, red);
        /*con esto se hacen muchas lineas con el gradiente*/
        /*hacer que el gradiente no se repita por toda la 
      pagina*/
        background-repeat: no-repeat;
        /*apra usar imagenes como backgroubds se le da un url 
      con la direccion de la imagen*/
        background-image: url(https://www.xaviro.com/assets/2c07c8f61822f4d3a53b.svg);
      }

      /*mini reto*/
      div {
        width: 100%;
        height: 200px;
        background: linear-gradient(to bottom, #000, #fff);
      }
    </style>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>BackGround</div>
  </body>
</html>

~~~
### Color
~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      h1 {
        color: red;
        /*color rojo pero con el sistema hexadecimal
      el hexadecimal los priemros valores son para el rojo
      luego el verde y al final el azul*/
        color: #ff0000;
        color: #03fa45;
        background-color: green;
        /*y tambien se puede usar el rgb como siempre con un 
      valor maximo de 255*/
        border: solid 10px blue;
        /*nivel de trabsparencia de 0 a 1*/
        opacity: 1;
      }

      /*mini reto*/
      body {
        background-color: rgba(255, 0, 0, 0.5);
        color: #1a1a2e;
      }
    </style>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>color</h1>
  </body>
</html>

~~~
### Modelos
~~~html
<style>
  div{
    background-color: #f00;
    /*rgba nos da un valor de transparencia*/
    background-color: rgba(2500, 0, 0, 0.5);
    /*hcl Hue Saturacion Light*/
    background-color: hsl(0%, 100%, 0%);
    /*lab este nos sirve para darle precision a los colores*/
    /*porcentaje de luminosidad, todos los valores entre el verde y el rojo
    colores entre el azul y el amarillo*/
    background-color: lab(50% -125 125);
    /*LCH Lightness Chroma Hue
    porcentaje de luminocidad,croma y hue*/
    background-color: lch(40% 100 0);
  }
</style>
<div>COLOR</div>
~~~
### Mezcla
~~~html
<style>
  div{
    background-color: color-mix(in srgb, red 50%, blue 50%);
  }
</style>
<div>Mezcla</div>
~~~
### Colores relativos
~~~html
<style>
  :root{
    --principal: blue
  }
  div{
    background-color: var(--principal);
  }
</style>
<div>Colores Relativos</div>
~~~
### Reto: Estilos
~~~html
<!DOCTYPE html>
<html lang="es">
  <head>
    <style>
      * {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        color: #333;
      }
      header {
        background-image: url("https://btlive.tv/wp-content/uploads/2020/11/171115171-1140x474.jpg");
        height: 80px;
        /*centrar imagen*/
        background-position: center;
        background-repeat: no-repeat;
        /*cubre todo el espacio que tiene con la imagen */
        background-size: cover;
        color: white;
        text-align: center;
        padding: 50px;
      }
      body{
        background: linear-gradient(to bottom, #2980b9, #6dd5fa);
      }
      main {
        padding-top: 67px;
        padding-bottom: 50px;
      }
      #container{
        width: 80%;
        margin: 0px auto;
        text-align: center;
        
      }
      img{
        height: 200px;
        margin-bottom: 20px;
      }
      p{
        margin-top: 30px;
        margin-bottom: 30px;
      }
      a{
        margin-top: 20px;
        color: white;
        text-decoration: none;
      }
      footer{
        height: 60px;
        background-color: #203F4A;
        color: white;
        text-align: center;
        line-height: 60px;
      }
    </style>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Deportes</title>
  </head>
  <body>
    <header>
      <h1>Landing Page de Deportes</h1>
      <p>¡Encuentra todo lo que necesitas para mantenerte activo!</p>
    </header>
    <main>
      <div id="container">
        <img
          src="https://th.bing.com/th/id/OIP.KsBDSX5McKjZJpADdH9vLgHaEz?pid=ImgDet&rs=1"
          alt="imagen de niños jugando"
        />
        <h2>Deporte 1</h2>
        <p>
          Descripción del deporte. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <a href="#">Ver más</a>
      </div>
    </main>

    <footer>&copy; 2023 Landing Page de Deportes</footer>
  </body>
</html>

~~~

## Disposicion
### Diseños
si se van a utilizar layauts lo mejor es utilizar css grids y flexboxs
~~~css
/*mini reto*/
.contenedor {
	display: flex;
}

.izquierda {
	width: 30%;
}

.derecha {
	width: 70%;
}
~~~
### Posiciones
~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      div {
        /*cuando se ponene elementos de tipo bloque
      en el html se alinean uno sobre otro*/
        /*los elementos en linea no tienen ningun tipo
      de altura o ancho*/
        /*los inline-block haven que los elementos se 
      comporten como bloques pero a la vez se alinen
      uno de tras de otro*/
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: red;
      }

      #primero {
        /*esto hace que los elementos se comporten de manera
      por de fault*/
        position: static;
        /*la posicion relativa nos dice que seguira el flujo de
      la pagina, como normalmente pero tendra ciertos offsets
      que no se le van a quitar*/
        position: relative;
        /*como que sigue utilizando el mismo espacio inicial
      del documento pero con offsets*/
        /*10 pixeles relativo a la parte superior*/
        top: 10px;
        left: 50px;
        position: absolute;
        /*en la posicion absoluta hacemos que no importa lo que
      pase con la paguina solo el bloque estara sobre todo*/
        /*la nueva posicion que se le da no es relativa al 
      elemento si no que es relativa al documento en el que
      se encuentra*/
        /*esta es la capa en la cual se va a renderizar lo que 
      le digaos*/
        z-index: 2;
        position: fixed;
        /*esto esta ubicado relativo al navegador, si bajamos
      en el navegador haremos que la caja nos siga por toda
      la pantalla*/
      }

      /*mini reto*/
      nav {
        position: fixed;
        top: 0;
      }
    </style>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Posiciones</title>
  </head>
  <body>
    <div id="primero" style="background-color: rgb(88, 228, 209)"></div>
    <div style="background-color: rgb(187, 255, 0)"></div>
    <div style="background-color: rgb(0, 132, 255)"></div>
    <div style="background-color: rgb(119, 0, 255)"></div>
    <div style="background-color: rgb(225, 0, 64)"></div>
  </body>
</html>

~~~
### Flotados
~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      div {
        display: inline-block;
        width: 80px;
        height: 80px;
      }

      #primero {
        /*los flotados nos dicen que los elementos flotaran
        y los demas elementos lo rodearan*/
        float: left;
      }

      #segundo {
        /*en esto el texto emvuelve a las cajas que ya estaban 
        flotadas*/
        float: right;
      }
      p {
        text-align: justify;
        /*clear both nos dice que ignore a los elementos flotados
        que los anteceden */
        clear: both;
      }

      /*mini reto*/
      div {
        height: 100px;
      }

      div.columna-izquierda {
        width: 200px;
        float: left;
        background-color: #ccc;
        margin-right: 20px;
      }

      div.columna-derecha {
        /*esto hace que abarque todo lo que sobra de la 
        pantalla si tiene elementos flotados en la misma
        linea*/
        overflow: hidden;
        background-color: #eee;
      }
    </style>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flotados</title>
  </head>
  <body>
    <div id="primero" style="background-color: rgb(88, 228, 209)"></div>
    <div id="segundo" style="background-color: rgb(187, 255, 0)"></div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper
      dolor non libero luctus pellentesque. Vestibulum tincidunt enim sem, quis
      accumsan tellus efficitur a. In vitae augue eget justo eleifend vehicula.
      Suspendisse a efficitur nulla, nec blandit libero. In ac laoreet elit.
      Etiam gravida nunc vel metus varius, eget molestie est mollis. Phasellus
      rhoncus elit rhoncus, consequat erat eu, vehicula dolor. Etiam suscipit
      dui leo, sit amet molestie sapien tincidunt sit amet. Nulla ullamcorper
      pharetra metus et imperdiet. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Donec vitae auctor enim. Phasellus scelerisque lorem
      tellus, nec congue ex bibendum eu. Mauris fringilla nisi in elementum
      rutrum. Mauris vel dui ut odio gravida rutrum vel et nisl. Nulla dapibus
      elit sed nunc dictum, fringilla rutrum orci auctor. Phasellus dolor eros,
      bibendum ac rutrum vitae, eleifend quis felis. Phasellus lacinia tempor
      nisl imperdiet aliquam. Phasellus venenatis, eros in commodo dignissim,
      sem nisi efficitur odio, at pretium dolor mauris quis nulla. Sed lobortis
      elementum placerat. Phasellus vehicula eleifend ex, et aliquet tellus
      elementum dignissim. Phasellus vel nisi elit. Vestibulum est tellus,
      dapibus sed mi nec, laoreet eleifend ipsum. Phasellus maximus porttitor
      tempus. Maecenas scelerisque eleifend laoreet. Duis vitae tellus bibendum,
      iaculis enim molestie, malesuada eros. Vestibulum mattis, sapien a pretium
      accumsan, sem nisl interdum est, non lacinia dui felis sed nisl.
      Pellentesque maximus sit amet lorem vel viverra. Nam ac efficitur dui. Ut
      semper turpis at hendrerit dapibus. Curabitur ut quam libero. Nam interdum
      nisl ut vehicula tincidunt. Vestibulum ante ipsum primis in faucibus orci
      luctus et ultrices posuere cubilia curae; Etiam sodales nunc et tortor
      cursus, convallis tempus urna dapibus. Donec massa orci, feugiat vel
      turpis porta, commodo commodo enim. In dictum ipsum nisi, in pretium purus
      fermentum vitae. Mauris gravida nibh in blandit vestibulum. Aenean posuere
      gravida elit ac maximus. Phasellus posuere felis mauris, et egestas velit
      dictum eget. Ut scelerisque, urna ac elementum scelerisque, est nulla
      aliquam velit, in ultricies tortor lorem id tellus. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut
      fermentum ex sit amet rhoncus ultricies. Ut dapibus, leo condimentum
      fermentum varius, odio libero faucibus erat, at vestibulum ligula justo ut
      turpis. Maecenas euismod mauris at nisi varius commodo. In scelerisque
      magna egestas urna ornare dignissim. Etiam nunc velit, scelerisque et est
      at, mattis porta urna. In aliquam nunc vitae felis consectetur efficitur.
      Aliquam erat volutpat. Donec semper congue libero, vulputate ornare
      tortor. Vestibulum congue eros non felis tristique, eget euismod augue
      dictum. Vestibulum aliquam, ligula quis dapibus accumsan, lectus turpis
      facilisis leo, vitae iaculis tellus risus ut ligula. Proin nec sagittis
      tortor. Pellentesque habitant morbi tristique senectus et netus et
      malesuada fames ac turpis egestas.
    </p>
  </body>
</html>

~~~
### Caja flexible
~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      .contenedor {
        /*esto comvierte al contenedor en eun elemento flex*/
        /*esto es parecido a inline block*/
        display: flex;
        height: 80px;
        background-color: rgb(187, 255, 0);
        /*obliga a los elementos a ponerse como si fuera una
      columna pero dentro de la caja container*/
        flex-direction: column;
        /*los pone como una fila*/
        flex-direction: row;
        /*poner espacios entre los elementos*/
        justify-content: space-between;
        /*los pone a un espacio antes y despues*/
        justify-content: space-around;
        /*le spone el mismo espacio a todos*/
        justify-content: space-evenly;
        /*pone los elementos en el inicio de la parte de 
      arriba*/
        align-items: flex-start;
        /*pone los elementos en el fin de la parte de abajo*/
        align-items: flex-end;
        /*poner en el centro los elemtos*/
        align-items: center;
        /*esto hace que is hay muchos elementos los nuevo
      que van llegando se pasen a la siguiente linea, si no
      los elementos se mantienen flexibles y se van puchurrando
      hasta que caben*/
        flex-wrap: wrap;
      }
      .contenedor div {
        width: 80px;
        height: 40px;
      }

      /*mini reto*/
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: lightgray;
        width: 100%;
        height: 200px;
      }

      div > div {
        background-color: gray;
        height: 100px;
      }

      div > div:first-child {
        background-color: red;
        /*con flex basis le damos el tamaño que queremos que tenga
        relativo a la pantalla haciendo asi que esta caja siempre
        ocupe el 20% de la seccion que la contiene */
        flex-basis: 20%;
      }

      div > div:nth-child(2) {
        background-color: green;
        flex-basis: 60%;
      }

      div > div:last-child {
        background-color: blue;
        flex-basis: 20%;
      }
    </style>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="contenedor">
      <div style="background-color: rgb(119, 0, 255)"></div>
      <div style="background-color: rgb(255, 0, 64)"></div>
      <div style="background-color: rgb(0, 132, 255)"></div>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <div style="background-color: rgb(255, 0, 64)"></div>
    </div>
  </body>
</html>

~~~
### Cuadricula
~~~html
<!DOCTYPE html>
<html>
  <head>
    <style>
      /*flexbox esta echo para cajas que solo tengan una 
    direccion mientras que grid es para 2 direcciones*/
      html {
        /*ponemos que queremos que sea el 100% de la pagina*/
        height: 100%;
        margin: 0;
        padding: 0;
      }

      body {
        min-height: 100%;
        display: grid;
        /*primero se pone el ancho de las columnas
        auto hace que ocupe todo lo que no se ha ocupado*/
        grid-template-columns: 100px auto;
        /*ponemos que queremos que haya 3 columnas*/
        grid-template-rows: 40px auto 100px;
        gap: 10px; /*espacio entre filas y columnas*/
      }

      nav,
      aside,
      main,
      footer {
        border-radius: 5px;
        /*a todos los elementos que van dentro de la 
      cuadricula se le da el atributo flex, para que sean 
      flexibles*/
        display: flex;
        /*con align items center hacemos que las cosas 
      que tienen dentro las cajas flex vayan hacia 
      el centro*/
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      nav {
        background: lightsalmon;
        /*espacio entre los elementos*/
        justify-content: space-around;
        /*en donde empieza la fila*/
        grid-row-start: 1;
        /*en donde termina la fila*/
        grid-row-end: 2;
        /*empieza en la columna 1*/
        grid-column-start: 1;
        /*termina en la columna 3*/
        grid-column-end: 3;
      }

      aside {
        background: violet;
        grid-row-start: 2;
        grid-row-end: 3;
      }

      main {
        background: greenyellow;
        grid-row-start: 2;
        grid-row-end: 3;
      }

      footer {
        background: lightseagreen;
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 3;
      }

      /*mini reto*/
      div {
        display: grid;
        grid-template-columns: 300px 300px;
        grid-template-rows: 50px 50px 50px 50px;
        gap: 1rem;
      }
    </style>
  </head>

  <body>
    <nav>
      <a href="/home">Hogar</a>
      <a href="/more">Aprende</a>
      <a href="/about">Acerca De</a>
    </nav>
    <aside>Contenido Lateral</aside>
    <main>Contenido Principal</main>
    <footer>&copy; Xavier Reyes Ochoa 2025</footer>
  </body>
</html>

~~~
### Reto: Disposición
~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      * {
        padding: 0;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
      }

      body{
        background-color: #FFFFFF;
      }
      header{
        position: fixed;
        background-color: #FBFF1F;
        width: 100%;
        height: 80px;
        text-align: center;
      }
      nav{
        line-height: 80px;
      }
      nav a{
        text-decoration: none;
        color: red;
        padding: 10px 20px;
        font-size: 15px;
        font-weight: bold;
      }
      #container{
        padding-top: 130px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      .card{
        border: 1px solid #DDDDDD;
        background-color: #FFFFFF;
        padding: 15px;
        width: 200px;
        margin: 10px;
      }
      .card a{
        color: #2266CC;
        padding-top: 20px;
      }
      img{
        width: 100%;
        margin-bottom: 10px;
      }

    </style>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Comida rapida</title>
  </head>
  <body>
    <header>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Servicios</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
    <div id="container">

      <div class="card">
        <img src="https://th.bing.com/th/id/R.397d033dfab8d6a17d58dd509f0ab463?rik=6Cmqa4gfHF%2bVug&pid=ImgRaw&r=0" alt="imagen de comida">
        <h3>Tarjeta 1</h3>
        <p>Descripción de la tarjeta 1</p>
        <a href="#">Ver más</a>
      </div>
      
      <div class="card">
        <img src="https://th.bing.com/th/id/OIP.-W7cRhSiDk_gfo-uqvglAgHaE7?pid=ImgDet&rs=1" alt="imagen de comida">
        <h3>Tarjeta 2</h3>
        <p>Descripción de la tarjeta 2</p>
        <a href="#">Ver más</a>
      </div>

      <div class="card">
        <img src="https://th.bing.com/th/id/R.b2d883bbff785661dd0b469249f029a3?rik=HJ9TIZsanbuvUg&pid=ImgRaw&r=0" alt="imagen de comida">
        <h3>Tarjeta 3</h3>
        <p>Descripción de la tarjeta 3</p>
        <a href="#">Ver más</a>
      </div>

      <div class="card">
        <img src="https://th.bing.com/th/id/OIP.7_p-KUoioBOBr2PN_TYbLgHaEo?pid=ImgDet&rs=1" alt="imagen de comida">
        <h3>Tarjeta 4</h3>
        <p>Descripción de la tarjeta 4</p>
        <a href="#">Ver más</a>
      </div>

      <div class="card">
        <img src="https://th.bing.com/th/id/R.397d033dfab8d6a17d58dd509f0ab463?rik=6Cmqa4gfHF%2bVug&pid=ImgRaw&r=0" alt="imagen de comida">
        <h3>Tarjeta 1</h>
        <p>Descripción de la tarjeta 1</p>
        <a href="#">Ver más</a>
      </div>
      
      <div class="card">
        <img src="https://th.bing.com/th/id/OIP.-W7cRhSiDk_gfo-uqvglAgHaE7?pid=ImgDet&rs=1" alt="imagen de comida">
        <h3>Tarjeta 2</h3>
        <p>Descripción de la tarjeta 2</p>
        <a href="#">Ver más</a>
      </div>

      <div class="card">
        <img src="https://th.bing.com/th/id/R.b2d883bbff785661dd0b469249f029a3?rik=HJ9TIZsanbuvUg&pid=ImgRaw&r=0" alt="imagen de comida">
        <h3>Tarjeta 3</h3>
        <p>Descripción de la tarjeta 3</p>
        <a href="#">Ver más</a>
      </div>

      <div class="card">
        <img src="https://th.bing.com/th/id/OIP.7_p-KUoioBOBr2PN_TYbLgHaEo?pid=ImgDet&rs=1" alt="imagen de comida">
        <h3>Tarjeta 4</h3>
        <p>Descripción de la tarjeta 4</p>
        <a href="#">Ver más</a>
      </div>

      <div class="card">
        <img src="https://th.bing.com/th/id/R.397d033dfab8d6a17d58dd509f0ab463?rik=6Cmqa4gfHF%2bVug&pid=ImgRaw&r=0" alt="imagen de comida">
        <h3>Tarjeta 1</h>
        <p>Descripción de la tarjeta 1</p>
        <a href="#">Ver más</a>
      </div>
      
      <div class="card">
        <img src="https://th.bing.com/th/id/OIP.-W7cRhSiDk_gfo-uqvglAgHaE7?pid=ImgDet&rs=1" alt="imagen de comida">
        <h3>Tarjeta 2</h3>
        <p>Descripción de la tarjeta 2</p>
        <a href="#">Ver más</a>
      </div>

      <div class="card">
        <img src="https://th.bing.com/th/id/R.b2d883bbff785661dd0b469249f029a3?rik=HJ9TIZsanbuvUg&pid=ImgRaw&r=0" alt="imagen de comida">
        <h3>Tarjeta 3</h3>
        <p>Descripción de la tarjeta 3</p>
        <a href="#">Ver más</a>
      </div>

      <div class="card">
        <img src="https://th.bing.com/th/id/OIP.7_p-KUoioBOBr2PN_TYbLgHaEo?pid=ImgDet&rs=1" alt="imagen de comida">
        <h3>Tarjeta 4</h3>
        <p>Descripción de la tarjeta 4</p>
        <a href="#">Ver más</a>
      </div>
      
    </div>
  </body>
</html>

~~~

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