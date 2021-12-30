//JSON é um formato de dados
const obj = {a:1, b:2, c:3, soma() {return a + b + c} } 
console.log(JSON.stringify(obj)) // a função e retirada pois o JSON e apenas de texto sem função

//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) sempre use aspas dulpa "" no JSON nos nomes de atributo e strings
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1241.35, "b": "string", "c": {} , "d": [] , "e": true }'))