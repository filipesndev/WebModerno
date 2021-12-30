//Armazenar uma function em uma let/const

const imprimirSoma = function (a, b) {
    console.log(a+b)
}

imprimirSoma(2,3)

//armazenando uma funçao arrow numa let/const
// '=>' substitue o nome function

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 4))

//DIMINUINDO MAIS

const subtracao = (a, b) => a - b

console.log(subtracao(6, 8))