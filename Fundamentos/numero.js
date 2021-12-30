//forma de criar numeros

const peso1 = 1.0
const peso2 = Number('2.0')

console.log (peso1 ,peso2)
console.log (Number.isInteger(peso1))
console.log (Number.isInteger(peso2))

/*
Number.isInteger(CONST/LET) serve para verificar se o numero e inteiro
true = inteiro
false = er... não inteiro anta!!!
*/

let avaliação1 = 7.8
let avaliação2 = 8.9

const total = avaliação1 * peso1 + avaliação2 * peso2
const media = total / (peso1 + peso2)
console.log(total)
console.log(media.toFixed(2))
console.log(media.toString(2))
console.log(typeof media)
console.log(Number.isInteger(media))

/* to.Fixed() 
SERVE PARA VOCE DIZER QUANTAS CASAS DECIMAIS QUER QUE SEJA MOSTRADANO CASO APENAS 2
NÃO ALTERA O VALOR REAL */

// toString() SERVE PARA LHE DARE O VALOR EM CODIGO BINARIO 0010101011001010101 :)

/*para aplicar esssas funções sempre puxe no console.log o nome da const/let
pois diferente do isInteger esses servem para mudar como o resultado da const/let
vai ser mostrado*/

//Number com maiusculo é uma função usavel codigo, number com minusculo ,e um tipo

console.log(typeof Number)

/*

+ = somar
- = subtrair
* = multiplicar
/ = dividir

*/
