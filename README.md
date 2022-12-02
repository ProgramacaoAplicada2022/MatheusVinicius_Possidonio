# Repositorio do TODO App
# Mestre Possi e Corno Vini

# Proposta do Projeto:

Estegnografia de mensagem de texto em imagem. App em python.

## Conceito 

O aplicativo que será desenvolvido se propõe a ser como um banco de dados voltado para acompanhar tanto a consistência, quanto a evolução no treinamento para a corrida de rua de atletas amadores. 
	
O usuário introduz os dados do seu planejamento semanal de corrida, classificando qual o tipo de treino: Regenerativo, Intervalado ou Longo. Nesse sentido, este informa quais treinos foram efetivados ou não, podendo indicar se houve um treino de substituição(um  intervalado trocado por uma rodagem leve, por exemplo, por conta de algum imprevisto).Nesse sentido, é exibido o volume semanal total, bem como o pace médio em cada um dos tipos de treino ao final da semana. Um gráfico seria gerado para termos visualmente a evolução do pace na faixa de tempo desejada, com uma pace de referência se necessário. 

Além disso, por uma questão de organização e otimização do acesso à informação, teríamos também um espaço no qual o corredor armazenaria as informações dos testes realizados, como, por exemplo, o teste dos 30 minutos ou o teste dos 3km. Ao consultarmos esse arquivo, uma interface exibe a evolução do atleta em cada tipo de teste à medida que estes forem atualizados. 

## Função 

A função do aplicativo proposto é ajudar a gerenciar a evolução do atleta amador de corrida de rua. Por meio de ilustrações gráficas, é possível acompanharmos tanto a frequência e assiduidade nos treinos, quanto a maneira como os resultados deles se comportam. 

## Motivação

A motivação para o desenvolvimento desse aplicativo vem da dificuldade de controle do quão fiel a rotina de treinos o atleta amador vem sendo e a maneira que isso interfere em sua performance. Além disso, a nível de montagem da planilha de treino, ter o resultado dos testes, de modo prático e organizado, é essencial para o treinador.

# Diagrama de Classes e Relacionamentos

# Repositório do Projeto

É este que se encontra :)

# Biblioteca Gráfica
Para realizar esse objetivo, foi utilizado um framework do Javascript, chamado de Next.js. Através dele, é possível criar o frontend e backend de um site de forma intuitiva e rápida, servindo de interface para usuários poderem acompanhar. Na prática, ele gera HTML, CSS e Javascript para o Browser ou outra interpretador de HTML representar.

## Pre-requisitos
Para poder utilizar esta biblioteca escrita em javascript, é necessário ter algum compilador de javascript na máquina. Como o Javascript é desenvolvido por Browsers, para poder criar uma aplicação num contexto externo a ele, foi instalado o Node.js (Consiste em uma implementação da engine de Javascript do Chrome para o desktop).

Para instalar o Node.js na máquina, basta o baixar o link abaixo (Windows x64):
https://nodejs.org/dist/v18.12.1/node-v18.12.1-x64.msi

Para verificar se foi instalado corretamente, rode "node -v" no terminal, onde deverá responder a versão instalada.

## Instalando a Biblioteca
O Node.js vem com um administrador de pacotes (npm), através do qual consegue baixar bibliotecas e suas dependências.
Para instalar o Next.js, apenas caso esteja criando um novo projeto, basta escrever (no prompt de comando) na pasta em que deseja desenvolver seu aplicativo:

> npm install react react-dom next

Para códigos já prontos, para obter todas bibliotecas utilizadas, basta escrever no prompt de comando, na pasta onde tiver o aplicativo (ou seja, onde tiver o package.json) o seguitne comando:

> npm install

Ao rodar, um dos códigos acima, perceberá uma pasta "node_modules", onde estão armazenadas todas bibliotecas instaladas.

# Esboço GUI Projeto

# Rodando o código:
  1- Caso não tenha feito, baixe as bibliotecas necessárias, rodando no terminal, na pasta "App":
	> npm install
  2- Iniciar o servidor Next.js:
  	> npm run dev
  3- No terminal, será apresentado o "url" para acessar o aplicativo. Normalmente é "http://localhost:3000".

  4- Acesse o URL, utilizando algum Browser ou interpretador. Ex: Chrome.
  
  5- Como aplicativo utiliza armazenamento na nuvem e para realizar o login e poder utilizar o aplicativo é necessário ter acesso a internet (serviço do Firebase).
