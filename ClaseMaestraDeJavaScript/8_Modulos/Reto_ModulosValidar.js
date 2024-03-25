export function validarCorreo(correo){
  function elementoComun(listaA, listB){
    return listaA.some(item => listB.includes(item));
  }
  let invalidSimbols = [" ", ","];
  let correoList = correo.split("");
  if(correoList.includes('@') &&
      correoList.length>10 &&
      !elementoComun(correoList,invalidSimbols)){
        return true;
      } else{
        return false;
      }
}