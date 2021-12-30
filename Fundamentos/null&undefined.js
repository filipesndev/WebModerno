//TODO UNDEFINED E NULL É FALSE

let valor // nao definir
console.log(valor) //isso e undefined
//console.log(valor2) // valor nao foi declarado da um erro

let chorro = null //nao aponta para nenhum local de memoria mas foi iniciada por isso nn e undefined
console.log(chorro) //caso queira zerar uma lat SEMPRE USE O null

//console.log(chorro.toString()) //Erro se vc tentar acessar oq esta null

const ne = {}
console.log(ne.preco) //nao da erro mas ele dis que "preco" nao eta definido

const trala = {preco: 8.8}
console.log(trala.preco)
trala.preco = null //serve para dizer que esta SEM PREÇO