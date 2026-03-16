// 1. Função que recebe nome e idade e retorna frase personalizada
function criarFrase(nome, idade) {
    return `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
}

// 2. Função que recebe um número e retorna o dobro
function dobro(numero) {
    return numero * 2;
}

// 3. Função que recebe dois números e retorna a soma
function soma(a, b) {
    return a + b;
}

// 4. Função que recebe um número e retorna se ele é par ou ímpar
function parOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

console.log(criarFrase("Wallas", 34)); 
console.log(dobro(7));               
console.log(soma(5, 10));              
console.log(parOuImpar(4));            
console.log(parOuImpar(7));           
