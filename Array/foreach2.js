Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.lenght; i++) {
        callback(this[i], i, this)
    }
}

const cars = ['jeep','fiat','ford']

cars.forEach2(function (marca, indice) {
    console.log(`${indice + 1}) ${marca}`)
})
//nao entendi para que serve
