// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.


function generateFibonacciSequence(){
    let previous = 0;
    let current = 1;
    let next;
    for(let i = 0; i < 10; i++){
        next = current + previous;
        previous = current;
        current = next;
        console.log(previous);
    }
}
generateFibonacciSequence();