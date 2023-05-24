const playButton = document.querySelector('button');

const gridElement = document.querySelector('div.griglia');

playButton.addEventListener(('click'), function(){
    gridElement.innerHTML = "";
    //Generatore di numeri casuali
    function generaNumeriCasuali() {
        const numeriCasuali = [];
      
        while (numeriCasuali.length < 16) {
          const numeroCasuale = Math.floor(Math.random() * 100) + 1;
      
          if (!numeriCasuali.includes(numeroCasuale)) {
            numeriCasuali.push(numeroCasuale);
          }
        }
      
        return numeriCasuali;
    }
    const numeriRandomici = generaNumeriCasuali();
    console.log(numeriRandomici)
    
    //Generatore di griglia
    for (let index = 0; index < 100; index++) {
        const newCell = document.createElement('div');
        newCell.classList.add('cella');
        newCell.innerHTML = `
            <p>
                ${index + 1}
            </p>`;

        newCell.addEventListener('click', function(){
            console.log(index + 1);
            newCell.classList.toggle('cliccata');
        });

        gridElement.appendChild(newCell);
    }
});