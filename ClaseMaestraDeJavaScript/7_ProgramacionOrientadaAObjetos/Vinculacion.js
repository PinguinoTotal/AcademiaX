//vincular los metodos nos sirve para no repetir los metodos
//en los diferentes objetos, solo los vinculas
function info(a) {
  console.log(this, a);
}

let auto = {
  modelo: "Modelo 3",
  año: 2021,
  marca: "Tesla",
  //vinculacion implicita
  //que se vinculan de manera natural
  info: info,
};

//vinculacion explicita, vincular funciones con un objeto
//bind, tall, apply

//los ultimos () son para llamar a la funcion
//info.bind(auto)();

//esta la corre sin necesidad de llamrla
//info.call(auto,10);

//esta igual a la aneterior, pero los parametros
//se pasan por array
info.apply(auto, [10, 20]);

console.log(auto.info(10));

//mini reto
function suma(a, b) {
  return a + b;
}

function sumarConCall(num1, num2) {
  return suma.call(null, num1, num2);
}
function sumarConApply(num1, num2) {
  return suma.apply(null, [num1, num2]);
}
function sumarConBind(num1, num2) {
  return suma.bind(null,num1,num2)();
}
