/**
 
 2 / 5 - Encontre a maior substring

Encontre a maior substring comum entre as duas strings informadas. A substring pode ser qualquer parte da string, inclusive ela toda. Se não houver subseqüência comum, a saída deve ser “0”. A comparação é case sensitive ('x' != 'X').

#### Entrada
A entrada contém vários casos de teste. Cada caso de teste é composto por duas linhas, cada uma contendo uma string. Ambas strings de entrada contém entre 1 e 50 caracteres ('A'-'Z','a'-'z' ou espaço ' '), inclusive, ou no mínimo uma letra ('A'-'Z','a'-'z').

#### Saída
O tamanho da maior subsequência comum entre as duas Strings.



|        Exemplo de Entrada       |         Exemplo de Saída        |
|---------------------------------|---------------------------------|
| abcdef                          | 2                               |
| cdofhij                         | 1                               |
| TWO                             | 0                               |
| FOUR                            | 7                               |
| abracadabra                     |                                 |
| open                            |                                 |
| Hey This java is hot            |                                 |
| java is a new paradigm          |                                 |

 */

let dados = [];
let palavra = "";

do{
  palavra = gets();
  if(palavra !== ""){
    dados.push(palavra);
  }
}while(palavra !== "");

function verificarSubstring(palavra1, palavra2){
  let contador = [];
  for(let i=0; i<=palavra1.length; i++){
    for(let j=0; j<palavra1.length; j++){
      if(palavra2.includes(palavra1.substring(i,j))){
        contador.push(palavra1.substring(i,j).length);
      }
    }
  }
  
  return Math.max(...contador);
}

for(let i=0; i<dados.length; i+=2){
  console.log(verificarSubstring(dados[i], dados[(i+1)]));
}