let contadorMemo = 0;
function fibonacciMemo(num, memoria = {}) {
    if (!memoria[num])
    {
        contadorMemo = 0;
    }
    contadorMemo++;
    if (memoria[num]) return memoria[num];
    if (num == 0) return 0;
    if (num == 1) return 1;

    return memoria[num] = fibonacciMemo(num - 1, memoria) + fibonacciMemo(num - 2, memoria);
}

let contadorRec = 0;
function fibonacciRecursivo(num) {
  contadorRec++;
  if (num == 0) return 0;
  if (num == 1) return 1;

  return fibonacciRecursivo(num - 1) +
      fibonacciRecursivo(num - 2);
}

const fibonacciMemo = (num, memoria = {}) => (memoria[num]) ? memoria[num] : (num == 0) ? 0 : (num == 1) ? 1 : memoria[num] = fibonacciMemo(num - 1, memoria) + fibonacciMemo(num - 2, memoria);