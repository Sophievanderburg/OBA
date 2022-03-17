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

export function getData2(){
    const cors = "https://cors-anywhere.herokuapp.com/"
    let url = `${cors}http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=eigen%20onderneming+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=a57b7bbd1cde2f6fb7ce5b3f2d1d96e0`

    console.log('url2')
    console.log(url)

  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
        console.log('data2:')
        console.log(data)
    })
    .catch((err) => {
        console.log('error')
        console.log(err)
    })
}