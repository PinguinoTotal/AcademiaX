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
~~~

### Reto: Textos
~~~html

~~~

## Navegación
### Vinculos
### Rutas
### Navegar
### Barras
### Reto: Navegación

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



----------------------------
~~~html

~~~

