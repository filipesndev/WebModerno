//Closule e o escopo externo quando uma função e criada
//com ele a function pode acessar dados externos a ela

const x = 'Global'

function fora(){
    const x = 'Local'

    function dentro (){
        return x
    }
    return dentro
}

const minhaFunc = fora()
console.log(minhaFunc)