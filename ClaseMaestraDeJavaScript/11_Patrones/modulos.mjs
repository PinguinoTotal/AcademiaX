export function cuadrado(x){
  privada(x * x);
}

export function removerDuplicados(lista){
  //set quita los duplicados de un alista o mas bien 
  //crea una nueva lista que no tiene duplciados
  privada([...new Set(lista)]);
}

function privada(x){
  console.log(x)
}