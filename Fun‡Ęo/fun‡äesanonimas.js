const soma = function (x, y) {    //função anonima é simplesmente uma function sem nome
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(3,5)
imprimirResultado(3,9,soma)
imprimirResultado(3, 7, function (a, b){
    return a - b
})
imprimirResultado(4, 6, (m, n) => m * n)