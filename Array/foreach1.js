const cars = ['jeep','fiat','ford']
cars.forEach(function (marca, indice) {
    console.log(`${indice + 1}) ${marca}`)
})

cars.forEach( marca => console.log(marca))

const catalogo = cars => console.log(cars)
cars.forEach(catalogo)
