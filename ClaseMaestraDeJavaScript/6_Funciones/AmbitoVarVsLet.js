//la diferencia entre var y let 

//let tien eun alcance de bloque no de funcion 

//mini reto
var x = 5;
var y;
{
	let y = 5;
    x = 10;
    y = 10;
}
console.log(x,y); // 10 undefined