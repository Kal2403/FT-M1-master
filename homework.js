'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let resultado = 0;

  for(let i = 0; i < num.length; i++){
    resultado += +num[i] * 2 ** (num.length - 1 - i);
  }
  return resultado;
}

function DecimalABinario(num) {
  // tu codigo aca
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}