// valor inicial, valor de corte, aumento
for (let i = 0; i < 10; i +=2) {
  console.log(i);
}
let lista = ['gato', 'perro', 'elefante', 'dinosaurio', 'tortuga'];
for (let j = 0; j < lista.length; j++) {
  let animal  = lista[j];
  console.log(animal);
  if(animal==='dinosaurio'){
    break; //esto rompe el bucle;
    continue; //el continue hace que ya no se corra la parte
    //en cascada del codigo y continua iterando
  }
}

//mini reto
for (let i = 0; i < 30; i++) {
  console.log('<section></section>');
}