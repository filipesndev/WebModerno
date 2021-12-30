//Coleção dinamica chaves valor

const pessoa = new Object
pessoa.nome = 'Jose'
pessoa.idade = 46
pessoa.jogofavorito = 'PUBG'
console.log(pessoa)

const cara = {
    nome: 'James',
    idade: 23,
    saude: {
        sangue: 'o+',
        doenca: 'gripe'
    },
    
    jogos:[{
        nome:'Halo',
        tipo:'Exploração',
        duracao: 32,
    },{
        nome:'Gears',
        tipo:'Aventura',
        duracao: 20
    },{
        nome:'Forza',
        tipo:'Corrida',
        duracao:76
    }],
    
    automovel: 'bicicleta'
}

console.log(cara)

delete cara.jogos
console.log(cara)

    