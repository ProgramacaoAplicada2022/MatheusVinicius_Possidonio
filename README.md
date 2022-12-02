# Repositorio do TODO App
# Matheus Vinicius e Possidonio

# Proposta do Projeto:

Interface de acompanhamento de treinos no estilo planner. Interface em Javascript em browser por intermédio de acesso à internet.

## Conceito 

O interface que será desenvolvida se propõe a ser como um banco de dados voltado para acompanhar tanto a consistência, quanto a evolução no treinamento para a corrida de rua de atletas amadores. 
	
O usuário introduz seu treino, como por exemplo: corrida longa, treino de perna ou treino de costas. Após isso o usuário pode também adicionar características do treino a serem cumpridas. Nesse sentido, de forma gráfica, a atividade pode ser adicionada, podendo ser marcada como completada ou pendente a fim de representar ao usuário a evolução do treino além de servir como lembrete do que deve ser feito, auxiliando no controle do volume de treino do usuário.


## Função 

A função do aplicativo proposto é ajudar a gerenciar a evolução do atleta amador de corrida de rua. Por meio de ilustrações gráficas, é possível acompanharmos tanto a frequência e assiduidade nos treinos, quanto a maneira como os resultados deles se comportam. 

## Motivação

A motivação para o desenvolvimento desse aplicativo vem da dificuldade de controle do quão fiel a rotina de treinos o atleta amador vem sendo e a maneira que isso interfere em sua performance. Além disso, a nível de montagem da planilha de treino, ter o resultado dos testes, de modo prático e organizado, é essencial para o treinador. Além disso, a extrema facilidade de acesso a interface devido à necessidade somente de navegador e internet permite que o usuário possa acompanhar seus treinos por diferentes meios.

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
