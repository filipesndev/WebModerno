class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar(){
        console.log(`Olá meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('José')
p1.falar()




const novapessoa = nome => {
    return {
        falar: () => console.log(`Olá meu nome é ${nome}`)
    }
}
const p2 = novapessoa('José')
p2.falar()