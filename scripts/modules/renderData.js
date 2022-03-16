export const resultatenLijst = document.querySelector('main > ul:first-of-type')

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