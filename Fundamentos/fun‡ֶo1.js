// e um bloco que recebe um nome para que eu possa chamar o bloco
//quantas vezes eu quiser, tem os ingredientes , as sentenças dentro

//função sem retorno:
 //a , b sao os parametros que quero receber
function Somar(a, b){
    console.log(a+b)
} 

Somar(8.9 ,1.1)  //somar é o nome da funsao, sempre que eu chamar a palavra ela ira usar a função
Somar(2, 4, 7, 9, 3)
Somar()

//função sem retorno
//aqui eu coloquei b=1 ou seja sempre que eu nao der seu valor ele sera 1

function Somar1(a, b = 1){
    return a + b
}
console.log(Somar1(2, 3))
console.log(Somar1(2))  //aqui eu user o sonsole.log pois ele nao esta na funçao como no outro exemplo
console.log(Somar1())

