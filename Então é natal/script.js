

function solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra) {
    let resultado = 0;
    
    for (let i = 0; i  < produtos.length; i++ ){
        
        let categoria = produtos[i].categoria;
        let valor = produtos[i].valor;
        let quantidade = produtos[i].quantidade;
        
        if(categoria == "SALGADO") {
            resultado += valor * quantidade * 0.9;
        } else if (categoria == "DOCE") {
            resultado += valor * quantidade * 0.85;
        } else if (categoria == "BEBIDA") {
            resultado += valor * quantidade * 0.7;
        }      
    }
    

    
    if (ehPrimeiraCompra == true ) {
        if( cupomDesconto == "NATAL10" && resultado >= 3000 ){
            resultado = resultado * 0.9;
        } else if( cupomDesconto == "NATAL20" && resultado >= 4500 ) {
            resultado = resultado * 0.8;
        } else if( cupomDesconto == "NATAL30" && resultado >= 6000 ){
            resultado = resultado * 0.7;
        } else if( cupomDesconto == "NATALSUPREMO" && resultado >= 8000 ){
            resultado = resultado * 0.7;
            resultado -= 120 * distanciaRestaurante;
        }
    }
        resultado += 120 * distanciaRestaurante;
        console.log(resultado);
        
        
}
