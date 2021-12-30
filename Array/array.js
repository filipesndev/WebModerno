console.log (typeof Array, typeof new Array, typeof [])

// use um array pra cada tipo de coisa

let aprovados = new Array('bia', 'jose', 'ana')
console.log(aprovados)

let aprovados1 = ['carlos', 'tiago', 'ricardo']
console.log(aprovados1[0])
console.log(aprovados1[1])
console.log(aprovados1[2])
console.log(aprovados1[3])

aprovados1[3] = 'jaco'
aprovados1.push('tiago')
console.log(aprovados1.length)

aprovados1[9] = 'james'
console.log(aprovados1.length)
aprovados1.sort()
aprovados1.splice(1 ,1)