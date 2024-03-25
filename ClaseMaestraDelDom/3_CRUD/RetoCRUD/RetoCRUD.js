let componentes = document.querySelector('#componentes');
function AgregarElemento(){
  let componenteAInsertar = document.createElement('div');
  componenteAInsertar.classList = 'componenteAgregadoNormal';
  componenteAInsertar.innerHTML = `<h3>Nombre De La WEB</h3>
                                  <p>Descripcion de la web</p>
                                  <button class="editar">Editar</button>
                                  <button class="elimar">Eliminar</button>`;
  componentes.append(componenteAInsertar);
}

let botonAgregar = document.querySelector('#Agregar');
botonAgregar.addEventListener('click', function(){
  AgregarElemento();
});

componentes.addEventListener('click', function(event){
  if(event.target.tagName == 'BUTTON'){
    let father = event.target.parentElement;
    if(event.target.classList.contains('editar')){
      father.classList.remove("componenteAgregadoNormal");
      father.classList.add("componenteAgregadoEditado");
      father.innerHTML = `<h3>Componente Editado</h3>
      <p>Este es el nuevo contenido del componente</p>
      <button class="editar">Editar</button>
      <button class="elimar">Eliminar</button>`;
    }else{
      father.remove();
    }
    
  }
  
});

