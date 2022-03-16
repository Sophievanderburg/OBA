import { renderData } from "./renderData.js"
import { hideLoadingState} from "./states.js"

const secret = "4289fec4e962a33118340c888699438d"

const config = {
  Authorization: `Bearer ${secret}`,
}

export function getData(url){
  fetch(url, config)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
        console.log('data:')
        console.log(data.results)
        hideLoadingState()
        renderData(data)
    })
    .catch((err) => {
        console.log('error')
      console.log(err)
    })
}