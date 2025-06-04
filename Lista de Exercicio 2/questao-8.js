// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

function agrupamentoPorCliente(vendas){
    return vendas.reduce((acumulador, value) => {
        const {cliente, total} = value

        if(acumulador[cliente]){
            acumulador[cliente] += total
        }
        else {
            acumulador[cliente] = total
        }
        return acumulador;

    }, {})
}

const vendas = [
    { cliente: "Alice", total: 100 },
    { cliente: "Bob", total: 200 },
    { cliente: "Alice", total: 50 },
    {cliente: "Bob", total: 100},
    { cliente: "Joao", total: 100 },

];

console.log(agrupamentoPorCliente(vendas))
  
