const playButton = document.querySelector('button');

const gridElement = document.querySelector('div.griglia');

playButton.addEventListener(('click'), function(){
    gridElement.innerHTML = "";
    //Generatore di numeri casuali
    /**
     * @param
     * @returns list of 16 number generate randomly 
     */
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
    
    const h1=document.createElement('h1');
    const p=document.querySelector('p')
    //Generatore di griglia
    for (let index = 1; index <= 100; index++) {
        const newCell = document.createElement('div');
        newCell.classList.add('cella');
        newCell.innerHTML = `
            <p>
                ${index}
            </p>`;

        newCell.addEventListener('click', function(){
            console.log(index);

            if(numeriRandomici.includes(index)){
                newCell.classList.add('bomb')
                h1.append('HAI PERSO, SFIGATO!')
                p.append(h1)
            } else{
                newCell.classList.toggle('cliccata');
            }
        });

        gridElement.appendChild(newCell);
    }
})