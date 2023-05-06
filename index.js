const init = () => {
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


    const outerDiv = document.createElement('div')
    outerDiv.className = 'outer-div'

    const innerDiv = document.createElement('div')
    innerDiv.className = 'inner-div'

    nav
        .appendChild(outerDiv)
        .appendChild(innerDiv)

    setTimeout(() => {
        innerDiv.style.transform =
            "translateX(50rem)"
        innerDiv.style.width = '10%'
    }, 2000)

    return nav
}

const nav = init()

const state = {
    focusElement: null,
    previouslyFocussedElement: null
}

const hoverAnimations = () => {
    const underline = nav.querySelector('.inner-div')
    const container = nav.querySelector('.container')

    container.childNodes.forEach(
        (listItem, i) => {
            listItem.addEventListener('click',
                () => {
                    listItem.firstChild.className = 'highlight-me'
                    listItem
                }
            )
        }
    )
}


hoverAnimations()
