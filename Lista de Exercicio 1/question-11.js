// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.


import PromptSync from "prompt-sync";

function sumNumbers(){
    const prompt = PromptSync();
    let sum = 0;

    for(let i = 0 ; i < 5; i++){
        let number = Number(prompt("Digite o numero: "))
        sum += number;
    }
    console.log("Total:",sum);
}
sumNumbers();