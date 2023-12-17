
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculadoraSoma() {
  rl.question('Digite o primeiro valor: ', (valor1) => {
    rl.question('Digite o segundo valor: ', (valor2) => {
      // Converte os valores para números
      const num1 = parseFloat(valor1);
      const num2 = parseFloat(valor2);

      // Verifica se os valores são numéricos
      if (isNaN(num1) || isNaN(num2)) {
        console.log('Por favor, insira valores numéricos válidos.');
      } else {
        // Realiza a soma
        const resultado = num1 + num2;
        console.log(`A soma de ${num1} e ${num2} é: ${resultado}`);
      }

      rl.close();
    });
  });
}

