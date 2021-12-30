const pilotos = ['Neymar','Ebola','Corona','Marcos']
pilotos.pop() //remove o ultimo elemento do array
pilotos.push('jinga') //adiciona um elemento
pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('jaco') //adciona o primeiro elemento
pilotos.splice(2, 0, 'massa', 'botas') //seleciona um MediaElementAudioSourceNode, fala quanto quer apagar e diz os que vao ser inceridos

const algunsPilotos = pilotos.slice(2) //pega um novo array a partir do elemento indicados
console.log(algunsPilotos)