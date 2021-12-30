const fs = require('fs')

const produto = {
    nome: " Celular",
    preço: 2999.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo')
})