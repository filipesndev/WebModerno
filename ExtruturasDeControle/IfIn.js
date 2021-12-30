function soBoa(nota) {
    if(nota >= 7) {
        console.log('Aprovado ' + nota)
    }
}

soBoa(8)
soBoa(3)

function seForVerdadeEuFalo(valor) {
    if(valor){ //dentro desse parenteses vc tem que fazer uma atribuição verdadeira para que assim o if ative as chaves
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo('Bem Loko')
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(829)
seForVerdadeEuFalo([])
seForVerdadeEuFalo(0)
seForVerdadeEuFalo({})

function TesteDoIf(num) {
    if(num > 8); { //ele imprime ambos pos o ';' esta impedindo a chaves de se ligar ao if
        console.log(num)
    }
}

TesteDoIf(10)
TesteDoIf(2)