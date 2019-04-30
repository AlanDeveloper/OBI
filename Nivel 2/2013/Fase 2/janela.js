// A sala de aulas utilizada para os cursos da OBI tem uma grande janela, composta de três folhas de vidro. A janela tem um metro de altura por seis metros de comprimento. Cada folha da janela tem um metro de altura e dois metros de comprimento. As folhas deslizam sobre trilhos, ao longo do comprimento da janela, de forma que é possível controlar a abertura da janela, para circulação de ar.

// Dadas as posições das três folhas da janela, deseja-se determinar qual a área da janela que está aberta, em centímetros quadrados.

// A figura abaixo ilustra duas configurações das folhas da janela. Na figura, os cantos inferiores esquerdos de cada folha são indicados por F1, F2 e F3. Na configuração (a) a janela está totalmente fechada, e portanto o total da área aberta é igual a zero. Na configuração (b) há duas aberturas, e o total de área aberta é igual a (100 x 100) + (50 x 100) = 15.000 cm^2.

var f1, f2, f3, resultado = 0, relativo = [];
scanf("%d", "f1");
scanf("%d", "f2");
scanf("%d", "f3");
if (f1 < 200 || f2 < 200 || f3 < 200) {
    if (f1 < 200) {resultado = f1 * 100 + resultado;}
    if (f2 < 200) {resultado = f2 * 100 + resultado;}
    if (f3 < 200) {resultado = f3 * 100 + resultado;}
} else {resultado = 100 * 200;}
if (((f1+200) >= 200 && (f1+200) < 400) || ((f2+200) >= 200 && (f2+200) < 400) || ((f3+200) >= 200 && (f3+200) < 400)) {
    if ((f1+200) > 200) {relativo[0] = (f1  * 100);}
    if ((f2+200) > 200) {relativo[1] = (f2 * 100);}
    if ((f3+200) > 200) {relativo[2] = (f3 * 100);}
    if (relativo[0] <= relativo [1] && relativo[0] <= relativo [2]) resultado = relativo[0];
    if (relativo[1] <= relativo [0] && relativo[1] <= relativo [2]) resultado = relativo[1];
    if (relativo[2] <= relativo [0] && relativo[2] <= relativo [1]) resultado = relativo[2];
} else {resultado = 100 * 200 + resultado;}
if (((f1+400) >= 400 && (f1+400) < 600) || ((f2+400) >= 400 && (f2+400) < 600) || ((f3+400) >= 400 && (f3+400) < 600)) {
    if ((f1+400) > 400) {resultado = (f1  * 100) + resultado;}
    if ((f2+400) > 400) {resultado = (f2 * 100) + resultado;}
    if ((f3+400) > 400) {resultado = (f3 * 100) + resultado;}
} else {resultado = 100 * 200 + resultado;}

printf("%d", resultado);
//
var f1, f2, f3, resultado = 0, relativo = [];
scanf("%d", "f1");
scanf("%d", "f2");
scanf("%d", "f3");

if (f1 < 200 || f2 < 200 || f3 < 200) {
    if (f1 < 200) {relativo[0] = f1 * 100;} else {relativo[0] = 200}
    if (f2 < 200) {relativo[1] = f2 * 100;} else {relativo[1] = 200}
    if (f3 < 200) {relativo[2] = f3 * 100;} else {relativo[2] = 200}
    if (relativo[0] <= relativo [1] && relativo[0] <= relativo [2]) resultado = relativo[0];
    if (relativo[1] <= relativo [0] && relativo[1] <= relativo [2]) resultado = relativo[1];
    if (relativo[2] <= relativo [0] && relativo[2] <= relativo [1]) resultado = relativo[2];
} else {resultado = 100 * 200;}
if (f1 >= 200 && f1 < 400 || f2 >= 200 && f2 < 400 || f3 >= 200 && f3 < 400) {
    if (f1 >= 200) {relativo[0] = (f1-200) * 100;} else {relativo[0] = 200}
    if (f2 >= 200) {relativo[1] = (f2-200) * 100;} else {relativo[1] = 200}
    if (f3 >= 200) {relativo[2] = (f3-200) * 100;} else {relativo[2] = 200}
    if (relativo[0] <= relativo [1] && relativo[0] <= relativo [2]) resultado = relativo[0];
    if (relativo[1] <= relativo [0] && relativo[1] <= relativo [2]) resultado = relativo[1];
    if (relativo[2] <= relativo [0] && relativo[2] <= relativo [1]) resultado = relativo[2];
} else {resultado = 100 * 200 + resultado;}


//
// A sala de aulas utilizada para os cursos da OBI tem uma grande janela, composta de três folhas de vidro. A janela tem um metro de altura por seis metros de comprimento. Cada folha da janela tem um metro de altura e dois metros de comprimento. As folhas deslizam sobre trilhos, ao longo do comprimento da janela, de forma que é possível controlar a abertura da janela, para circulação de ar.

// Dadas as posições das três folhas da janela, deseja-se determinar qual a área da janela que está aberta, em centímetros quadrados.

// A figura abaixo ilustra duas configurações das folhas da janela. Na figura, os cantos inferiores esquerdos de cada folha são indicados por F1, F2 e F3. Na configuração (a) a janela está totalmente fechada, e portanto o total da área aberta é igual a zero. Na configuração (b) há duas aberturas, e o total de área aberta é igual a (100 x 100) + (50 x 100) = 15.000 cm^2.

var f1, f2, f3, resultado = 600, maior = 0;relativo = [];
scanf("%d", "f1");
scanf("%d", "f2");
scanf("%d", "f3");

if (f1 < f2 && f1 < f3) {
    if (f2 < f3) {
        resultado = resultado - (f2 - f1);
        maior = f3;
    } else {
        resultado = resultado - (f3 - f1);
        maior = f2;
    }
}
printf("%d",resultado);
if (f2 <= f1 && f2 < f3) {
    if (f1 < f3) {
        resultado = resultado - (f1 - f2);
        maior = f3;
    } else {
        resultado = resultado - (f3 - f2);
        maior = f1;
    }
}
printf("%d",resultado);
if (f3 <= f2 && f3 <= f1) {
    if (f2 <= f1) {
        resultado = resultado - (f2 - f3);
        maior = f1;
    } else {
        resultado = resulztado - (f1 - f3);
        maior = f2;
    }
}
resultado = resultado - maior;
printf("%d",resultado);