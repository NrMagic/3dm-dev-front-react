// Declarando variáveis
let nome = "Lucas";
let idade = 25;
let cidade = "São Paulo";

// Dois números
let numero1 = 10;
let numero2 = 5;

// Frase usando concatenação
let fraseConcatenada = "Meu nome é " + nome + " e tenho " + idade + " anos.";
console.log(fraseConcatenada);
document.getElementById("frase").textContent = fraseConcatenada;

// Operações matemáticas
let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;

let resultadoOperacoes = 
    "Soma: " + soma + 
    " | Subtração: " + subtracao + 
    " | Multiplicação: " + multiplicacao + 
    " | Divisão: " + divisao;

console.log(resultadoOperacoes);
document.getElementById("operacoes").textContent = resultadoOperacoes;

// Frase usando template string
let fraseTemplate = `Eu moro em ${cidade}.`;
console.log(fraseTemplate);
document.getElementById("template").textContent = fraseTemplate;
