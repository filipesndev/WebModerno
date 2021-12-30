//pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Jose'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}  
//gera um erro

Object.freeze = pessoa

//apos esse freeze vc nao pode mais alterar de forma alguma esse obj