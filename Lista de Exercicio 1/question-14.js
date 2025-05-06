// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

import PromptSync from "prompt-sync";

function calculateFactorial(){

    const prompt = PromptSync();
    const number = Number(prompt("Digite o numero para calcular o fatorial: "));
    if(number >= 0){
        let factorial = 1;

    for(let i = 1; i <= number; i++){
        factorial*= i;
    }

    console.log(`O fatorial do numero ${number} é: ${factorial}`);

    }else {
        console.log("Por favor, digite um número inteiro não negativo.");
    }

}
calculateFactorial();