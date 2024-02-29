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
### Transformar
### Espaciamiento
### Envoltura
### Alineamiento
### Efectos
### Reto: Texto

## Modelo de caja
### Caja
### Margen y relleno
### Borde
### Contorno
### Reto: Modelo de Caja

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