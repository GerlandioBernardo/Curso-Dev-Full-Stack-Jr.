// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

import PromptSync from "prompt-sync";

function consoleInteractive(){
    const prompt = PromptSync();
    let option;
    let number1 = 0;
    let number2 = 0;
    do{
        console.log('\nEscolha uma opção:');
        console.log(' 1. Adição\n','2. Subtração\n','3. mutiplicação\n', 
            '4. Divisão\n', '0. Sair\n' );
        option = Number(prompt("Digite a opção: "));
        if (option !== 0) {
            number1 = Number(prompt("Digite o primeiro numero: "));
            number2 = Number(prompt("Digite o segundo numero: "));
        }
            

        switch (option) {
            case 1:
                console.log("Resultado:",number1 + number2);break;
            case 2: 
                console.log("Resultado:",number1 - number2);break;
            case 3: 
                console.log("Resultado:",number1 * number2);break;
            case 4:
                console.log("Resultado:",number1 / number2);break;
            case 0:
                console.log("Sair");break;
            default:
                console.log("Opção Inválida");
                break;
        }

    }while(option !== 0);
}
consoleInteractive();