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
        // a.href = '/' + item.section
        a.innerText = item.label

        li.appendChild(a)
        all.appendChild(li)

        return all
    }, ul)


    const bigLine = document.createElement('div')
    bigLine.className = 'big-line'

    const smallLine = document.createElement('div')
    smallLine.className = 'small-line'

    nav
        .appendChild(bigLine)
        .appendChild(smallLine)

    return nav
}

const nav = init()

const state = {
    prev: null,

    get previous() {
        return this.prev
    },

    set previous(prev) {
        this.prev = prev
    }
}

const styleSelectedItem = (selection, smallLine) => {
    return () => {
        const aTag = selection.firstChild

        aTag.className = 'highlight-me'
        state.previous &&
            (state.previous.className = "")
        state.previous = aTag

        smallLine.style.transform = `translateX(${aTag.offsetLeft - nav.offsetLeft}px)`
        smallLine.style.width = aTag.offsetWidth + 'px'
    }
}

const focusAnimations = () => {
    const smallLine = nav.querySelector('.small-line')
    const container = nav.querySelector('.container')

    container.childNodes.forEach((listItem) => {
        listItem.addEventListener('click', styleSelectedItem(listItem, smallLine))
    })

    window.addEventListener(
        'resize', () => {
            if (state.previous) {
                smallLine.style.transform = `translateX(${state.previous.offsetLeft - nav.offsetLeft}px)`
            }
        }

    )
}


focusAnimations()
