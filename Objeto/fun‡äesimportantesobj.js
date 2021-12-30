const pessoa = {
    nome: 'Maria',
    idade: 13,
    peso: 256
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '10/10/2010'
})

pessoa.dataNascimento = '01/01/2001'
console.log(pessoa.dataNasciento) //nao mudou a data pois o writable esta false, o enumerable serve para dizer se pode ou nao aparecer no console

//Object.assign
const dest = {a:1}
const obj1 = {b:2}
const obj2 = {c:3, a:4}
const objfinal = Object.assign(dest, obj1, obj2) //o valor de 'a' sera o do ultimo obj adicionado

Object.freeza(objfinal) //nao pode mais ser modificado

