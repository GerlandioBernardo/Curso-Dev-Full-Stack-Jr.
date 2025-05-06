// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

import PromptSync from "prompt-sync";

function repeatNumberTenTimes(){
    const prompt = PromptSync();
    const number = Number(prompt("Digite o numero interio: "));
    for(let i = 0; i < 10; i++){
        console.log(number);
    }
}
repeatNumberTenTimes();