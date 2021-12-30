// Object.preventExtentions// Não pode adicionar nem modificar, so remover
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto) )
console.log(produto)

produto.nome = 'borracha'
produto.descricao = 'material escolar'
delete produto.tag
console.log(produto)

// Object.seal// Não adiciona nem remove pas pode modificar o que ja tem

const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
console.log(pessoa)

pessoa.sobrenome = 'Silva Ribeiro'
pessoa.nome = 'Rodney'
console.log(pessoa)

//Object.freeze// Não consegue mais fazer absolutamente nada

const congelamento = {
    nome: 'Jeferson',
    tag: 'feio'
}
Object.freeze(congelamento)
console.log(congelamento)

congelamento.nome = 'Kirby'
congelamento.altura = 14.65
console.log(congelamento)