
//UM OAR DE [ ] REPRESENTA UM ARRAY

const valores = [7.7, 6.3, 8.9]
console.log(valores[0] ,valores[2])
console.log(valores[9])
console.log(!!valores[9]) //um exemplo de false, um array que nao esta na let/const :)

valores[3] = 6
console.log(valores) //ele adiciona ao array

valores[7] = 8
console.log(valores) //ele informa quanto itens tem vazios
console.log(valores.length) //fala quantos elementos tem 

valores.push('String', false, NaN, {id: 7}) //vc pode misturar tipos dentro do array mas nao e bom
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores) //ele e um objeto

/*virgola separa os elementos dentro dos [], isso e um ex de array 
para imprimir no cosole chame a varialvel com os [ ] 
e dentro deles a posisao do que vc quer
comessando do numero zero */