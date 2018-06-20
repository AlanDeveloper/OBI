var line = 0, col= 0;
scanf("%d%d\n","line","col");
var posicao = [], f, achou = 0, i= 0; 
while (i < line*col) {
    scanf("%s\n","d2");
    posicao[i] = d2.slice(0,1);
    posicao[i+1] = d2.slice(1,2);
    posicao[i+2] = d2.slice(2,3);
    posicao[i+3] = d2.slice(3,4);
    i = i + col;
}
for (var i = 0; posicao[i] != 'o'; i++) {Move();}

function Move() {
    i++;
    while (achou != 1) {
        if (posicao[i+col] === 'H') { posicao[i] = '.';i = i + col;}
        if (posicao[i-col] === 'H') { posicao[i] = '.';i = i - col;}
        if (posicao [i+1] === 'H') { posicao[i] = '.';i++;}
        if (posicao [i-1] === 'H') { posicao[i] = '.';i--;}
        if (posicao[i+col] != 'H' && posicao[i-col] != 'H' && posicao [i+1] != 'H' && posicao [i-1] != 'H') {
            achou = 1;
            // printf('Linha %s Coluna %s', );
            printf("%d",i);
        }
    }
    printf("%d",i);
}