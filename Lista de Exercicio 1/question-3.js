// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

import PromptSync from "prompt-sync";

function classifyGrade(){
    const prompt = PromptSync();
    const grade = Number(prompt("Digite a nota: "));

    if (grade >= 7) {
        console.log("Aprovado");
    }
    else if (grade < 5) {
        console.log("Reprovado");
    }
    else{
        console.log("Recuperação");
    }

}
classifyGrade();