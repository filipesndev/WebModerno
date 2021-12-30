const nuns = [1,2,3,4,5]

//map e um for com proposito criando um novo array

let resultado = nuns.map( function (e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10

const paradinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado2 = nuns.map(soma10).map(paradinheiro)
console.log(resultado2)