export function calELPeso(cantUsdBuy, cantUsdCurrent, owner, priceCriptoBuy, datosUsd){
  let priceUSDBuy, tot = 0, priceUSDCurrent;

  if(owner === "Cele"){
    if(priceCriptoBuy == 19999){
      priceUSDBuy = 244.5;
    }else if((priceCriptoBuy == 17.83)||(priceCriptoBuy == 40499)){
      priceUSDBuy = 189.25;
    }
  }else if(owner === "Juli"){
    priceUSDBuy = 187.94;
  };

  if(datosUsd.name === "Dolar Oficial"){
    priceUSDCurrent = datosUsd.price;
  }else if(datosUsd.name === "Dolar Blue"){
    priceUSDCurrent = datosUsd.price;
  };

  tot = ((cantUsdCurrent * priceUSDCurrent)-(cantUsdBuy * priceUSDBuy));
  return(tot)

}

