# Repositorio do TODO App
# Matheus Vinicius e Possidonio

# Proposta do Projeto:

Interface de acompanhamento de treinos no estilo planner. Interface em Javascript em browser por intermédio de acesso à internet.

## Conceito 

O interface que será desenvolvida se propõe a ser como um banco de dados voltado para acompanhar tanto a consistência, quanto a evolução no treinamento para a corrida de rua de atletas amadores. 
	
O usuário introduz seu treino, como por exemplo: corrida longa, treino de perna ou treino de costas. Após isso o usuário pode também adicionar características do treino a serem cumpridas. Nesse sentido, de forma gráfica, a atividade pode ser adicionada, podendo ser marcada como completada ou pendente a fim de representar ao usuário a evolução do treino além de servir como lembrete do que deve ser feito, auxiliando no controle do volume de treino do usuário.


## Função 

A função do aplicativo proposto é ajudar a gerenciar a evolução do atleta amador de corrida de rua. Por meio de interfaces gráficas o usuário pode acompanhar seus treinos pendentes e completos de maneira a auxiliar no controle de treino.


## Motivação

A motivação para o desenvolvimento desse aplicativo vem da dificuldade de controle do quão fiel a rotina de treinos o atleta amador vem sendo e a maneira que isso interfere em sua performance. Além disso, a nível de montagem da planilha de treino, ter o resultado dos testes, de modo prático e organizado, é essencial para o treinador. Além disso, a extrema facilidade de acesso a interface devido à necessidade somente de navegador e internet permite que o usuário possa acompanhar seus treinos por diferentes meios.

# Diagrama de Classes e Relacionamentos

## Fluxograma:

![image](https://user-images.githubusercontent.com/105819232/205303050-a57f3cad-8223-42ca-9ffc-38699e86cc65.png)


## Diagrama de classes:

![image](https://user-images.githubusercontent.com/115589012/205313049-94f2447f-fa81-4c69-b7d9-368ddde6be17.png)


# Repositório do Projeto

É este que se encontra :)

# Biblioteca Gráfica
Para realizar esse objetivo, foi utilizado um framework do Javascript, chamado de Next.js. Através dele, é possível criar o frontend e backend de um site de forma intuitiva e rápida, servindo de interface para usuários poderem acompanhar. Na prática, ele gera HTML, CSS e Javascript para o Browser ou outra interpretador de HTML representar.

## Pre-requisitos
Para poder utilizar esta biblioteca escrita em javascript, é necessário ter algum compilador de javascript na máquina. Como o Javascript é desenvolvido por Browsers, para poder criar uma aplicação num contexto externo a ele, foi instalado o Node.js (Consiste em uma implementação da engine de Javascript do Chrome para o desktop).

Para instalar o Node.js na máquina, basta o baixar o link abaixo (Windows x64):
https://nodejs.org/dist/v18.12.1/node-v18.12.1-x64.msi

Para verificar se foi instalado corretamente, rode "node -v" no terminal, onde deverá responder a versão instalada.

Além do acesso internet, tem-se como pré-requisito possuir uma conta do google para fazer login na aplicação.

## Instalando a Biblioteca
O Node.js vem com um administrador de pacotes (npm), através do qual consegue baixar bibliotecas e suas dependências.
Para instalar o Next.js, apenas caso esteja criando um novo projeto, basta escrever (no prompt de comando) na pasta em que deseja desenvolver seu aplicativo:

> npm install react react-dom next

Para códigos já prontos, para obter todas bibliotecas utilizadas, basta escrever no prompt de comando, na pasta onde tiver o aplicativo (ou seja, onde tiver o package.json) o seguitne comando:

> npm install

Ao rodar, um dos códigos acima, perceberá uma pasta "node_modules", onde estão armazenadas todas bibliotecas instaladas.

# Esboço GUI Projeto

A página inicial da interface é dada por:
![image](https://user-images.githubusercontent.com/105819232/205304282-3a300b5d-95a8-46af-b1ea-dcf1ddd341e8.png)


Para fazer o Login, basta clicar em "Login with Google", no canto superior direito, utilizando uma extensão do google, já descrita no código, dessa forma, basta somente logar com a conta do google:
![image](https://user-images.githubusercontent.com/105819232/205304568-51ccc712-5fe9-4392-9a4d-cc3088894a0a.png)


Aparecerá uma aba na qual o usuário pode fazer login com uma de suas contas google, ou até mesmo criar uma:
![image](https://user-images.githubusercontent.com/105819232/205305193-02e1f361-a44c-4f26-878d-2c315ab1124e.png)

Após logado, o usuário pode adicionar um treino e uma descrição, bastando descrever o treino e a descrição nas áreas para eles indicadas, escolher a opção de andamendo do treino, se ele será "pendente" ou "completado" e clicar em adicionar treino, de maneira respectiva aos espaços, de cima para baixo:
![image](https://user-images.githubusercontent.com/105819232/205305598-57d6bee1-a4a4-49dd-8603-77619525af2d.png)

O treino será adicionado como PENDENTE e aparecerá uma mensagem indicando que o treino foi adicionado:
![image](https://user-images.githubusercontent.com/105819232/205305753-d2cd4103-e081-4b56-847d-ba0d2da5622b.png)

O treino também pode ser marcado como completado, aparecendo uma mensagem indicando que o treino foi completado, bastando clicar na alavanca gráfica localizada ao lado de "pendente", podendo também desmarcar a opção de completado desativando a mesma alavanca:
![image](https://user-images.githubusercontent.com/105819232/205306305-b03596bf-0d1c-4617-8a06-22495f103891.png)

O treino pode ser ainda deletado clicando na opção de deletar, indicada como uma lixeira vermelha dentro da box do treino adicionado, precisando ainda confirmar que deseja deletar o treino na box que aparecerá, após o treino ser deletado aparecerá a mensagem indicada na segunda imagem abaixo anexada:
![image](https://user-images.githubusercontent.com/105819232/205307953-0a952151-b23b-46f5-8fce-45be22f36dbd.png)
![image](https://user-images.githubusercontent.com/105819232/205308158-87b07cf4-92a8-4fad-96f9-c25954416de3.png)


O projeto pode ainda ser colocado no modo escuro ou modo claro, bastando clicar, acima do login, na opção de "Lua" ou de "Sol" para alternar o tema da aplicação:

![image](https://user-images.githubusercontent.com/105819232/205308602-4ec7c63e-456c-4dc9-884b-a4d115956704.png)

Além disso, para fazer o logout, basta clicar na opção de logut, indicada em vermelho.








# Rodando o código:
1- Caso não tenha feito, baixe as bibliotecas necessárias, rodando no terminal, na pasta "App":
> npm install

2- Iniciar o servidor Next.js:
> npm run dev
  
3- No terminal, será apresentado o "url" para acessar o aplicativo. Normalmente é "http://localhost:3000".

4- Acesse o URL, utilizando algum Browser ou interpretador. Ex: Chrome.
  
5- Como aplicativo utiliza armazenamento na nuvem e para realizar o login e poder utilizar o aplicativo é necessário ter acesso a internet (serviço do Firebase).

# Código Funcional do Projeto

O código funcional já se encontra na pasta "App" presente na documentação.
