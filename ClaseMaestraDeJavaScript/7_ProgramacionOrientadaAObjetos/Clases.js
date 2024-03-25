//esta es lo más nuevo para hcer clases
class Auto{
  constructor(modelo, año, marca){
    this.modelo = modelo;
    this.año = año;
    this.marca = marca;
  }

  info(){
    return this.modelo + ' - ' + this.marca + ' - ' + this.año;
  }
}

//mini reto

class Canal{
  constructor(canal,tipo,espectadores,url){
    this.canal = canal;
    this.tipo = tipo;
    this.espectadores = espectadores;
    this.url = url;
  }

  ir(){
    console.log(this.url);
  }
}

const canal = new Canal('RollingStone', 'Music', 1432, 'https://www.twitch.tv/rollingstone');
canal.ir();