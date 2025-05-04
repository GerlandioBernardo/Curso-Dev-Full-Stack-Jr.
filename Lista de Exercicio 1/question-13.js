// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

import PromptSync from "prompt-sync";

function calculateAverageUntilZero(){
    const prompt = PromptSync();

    let sum  = 0;
    let count = 0;
    let number;

    do {
        number = Number(prompt("Digite um numero decimal (0 para sair): "));
        if(number !== 0){
            sum += number;
            count++;
        }
        
    } while (number !== 0);

    if (count > 0) {
        let average = sum / count;
        console.log(`A média dos números digitados é: ${average.toFixed(2)}`);
    } else {
        console.log("Nenhum número válido foi digitado.");
    }

}
calculateAverageUntilZero();