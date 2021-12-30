/*

Tipo E (&&):

v e v = f
v e f = f
f e ? = f

Tipo OU (||):

v ou ? = v
f ou ? = Não Se Sabe O Resultado
f ou v = v
f ou f = f

Tipo "OU" EXCLUSIVO (xor) "!!(X ^ Y)" "!=":

v xor v = f
v xor f = v
f xor v = v
f xor f = f

Negação Lógica (!):

!v = f
!f = v

*/

//Aula Começa Aqui://

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //se um der serto compra o sorvete, nao precisa os dois
    const comprarTv50 = trabalho1 && trabalho2 //so compra se os dois derem certo
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //se um dos der certo e o outro nao compra essa// ele nao tem um operador em bolean entao foi feito bit a bit bitware xor 
    const comprarTv32 = trabalho1 != trabalho2 //se for diferente é um ou exclusivo simulado, FASSA ASSIM ANIMAL
    const manterSaldavel = !comprarSorvete  // operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaldavel} //obj com chave valor basico, maneirqa mais inteligente de criar obj para vc nao ter que fazer aquilo de atribuir um valor pra cada
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))