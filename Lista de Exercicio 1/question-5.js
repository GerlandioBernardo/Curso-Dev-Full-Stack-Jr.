// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

import PromptSync from "prompt-sync";

function calculateIMC(){
    const prompt = PromptSync();
    const weight = Number(prompt("Digite seu peso: "));
    const height = Number(prompt("Digite sua altura: "));

    const imc = weight / (height * height);

    if (imc < 18.5) {
        console.log("Baixo Peso");
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso Normal");
    }
    else if (imc >= 25 && imc <= 29.9) {
        console.log("Sobrepeso");
    }
    else {
        console.log("Obesidade");
    }
}
calculateIMC();