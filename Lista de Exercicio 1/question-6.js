// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

import PromptSync from "prompt-sync";

function classifyTriange(){
    const prompt = PromptSync();
    const side1 = Number(prompt("Digite o primeiro lado do triangulo: "));
    const side2 = Number(prompt("Digite o segundo lado do triangulo: "));
    const side3 = Number(prompt("Digite o terceiro lado do triangulo: "));

    if (side1 < side2 + side3 && side2 < side1 + side3 && side3 < side1 + side2) {
        if (side1 === side2 && side2 === side3) {
            console.log("Triangulo Equilátero");
        }
        else if (side1 === side2 || side1 === side3 || side2 === side3) {
            console.log("Triangulo Isósceles");
        }
        else{
            console.log("Triangulo Escaleno");
        }
    }
    else{
        console.log("Os valores fornecidos não formam um triangulo");
    }
}
classifyTriange();