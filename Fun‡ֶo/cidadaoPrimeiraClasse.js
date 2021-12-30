function fun1(){
//declarada de forma literal
}

const fun2 = function (){
//declarada como let/const
}

const array = [ function (){
//declarada dengro de um array
} ]

const obj = {
    nome: function carlos(){
    //declarada dentro de um objeto
    }
}

function run(fun){
    fun()
//passando uma função como parametro de outra função
}
run(function(){})

function soma(a, b){
    return function (c){
        console.log(a+b+c)
    }
}
soma(2, 3)(4)