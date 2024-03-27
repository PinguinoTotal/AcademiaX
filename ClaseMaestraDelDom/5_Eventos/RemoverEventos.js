//haciendo más grande el elemento
function agrandar(){
  document.querySelector('.svg-skill').style.transform = 'scale(2)';
}

//haciendo que se llame la funcion cuando se da el click
document.querySelector('.svg-skill').addEventListener('click', agrandar);

//dejando de escuchar el evento
document.querySelector('.svg-skill').removeEventListener('click', agrandar);
//se tiene que pasar los mismos parametros

//mini reto
function quitar(i){
  let item =  document.querySelectorAll('#resultados li')[i];
  item.classList.add('esconder');
  item.removeEventListener('click', quitar);
}