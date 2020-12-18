/*
1 / 5 - Ordenando Números Pares e Ímpares

Crie um programa onde você receberá valores inteiros não negativos como entrada.

Ordene estes valores de acordo com o seguinte critério:

Primeiro os Pares
Depois os Ímpares
Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.

Entrada
A primeira linha de entrada contém um único inteiro positivo N (1 < N < 10000) Este é o número de linhas de entrada que vem logo a seguir. As próximas N linhas terão, cada uma delas, um valor inteiro não negativo.

Saída
Exiba todos os valores lidos na entrada segundo a ordem apresentada acima. Cada número deve ser impresso em uma linha, conforme exemplo de saída abaixo.

Exemplo de entrada  | Exemplo de saida
------------- 			| -------------
10				  			  | 4
4	  		        	  | 32
32	  		      	  | 34
543                 | 654
3456                | 3456
654                 | 6789
567                 | 567
87                  | 543
6789                | 87
98

// Solução JS: //

const values = [
  '10',
  '4',
  '32',
  '543',
  '3456',
  '654',
  '567',
  '87',
  '6789',
  '98'
]

const valueInput = parseInt(values[0]);
let aux = [];

for (let i = 0; i < valueInput; i++) {
  aux = [...aux, values[i + 1]];
}

aux = aux.sort((x, y) => x - y);

const even = aux.filter(n => n % 2 === 0);
const odd = aux.filter(n => n % 2 === 1).reverse();

const result = [...even, ...odd];

result.map((n) => console.log(n));

*/

const valueInput = parseInt((gets()));
let aux = [];

for (let i = 0; i < valueInput; i++) {
  aux = [...aux, gets()];
}

aux = aux.sort((x, y) => x - y);

const even = aux.filter(n => n % 2 === 0);
const odd = aux.filter(n => n % 2 === 1).reverse();

const result = [...even, ...odd];

result.map((n) => console.log(n));