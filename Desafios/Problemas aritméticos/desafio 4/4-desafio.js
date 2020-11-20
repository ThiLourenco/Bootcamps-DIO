/* 
 Desafio: 4-5

Imposto de Renda

Há um país denominado Lilipute, todos os habitantes ficam felizes em pagar seus impostos, pois sabem que nele não existem políticos corruptos e os recursos arrecadados são utilizados em benefício da população, sem qualquer desvio. A moeda deste país é o Libs, cujo símbolo é o R$.

Você terá desafio de ler um valor com duas casas decimais, equivalente ao salário de uma pessoa de Libs. Em seguida, calcule e mostre o valor que esta pessoa deve pagar de Imposto de Renda, segundo a tabela abaixo.

Renda                       | Imposto de Renda
------------- 			        | -------------
de 0,00 a R$ 2000,00        |			 8 %
de 2000,01 até R$ 3000,00	  |      18 %
de 3000,01 até R$ 4500,00	  |      28 %
acima de R$ 4500,00         |

Lembre que, se o salário for R$ 3002.00, a taxa que incide é de 8% apenas sobre R$ 1000.00, pois a faixa de salário que fica de R$ 0.00 até R$ 2000.00 é isenta de Imposto de Renda. No exemplo fornecido (abaixo), a taxa é de 8% sobre R$ 1000.00 + 18% sobre R$ 2.00, o que resulta em R$ 80.36 no total. O valor deve ser impresso com duas casas decimais.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima o texto "R$" seguido de um espaço e do valor total devido de Imposto de Renda, com duas casas após o ponto. Se o valor de entrada for menor ou igual a 2000, deverá ser impressa a mensagem "Isento". 
*/

let calculo = gets()
calculo = parseFloat(calculo);

  if (calculo <= 2000) {
    console.log('Isento');
    
  } else if (calculo <= 3000) {
    primeiraFaixaSalarial = parseFloat((calculo - 2000) * 0.08);
    vlrTotalImposto = primeiraFaixaSalarial.toFixed(2);
    console.log(`R$ ${vlrTotalImposto}`);
    
  } else if (calculo <= 4500){
    aux1 = calculo - 2000;
    aux2 = calculo - 3000;
    aux2 = aux2 >= 0 ? aux2 : 0;
    segundaFaixaSalarial = parseFloat((calculo - 2000 ) - aux2) * 0.08;
    terceiraFaixaSalarial = parseFloat(calculo - 3000 )* 0.18;
    vlrTotalImposto = (segundaFaixaSalarial + terceiraFaixaSalarial).toFixed(2);
    console.log(`R$ ${vlrTotalImposto}`);
  } else {
    aux1 = calculo - 2000;
    aux2 = calculo - 3000;
    aux3 = calculo - 4500;
    aux2 = aux2 >= 0 ? aux2 : 0;
    aux3 = aux3 >= 0 ? aux3 : 0;
    segundaFaixaSalarial = parseFloat((calculo - 2000) - aux2) * 0.08;
    terceiraFaixaSalarial = parseFloat((calculo - 3000) - aux3) * 0.18;
    quartaFaixaSalarial = parseFloat(calculo - 4500) * 0.28;
    vlrTotalImposto = (segundaFaixaSalarial + terceiraFaixaSalarial + quartaFaixaSalarial).toFixed(2);
    console.log(`R$ ${vlrTotalImposto}`);
  }