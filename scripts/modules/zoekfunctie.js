import { getData } from './getData.js'

export const zoekBalk = document.querySelector("main input[type='text']")
export const h3 = document.querySelector("main div:first-of-type")

export function zoeken (){
    getData()
}

zoekBalk.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        zoeken()
    }
})