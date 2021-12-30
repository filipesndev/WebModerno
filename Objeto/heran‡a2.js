//cadeia de prototipos (prototype Chain)
Object.prototype.atrib0 = 'ziii'
const avo = { atrib1: 'a'}
const pai = { __proto__: avo, atrib2: 'b'}
const filho = {__proto__: pai, atrib3: 'c'}

console.log(filho.atrib1)
console.log(filho.atrib0)

const carro = {
    velAtual: 0,
    velFinal: 200,
    acelerarMais(delta){
        if( this.velAtual + delta <= this.velFinal){
            this.velAtual += delta
        }else{
            this.velAtual = this.velFinal
        }
    },
    status(){
        return `${this.velAtual}KM de ${this.velFinal}KM`
    }
}

const ferrari = {
    modelo: 'F500',
    velFinal: 390
}

const volvo = {
    modelo: 'VO500',
    status(){
        return `${thins.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo)

ferrari.acelerarMais(50)
console.log(ferrari)