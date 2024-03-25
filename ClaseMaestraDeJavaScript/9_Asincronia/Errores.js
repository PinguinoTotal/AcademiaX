try {
  let objeto = {};

  //esto iria en vez del await 
  //console.log(objeto.c.a)
  await

} catch (error) {
  console.log('Error: ' + error);
} finally{
  console.log('finally');
}

//mini reto
function divide(a, b) {
  try{
    return a / b;
  }catch(error){
    console.log('Error: ', error);
  }
}