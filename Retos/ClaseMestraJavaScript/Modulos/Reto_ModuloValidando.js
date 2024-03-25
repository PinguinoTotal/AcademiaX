import { validarCorreo } from "./Reto_ModulosValidar.js";

let correo = "usuario.usuario@hotmail.com"

if(validarCorreo(correo)){
  console.log("Correo valido");
}else{
  console.log("Introduce un correo valido");
}