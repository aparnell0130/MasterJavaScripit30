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