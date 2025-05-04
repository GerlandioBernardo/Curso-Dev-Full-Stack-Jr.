// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

import PromptSync from "prompt-sync";

function checkEvenOddNumber(){
    const prompt = PromptSync();
    const number = Number (prompt("Digite um numero: "));
    if(number % 2 === 0){
        console.log("O numero é Par");
    }
    else{
        console.log("O numero é Impar")
    }
    
}

checkEvenOddNumber();