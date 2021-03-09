
function solucao(jogadas) {
    
    var a = 0
    var b = 0
    for (var position = 0; position < jogadas.length; position++)
    if (jogadas[position] == 1)
        {
            a += 1;
        } else {
            b += 1;
        }
    var resultado = a === b? true : false;
    console.log(resultado) ;
}