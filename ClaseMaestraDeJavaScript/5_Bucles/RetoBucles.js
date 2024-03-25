let colores = ['rojo','verde','azul','amarillo'];

let persona = {
  nombre: 'María',
  edad: 27,
  profesion: 'diseñadorea'
};

for (let i = 1; i < 6; i++) {
  console.log(i);
}

console.log('-----------------');

for (const color of colores) {
  console.log(color);
}

console.log('-----------------');

for (const etiqueta in persona) {
  console.log(etiqueta+': '+persona[etiqueta]);
}

console.log('-----------------');

let i = 0;
while (i**2<100) {
  i++;
}
console.log('El número más cercano a 100 cuyo cuadrado es menor que 100 es: '+i);

console.log('-----------------');

i=2;
do {
  console.log(i);
  i+=2;
} while (i<=10);