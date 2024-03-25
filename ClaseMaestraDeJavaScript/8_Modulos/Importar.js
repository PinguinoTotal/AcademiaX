//asi se importan las funciones de otros scripts 
import { sumar, PI, Servicio } from "./Exportar.js";
let resultado = sumar(1,2);
console.log(resultado);
console.log(PI);
//creando el servicio que ya teniamos
const servicio = new Servicio();
console.log(servicio.restarTres(4));

//aqui exportamos lo que tiene el default de mi archivo
//export
import cualquierNombre from './Exportar.js';
console.log(new cualquierNombre().restarTres(4));

//importando toda la libreria
import * as todo from './Exportar.js';
console.log(todo.sumar(4,5));
console.log(todo.Servicio);

//lo mejor seria tener codigos pequeños
//como de 400 lineas de codigo para que sea comprensible el codigo
//en lugar de tener archivos gigantes de miles de lineas de codigo

//mini reto
import {conectar} from './bluetooth.js';

const url = 'https://academia.x/bt/server';
conectar(url);