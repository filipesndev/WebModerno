const nome = 'Josue'
const concatenacao = 'E aí ' + nome + ' como vai' + '?'

const template = `E aí ${nome} como vai?`

console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei ${up('cuidado')} você vai cair`)


/*
const concatenacao = 'E a
í ' + nome + ' como vai' + '?'
*/
//nao se pode quebrar linha 
//MAS NO TEMPLATE PODE
// ${variavel que vc quer} ele so celcula oq esta dentro das chaves