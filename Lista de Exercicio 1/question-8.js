// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.


import PromptSync from "prompt-sync";

function orderNumber(){
    const prompt = PromptSync();
    const number1 = Number(prompt("Digite o primeiro numero: "));
    const number2 = Number(prompt("Digite o segundo numero: "));

    if (number1 > number2) {
        console.log(number2, number1);
    }
    else{
        console.log(number1, number2);
    }
}
orderNumber();