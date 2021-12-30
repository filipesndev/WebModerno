const ferrari = {
    modelo: 'F40',
    velocidadeMax: 345
}

const volvo = {
    modelo: 'V40',
    velocidadeMax: 980
}

console.log(ferrari.__proto__) //consogo acessar quem e o prototipo desse obj
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) === null

function MeuObj() {}
console.log(typeof Object, typeof MeuObj)
console.log(Object.prototype, MeuObj.prototype)