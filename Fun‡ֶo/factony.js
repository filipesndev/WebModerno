//objetivo de criar uma função que devolve um obj

function criarProduto (nome, preço) {
    return {
        nome,
        preço,
        desconto : 0.1
    }
}

function criarProduto2 (nome, preço, desconto = 0.1) {
    return {
        nome,
        preço,
        desconto
    }
}

console.log(criarProduto('Notebook', 2456))