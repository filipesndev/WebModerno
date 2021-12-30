//forma literal
const obj1 = {}
console.log(obj1)

//Obj em Js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto ('carro', 20000, 0.1)

//Função Factory
function criarfuncionario (nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        GetSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarfuncionario('Jonas', 200, 3)
console.log(f1.GetSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma function famosa que retorna obj
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(JSON.info)