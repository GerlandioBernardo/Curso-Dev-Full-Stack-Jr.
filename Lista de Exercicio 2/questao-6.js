// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn){
    const cache = {};
    
    return function(...argumentos){
        const chave = JSON.stringify(argumentos);

        if(cache[chave] !== undefined){
            console.log("Retornando da cache: ", chave);
            return cache[chave];
        }

        console.log("Calculando resultado para", chave);
        
        const resultado = fn(...argumentos);
        cache[chave] = resultado;
        return resultado;
    }
}

function soma(a, b){
    return a + b;
}

const somaMemoize = memoize(soma);

console.log(somaMemoize(2, 3));
console.log(somaMemoize(2, 3));
console.log(somaMemoize(7, 4));
console.log(somaMemoize(7, 4));
