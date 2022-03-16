import {resultatenLijst} from './renderData.js'
import {renderData} from './renderData.js'
import {displayFilteredJaartallen} from './renderData.js'

export const form = document.querySelector('main > form')

export function laadOpties(data){
    let opties = data.results

    let alleJaartallen =[]
    let jaartallen = []

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

      form.addEventListener('change', event => {
        filter(data, event)
    })
}

export function filter(data){
    let checkedJaartallen = [...form.querySelectorAll('input:checked')].map(el => el.id);

    console.log('checkedInputs:')
    console.log(checkedJaartallen)

    let newData = data.results.filter(element => {
        // Als een van de checkbox entries matcht met 1 van de dataset entries
        if(checkedJaartallen.includes(element.year)) {
            // Voeg 'm toe aan de nieuwe array
            return true;
            } else {
                // Filter 'm uit de nieuwe array
                return false;
            }
    })

    if (newData.length > 0){
        displayFilteredJaartallen(newData);
    } else{
        renderData(data);
    }
}

