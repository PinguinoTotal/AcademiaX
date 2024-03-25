let usuario = 'pedro';

/*
peimero va un if que checa como la primer primicia
luego se checan más casos particulares y al final
se checan todos los casos que no estan englobados en esta
sentencia  
*/ 
if (usuario === 'pedro'){
  console.log('autorizado');
} else if(usuario === 'Emilia'){
  console.log('autorizado con privilegios');
} else{
  console.log('No autorizado');
}

// mini reto
if (boton === 'next') {
  console.log('The Weeknd');
}else if(boton === 'previous'){
  console.log('Eminem');
}
