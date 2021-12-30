console.log(Math.ceil(6.8))

const obj1 = {}
obj1.nome = 'bola'
//obj1['nome'] = 'bola'   AMBAS AS MANEIRAS PODEM SER USADAS MAS SO A DE CIMA USA O PONTO
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome  /* siguinifica que vai pegar o tributo e colocar publico*/
    this.exec = function (){
        console.log('Exec...')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

//NOTAÇÃO PONTO VC USA PRA ACESSAR AS COISAS, OBJ, FUNC, ETC...