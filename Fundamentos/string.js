//pode delimitar com "" '' ``
//string é um conjunto de caracteres, como palavras e codigos

const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5))

//let/const.charAt(caractere que vc quer a partir do numero zero)

console.log(escola.indexOf('r'))

//informa onde na let/const esta o que vc digita dentro do ()

console.log(escola.charCodeAt(3))

//pegar o valor na tabela unicode

console.log(escola.substring(1))
console.log(escola.substring(1, 3))

//vc pode imprimir de um caractere ate o outro

console.log('Site'.concat(escola).concat('!'))

//literal é oq nao esta em var ou const
//concat adiciona coisas na impreçao do codigo
// .concat pode ser substituido por +

console.log(escola.replace(3, 'e'))

//substitue na inpresao do codigo

console.log('Maria,Ana,Pedro'.split(','))
console.log('tralalalalalala'.split('l'))

//gera um arrei grupinho com varios elementos, usando a ',' informada nos ()