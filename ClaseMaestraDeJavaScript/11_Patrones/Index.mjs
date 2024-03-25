import { cuadrado as cuadradoNum, removerDuplicados } from "./modulos.mjs";

cuadradoNum(2);

removerDuplicados([1,2,3,3,3,4]);
//no podemos llamar a la funcion "Privada"
//porque no la tenemos para exportar 

//se dice que evita colisiones porque con esto hacemos que
//se pueda usar el mismo nombre que tenemos en donde 
//declaramos los modulos haciendo que cuadrado se importe 
//con el nombre de cuadradoNum
function cuadrado(){
  console.log('colision');
}