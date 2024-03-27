//escuchando todos los clicks en cualquier parte de 
//la pagina
document.addEventListener('click',()=>{
  console.log('recibi un click');
});

//escuchando el click en una clase determinada
document.querySelector('.svg-skill').addEventListener('click',()=>{
  //despues de darle click a algun eelemento de esta clase, al que le 
  //dimos click escalalo 2 veces 
  document.querySelector('.svg-skill').computedStyleMap.trasform = 'scale(2)';
})

//minireto
document.getElementById('miBoton').addEventListener('click',()=>{
  alert('¡Has hecho click en el botón!');
});