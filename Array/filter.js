//filtra um array

const produtos = [
    {nome:'nomebook', preco:1200, fragil: true},
    {nome:'ipadPro', preco:10000, fragil: true},
    {nome:'armadura', preco:8080, fragil: false},
]

console.log(produtos.filter( function (p) {
    return p.preco > 3000
})) //precisa indentificar o p que se refere ao array maior para depois filtrar

const caro = produto => produto.preco >= 3000
const fragilidade = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragilidade))
