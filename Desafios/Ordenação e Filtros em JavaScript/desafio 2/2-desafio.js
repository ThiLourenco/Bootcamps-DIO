/* Desafio 
2 / 5 - Compras no Supermercado

Pedro trabalha sempre até tarde todos os dias, com isso tem pouco tempo tempo para as tarefas doméstica. Para economizar tempo ele faz a lista de compras do supermercado em um aplicativo e costuma anotar cada item na mesma hora que percebe a falta dele em casa.

O problema é que o aplicativo não exclui itens duplicados, como Pedro anota o mesmo item mais de uma vez e a lista acaba ficando extensa. Sua tarefa é melhorar o aplicativo de notas desenvolvendo um código que exclua os itens duplicados da lista de compras e que os ordene alfabeticamente.

Entrada
A primeira linha de entrada contém um inteiro N (N < 100) com a quantidade de casos de teste que vem a seguir, ou melhor, a quantidade de listas de compras para organizar. Cada lista de compra consiste de uma única linha que contém de 1 a 1000 itens ou palavras compostas apenas de letras minúsculas (de 1 a 20 letras), sem acentos e separadas por um espaço.

Saída
A saída contém N linhas, cada uma representando uma lista de compra, sem os itens repetidos e em ordem alfabética.

Exemplo de entrada        | Exemplo de saida
------------- 			      | -------------
2			  			            | carne laranja picles
carne laranja suco picles | suco
laranja picles 		      	|  laranja pera
laranja pera laranja pera pera |


// Solução JS: //

let items = [
  2,
  'carne laranja suco picles',
  'laranja picles',
  'laranja pera laranja pera pera'
];

const qtdCasos = parseInt(items[0]);
let listaCompras = [];

for (let i = 0; i < qtdCasos; i++) {
  let listaFinal = items[i + 1].split(' ').sort();
  listaCompras[i] = listaFinal.join(' ');
}

listaCompras.map((lista) => console.log(lista));
*/

// desafio

const qtdCasos = parseInt(gets());
let listaCompras = [];

for (let i = 0; i < qtdCasos; i++) {
  let listaFinal = new Set(gets().split(' ').sort());
  listaCompras[i] = Array.from(listaFinal).join(' ');
}

listaCompras.map((lista) => console.log(lista));