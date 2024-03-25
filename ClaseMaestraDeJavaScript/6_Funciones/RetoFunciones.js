let validarFormulario = (personaObjeto) => {
  return personaObjeto.Nombre && personaObjeto.Email && personaObjeto.Mensaje;
}

let enviarFormulario = (personaObjeto) => {
  if(validarFormulario(personaObjeto)){
    console.log("¡Formulario enviado con éxito!");
  }else{
    console.log("Por favor completa todos los campos.");
  }
};

let persona = {
  Nombre: 'Persona1',
  Email: 'Persona1@per.com',
  Mensaje: 'Hola soy una persona'
};

enviarFormulario(persona);