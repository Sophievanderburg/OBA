import {resultatenLijst} from './renderData.js'

export const form = document.querySelector('main > form')

export function laadOpties(data){
    let opties = data.results

    let alleJaartallen =[]
    let jaartallen = []

    console.log('alleJaartallen')
    console.log(alleJaartallen)

    opties.forEach(item =>{
        alleJaartallen.push(item.year)
    })

    alleJaartallen.forEach(item => {
        if(jaartallen.indexOf(item) == -1) {
          jaartallen.push(item);
        }
    });
    

    jaartallen.forEach((item) => {
        form.insertAdjacentHTML('beforeend',
            `
            <input type="checkbox" id="${item}">
            <label for="${item}">${item}</label
            `)
      })
}

export function filter(){

}


function filteredAuthors(quotes) {
    let checkedInputs = [...authorForm.querySelectorAll('input:checked')].map(el => el.id);
    console.log('checkedInputs:')
    console.log(checkedInputs)

    // Filter de oorspronkelijke dataset op de entries die in de checkbox aangevinkt zijn
    let newData = quotes.data.filter(element => {
      // Als een van de checkbox entries matcht met 1 van de dataset entries
        if(checkedInputs.includes(element.name)) {
            // Voeg 'm toe aan de nieuwe array
            return true;
        } else {
            // Filter 'm uit de nieuwe array
            return false;
        }
    })
       
    // gefilterde array
    console.log(newData);
    cleanElement();

    if (newData.length > 0){
        displatyFilteredQuotes(newData);
    } else{
        renderData(quotes);
    }
    
}