//UMA DUPLA DE { } REPRESENTA UM OBJETO
//é uma coleçao de chaves valor, vc tem indentificadores e passa um valor
//ele pode ter outro objeto dentro dele, categorias, ids, etc...

const projeto1 = {}
projeto1.nome = 'Aula De Web' //quando for intentificar sem [] USE O PONTO
projeto1['Numero de aulas'] = 450  //quando for usar [] nao use ponto, não e bom usar os espasos
projeto1.preco = 30.5

console.log(projeto1)

const projeto2 = {
    nome: 'JogoNovo',
    preco: 200,
    console: 'xbox',
    obj: {
        desconto: 0.80 //vc pode ter obj dentro de obj desde que nao tenha nome igual
    }
}

console.log(projeto2)

//use '"":""' E NAO '""=""'