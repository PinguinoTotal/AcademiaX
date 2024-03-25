//los nombres de las variables dentro del objeto se
//se pueden poner de esas 2 maneras
let objeto = {numero: 1,
              texto: 'texto',
              'lista': [],
              boolean: true,
              objeto: {
                objeto2: 'Hola'
              }
  }

//acceder a estas propiedades del objeto
//console.log(objeto.objeto.objeto2);

//asi se borran las propiedades de los objetos
delete objeto.objeto; 

let usuario = {
  nombre: 'xavier',
  apellidos: 'reyes ochoa',
  alias: 'Programador X'
};

let numero1 = 1;
let numero2 = numero1;
numero2 = 3;

console.log(numero1, numero2);
/*
aunque se crea una nueva variable y a esta se le cambia 
el valor, realmente se le cambia el valor a toda la memoria
asi que la variable 1 sera afectada
*/
let usuario2 = usuario;
//asi se crea un nuevo objeto con los valores 
//de usuario y al modificarse no se modificara 
//el usuario1
let usuario3 = JSON.parse(JSON.stringify(usuario));
usuario2.alias = "Programador Z";
console.log(usuario);

//mini reto
const persona = {
  nombre: 'tu_nombre',
  edad: 21
};