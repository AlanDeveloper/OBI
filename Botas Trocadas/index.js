// Botas Trocadas
// A divisão de Suprimentos de Botas e Calçados do Exército comprou um grande número de pares de botas de vários tamanhos para seus soldados. No entanto, por uma falha de empacotamento da fábrica contratada, nem todas as caixas entregues continham um par de botas correto, com duas botas do mesmo tamanho, uma para cada pé. O sargento mandou que os recrutas retirassem todas as botas de todas as caixas para reembalá-las, desta vez corretamente.

// Quando o sargento descobriu que você sabia programar, ele solicitou com a gentileza habitual que você escrevesse um programa que, dada a lista contendo a descrição de cada bota entregue, determina quantos pares corretos de botas poderão ser formados no total.

// Entrada
// A primeira linha da entrada contém um inteiro N indicando o número de botas individuais entregues. Cada uma das N linhas seguintes descreve uma bota, contendo um número inteiro M e uma letra L, separados por um espaço em branco. M indica o número do tamanho da bota e L indica o pé da bota: L= ‘D’ indica que a bota é para o pé direito, L= ‘E’ indica que a bota é para o pé esquerdo.
// Saída
// Seu programa deve imprimir uma única linha contendo um único número inteiro indicando o número total de pares corretos de botas que podem ser formados.
// Restrições
// 2 ≤ N ≤ 104
// N é par
// 30 ≤ M ≤ 60
// L é o caractere ‘D’ ou o caractere ‘E’

var botas,tamanho=[],pe=[],cont,val=0;
scanf("%d\n","botas");
cont = botas;
for(var i=0;i<botas;i++){
	scanf("%d","tamanho["+i+"]");
    scanf("%s","pe["+i+"]");	
}
botas = cont;
while (botas != -1){
    botas--;
    if (pe[botas] === "D") {
        cont = pe.length;
        while (cont != -1){
            if ((pe[botas] != pe[cont]) && (tamanho[botas] === tamanho[cont])) {
                tamanho[botas] = "";
                tamanho[cont] = "";
                pe[botas] = "";
                pe[cont] = "";
               val++;
            }
            cont--;
        }
    }
}
printf("%d",val);