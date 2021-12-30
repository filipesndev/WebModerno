const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10: case 9:
            console.log('Genius')
            break
        case 8: case 7:
            console.log('Quase Lá')
            break
        case 6: case 5: case 4: case 3: case 2: case 1: case 0:
            console.log('Ruim de mais')
            break
        default:
            console.log('Fora do sistema')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(5.6)
imprimirResultado(9.9)
imprimirResultado(3.4)
imprimirResultado(-78)