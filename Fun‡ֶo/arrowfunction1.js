let dobro = function dobro (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //ela pode ser bem redusida se so tiver um parametro e um retorno
console.log(dobro(7))

function ola (){
    return 'Olá'
}

ola = () => 'Olá'
console.log(ola())