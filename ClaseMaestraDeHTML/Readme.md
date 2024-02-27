# Clase Maestra de HTML

## PrimerosPasos
### Partes
~~~html
<!--Poner comentarios-->
<!--las cosas que tiene html son etiquetas, texto y atributos-->
<p title="Nota">Hola mundo</p>
<!--el title le pone un texto cuando pasas sobre el elemento en la pagina-->

<!--entidades de caracteres-->
&copy; &cap;
<!--estos son simbolos (se pueden usar como texto)-->

<!--DocumentObjectModel(DOM)-->
<!--La pagina web tiene sta estructura, la estructura padre tiene muchos hijos y asi sucesibamente-->
<P>Parrafo
    <i>
        <b>B</b>
    </i>
    <i>
        <b>B</b>
    </i>
    <i>
        <b>B</b>
    </i>
</P>
~~~

### ¿Como evitar bloqueos? donde preguntar si tengo problemas
si tenemos preguntas priemro debemos acudir a **google** haciendole la pergunta lo más especifica posible tambien podemos cambair el orden de la pregunta de **Como hacer pedidos en javascript** a **pedidos http javascript**

**StackOverflow** las respuestas con más botos son las que son las correctas

**ChatGPT** (puede dar respuestas desactualziadas asi que tenemos que tener cuidado), como realizar pedidos en javascript

**y pues el curso tambien** pero no tenemos que valernos tanto de esto ya que lo mejor es investigar por cuenta propia ya que se sespera que puedas resolver las cosas por tu cuenta

## Texto
### Texto
~~~html
<!--Texto-->
<p>Simple párrafo</p>
<!--p de parrafo-->
<p>Esto <em>no</em> es un error</p>
<!--em para el texto en enfasis en cursiva-->
<p>Miré a las nubes y pensé <i>esto no puede ser real!</i></p>
<!--i letras cursivas-->
<p><b>Html</b> me llama la atención</p>
<!--b para llamar la atencion-->
<p>No te olvides de la importancia de <strong>HTML</strong></p>
<!--strong le da importancia al texto que escribimos-->
<small>&copy; 2021. Todos los derechos reservados</small>

<!--En linea y de bloque-->
<p>Simple <span>párrafo</span></p>

<p>Simple <p>Parrafo</p></p>
<!--a pesar de estar en la misma linea y ser lo "mismo" se crea un salto de linea-->

<!--HTML no detecta el si son mayusculas y minusculas-->

<!--las etiquetas de HTML tienen abreviadas algunas cosas(antiguas) pero las actuales no tanto-->

<p>Estas&nbsp;palabras&nbsp;no&nbsp;saltan&nbsp;aunque&nbsp;cambie&nbsp;de&nbsp;tamaño&nbsp;la&nbsp;pagina</p>

<!--esto hace que las lineas no salten o se reordenen anque cambie el tamaño de la pagina-->
<!--pero siguen siendo simples espacios-->
~~~

### Encabezados
~~~html
<!--!!Encabezados-->
<h1>Titulo</h1>
<h2>Subtitulo</h2>
<h3>Subtitulo</h3>
<h4>Subtitulo</h4>
<h5>Subtitulo</h5>
<h6>Subtitulo</h6>
<!--Los titulos no son para dar diferentes tipos de estilos
solo se usa para darles la "importancia"-->
~~~

### Listas
~~~html
<!--Listas desordenadas-->
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
<!--Listas ordenadas-->
<ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ol>
<!--Listas de definicion-->
<dl>
    <dt>HTML</dt>
    <dd>Es un lenguaje de demarcado de texto.</dd>
    <dd>Se utiliza para el desarrollo de páginas de Internet.</dd>
</dl>

<!--Minireto-->
<ul>
    <li>marco de plástico</li>
    <li>lente compuesta</li>
    <li>no polarizado</li>
</ul>
~~~

### Formatos
~~~html
<p>Utiliza este código en CSS:
    <!--con la etiqueta code indicamos que esto e sun codigo
    de lo que sea pero es un codigo-->
    <code>{background: blue;}</code>
</p>

<p>Utiliza este codigo en HTML:
    <!--<code><body></code>-->
    <!--Si ponemos esto html lo interpretara como una etiqueta
    y si queremos que lo interprete como texto tenemos que ponerle
    los <> pero por otros parametros como el:
    &lt; = <
    &gt; = >    
    -->
    <code>&lt;body&gt;</code>
    <!--<code><body></code>-->
</p>

<p>
    Quiero <br/> <!--salto de linea-->
    ver <br/>
    esto <br/>
    en 
    muchas 
    lineas
</p>

<!--Superíndice y subíndice-->
<p>CO <sub>2</sub></p>
<p>n <sup>2</sup></p>

<p>Referencia a un libro. <sup>1</sup></p>

<!--MiniReto-->
<code>git commit --amend</code>
~~~

### Citas
~~~html
<!--Citas-->
<!--Este hace un bloque de cita-->
<blockquote>
    <p>La mediocridad para algunos es normal, la locura es poder ver más allá</p>
    <cite>Charly Garcia</cite>
</blockquote>

<!--Este pone las comillas en la cira-->
<p>José Mujica dijo:
    <q>Ser libre es gastar la mayor cantidad de tiempo de nuestra vida en aquello que nos gusta hacer</q>
</p>

<!--mini reto-->
<blockquote>
  Primero, las máquinas harán muchos trabajos por nosotros y no serán súper
  inteligentes. Eso debería ser positivo si lo gestionamos bien. Unas décadas
  después de eso, la IA puede ser bastante fuerte como para ser una
  preocupación.<sup>[1]</sup>
</blockquote>

<p>
  1. "<cite
    >Bill Gates dice que deberías preocuparte por la inteligencia
    artificial</cite
  >". Forbes. Febrero de 2015.
</p>
~~~

### Tiempo
~~~html
<!--Fechas y Tiempo-->
<p>Nos vemos el
    <time datetime="2024-04-20">Sábado</time>
    a las
    <time datetime="16:20:00.5-08:00">4:20</time>
</p>

<!--El time no se ve en el navegador pero le damos informacopn
    extra a la pagina por si lo requiere procesar tras bambalinas-->
    
<p>Nos vemos a las
    <time datetime="2024-04-20 10:00-0800">10</time>

</p>

<!--mini reto-->
<time datetime='2022-01-01'>Hace 3 días</time>

~~~

### Reto: Textos
~~~html
<h1>Conoce Mi Ciudad Favorita</h1>
<p>Descubre por qué amos esta ciudad</p>
<h2>Descipción de la Ciudad</h2>
<p>
  Mi ciudad es un lugar maravilloso para visitar. Está ubicada en un hermoso
  valle rodedo de montañas y cuenta con un clima agradable durante todo el año.
</p>
<h2>Lugares de Interés</h2>

<ul>
  <li>
    <a href="#">El Parque Central</a> - Un lugar perfecto para alejarse y
    disfrutar de la naturaleza
  </li>
  <li>
    <a href="#">El muso de Arte</a> - Exhibe una impresionante colección de obras maestras.
  </li>
  <li>
    <a href="#">El muso de Arte</a> - Ideal para los amantes del sol y el mar.
  </li>
</ul>

<h2>Una Cita Inspiradora</h2>
<p>
  <q>La verdadera belleza de esta ciudad se encuentra en la amabilidad de su gente y en la diversidad de sus culturas</q> <br/>
</p>
<p>- Un residente Local</p>

<h2>El tiempo Hoy</h2>
<p>El clima en mi ciudad favorita es siempre agradable: <br/> </p>
<p><time datetime="25-09-2023">25 de septiembre de 2023</time> <br></p>
<p>!Espero que disfrutes explorando mi ciudad favorita tanto como yo!</p>

~~~

## Navegación
### Vinculos
~~~html
<!--Vinculos-->
<!--los vinculos nos llevan a otras paginas cuando les damos click-->
<a href="Blog.html">Ir a la página de Blog</a>

<!--mini reto-->
<a href="https://es.wikipedia.org/wiki/Algoritmo_de_Dijkstra">Algoritmo de Dijkstra - Wikipedia, la enciclopedia libre</a>
~~~
### Rutas
siempre usar las rutas relativas, porque esas no se rompen tan facilmente 
~~~html
<!--mini reto-->
<a href='https://en.wikipedia.org/wiki/Main_Page'>Haz clic aquí</a>
~~~
### Navegar
~~~html
<h1>Hola soy un blog</h1>
<!--asi se sale de la carpeta en la que estamos y vamos a otra-->
<a href="../2_Textos/Texto.html"></a>

<!--con el atributo target decimos como queremos abrir la pagina
en estecaso queremos que abra en euna nueva pagina-->
<a href="../2_Textos/Texto.html" target="_blank"></a>

<!--mini reto-->
<!--Este es un tipo de enlace de ancla
este no nos lleva a un apagina, nos lleva a una parte de la pagina 
en la cual ya estamos-->
<a href="#contacto">Ir a contacto</a>

~~~
### Barras
~~~html
<!--Barra de Navegacion-->
<!--El role es el rol que le daremos a la barra-->
<!--el aria label es el nombre de la barra-->
<nav role="navegation" aria-label="menú principal">
    <a href="/">Hogar</a>
    <a href="/blog.html">Blog</a>
    <a href="/sections/about.html">Acerca De</a>
</nav>

<!--Pie de pagina-->
<footer>
    <a href="/">Hogar</a>
    <a href="/blog.html">Blog</a>
    <a href="/sections/about.html">Acerca De</a>
</footer>

<!--Mini reto-->
<nav>
    <a href='/store'>Store</a>
    <a href='/mac'>Mac</a>
    <a href='/ipad'>iPad</a>
</nav>
~~~
### Reto: Navegación
~~~html
<h1>Mis libros Favoritos</h1>
<nav>
    <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="libro1.html">Libro1</a></li>
        <li><a href="libro2.html">Libro2</a></li>
        <li><a href="libro3.html">Libro3</a></li>
    </ul>
</nav>

<h2>Bienvenido a Mi Sitio</h2>

<p>¡Explora mis libros favoritos haciendo clic en los enlaces de arriba!</p>
~~~
~~~html
<h1>Libro 1 - Título del libro</h1>
<nav>
    <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="libro1.html">Libro1</a></li>
        <li><a href="libro2.html">Libro2</a></li>
        <li><a href="libro3.html">Libro3</a></li>
    </ul>
</nav>

<h2>Descripción del Libro 1</h2>

<p>Aquí puedes encontrar información sobre el primer libro de mi lista de favoritos.</p>
~~~
~~~html
<h1>Libro 2 - Título del libro</h1>
<nav>
    <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="libro1.html">Libro1</a></li>
        <li><a href="libro2.html">Libro2</a></li>
        <li><a href="libro3.html">Libro3</a></li>
    </ul>
</nav>

<h2>Descripción del Libro 2</h2>

<p>Aquí puedes encontrar información sobre el segundo libro de mi lista de favoritos.</p>
~~~
~~~html
<h1>Libro 3 - Título del libro</h1>
<nav>
    <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="libro1.html">Libro1</a></li>
        <li><a href="libro2.html">Libro2</a></li>
        <li><a href="libro3.html">Libro3</a></li>
    </ul>
</nav>

<h2>Descripción del Libro 3</h2>

<p>Aquí puedes encontrar información sobre el tercer libro de mi lista de favoritos.</p>
~~~

## Imágenes
### Imagenes
~~~html
<!--Imagenes-->
<body>
    <!--El alt es un texto que se mostrara si no aparece la imagen
    o servira para los que no pueden ver-->

    <!--los img tienen más detalles pero tardan en cargar-->
    <img src="assets/arches.jpeg" alt="Arches" height="100px">

    <!--los svg son como imagenes con vectores-->
    <img src="assets/html.svg" alt="HTML" height="100">

    <!--Los gifts pues son gifts-->
    <img src="assets/pi.gif" alt="PI" height="100">
    
</body>

<!--mini reto-->
<img src="/iceland.jpg" alt="Foto de Islandia">
~~~

### Resolución
~~~html
<!--Imagenes-->
<body>
    <!--con srcset optimiza las imagenes dependiendo de la resolucion de pantalla-->
    <img src="assets/arches-300.jpg" alt="Arches" height="100px" srcset="assets/arches-600.jpg 2x, assets/arches-1200.jpg 4x">
    
    <!--mini reto-->
    <!--al parecer tambien puede variar el ancho de las imagenes especificando el ancho que les podemos dar-->
    <img src='imagen1.jpg' srcset='imagen1-500w.jpg 500w, imagen1-1000w.jpg 1000w'>
</body>
~~~

### Figura
~~~html
<!--Ayuda a la semántica para los buscadores1-->
<figure>
  <img src="assets/html.svg" alt="HTML5" width="100" height="100" />
  <!--Esta etiqueta le pon eun subtitulo a la imagen
    ayuda a la semantica de los buscadores, es más facil que esta imagen 
    sea encontrada-->
  <figcaption>Este es el logo de HTML5</figcaption>
</figure>
<br />

<!--mini reto-->
<figure>
  <img
    src="https://cdn.britannica.com/22/221822-050-3B0A657F/British-scientist-Tim-Berners-Lee.jpg"
    alt="Tim Berners-Lee Photo"
  />
  <figcaption>Tim Berners-Lee in April 2009</figcaption>
</figure>
~~~

### Foto
~~~html
<!--Optimizado para longitud y tamaño de pantalla-->
<picture>
  <!--aqui decimos que cuando la pantalla sea de minimo 1200px muestre la fotode 1200-->
  <source media="(min-width:1200px)" srcset="assets/arches-1200.jpg" />
  <!--aqui decimos que cuando la pantalla sea de minimo 600px muestre la fotode 600-->
  <source media="(min-width:600px)" srcset="assets/arches-600.jpg" />
  <!--aqui son todos los anchos que tenemos antes del 600px-->
  <img src="assets/html.svg" alt="HTML5" width="600" />
  <!--esto por lo general esta echo en css con los mediacueris
  pero tambien se puede hacer en html-->
</picture>

<!--mini reto-->
<picture>
  <source srcset='imagen1-500w.jpg' media='(max-width:500px)'  />
  <source srcset='imagen1-1000w.jpg' media='(max-width:1000px)'  />
  <img src='imagen1-800w.jpg'/>
</picture>
~~~

### Reto: Imágenes
**galeria.html**
~~~html
<h1>Mi galeria</h1>
<ul>
    <li><a href="ardilla.html"><img src="img/ardilla.jpg" alt="imagen de ardilla" width="100"></a></li>
    <li><a href="obeja.html"><img src="img/obeja.jpg" alt="imagen de obeja" width="100"></a></li>
    <li><a href="tucan.html"><img src="img/tucan.jpg" alt="imagen de tucan" width="100"></a></li>
</ul>
~~~
**ardilla.html**
~~~html
<h1>Imagen1</h1>
<img src="img/ardilla.jpg" alt="imagen de ardilla" width="1000">
<br/>
<a href="galeria.html">regresar</a>
~~~
**obeja.html**
~~~html
<h1>Imagen2</h1>
<img src="img/obeja.jpg" alt="imagen de obeja" width="1000">
</br>
<a href="galeria.html">regresar</a>
~~~
**tucan.html**
~~~html
<h1>Imagen 3</h1>
<img src="img/tucan.jpg" alt="imagen de tucan" width="1000">
<br/>
<a href="galeria.html">regresar</a>
~~~

## Multimedia
### Audio
~~~html
<!--esto es un audio
cotrols = "habilitar controles de la pista"
loop = "Que se reproduzca en loop"
autoplay = "que empezando la pagina se ponga play"-->
<audio controls src="audio.mp3" loop autoplay></audio>

<!--otra manera de poner un audio-->
<audio controls loop autoplay>
    <!--Esta manera le da alternativas al buscador para que si no corre 
    alguna de las opciones pueda correr otro tipo de archivo de audio
    y si no es ocmpatible ocn nin guna pues muestre un mensaje-->
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg; codec=opus">
    Lo sentimos. Tu navegador no soporta este formato.
</audio>

<!--mini reto-->
<audio controls>
    <source src='/machina.mp3' type='audio/mpeg'>
</audio>
~~~
### Video
~~~html
<!--El elemento video es muy similar al audio
compartiendo asi varios de sus atributos-->
<video width="320" height="240" controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.ogg" type="video/ogg">
    Tu navegador no soporta videos.
</video>

<!--mini reto-->
<video>
    <source src='/df78dfj4350.mp4' type='video/mp4'>
</video>
~~~
### Marco
~~~html
<!--esta etiqueta permite poner contenido de otros sitios web 
en tu pagina-->
<!--cuando a un elemento le das compartir este ya te lanza el 
copiar y pegar de este codigo para incorporarlo a la pagina-->
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/5893ns8UnOE?si=hCh-GgjsGwW0Ad8o"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>

<!--mini reto-->

<iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ' width='560' height='315' ></iframe>

~~~
### Reto:Multimedia
siempre es mejor poner los resourses por si no se pueden cargar de manera correcta tener un respaldo de que muestre un texto de que no pudieron ser cargados
~~~html
<body>
  <h1>Multimedia en HTML</h1>

  <h2>Audio</h2>
  <audio controls>
    <source src="audio.mp3" type="audio/mp3">
    Tu navegador no soporta audios
  </audio>

  <h2>Video</h2>
  <video width="400">
    <source src="video.mp4" type="video/mp4">
  </video>
  
  <h2>Inframe</h2>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/4moCNEl6ljs?si=ZBCXflLVNsE_682U"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</body>
~~~

## Contenido
### Contenedores
### Atributos Globales
### Accesibildiad
### Lenguaje
### Reto: Contenido

## Estructura
### Documento
### Cabeza
### Cuerpo
### Tabla
### Reto: Estructura

## Formularios
### Entrada
### Área de texto
### Campos
### Formularios
### Reto: Formularios

## Complementos
### Depuracion

## Proyecto: Portafolio
### Portafolio: Analisis de Diseño
### Portafolio: Iplementacion de HTML

## Productividad
### HTML con ChatGPT
### HTML con VSCode
### Sintaxis de Emmet
### Abreviaciones de Emmet

## Protecto: Calculadora
### Calculadora: Analisis de diseño
### Calculadora: Implementacion de HTML

## Siguientes pasos
### Recursos
### Evaluacion de HTML
### ¿Que viene despúes?
### Preguntas de entrevista

## Opiniones 
me gustaria que despues del video te lleve a la seccion de reto, porque la primera seccion no lo sabia y me brinque los retos 

----------------------------
~~~html

~~~

