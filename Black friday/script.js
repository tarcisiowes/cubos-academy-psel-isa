
function solucao(produtos, valorMaximo, avaliacaoMinima) {
    let presente = []
    for (var i = 0; i < produtos.length; i++) {
        if (produtos[i].valor <= valorMaximo && produtos[i].avaliacao >= avaliacaoMinima)
            presente.push(produtos[i])
    }
     console.log(presente)
 
}