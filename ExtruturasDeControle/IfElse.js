const imprimirResultado = function (nota) {
    if(nota >=7){
        console.log('Aprovado ' + nota)
    }else{
        console.log('Reprovado ' + nota)
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(3.8)
imprimirResultado('Epa KEKEKEKEKEKEKE') //cuidado com linguagem fracamente tipada

