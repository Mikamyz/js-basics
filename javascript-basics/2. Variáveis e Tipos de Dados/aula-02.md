## Aula 02 - Variáveis e Tipos de Dados:

### 1 O que são variáveis e como declará-las (`var`, `let`, `const`):

Imagine uma variável como uma etiqueta que você coloca em uma caixa para lembrar o que está guardado dentro dela. Em JavaScript, uma variável é um "nome simbólico" para um valor. Usamos variáveis para armazenar dados que podem ser usados e modificados ao longo do nosso programa.

- Existem três palavras-chave principais para declarar variáveis em JavaScript:

- `var` (**legado**): Foi a forma original de declarar variáveis em JavaScript. Hoje em dia, geralmente não é a opção mais recomendada devido a algumas peculiaridades em relação ao escopo (onde a variável é acessível).

```js
var nome = "Zé Da Manga";
var idade = 18;
var temManga = false;
```

- `let` (introduzido no ES6 - ECMAScript 2015): É a forma preferida para declarar variáveis que podem ter seus valores reatribuídos (ou seja, o valor pode mudar).

```js
let nome = "Maria";
nome = "Ana"; // O valor de 'nome' foi alterado.

let contador = 0;
contador = contador + 1;
```

- `const` (introduzido no ES6): É usado para declarar variáveis cujo valor não pode ser reatribuído após a inicialização. Isso não significa que o valor em si seja imutável (especialmente se for um objeto ou array), mas sim que você não pode fazer a variável apontar para um novo valor. É uma boa prática usar `const` sempre que o valor de uma variável não precisar ser alterado.

```js
const PI = 3.14159;
// PI = 3.14; // Isso causaria um erro!

const usuario = { nome: "Carlos", idade: 25 };
usuario.idade = 26; // Isso é permitido (o objeto em si não foi reatribuído).
// usuario = { nome: "Sofia", idade: 28 }; // Isso causaria um erro!
```

- Em resumo: Use `const` por padrão para variáveis que não mudarão. Use `let` para variáveis que precisam ser reatribuídas. Evite usar `var` em código JavaScript mais moderno.

### 2. Tipos de dados primitivos:

Variáveis em JavaScript podem armazenar diferentes tipos de dados. Os tipos de dados primitivos são os blocos de construção mais básicos:

- `Number`: Representa valores numéricos, tanto inteiros (como `10`, `-5`) quanto de ponto flutuante (decimais, como `3.14`, `-0.5`).

```js
let quantidade = 10;
let preco = 9.99;
let temperatura = -5.2;
```

- `String`: Representa sequências de caracteres (texto). As `strings` são delimitadas por aspas simples (`'`) ou duplas (`"`).

```js
let mensagem = "Olá, mundo!";
let nomeDoUsuario = 'Ricardo';
let caminhoDoArquivo = "C:\\arquivos\\documento.txt"; // Use '\\' para escapar caracteres especiais
```

- `Boolean`: Representa um valor lógico que pode ser `true` (verdadeiro) ou `false` (falso). São muito usados em estruturas de controle (como `if` e `loops`).

```js
let usuarioLogado = true;
let temPermissao = false;
let maiorDeIdade = (idade > 18); // O resultado de uma comparação é um booleano.
```

- `Null`: Representa a ausência intencional de um valor. É um valor especial que indica que uma variável não tem um valor atribuído (por escolha do programador)

```js
let endereco = null; // Indica que, por enquanto, não há um endereço definido.
```

- `Undefined`: Representa um valor que ainda não foi atribuído a uma variável. Se você declara uma variável sem inicializá-la com um valor, ela terá o tipo `undefined`.

```js
let sobrenome; // 'sobrenome' é do tipo undefined.
console.log(sobrenome); // Saída: undefined
```

### 3 Operadores para trabalhar com variáveis:

Vimos alguns operadores no tópico anterior (aritméticos, de atribuição, de comparação, lógicos). Eles são essenciais para manipular os valores armazenados nas variáveis. Vamos revisitar alguns deles brevemente no contexto de variáveis:

- **Operadores de Atribuição**: O operador `=` é usado para atribuir um valor a uma variável. Outros operadores como `+=`, `-=`, `*=`, `/=`,` %=` combinam uma operação aritmética com a atribuição (por exemplo, `x += 5` é o mesmo que `x = x + 5`).

- **Operadores Aritméticos**: Usados para realizar cálculos com variáveis numéricas (`+`, `-`, `*`,` /`, `%`).

- **Operador de Concatenação** (`+`) para Strings: Quando usado com strings, o operador `+` as junta (concatena).

```js
let saudacao = "Olá, ";
let nomeUsuario = "Carlos";
let mensagemCompleta = saudacao + nomeUsuario + "!";
console.log(mensagemCompleta); // Saída: Olá, Carlos!
```

### Segundo Exercício! 🚀

1. Declare uma variável usando `let` chamada `primeiroNome` e atribua a ela seu primeiro nome (como uma string).

2. Declare uma variável usando `const` chamada 
`anoNascimento` e atribua a ela o ano em que você nasceu (como um número).

3. Declare uma variável usando `let` chamada `idadeAtual` e atribua a ela sua idade atual (como um número).

4. Declare uma variável chamada `ehEstudante` e atribua a ela um valor booleano (`true` se você é estudante, `false` caso contrário). Use `let` para esta variável, pois seu status de estudante pode mudar.

5. Use o operador de concatenação (`+`) para criar uma mensagem que combine seu primeiro nome e sua idade atual. Exiba essa mensagem no console usando `console.log()`. Por exemplo: "Meu nome é [seu primeiro nome] e eu tenho [sua idade atual] anos."

6. Crie uma nova variável chamada `anoFuturo` e atribua a ela o valor do seu `anoNascimento` somado a 5 (usando o operador `+`). Exiba o valor de `anoFuturo` no console.