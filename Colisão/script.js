function solucao(velocidade, aceleracao, distanciaObjeto) {
    var v = -velocidade*velocidade;
    var a = 2 * aceleracao;
    var d = v / a  ;
    var c = distanciaObjeto;
    
    if(d > c) {
        console.log("COLISAO A FRENTE")
    } else if (d == c) {
        console.log("NAO ACELERE")
    } else
        console.log("CAMINHO SEGURO")    
    
  }