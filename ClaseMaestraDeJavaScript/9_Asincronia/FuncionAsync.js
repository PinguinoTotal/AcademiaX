let promesa = new Promise((reciboDatos, noRecibidoDatos) => {
  setTimeout(()=>{
    reciboDatos('datos');
  }, 5000);
});

(async function asincrona(){
  let resultado = await promesa;
  console.log(resultado.toUpperCase());
})(); //con esto se hace para que inicie la funcion

//mini reto
async function recibirCelulares () {
	const celulares = await obtenerDatos();
	console.log(celulares);
	}
recibirCelulares();