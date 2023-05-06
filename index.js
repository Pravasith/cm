const citiesData = {
    "cities": [
        {
            "section": "cupertino",
            "label": "Cupertino"
        },
        {
            "section": "new-york-city",
            "label": "New York City"
        },
        {
            "section": "london",
            "label": "London"
        },
        {
            "section": "amsterdam",
            "label": "Amsterdam"
        },
        {
            "section": "tokyo",
            "label": "Tokyo"
        },
        {
            "section": "hong-kong",
            "label": "Hong Kong"
        },
        {
            "section": "sydney",
            "label": "Sydney"
        }
    ]
}

const fillMe = document.getElementById("fill-me")
const nav = document.createElement('nav')
const ul = document.createElement('ul')

fillMe
    .appendChild(nav)
    .appendChild(ul)
    .className = 'container'

citiesData.cities.reduce((all, item, i) => {
    const li = document.createElement('li')
    li.id = item.section

    const a = document.createElement('a')
    a.href = '/' + item.section
    a.innerText = item.label

    li.appendChild(a)
    all.appendChild(li)

    return all
}, ul)

console.log(fillMe)


