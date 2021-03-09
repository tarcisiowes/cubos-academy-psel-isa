function solucao(palpite, palavra) {
	var letras = 0
    for (var position = 0; position < palavra.length; position++)
    if (palavra.charAt(position) == palpite)
        {
            letras += 1;
        }
    console.log(letras)
}