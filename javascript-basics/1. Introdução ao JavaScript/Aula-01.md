## Aula 01 - Introdução ao JavaScript

### 1. O que é JavaScript e para que serve?

Imagine o HTML como a estrutura de uma casa (paredes, telhado, portas) e o CSS como a decoração dessa casa (cores, móveis, estilo). O JavaScript, então, seria a eletricidade, o encanamento e os aparelhos eletrônicos que dão vida e interatividade à casa.

Em termos mais técnicos, o JavaScript é uma linguagem de programação de alto nível, dinâmica e interpretada. Originalmente criada para adicionar interatividade às páginas da web, hoje em dia o JavaScript é incrivelmente versátil e pode ser usado em diversos ambientes, como:

- **Front-end** (Navegador): Tornar páginas web dinâmicas, interativas e responsivas. Isso inclui coisas como animações, formulários interativos, atualizações de conteúdo sem recarregar a página, etc.

- **Back-end** (Servidor com Node.js): Construir a lógica por trás de websites e aplicações, lidar com bancos de dados, APIs, etc.

- **Mobile** (com frameworks como React Native): Desenvolver aplicativos para Android e iOS.

- **Desktop** (com frameworks como Electron): Criar aplicativos para Windows, macOS e Linux.

Em resumo, o JavaScript serve para adicionar comportamento e dinamismo às suas criações digitais.

### 2. Como o JavaScript roda no navegador e fora dele (Node.js)?

- **No Navegador:** Quando um navegador (como Chrome, Firefox, Safari) carrega uma página HTML que contém código JavaScript, ele possui um motor JavaScript (como o V8 no Chrome e Node.js, ou o SpiderMonkey no Firefox) que interpreta e executa esse código diretamente no seu computador. É por isso que você vê coisas interativas em sites sem precisar instalar nada extra.

- **Fora do Navegador (Node.js):** O Node.js é um ambiente de execução JavaScript que permite rodar código JavaScript no seu computador, fora do contexto de um navegador. Isso abriu um leque enorme de possibilidades, permitindo que desenvolvedores JavaScript também trabalhassem no lado do servidor.

### 3. Como adicionar JavaScript em um arquivo HTML (tags ``<script>``)?

Existem duas maneiras principais de adicionar JavaScript a um arquivo HTML:

- **Internamente**: Você pode escrever o código JavaScript diretamente dentro das tags `<script>` e `</script>` no seu arquivo HTML. Geralmente, essas tags são colocadas no final do `<body>` para garantir que o HTML seja carregado primeiro.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Meu Primeiro JavaScript</title>
</head>
<body>
    <h1>Olá!</h1>
    <p id="mensagem"></p>

    <script>
        document.getElementById("mensagem").textContent = "Bem-vindo ao JavaScript!";
    </script>
</body>
</html>
```

Neste exemplo, o código JavaScript dentro das tags `<script>` pega o elemento HTML com o ID "mensagem" e muda o seu texto para "Bem-vindo ao JavaScript!".

- **Externamente**: Você pode criar um arquivo separado com a extensão `.js` (por exemplo, `script.js`) e escrever seu código JavaScript lá. Depois, você linka esse arquivo ao seu HTML usando a tag `<script>` com o atributo src apontando para o caminho do arquivo.

Arquivo `index.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Meu Primeiro JavaScript Externo</title>
</head>
<body>
    <h1>Olá novamente!</h1>
    <p id="saudacao"></p>

    <script src="script.js"></script>
</body>
</html>
```

Arquivo `script.js `
```js
document.getElementById("saudacao").textContent = "JavaScript externo funcionando!";
```

Usar arquivos externos é geralmente recomendado para organizar melhor o seu código, especialmente em projetos maiores.

### 4. Entendendo a sintaxe básica do JavaScript:

A sintaxe do JavaScript define como o código deve ser escrito para que o computador entenda. Alguns pontos importantes da sintaxe básica incluem:

Case-sensitive: JavaScript diferencia letras maiúsculas e minúsculas. nome é diferente de `Nome` e de `NOME`.
-** Ponto e vírgula** (`;`): Geralmente usado para finalizar declarações (statements) em JavaScript. Embora o ponto e vírgula possa ser omitido em algumas situações (devido à "automatic semicolon insertion" - ASI), é uma boa prática incluí-lo para evitar comportamentos inesperados.
- **Comentários**: Usados para explicar o código e torná-lo mais legível.
Comentário de uma linha: `// Isso é um comentário`.
Comentário de múltiplas linhas:

```js
/*
Este é um
comentário
de várias linhas.
*/
```

- **Blocos de código:** Agrupados por chaves `{}`. Por exemplo, em estruturas condicionais e loops.

### 5. A ferramenta `console.log()` para exibir informações:

`console.log()` é uma função fundamental em JavaScript para exibir informações no console do navegador (ou no terminal, se você estiver usando Node.js). É extremamente útil para depurar seu código, verificar valores de variáveis e entender o que está acontecendo.

Para ver o console no seu navegador, geralmente você pode pressionar a tecla `F12` ou clicar com o botão direito na página e selecionar "Inspecionar" ou "Inspecionar elemento", e então navegar até a aba "Console".

```js
let mensagem = "Olá do console!";
console.log(mensagem); // Isso irá exibir "Olá do console!" no console.
console.log("Este é outro log.");
console.log(1 + 1); // Também podemos exibir resultados de expressões.
```

### Primeiro Exercício! 🎉

Crie um arquivo HTML chamado `index.html`. Dentro desse arquivo, adicione um parágrafo com algum texto. Em seguida, utilizando a tag `<script>` dentro do `<body>`, escreva um código JavaScript que utilize `console.log()` para exibir as seguintes informações no console do seu navegador:

1. A frase: "Meu primeiro exercício de JavaScript!"
2. O resultado da soma de 5 + 3.
3. A frase: "Este é o parágrafo no HTML:", seguida do texto que você colocou no parágrafo. Para fazer isso, você precisará primeiro selecionar o elemento do parágrafo usando `document.getElementById()` (dê um id para o seu parágrafo no HTML) e depois acessar o seu conteúdo com a propriedade `.textContent`.
Depois de criar o arquivo HTML e adicionar o código JavaScript, abra o arquivo no seu navegador e verifique o que aparece no console (lembre-se de abrir o console!).