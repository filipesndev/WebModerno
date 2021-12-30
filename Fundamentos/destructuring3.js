//usando destructuring a partir de uma função pelo obj

function rand({min = 0, max = 1000}) {  //ao inves de acessar um por um o destructuring permite que a função pegue todos os dados que voce quer de uma vez
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {min: 40, max: 80}
console.log(rand(obj)) //isso aqui dentro é um obijeto, chaves valor durp

console.log(rand({ min: 950})) //auterou o valor de minimo e o maximo ficou o padrao 100 que esta la em cima
console.log(rand({}))

//console.log(rand())// isso aqui da erro, pois nao tem nada definido no rand, sem as chaves no caso
