function soma(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

function soma1 (a, b, c){
    a = a !==undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

function soma2 (a = 1, b = 1, c = 1){
    return a + b + c
}
//faça desse jeito pois é bem mais simples, funcional e decente

