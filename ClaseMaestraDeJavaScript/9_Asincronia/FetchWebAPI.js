fetch("www.xaviro.com")
  .then(response => response.json) //lo volvemos json
  .then(json => {
    console.log(json);
  });

//mini reto
const url = 'https://jsonplaceholder.typicode.com/users/1';
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data.name))
  .catch(error => console.error(error));