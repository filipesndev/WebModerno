//usando a partir do srray

const [a] = [10]  //tem que prestar atenção se vc criu um array ou chamou o destructuring, o destructuring e chamado depois da palavra reservada
console.log(a)

const [n1, , n3, n4, , n6 = 0] = [12, 4, 5, 8]
console.log(n1, n3, n4, n6)  //tira da estrutura e atribui, vc desestrutura

const [, [, roda]] = [[2, 6, 7, 3], [, 5, 8, 9]] //iguinore o primeiro elemento e va para o segundo, pois no destructuring voce iguinorou, nao definio o primeiro elemento
console.log(roda) //codigo de dificil leitura// evite usar esse tio de codigo

//quanod desestrutura de um objeto ele usa {} e de um array usa []