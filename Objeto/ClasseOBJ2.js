//EXEMPLO DE HERANÇA COM CLASSE
class Avo {
    constructor (sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, proficao = 'Professor') {
        super(sobrenome)
        this.proficao = proficao
    }
}

class Filho extends Pai {
    constructor () {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)
