import {resultatenLijst} from './renderData.js'

export function showLoadingState(){
    resultatenLijst.innerHTML=""
    resultatenLijst.insertAdjacentHTML('afterbegin', 
        `<P>We zijn aan het zoeken. Even geduld alstublieft.</P>`)
}

export function hideLoadingState(){
    resultatenLijst.removeChild(resultatenLijst.firstElementChild);
}
