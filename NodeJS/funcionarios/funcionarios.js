const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //axios serve para puxar arquivos que nao estao na maquina
//voce pode colocar parametros coclocando outro parenteses logo depois do primeiro

const chineses = f => f.pais == 'China'
const mulheres = f => f.genero == 'F'
const menorSalarios = (f, fAtual) => {
    return f.salario < fAtual.salario ? f : fAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalarios)
        console.log(func)
})
