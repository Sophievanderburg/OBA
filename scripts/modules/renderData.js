export const resultatenLijst = document.querySelector('main > ul:first-of-type')

export function renderData(data) {
  const results = data.results

  results.forEach((item, i) => {
    console.log(item)
    resultatenLijst.insertAdjacentHTML('afterbegin',
        `<li>
        <img src="" alt"">
        <h3>${
            item.authors ? item.authors[0] : "Geen samenvatting"
          }</h3>
        <p>Hoi</p>
        </li>`)
    container.insertAdjacentHTML("afterbegin", html)
  })
}