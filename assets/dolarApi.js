import {mostrarDatosEnTabla} from './criptoTable.js';
// URL de la API que proporciona los datos de las criptomonedas
const apiUrl = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';


// Función para obtener los datos de la API
export function obtenerDatosUsd(datosCripto) {
  // Realizar la solicitud GET a la API utilizando fetch()
  const arrayUsd = [];

  fetch(apiUrl)
    .then(response => response.json()) // Convertir la respuesta a formato JSON
    .then(data => {
      // Aquí tienes acceso a los datos de las criptomonedas en la variable 'data'
      // Puedes realizar operaciones con los datos, como mostrarlos en la tabla

      for(let i=0; i<2; i++){
        arrayUsd.push({
              name: data[i].casa.nombre,
              price: parseFloat((data[i].casa.compra).replace(",","."))
        })
      }
      mostrarDatosEnTabla(datosCripto,arrayUsd);

    })
    .catch(error => {
      // Manejar los errores en caso de que ocurra alguno
      console.error('Error al obtener los datos:', error);
    });
}



