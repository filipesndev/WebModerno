const notas = [1.1, 6.7, 7.9, 9.8, 6.9, 8.7]

//sem Callback
let notasBaixas = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com Callback
notasBaixas = notas.filter( function (nota) {
    return nota < 7
})
console.log(notasBaixas)

let MenorQue7 = nota => nota < 7
notasBaixas = notas.filter(MenorQue7)
console.log(notasBaixas)