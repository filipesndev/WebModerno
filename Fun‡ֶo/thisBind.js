const pessoa = {
    dizer: 'IAEE GALEEERA',
    falar() {
        console.log(this.dizer)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar()

const falarei = pessoa.falar.bind(pessoa)
falarei()