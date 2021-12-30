//let e const  novas expreções para variavel e constante
//var nao se limita a bloco ja o let so pode ser acessado dentro do bloco

//template string
//poder colocar valores dentro da string com acentos EX:

let n = 'Notebook'

console.log(`Eu preciso de um novo ${n}`)

//Destructuring
const [l, e, tras] = 'Jogos'
//as letras sao atribuidas aos primeiros elementos do array
const {idade: i, nome} = {nome='Ana', idade='10'} 

//
//                        PARTE 2
//


//Arow function, função simples com menos sintaxe
const soma = (a,b) => a + b //return e implicito antes da ceta ficam os parametros e depois da seta e o resultado, arrow nao tem nome sempre e anonimo
// em uma function normal o this varia de acordo com a chama, mas na arrow o this semore se refere a um exports

//em uma funçao voce pode atribuir um valor a um parametro logo na função

//
//                        PARTE 3
//

//Object.values e Objcet.entries pega valores e entradas de um obj respectivamente