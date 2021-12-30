function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -5){
    opcao = getInteiroAleatorioEntre(-5, 10)
    console.log('A Escolha É: '+opcao)
}
console.log('Fim')