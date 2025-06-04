// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

function extrairPalavrasUnicas(texto){
    let palavrasRepetidas = 0;
    let arrayPalavrasUnicas = [];
    const palavras = texto.split(" ");
    for(let i = 0; i < palavras.length; i++){

        if(i === 0){
            arrayPalavrasUnicas.push(palavras[i]);
        }
        else {

            for(let k = 0; k < arrayPalavrasUnicas.length; k++){
                if(arrayPalavrasUnicas[k] === palavras[i]) {
                        palavrasRepetidas++;
                }
            }

            if(palavrasRepetidas === 0){
                arrayPalavrasUnicas.push(palavras[i]);
            }
            palavrasRepetidas = 0;
        }
    }
    console.log(arrayPalavrasUnicas);

}
extrairPalavrasUnicas("olá olá mundo mundo");