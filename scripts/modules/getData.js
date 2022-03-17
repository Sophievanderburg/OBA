import { renderData } from "./renderData.js"
import { hideLoadingState} from "./states.js"
import {laadOpties, form} from "./form.js"

import "./zoekfunctie.js"
import {zoekBalk} from "./zoekfunctie.js"

export function getData(){
    let query = zoekBalk.value ? zoekBalk.value : "ondernemen"
    console.log(query)
    const cors = "https://cors-anywhere.herokuapp.com/"
    const endpoint = "https://zoeken.oba.nl/api/v1/search/?q="
    const key = "8854ebaac6d5b76ab5a25a372d249680"
    const secret = "4289fec4e962a33118340c888699438d"
    const detail = "Default"
    let url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`
    
    const config = {Authorization: `Bearer ${secret}`,}

    console.log(url)

  fetch(url, config)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
        console.log('data:')
        console.log(data.results)
        hideLoadingState()
        renderData(data)
        laadOpties(data)
        
    })
    .catch((err) => {
        console.log('error')
        console.log(err)
    })
}