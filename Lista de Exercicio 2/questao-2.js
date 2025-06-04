// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

import PromptSync from "prompt-sync";

function jogoAdivinhacao(){
    const prompt = PromptSync();

    let tentativas = 0;
    let palpite = null;

    let numeroRandom = Math.floor(Math.random() * 100) + 1;


    while(palpite !== numeroRandom){

        palpite = Number(prompt("Informe um numero de 1 a 100: "));

        if(isNaN(palpite)){
            console.log("Informe um número Válido");
            continue;
        }

        tentativas++;

        if(palpite < numeroRandom){
            console.log("Mais Alto");
    
        }
        else if(palpite > numeroRandom){
            console.log("Mais Baixo");
        }
        else {
            console.log(`\nParabéns! Você acertou em ${tentativas} tentativas`)
        }
    }
}
jogoAdivinhacao()