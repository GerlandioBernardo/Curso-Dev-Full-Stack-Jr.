// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

import PromptSync from "prompt-sync";

function calculateApplePrice(){
    const prompt = PromptSync();
    const numberApples = Number(prompt("Digite o numero de maçãs: "));
    if (numberApples < 12) {
        console.log("O valor total da compra é: ", (numberApples * 0.30).toFixed(2));
    }else{
        console.log("O valor total da compra é: ",(numberApples * 0.25).toFixed(2));
    }


}
calculateApplePrice();