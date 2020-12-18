/* Desasafio 

3 / 5 - Uniformes de final de ano

O professor Girafales organizou a confecção de um uniforme para as turmas da escola para comemorar o final do ano. Após algumas conversas, ficou decidido com os alunos que eles poderiam escolher a cor do uniforme entre branco ou vermelho. Assim sendo, Girafales precisa de sua ajuda para organizar as listas de quem quer o uniforme em cada uma das turmas, relacionando estas camisetas pela cor, tamanho (P, M ou G) e por último pelo nome.

Entrada
Cada caso de teste inicia com um valor N, (1 ≤ N ≤ 60) inteiro e positivo, que indica a quantidade de uniformes a serem feitas para aquela turma. As próximas N*2 linhas contém informações de cada um dos uniformes (serão duas linhas de informação para cada uniforme). A primeira linha irá conter o nome do estudante e a segunda linha irá conter a cor do uniforme ("branco" ou "vermelho") seguido por um espaço e pelo tamanho do uniforme "P" "M" ou "G". A entrada termina quando o valor de N for igual a zero (0) e esta valor não deverá ser processado.

Saída
Para cada caso de entrada deverão ser impressas as informações ordenadas pela cor em ordem ascendente, seguido pelos tamanhos em ordem descendente e por último por ordem ascendente de nome, conforme o exemplo abaixo.

Exemplo de entrada        | Exemplo de saida
----------------          |  ----------------
9                         | branco P Cezar Torres Mo
Maria Jose                | branco P Maria Jose
branco P                  |  branco M JuJu Mentina
Mangojata                 | branco G Adabi Finho
Mancuda                   | branco G Severina Rigudinha
vermelho P                |  vermelho P Amaro Dinha
Cezar Torres Mo           | vermelho P Baka Lhau
branco P                  | vermelho P Carlos Chade  
Baka Lhau                 | Losna
vermelho P                | vermelho P Mangojata
JuJu Mentina              | Mancuda        
branco M                  |
Amaro Dinha               |
vermelho P                |
Adabi Finho               |
branco G                  |  
Severina Rigudinha        |  
branco G                  |   
Carlos Chade Losna        |  
vermelho P                |
0                         | 

// Solução JS //

const inputValue  = [
  '9',
  'Maria Jose',
  'branco P',
  'Mangojata Mancuda',
  'vermelho P',
  'Cezar Torres Mo',
  'branco P',
  'Baka Lhau',
  'vermelho P',
  'JuJu Mentina',
  'branco M',
  'Amaro Dinha',
  'vermelho P',
  'Adabi Finho',
  'branco G',
  'Severina ',
  'branco G',
  'Carlos Chade ',
  'vermelho P',
  '0'
];

let uniform = parseInt(inputValue[0]);
let i = 1
let student = []

while (true) {
  let name = inputValue[i++];
  if (parseInt(name) === 0) 
  break;

  let [color, size] = inputValue[i++].split(' ');
  student = [...student, { name, color, size } ];
}

student.sort((a, b) => {
  for (let [testCase, sortCase] of [
    [a.color > b.color, 1],
    [a.color < b.color, -1],
    [a.size > b.size, -1],
    [a.size < b.size, 1],
    [a.name > b.name, 1],
    [a.name > b.name, -1],
  ]) {
    if (testCase) return sortCase;
  }
});

student.map(({ name, color, size }) => {
  console.log(`${color} ${size} ${name}`);
});

*/

const nUniformes = parseInt(gets());
let alunos = [];

while (true) {
  let nome = gets();
  if (parseInt(nome) === 0) break;

  let [cor, tamanho] = gets().split(' ');

  alunos = [...alunos, { nome, cor, tamanho }]
}

alunos
  .sort((a, b) => {
    for (let [testCase, sortCase] of [
      [a.cor > b.cor, 1],
      [a.cor < b.cor, -1],
      [a.tamanho > b.tamanho, -1],
      [a.tamanho < b.tamanho, 1],
      [a.nome > b.nome, 1],
      [a.nome < b.nome, -1],
    ]) {
      if (testCase) return sortCase;
    }
  })

alunos.map(({ nome, cor, tamanho }) => {
  console.log(`${cor} ${tamanho} ${nome}`);
})