/*
Contagem de Cédulas = 4 / 5

Desafio
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.

Entrada
Você receberá um valor inteiro N (0 < N < 1000000).

Saída
Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.

Exemplo: 

let valor = 576
let cedulas = [100, 50, 20, 10, 5, 2, 1];
let numCedulas = [0, 0, 0, 0, 0, 0, 0];
let total = valor;

while (total >= 1) {
  let cedula = cedulas.findIndex(value => value <= total);
  numCedulas[cedula] = Math.trunc(total / cedulas[cedula]);
  total = total % cedulas[cedula];
}

console.log(valor);
console.log(numCedulas[0] + " nota(s) de R$ 100,00");
console.log(numCedulas[1] + " nota(s) de R$ 50,00");
console.log(numCedulas[2] + " nota(s) de R$ 20,00");
console.log(numCedulas[3] + " nota(s) de R$ 10,00");
console.log(numCedulas[4] + " nota(s) de R$ 5,00");
console.log(numCedulas[5] + " nota(s) de R$ 2,00");
console.log(numCedulas[6] + " nota(s) de R$ 1,00");
 
*/

let valor = gets();
let cedulas = [100, 50, 20, 10, 5, 2, 1];
let numCedulas = [0, 0, 0, 0, 0, 0, 0];
let total = valor;

while (total >= 1) {
  let cedula = cedulas.findIndex(value => value <= total);
  numCedulas[cedula] = Math.trunc(total / cedulas[cedula]);
  total = total % cedulas[cedula];
}

console.log(valor);
console.log(numCedulas[0] + " nota(s) de R$ 100,00");
console.log(numCedulas[1] + " nota(s) de R$ 50,00");
console.log(numCedulas[2] + " nota(s) de R$ 20,00");
console.log(numCedulas[3] + " nota(s) de R$ 10,00");
console.log(numCedulas[4] + " nota(s) de R$ 5,00");
console.log(numCedulas[5] + " nota(s) de R$ 2,00");
console.log(numCedulas[6] + " nota(s) de R$ 1,00");