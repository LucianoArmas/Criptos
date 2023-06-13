import{obtenerDatosCriptomonedas} from './criptoApi.js';
const filtroSelected = document.getElementById("filtroSelect");


function filtrarCripto() {
  const filtro = filtroSelected.value;
  let arrayCriptos = [];

  if(filtro ==="todos"){
    arrayCriptos[0]="bitcoin";
    arrayCriptos[1]="polkadot";
  }else{
    arrayCriptos[0] = filtro;
  }  
  obtenerDatosCriptomonedas(arrayCriptos);
}


filtroSelected.addEventListener('change', filtrarCripto);
filtrarCripto();