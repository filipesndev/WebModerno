//function declaration (declaração basica)
function nomedafuncao (parametro1, parametro2) {
    return parametro1 + parametro2
}

//function exprecion (dentro de uma let/const)
const nomedafuncao = function (parametro1, parametro2) {
    return parametro1 + parametro2
}

//named function exprecion( nomear 2 vezes )
const nomedafuncao = function nomedafuncao (parametro1, parametro2) {
    return parametro1 + parametro2
}

//quando a function é exprecion vc tem que chamar ela depois da declaração