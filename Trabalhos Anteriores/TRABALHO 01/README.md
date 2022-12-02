# Trabalho 01 - Programção Aplicada 

Integrantes: Al. Matheus Vinícius e Al.Possidonio 

Engenharia: Elétrica 

## 1.Conceito 

O aplicativo que será desenvolvido se propõe a ser como um banco de dados voltado para acompanhar tanto a consistência, quanto a evolução no treinamento para a corrida de rua de atletas amadores. 
	
O usuário introduz os dados do seu planejamento semanal de corrida, classificando qual o tipo de treino: Regenerativo, Intervalado ou Longo. Nesse sentido, este informa quais treinos foram efetivados ou não, podendo indicar se houve um treino de substituição(um  intervalado trocado por uma rodagem leve, por exemplo, por conta de algum imprevisto).Nesse sentido, é exibido o volume semanal total, bem como o pace médio em cada um dos tipos de treino ao final da semana. Um gráfico seria gerado para termos visualmente a evolução do pace na faixa de tempo desejada, com uma pace de referência se necessário. 

Além disso, por uma questão de organização e otimização do acesso à informação, teríamos também um espaço no qual o corredor armazenaria as informações dos testes realizados, como, por exemplo, o teste dos 30 minutos ou o teste dos 3km. Ao consultarmos esse arquivo, uma interface exibe a evolução do atleta em cada tipo de teste à medida que estes forem atualizados. 

## 2.Função 

A função do aplicativo proposto é ajudar a gerenciar a evolução do atleta amador de corrida de rua. Por meio de ilustrações gráficas, é possível acompanharmos tanto a frequência e assiduidade nos treinos, quanto a maneira como os resultados deles se comportam. 

## 3.Motivação

A motivação para o desenvolvimento desse aplicativo vem da dificuldade de controle do quão fiel a rotina de treinos o atleta amador vem sendo e a maneira que isso interfere em sua performance. Além disso, a nível de montagem da planilha de treino, ter o resultado dos testes, de modo prático e organizado, é essencial para o treinador.

## 4.Biblioteca Gráfica do Projeto

A interface gráfica escolhida foi o JAVA.
Trata-se de uma linguagem que, assim como o C++, também possui classes e objetos.
Dessa forma, tem-se a Graphical User Interface (GUI), permitindo a comunicação homem-máquina gráfica.
Para a GUI tem-se duas bibliotecas úteis, que a princípio, serão usadas para a interface gráfica, que são:
-java.awt, Abstract Windowing Toolkit (classes básicas).
-java.swing, que oferece algumas alternativas para o java.awt(biblioteca complementar).

Para o primeiro uso do JAVA, segue o passo a passo:
1) Baixar a jdk do java de acordo com seu sistema operacional:
-site sugerido: "https://www.oracle.com/br/java/technologies/downloads/#jdk19-windows"

2) Baixar um codeblocks de acordo com sistema operacional, no caso, pode ser o visual studio code ou Intellij:
-site sugerido (Intellij): "https://www.jetbrains.com/idea/download/download-thanks.html?platform=windows&code=IIC"

OBS: Os próximos passos são para o intellij, mas podem ser seguidos de forma análoga para outro programa.

3)Instalar com a opção de instalação para programação em ".java"

OBS: Como o swing complementa o awt, a princípio, focaremos nele, logo, tem-se alguns dos componentes mais usados:
-JLabel - Exibe texto não editável ou ícones.
-JTextField – Insere dados do teclado e serve também para exibição do texto editável ou não editável.
-JButton – Libera um evento quando o usuário clicar nele com o mouse.
-JCheckBox – Especifica uma opção que pode ser ou não selecionada.
-JComboBox – Fornece uma lista de itens onde possibilita o usuário selecionar um item ou digitar para procurar.
-JList – Lista de itens onde pode ser selecionado vários itens.
-JPanel – É a área onde abriga e organiza os componentes inseridos.

4) Criar arquivo .java
5) Importar os componentes da biblioteca que serão usados. Exemplo:
- "import javax.swing.JButton
   import javax.swing.JLabel
   import javax.swing.JTextField
   import javax.swing.JFrame"
6) Criar uma classe. Exemplo (crianção de classe pública):
- "public class exemplo {}"
7) Declarar os componentes que vão ser usados na classe. Exemplo(declaracao privada):
- "private JButton btCalcular;
   private JLabel lbPrimeira;
   private JLabel lbSegunda;
   private JTextField tfNumero1;"


8) Declaração de atributos e métodos. Exemplo:
- Dentro da classe, por exemplo: "public metodo1 (){}"
9) Instanciar os componentes gráficos. Exemplo:
- "btCalcular = new Button("Calcular");"
10) Após enunciar os métodos e os argumentos, chamar a classe na main e executá-la como bem preferir.
