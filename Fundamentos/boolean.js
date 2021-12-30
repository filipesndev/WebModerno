// principalmente verdadeiro ou falso, true or false

//teste

let x = false
let y = true
console.log(x)
console.log(y)

// simbolo "!" e usado como negasao
// toda negasao duas vezes na lofica e uma afrimaçao, eu nao nao quero quer dizer que vc quer
// ----------->     " ! = true " " !! = false "     LEMBRA DISSO
// !! funciona como uma afirmaçao, voce forsa o console a dizer se e verdadeiro ou falso

let nao = 6
console.log(!nao)
console.log(!!nao)

//COISAS NATURALMENTE TRUE

console.log(!!3)
console.log(!!-4)
console.log(!!'Qualquer coisa') //espaço vazio qualquer coisa dentro da string
console.log(!![]) // arrei AINDA VAI SER EXPLICADO
console.log(!!{}) //objeto liteal AINDA VAI SER EXPLICADO
console.log(!!Infinity) //algo infinito
console.log(!!(nome_da_variavel = true))

//COISAS NATURALMENTE FALSE

console.log(!!0)
console.log(!!'') // string vazia
console.log(!!null) //valor nulo AINDA VAI EXPLICAR OQ E
console.log(!!NaN) //nao e um numero, normalmente um erro
console.log(!!undefined) //indefinido AINDA VAI EXPLICAR OQ E
console.log(!!(nome_da_variavel = false))

//PRA FINALIZAR
//    || siguinifica "ou"

console.log(!!(0 || null || undefined || 'vai dar verdadeiro se tiver algum verdadeiro no conjunto'))

let nome1 = ''
console.log(nome1 || 'Desconhecido') //quero o nome "ou se nao tiver nome" quero a string desconhecido 

let nome2 = 'Lucas'
console.log(nome2 || 'Desconhecido')