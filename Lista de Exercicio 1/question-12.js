// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.


import PromptSync from "prompt-sync";

function showMultiplicationTable(){

    const prompt = PromptSync();
    const number = Number(prompt("Digite um numero para forma a tabuada: "));
    for(let i = 1; i <= 10 ; i++){
        console.log(`${number} x ${i}:`,i * number);
    }
}
showMultiplicationTable();