const fabricantes = ['BMW', 'Ferrari', 'Fiat']

function imprimir (indice, nome){
    console.log(`${indice}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))
