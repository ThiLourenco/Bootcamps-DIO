/**
 
1 / 5 - Ordenação de palavras por tamanho

Crie um algoritmo para ordenar um conjunto de palavras pelo seu tamanho. Seu programa deve receber um conjunto de palavras e retornar este mesmo conjunto ordenado pelo tamanho das palavras decrescente, se o tamanho das palavras for igual, deve-se ordernar por ordem alfabética.

#### Entrada
A primeira linha da entrada possui um único inteiro N, que indica o número de casos de teste. Cada caso de teste poderá conter de 1 a 50 palavras inclusive, e cada uma das palavras poderá conter entre 1 e 50 caracteres inclusive. Os caracteres poderão ser espaços, letras, ou números.

#### Saída
A saída deve conter o conjunto de palavras da entrada ordenado pelo tamanho das palavras e caso o tamanho das palavras for igual, deve-se ordernar por ordem alfabética.. Um espaço em branco deve ser impresso entre duas palavras.


|        Exemplo de Entrada       |         Exemplo de Saída        |
|---------------------------------|---------------------------------|
| 2                               |                                 |
| One three four mond at midnight | midnight three four mond One at |
| one three five                  | three five one                  |

// Solução JS // 


const N = 2 // qtd array

const input = ['One three four mond at midnight', 'one three five']

for (let i = 0; i < N; i++) {
  const words = input[i].split(' ', 50);
  const filteredWords = words.filter(word => new RegExp(/^[A-Za-z0-0]{1,50}$/).test(word));
  //console.log('FilteredWords:', filteredWords)
  const sortedWords = filteredWords.sort((a, b) => {
    if (a.length > b.length) return -1
    if (a.length < b.length) return 1
    if (b.length === a.length) {
      //console.log('Array a, b', a, b);
      return a.localeCompare(b, 'en', { sensitivity: 'base'} );

    } else return b.length - a.length;
  });

  console.log('Join dos array:', sortedWords.join(' '));
}

*/

let casos = gets();
let palavras = [];

for(let i=0; i<casos; i++){
  palavras.push(gets().split(" "));
}

for(let i=0; i<casos; i++){
  palavras[i].sort((a, b) => {
    if(a.length > b.length){
      return 1;
    }
    else{
      if(a.length === b.length){
        if(a < b){
          return 1
        }
        else{
          return -1;
        }
      }
      else{
        return -1;
      }
    }
  }).reverse();
}

let aux = "";
for(let i=0; i<palavras.length; i++){
  let valor = "";
  for(let j=0; j<palavras[i].length; j++){
    if(j<=palavras[i].length-1){
      aux= " ";
    }
    else{
      aux="";
    }
    valor+=palavras[i][j] + aux;
  }
  console.log(valor);
}