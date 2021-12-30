// ambos são '...' se voce espalha spread, se vc junta rest

const funcionario = {nome: 'Maria', salario: 1200}
const clone = {ativo: true, ...funcionario} //espalhou com os pontos
console.log(clone)


