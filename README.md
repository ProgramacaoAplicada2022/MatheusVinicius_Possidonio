# Steganographer_v1
# Cap William e Ten Adrian

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

# Biblioteca Gráfica
Para realizar esse objetivo, foi utilizado um framework do Javascript, chamado de Next.js. Através dele, é possível criar o frontend e backend de um site de forma intuitiva e rápida, servindo de interface para usuários poderem acompanhar. 

## Pre-requisitos
Para poder utilizar esta biblioteca escrita em javascript, é necessário ter algum compilador de javascript na máquina. Como o Javascript é desenvolvido por Browsers, para poder criar uma aplicação num contexto externo a ele, foi instalado o Node.js (Consiste em uma implementação da engine de Javascript do Chrome para o desktop).

Para instalar o Node.js na máquina, basta o baixar o link abaixo (Windows x64):
https://nodejs.org/dist/v18.12.1/node-v18.12.1-x64.msi

Para verificar se foi instalado corretamente, rode "node -v" no terminal, onde deverá responder a versão instalada.

## Instalando a Biblioteca
O Node.js vem com um administrador de pacotes (npm), através do qual consegue baixar bibliotecas e suas dependências.
Para instalar o Next.js, apenas caso esteja criando um novo projeto basta:

$$npm install react react-dom next$$

# Tutorial:
 Para colocar o programa para rodar, é necessário:
 
  1- Instale o interpretador python e adicione python nas variáveis de ambiente. 

  2- No ambiente com python instalado, instale a biblioteca kivy com o comando:  "python -m pip install kivy"
    
  3- No ambiente com python instalado, instale a biblioteca PIL com o comando: "python -m pip install pillow"

  4- Baixe o programa e rode o arquivo main: estando no diretório dos arquivos baixados execute o comando “python main.py”
  
Como mencionado acima, a biblioteca utilizada para interface gráfica é a kivy.

# Esboço:

A pagina inicial do app é demonstrada abaixo:

![pagina_inicial](https://user-images.githubusercontent.com/115323969/200091292-603558ae-2952-4572-9d5a-2d30426ad7c7.png)



Com app aberto, o usuário deve selecionar uma imagem a seu critério. para fins de demonstração, será realizada a ocultação 
de uma mensagem e em seguida revelada. Abaixo, encontra-se o app com a imagem selecionada. Para este exemplo, foi utilizada 
uma imagem com a fachada do IME.

![escolha_da_imagem](https://user-images.githubusercontent.com/115323969/200091373-e0dc0282-97dd-445b-bbdf-2dad67abe798.png)


Digitação da senha e da mensagem a ser ocultada.

![imagem_oculta](https://user-images.githubusercontent.com/115323969/200091384-06780001-bc56-45c4-95f5-423c9a77722b.png)


Após ocultar uma imagem, o app salva como uma nova imagem, no local de arquivo onde se encontra a imagem original,
uma nova imagem cujo nome será "nomeoriginalv2.png". Tal ocorrência é verificada abaixo.

![pasta_nv_img](https://user-images.githubusercontent.com/115323969/200091391-837662d2-1443-43c7-a4b7-76b7525fc412.png)


Para revelar a mensagem, basta selecionar a imagem que contem a mensagem oculta e utilizar a mesma senha a qual 
foi utilizada para ocultar a mensagem como pode ser visto a seguir:

![revelar](https://user-images.githubusercontent.com/115323969/200091400-84aa189d-e53a-4a0a-90d5-054a791581c7.png)

Assim, obtém-se a mensagem revelada.

![msg_revelada](https://user-images.githubusercontent.com/115323969/200091409-8534c78f-dd63-48cd-97b7-efe861718562.png)

