const alunos = [
    {nome:'João', nota: 8.5},
    {nome:'Maria', nota: 7.8}
]

//IMPERATIVO

let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//DECLARATIVO

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

//Usa o declarativo pois é mais simples de entender e de funcionar