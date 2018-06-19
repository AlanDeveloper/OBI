// O senhor Satoshi passou anos reclamando da empresa de correios do seu país, porque ela sempre transportava suas encomendas usando um caminho que passava pelo número mínimo de cidades entre a cidade onde o senhor Satoshi mora e a cidade destino da encomenda. A empresa alegava que essa estratégia levava ao menor tempo para a entrega final da encomenda. O problema é que ele notou que essa estratégia da empresa nem sempre levava ao menor preço para o frete total. Se ele pudesse escolher o caminho por onde a encomenda deveria passar para ir da sua cidade para a cidade destino, ele poderia economizar bastante com o frete, já que não havia muita urgência para a maioria de suas encomendas.

// Depois de muita reclamação, a empresa finalmente está dando aos clientes a opção de determinar o caminho por onde a encomenda deve passar. O senhor Satoshi, feliz da vida, agora quer a sua ajuda para implementar um programa que, dado o custo de transporte de uma encomenda entre vários pares de cidades pelo país, para os quais a empresa realiza entregas diretas, determine qual é o preço total mínimo para o frete entre a cidade onde ele mora e a cidade destino da encomenda.

var cidade = 5, rotas = 6, caminho = [], cont = 0, localizacao = 1, precolocaliza = [];
var anota = [];
var cidinicial = [1, 1, 4, 4, 2, 3], cidfinal = [2, 3, 3, 2, 1, 5], cidpreco = [4, 3, 6, 2, 1 ,5];
// for (var i = 1; i < caminho.length || cidade === 5; i++) {
//     localizacao = caminho[i];
//     Create(localizacao);
//     Caminho ();
// }
Create(localizacao);
Caminho ();
function Create (cidade) {
    for (var i = 0; i < cidinicial.length; i++) {
        if (cidinicial[i] === cidade) {
            caminho[cont] = cidfinal[i];
            precolocaliza[cont]+= cidpreco[i];
            cont++;
        }
    }
    return caminho;
}

function Caminho () {
    for (var i = 0;localizacao != cidade) {
        localizacao = caminho[i];
        Create(localizacao);
    }
}