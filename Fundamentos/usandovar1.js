{
    {
        {
            {
                {
                    var sera = 'railou'
                    console.log(sera)
                }
            }
        }
    }
}
console.log(sera)
//ela continua visivel msm fora do bloco, mas no js uma variavel VAR pode ser vista
//se for dentro de uma função ela não é vista
function teste(){
    var teste = 123
}
teste()
console.log(teste)