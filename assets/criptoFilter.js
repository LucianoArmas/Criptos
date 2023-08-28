import{obtenerDatosCriptomonedas} from './criptoApi.js';
const filtroSelected = document.getElementById("filtroSelect");

const filtroOwner = document.getElementById("filterName");
const table = document.getElementById("tablaCriptomonedas").getElementsByTagName("tbody")[0];


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

filtroOwner.addEventListener("change", ()=>{
  const filtro = filtroOwner.value;

  for (const fila of table.rows){
    const nombre = fila.cells[1].textContent;
    // fila.style.display = nombre.includes(filtro) ? "" : "none";
    if(nombre.includes(filtro) || (filtro === "todos")){
      fila.style.display = "";
    }else{
      fila.style.display = "none";
    }
  }
});


