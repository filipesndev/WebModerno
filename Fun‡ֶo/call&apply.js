// Mais duas formas de chamr uma função

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
} //o this acessa o escopo global

const produto = {
    nome: 'Notebook',
    preco: 2500,
    desconto: 0.5,
    getPreco //criando assim ele vai associar o getPreco a função
}

console.log(getPreco()) //ele nao vai achar pois o this nao mira no OBJ e som no global
console.log(produto.getPreco()) //tem que indentificar certinho








const carro = {
    preco: 15000,
    desconto: 0.5
}

console.log(getPreco.call(carro)) //o call serve pra vc chamar a function pra outro OBJ
console.log(getPreco.apply(carro))

//CALL vc passa os parametros sertinho sendo o primeiro, o contexto
//APPLY vc passa os paramentros dentro de um Array

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, 'R$']))

//so muda pela forma como voce passa os parametros