
//NÃO FAZ ISSO PQ SO VAI TE CONFUNDIR, SEMPRE DECLARE ANTES

// var sofre o hoisting, ele pega a variavel e joga pra cima
console.log('a=',a) //ele sabe que a variavel a existe porem é indefinida ou seja nao da erro
var a = 5
console.log('a=',a) //aqui ta gg

//console.log('b=',b)
let b = 4
console.log('b=',b) //da erro por o let não sofre hoisting


//NA MORAL ISSO NÃO E UTIL É APENAS UMA CURIOSIDADE POIS SEMPRE E MELHOR DECLARAR A VARIAVEL ANTES