console.log(typeof Object)
console.log(typeof String)
console.log(typeof Array)

String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}
console.log('Onibus Joji'.reverse())

Array.prototype.first = function (){
    return this[0]    
}

console.log(['moçoca',2,3,4,5].first())

//não substitua comportamentos que ja existem


