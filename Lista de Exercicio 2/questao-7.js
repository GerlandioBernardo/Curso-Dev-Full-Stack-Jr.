// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

function ordenarNomesPorPreco(array){

    return array.sort((a, b)=> {
        return a.preco - b.preco;
    }).map((value) => {
        return value.nome
    })
}

const produtos = [
    { nome: "Camiseta", preco: 29.99 },
    { nome: "Calça", preco: 59.90 },
    { nome: "Tênis", preco: 199.99 },
    { nome: "Boné", preco: 19.90 }
];

console.log(ordenarNomesPorPreco(produtos));
  