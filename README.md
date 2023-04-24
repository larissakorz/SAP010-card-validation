# Cartão de Crédito Válido

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumo do projeto

# Link projeto final
(https://larissakorz.github.io/SAP010-card-validation/index.html)

BANKORZ

Foi desenvolvido um site para usuários de todo o Brasil poderem confirmar se seu cartão é válido ou não. Antes de qualquer compra em alguma loja, você poderá entrar em nosso site para verificar, basta digitar seu número de cartão, seu nome e a validade do cartão.

## 3. Desenvolvimento do projeto

Primeiro foi pensado em um layout

![preview](./src/imgs/prototipo.png)

Em seguida em um fluxograma

![preview](./src/imgs/fluxogramaCard.png)

## 4. Projeto Final

Tela inicial

![preview](./src/imgs/index.jpeg)

Após o usuário clicar no botão Clique aqui, irá para outra página, a seguir imagem da tela para verificar seu cartão

![preview](./src/imgs/card.jpeg)

Se seu cartão for válido, aparecerá um ALERT dizendo que sua compra poderá ser feita. Caso contrário, será inválido e deverá inserir novamente um número de cartão válido.

## 5. Ferramentas Utilizadas

HTML<br>
CSS<br>
JavaScript<br>
Figma<br>
Git<br>
Github<br>


