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
  let binario = [];
  while(num > 1){
    binario.push(num % 2)
    num = Math.floor(num / 2)
  }
  binario.push(num)
  return binario.reverse().join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}