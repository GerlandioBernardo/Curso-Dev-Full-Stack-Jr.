// 9. Conversão Entre Formatos
// Escreva duas funções:
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

function paresParaObjeto(pares){
    return Object.fromEntries(pares);
}
let pares=  [["nome", "Ana"], ["idade", 30], ]

console.log("Pares para Objeto: ",paresParaObjeto(pares));


//------------------Segunda função------------------

function objetoParaPares(obj){
    return Object.entries(obj);
}

const obj = { nome: "Ana", idade: 30 };

console.log("Objeto para Pares: ",objetoParaPares(obj));