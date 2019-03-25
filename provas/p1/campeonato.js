const vetor = [9, 3, 8, 2, 15, 13, 14, 5, 16, 11, 12, 6, 10, 7, 4, 1];
let pos1, pos2;

for (let i = 0; i < vetor.length; i++) {
    if(vetor[i] === 9) pos1 = i;
    if(vetor[i] === 1) pos2 = i;
}
if(pos1 > pos2) {
    a = pos1;
    pos1 = pos2;
    pos2 = a;
}

const par = n => !!(n % 2 === 0);
const impar = n => !!(n % 2 === 1);

const Oitavas = (pos1, pos2, next) => {
    if((par(pos1) && impar(pos2)) || (par(pos2) && impar(pos1))) {
        if(pos1 - pos2 == -1) return "Oitavas";
    }
    console.log(next(pos1, pos2, Semifinal));
}
const Quartas = (pos1, pos2, next) => {
    return ((pos1 - pos2 === -2) || (pos1 - pos2 === -3)) ? "Quartas" : next(pos1, pos2);
}
const Semifinal = (pos1, pos2) => {
    return pos1 - pos2 <= -7 ? "Semifinal" : "Final";
}
Oitavas(pos1, pos2, Quartas);