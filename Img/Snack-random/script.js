function generatoreNumeri(){
  const numeri = [];

    while(numeri.length < 4){
      const numeroRandomico = getRandomInt (1,5);

      if (!numeri.includes(numeroRandomico)) {
      numeri.push(numeroRandomico);
      }
    }
  return numeri;
};
