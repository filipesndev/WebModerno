Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimir = function (nota) {
    if(nota.entre(9, 10)) {
        console.log('Ele é mais inteligente do que eu pensava')
    }else if(nota.entre(7, 8.99)){
        console.log('Genius')
    }else if(nota.entre(3, 6.99)){
        console.log('Jegue')
    }else if(nota.entre(0, 2.99)){
        console.log('Mandar para tratamento')
    }else{
        console.log('Fora do sistema')
    }
}

imprimir(6.88)
imprimir(10)
imprimir(4.5)
imprimir(8.5)
imprimir(7.1)
imprimir(8000)
imprimir(0.1)