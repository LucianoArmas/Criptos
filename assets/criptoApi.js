import {obtenerDatosUsd} from './dolarApi.js';
export function obtenerDatosCriptomonedas(criptos) {
  let arrayCriptos = [];
  criptos.forEach(cripto => {
    // URL de la API que proporciona los datos de las criptomonedas
    const apiUrl = "https://api.coingecko.com/api/v3/coins/"+cripto;
    

    // Realizar la solicitud GET a la API utilizando fetch()
    fetch(apiUrl)
      .then(response => response.json()) // Convertir la respuesta a formato JSON
      .then(data => {
        // Aquí tienes acceso a los datos de las criptomonedas en la variable 'data'
        // Puedes realizar operaciones con los datos, como mostrarlos en la tabla
        arrayCriptos.push({name: data.name, 
                      price: data.market_data.current_price.usd});
        obtenerDatosUsd(arrayCriptos);
      })
      .catch(error => {
        // Manejar los errores en caso de que ocurra alguno
        console.error('Error al obtener los datos:', error);
      });
    });
  
}