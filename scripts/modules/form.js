import {resultatenLijst} from './renderData.js'

export const form = document.querySelector('main > form')

export function laadOpties(data){
    console.log("heyyy")
    let opties = data.results
    // let bestaandeJaartallen = data.results.year

    let jaartallen =[]

    // opties.forEach((item, i) =>{
    //     item.year
    // })


    opties.forEach(item => {
        if(jaartallen.indexOf(opties[i].year) == -1) {
          // If the author is not in the array, push it in it
          jaartallen.push(opties[i].year);
        }
    });

    console.log('jaartallen')
    console.log(jaartallen)
    
    jaartallen = [...new Set(bestaandeJaartallen.flat(1))]
    console.log(jaartallen)
    












    // console.log(bestaandeJaartallen)


    // opties.forEach((item, i) => {
    //     form.insertAdjacentHTML('beforeend',
    //         `<p>${item.year}</p>`)
    //   })



}