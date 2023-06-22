export function calELPeso(cantUsdBuy, cantUsdCurrent, datosUsd, priceUSDBuy){
  let tot = 0, priceUSDCurrent;

  if(datosUsd.name === "Dolar Oficial"){
    priceUSDCurrent = datosUsd.price;
  }else if(datosUsd.name === "Dolar Blue"){
    priceUSDCurrent = datosUsd.price;
  };

  tot = ((cantUsdCurrent * priceUSDCurrent)-(cantUsdBuy * priceUSDBuy));
  return(tot)

}

