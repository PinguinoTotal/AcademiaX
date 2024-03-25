let abecedario = ['c', 'b', 'a', 'z', 'y', 'm'];

//saber el tamaño de la lista
console.log(abecedario.length);

//ordenar la lista
console.log(abecedario.sort());

//saber si la lista incluye algo
console.log(abecedario.includes('b'));


//añadir algo al final de la lista
abecedario.push('x')

//retirar el ultimo elemento de la lista
abecedario.pop();

//añadir elemento al inicio de la lista
abecedario.unshift('x');

//eliminar elemento al inicio de la lista 
abecedario.shift();
//elimina elementos dependiendo de cuantos querramos
//eliminar 
abecedario.splice(1,2);

//mini reto
lista.push('final');