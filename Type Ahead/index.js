const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

fetch(endpoint)
    .then(data => data.json())
    .then(allCities => cities.push(...allCities))


function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // in regex g=global and i=insensitive
        const regex = RegExp(wordToMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex)
    })
}

function displayMatches() {
    const matches = findMatches(this.value, cities)
    console.log(matches)
    const html = matches.map(match => {
        return `
        <li>
            <span>${match.city}, ${match.state}</span>
            <span>${match.population}</span>
        </li>
        `
    }).join('')
    suggestions.innerHTML = html
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)
