export function calcuEL(cantBuy, precioBuy, price){
  let totUsdBuy = cantBuy * precioBuy;
  let porcPrice = price / precioBuy;
  let totEL = totUsdBuy * porcPrice;
  return(totEL.toFixed(4))
}