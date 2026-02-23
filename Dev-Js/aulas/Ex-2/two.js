// Declaração de variáveis de diferentes tipos
let texto = "123";           // string
let numero = 10;             // number
let decimal = 5.5;           // number (float)


// Mostrando o tipo de cada variável no console
console.log("texto:", typeof texto);
console.log("numero:", typeof numero);
console.log("decimal:", typeof decimal);


// =========================
// Conversões de tipo
// =========================

// 1. De string para número
let stringParaNumero = Number(texto);
console.log("String para Número:", stringParaNumero, "-", typeof stringParaNumero);

// 2. De número para string
let numeroParaString = String(numero);
console.log("Número para String:", numeroParaString, "-", typeof numeroParaString);

// 3. De número para boolean
let numeroParaBoolean = Boolean(numero);
console.log("Número para Boolean:", numeroParaBoolean, "-", typeof numeroParaBoolean);

/*
Diferença entre == e ===

==  → Compara apenas o valor, fazendo conversão automática de tipo (coverção).
Exemplo: 5 == "5" → true

=== → Compara valor E tipo, sem fazer conversão.
Exemplo: 5 === "5" → false

Ou seja, === é mais seguro, pois evita comparações inesperadas.
*/
