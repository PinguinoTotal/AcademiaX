//los bucles for in son para los objetos y los 
//forof para las listas

let traductor = {
  bucle: 'loop',
  lista: 'array',
  declaracion: 'declaration',
  objeto: 'object'
};

for (const etiqueta in traductor) {
  console.log(etiqueta +' en ingles es: '+ traductor[etiqueta]);
}

//minin reto
const persona = {nombre: 'Juan', edad: 25, ciudad: 'Madrid'};
for (let prop in persona){
    console.log(prop, persona[prop]);    
}