/*Desafio

Análise de Números 3 / 5

Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.

Entrada
Você receberá 5 valores inteiros.

Saída
Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.

-5
0
-3
-4
12

3 valor(es) par(es)
2 valor(es) impar(es)
1 valor(es) positivo(s)
3 valor(es) negativo(s)

Exemplo Solução JS: 

let numeros = [-5, 0, -3, -4, 12 ];
let vlrsPos = numeros.filter(value => value > 0 );
let vlrsNeg = numeros.filter(value => value < 0 );
let vlrsImpar = numeros.filter(value => value % 2 !== 0);
let vlrsPar = numeros.filter(value => value % 2 === 0);

console.log(vlrsPar.length + ' valor(es) par(s)');
console.log(vlrsImpar.length + ' valor(es) impar(s)');
console.log(vlrsPos.length + ' valor(es) positivo(s)');
console.log(vlrsNeg.length + ' valor(es) negativo(s)');

*/


numero = Array(5);
numero[0] = gets();
numero[1] = gets();
numero[2] = gets();
numero[3] = gets();
numero[4] = gets();
positivos = numero.filter(value => value > 0);
negativos = numero.filter(value => value < 0);
pares = numero.filter(value => value % 2 == 0);
impares = numero.filter(value => value % 2 != 0);
console.log(pares.length + " valor(es) par(es)");
console.log(impares.length + " valor(es) impar(es)");
console.log(positivos.length + " valor(es) positivo(s)");
console.log(negativos.length + " valor(es) negativo(s)");