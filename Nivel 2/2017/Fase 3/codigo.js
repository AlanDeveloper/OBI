scanf("%d","x");
var vetor = [], cont = 2, par1, par2, ok = 'ok';
for (var i = 0; i !== x; i++) {
    scanf("%s","vetor[" + i + "]");
}
for (var i = 0; i < vetor.length; i++) {
    Court(vetor[i], vetor[i].length, i);
}

function Court(vet, len, v) {
    while (cont != len) {
        par1 = vet.slice(0,cont);
        par2 = vet.slice(cont,len);
        if (cont === len) par2 = '';
        Search(par1, par2, v);
        cont++;
    }
    cont = 0;
}
function Search(par1, par2, v) {
    for (var i = 0; i < vetor.length; i++) {
        if (i === v) i++;
        if (vetor[i].indexOf(par1) > -1 && vetor[i].indexOf(par2) > -1) { ok = vetor[i];}
    }
}

printf("%s", ok);