const moedas = 100;
const ciclos = [17, 13, 20, 10, 12, 16, 10, 13, 13, 10];
let contador = 0;
for (var moeda = 0; moeda < moedas;) {
    // 1 dia
    contador++;
    for (let i = 0; i < ciclos.length; i++) {
        if(contador % ciclos[i] === 0) moeda++;
    }
}
console.log(contador);