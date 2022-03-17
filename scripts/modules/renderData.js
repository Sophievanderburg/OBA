export const resultatenLijst = document.querySelector('main > ul:first-of-type')
export const leermaterialenLijst = document.querySelector('main > ul:nth-of-type(2)')


export function renderData(data) {
    const results = data.results

    resultatenLijst.innerHTML=""

    results.forEach((item, i) => {
        resultatenLijst.insertAdjacentHTML('afterbegin',
            `<li>
            <a href="${item.detailLink}">
            <img src="${item.coverimages ? item.coverimages[1] : "Geen foto"}" >
            <div>
                <h3>
                    ${item.titles[0]}
                </h3>
                <p>
                    ${item.authors ? item.authors[0] : "Geen auhtor"}
                </p>
            </div>
            </a>
            </li>`)
  })
}

export function renderData2(data2) {
    const results = data2.results

    // resultatenLijst.innerHTML=""
    results.forEach((item, i) => {
        leermaterialenLijst.insertAdjacentHTML('afterbegin',
            `<li>
            <h4>${item.titles}</h4>
            <p>${item.summaries}</p>
            <a href="${item.detailLink}">>  Open leerdocument</a> 
            </li>`)
  })
}


export function displayFilteredJaartallen (newData) {
    resultatenLijst.innerHTML=""
    newData.forEach(item => {
        resultatenLijst.insertAdjacentHTML('afterbegin', 
        `<li>
            <a href="${item.detailLink}">
            <img src="${item.coverimages ? item.coverimages[1] : "Geen foto"}" >
            <div>
                <h3>
                    ${item.titles[0]}
                </h3>
                <p>
                    ${item.authors ? item.authors[0] : "Geen auhtor"}
                </p>
            </div>
            </a>
            </li>`)
        })
}