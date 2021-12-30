class Lancamento {
    constructor(nome = 'Generico',valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.ano = ano
        this.mes = mes
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 40000)
const contaDeAgua = new Lancamento('Agua', -300)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeAgua)
console.log(contas.sumario())