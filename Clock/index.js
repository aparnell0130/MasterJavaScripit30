function setDate() {
    const now = new Date()
    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360)
    console.log(secondsDegrees)
}

setInterval(setDate, 1000)