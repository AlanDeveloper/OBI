var line = 0, col = 0;
scanf("%d%d", "line", "col");
var vetor = [], string = '', achou = 0, i = 0, i2 = 0;
while ( i < col*line) {
    scanf("%s\n", "string");
    while (i2 != string.length){
        vetor[i2] = string.charAt(i2);
        i2++;
    }
    i2 = 0;
    i = i + col;
}
vetor.slice(0,vetor.length-1);
for (var i = 0; vetor[i] != 'o'; i++) {}
while (achou != 1) {
    if (vetor[i + col] === 'H') {
        vetor[i + col] = 'o';
        vetor[i] = '.';
        i = i + col;
    }
    if (vetor[i - col] === 'H') {
        vetor[i - col] = 'o';
        vetor[i] = '.';
        i = i - col;
    }
    if (vetor[i + 1] === 'H') {
        vetor[i + 1] = 'o';
        vetor[i] = '.';
        i = i + 1;
    }
    if (vetor[i - 1] === 'H' && i % col != 0) {
        vetor[i - 1] = 'o';
        vetor[i] = '.';
        i = i - 1;
    }
    printf("%d",i);
    if (vetor[i + col] != 'H' && vetor[i - col] != 'H' && vetor[i + 1] != 'H' && vetor[i - 1] != 'H') {achou++;}
}
line = i / line;
col = (i % col) + 1;
printf("%d%d", line, col);
// console.log('Line: ' + (i / line).toFixed(0) + ' Col: '+ (i % col + 1));