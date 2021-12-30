function tratarErro (erro){
    throw new Error('EM CONCERTO')
    //throw 10
    //throw false
}

function imprimirNomeGritado(obj) {
    
    try{
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'Roger'}
imprimirNomeGritado(obj)