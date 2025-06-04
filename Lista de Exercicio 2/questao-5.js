// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay){
    let tempo;
    return function(){
        clearTimeout(tempo);
        tempo = setTimeout(() => {
            fn()
        }, delay);
    }
}

function buscarDadosApi(){
    console.log("Buscando dados na Api");
}

const buscaComDebounce = debounce(buscarDadosApi, 500);

buscaComDebounce();
buscaComDebounce();
buscaComDebounce();

