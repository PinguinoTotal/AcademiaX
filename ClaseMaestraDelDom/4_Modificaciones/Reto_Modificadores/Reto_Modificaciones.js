let BtnEstilo = document.querySelector('#cambio');
let Circulo = document.querySelector('#circle');

BtnEstilo.addEventListener('click', function(){
  if(Circulo.classList.contains('circulo-verde')){
    Circulo.classList.remove('circulo-verde');
    Circulo.classList.add('circulo-rojo');
    Circulo.setAttribute('style', 'font-size: 10px');
  }else{
    Circulo.classList.remove('circulo-rojo');
    Circulo.classList.add('circulo-verde');
    Circulo.setAttribute('style', 'font-size: 20px');
  }
  
});