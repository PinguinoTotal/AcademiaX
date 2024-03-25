let listaDeUsriarios= [];

export function AgregarUsuario(nombreUsuario){
  listaDeUsriarios.push(nombreUsuario);
  console.log(`Usuario '${nombreUsuario}' agregado.`)
}

export function MostrarListaDeUsuarios(){
  console.log('Lista de usuarios:')
  for (let i = 0; i < listaDeUsriarios.length; i++) {
    console.log(listaDeUsriarios[i]);
  }
}