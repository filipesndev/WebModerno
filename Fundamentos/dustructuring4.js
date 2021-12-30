//usando destructuring a partir de uma função pelo array

function rand([min = 0, max = 1000]){ //agora nao esta em chaves e sim em colchetes
    if (min > max) [min, max] = [max, min] //se minimo for mior que maximo inverta as duas
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //floor serve pra arredondar o valor pra baixo
}

console.log(rand([40, 80]))
console.log(rand([8378]))
console.log(rand([,10]))
console.log(rand([]))