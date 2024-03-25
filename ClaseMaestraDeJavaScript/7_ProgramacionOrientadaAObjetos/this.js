let auto = {
  modelo: 'Modelo 3',
  año: 2021,
  marca: 'Tesla',
  //al usar this nos referimos a este objeto
  //en el cual estamos justo ahora
  info: function(){
    return 'Este es un auto ' + this.marca
    +', ' +this.modelo +' del año ' + this.año;
  }
};

console.log(auto.info());

//mini reto
const item = { id: '1234556', getId: function() { console.log(this.id); } };
item.getId();