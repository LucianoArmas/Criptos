import{calcuEL} from './criptoCalcEL.js';
import{calELPeso} from './pesoCalcEL.js';

const tabla = document.getElementById('tablaCriptomonedas');
const cuerpoTabla = tabla.getElementsByClassName('tableBodyCripto')[0];
const colUsdOf = document.getElementById("usdOfic");
const colUsdBlue = document.getElementById("usdBlue");
const myData = [
    {owner: "Cele", cant: 0.00031968, price: 40499, cripto: "bitcoin"}, 
    {owner: "Cele", cant: 0.00081, price: 19999, cripto: "bitcoin"},
    {owner: "Cele", cant: 0.7493625, price: 17.83, cripto: "polkadot"},
    {owner: "Juli", cant: 0.0003497, price: 40300, cripto: "bitcoin"},
  ];


export function mostrarDatosEnTabla(datosCripto, datosDolar) {
    // Limpia el cuerpo de la tabla antes de agregar los nuevos datos
    cuerpoTabla.innerHTML = '';

    colUsdOf.textContent = "Earning/Lost (ARS)(USD Oficial) ($"+datosDolar[0].price+")";
    colUsdBlue.textContent = "Earning/Lost (ARS)(USD Blue) ($"+datosDolar[1].price+")";
  
    // Itera sobre los datos y agrega filas a la tabla
    datosCripto.forEach(criptomoneda => {
      myData.forEach(dato =>{
        if(dato.cripto === (criptomoneda.name.toLowerCase())){
          const fila = document.createElement('tr');
                    
          const celdaNombre = document.createElement('td');
          celdaNombre.textContent = criptomoneda.name;
          celdaNombre.setAttribute("class","cripto");
  
          const celdaOwner = document.createElement('td');
          celdaOwner.textContent = dato.owner;
          celdaOwner.setAttribute("class","owner");
          
          const celdaUsdBuy = document.createElement('td');
          celdaUsdBuy.textContent = (dato.price*dato.cant).toFixed(4);
          celdaUsdBuy.setAttribute("class","buy");
  
          const celdaUsdCurrent = document.createElement('td');
          celdaUsdCurrent.textContent = calcuEL(dato.cant, dato.price, criptomoneda.price);
          celdaUsdCurrent.setAttribute("class","current");
          
          const celdaELPrice = document.createElement('td');
          celdaELPrice.textContent = ((celdaUsdCurrent.textContent)-(celdaUsdBuy.textContent)).toFixed(4);
          
          if((celdaELPrice.textContent) < 0){
            celdaELPrice.setAttribute("class","lost el");
          }else{
            celdaELPrice.setAttribute("class","earn el");
          }


          const celdaELArsUSDOf = document.createElement('td');
          celdaELArsUSDOf.textContent = calELPeso(celdaUsdBuy.textContent, celdaUsdCurrent.textContent,
            dato.owner, dato.price, datosDolar[0]);

            if((celdaELArsUSDOf.textContent) < 0){
              celdaELArsUSDOf.setAttribute("class","lost el");
            }else{
              celdaELArsUSDOf.setAttribute("class","earn el");
            }


          const celdaELArsUSDBlue = document.createElement('td');
          celdaELArsUSDBlue.textContent = calELPeso(celdaUsdBuy.textContent, celdaUsdCurrent.textContent,
            dato.owner, dato.price, datosDolar[1]);

            if((celdaELArsUSDBlue.textContent) < 0){
              celdaELArsUSDBlue.setAttribute("class","lost el");
            }else{
              celdaELArsUSDBlue.setAttribute("class","earn el");
            }

          fila.appendChild(celdaNombre);
          fila.appendChild(celdaOwner);
          fila.appendChild(celdaUsdBuy);
          fila.appendChild(celdaUsdCurrent);
          fila.appendChild(celdaELPrice);
          fila.appendChild(celdaELArsUSDOf);
          fila.appendChild(celdaELArsUSDBlue);
          
  
          cuerpoTabla.appendChild(fila);
        }
  
      });
      
    });
    fila.appendChild(colUsdOf);
    cuerpoTabla.appendChild(fila);
    fila.appendChild(colUsdBlue);
    cuerpoTabla.appendChild(fila);
  };



