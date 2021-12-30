function Aula (nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Jooji',123)
console.log(aula1)

function novo (f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'BemVindo', 678)
console.log(aula3)