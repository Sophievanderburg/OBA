import { renderData } from "./renderData.js"

const cors = "https://cors-anywhere.herokuapp.com/"
const endpoint = "https://zoeken.oba.nl/api/v1/search/?q="
const query = "ondernemen"
const key = "8854ebaac6d5b76ab5a25a372d249680"
const secret = "4289fec4e962a33118340c888699438d"
const detail = "Default"
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`

const config = {
  Authorization: `Bearer ${secret}`,
}

export function getData(){
  fetch(url, config)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
        console.log('data:')
      console.log(data)

    })
    .catch((err) => {
        console.log('error')
      console.log(err)
    })
}