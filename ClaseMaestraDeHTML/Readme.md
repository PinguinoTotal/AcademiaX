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

~~~

## Imágenes
### Imagenes
### Resolución
### Figura
### Foto
### Reto: Imágenes

## Multimedia
### Audio
### Video
### Marco
### Reto:Multimedia

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

