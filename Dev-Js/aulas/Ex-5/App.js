const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// FOR → números de 1 a 10
console.log("Números de 1 a 10");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// WHILE → pares de 2 a 20
console.log("Pares de 2 a 20");

let n = 2;

while (n <= 20) {
  console.log(n);
  n += 2;
}

// DO WHILE → senha
function pedirSenha() {
  rl.question("Digite a senha: ", (senha) => {
    if (senha === "1234") {
      console.log("Senha correta!");
      rl.close();
    } else {
      pedirSenha();
    }
  });
}

pedirSenha();