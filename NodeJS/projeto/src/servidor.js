const porta = 3003

const express = require('express') //nao esquece os aspas
const app = express()
const bodyParser = require('body-parser')
const bancodedados = require('./bancodedados')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancodedados.getProdutos()) //send converte para json
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancodedados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancodedados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor esta executando em ${porta}.`)
})