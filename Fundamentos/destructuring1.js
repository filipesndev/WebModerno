//Serve pra voce desestruturar e pegar so oq quer

const pessoa = {
    nome: 'Ana',
    idade: 13,
    endereço: {
        rua: 'Silas Bacon',
        numero: 2836 
    }
}

const {nome, idade} = pessoa  //depois de const e pra dizer que vou usar o operador de desestruturar
//tire de dentro do obj nome e idade, qual o obj? PESSOA
console.log(nome, idade)

const {nome: i, idade: b} = pessoa //ele ta alem de pegar, trasnformando em uma let
console.log(i, b)

const {sobrenome, bemHumorada = true} = pessoa //siguinifica que se nao achar o valor dentro do obj de um valor true
console.log(sobrenome, bemHumorada)

const {endereço: {rua, numero, cep}} = pessoa //ele vai entrar em endereço e depois pegar as outras coisas
console.log(rua, numero, cep)

