function calcularIMC(peso, altura) {
  if (altura === 0) {
    return 'NaN'; // Retorna "NaN" se a altura for igual a zero
  }

  const alturaMetros = altura / 100; // Converte altura de centímetros para metros
  const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2); // Calcula o IMC com duas casas decimais

  let mensagem = '';

  if (imc < 16) {
    mensagem = 'Magreza grave';
  } else if (imc >= 16 && imc < 17) {
    mensagem = 'Magreza moderada';
  } else if (imc >= 17 && imc < 18.5) {
    mensagem = 'Magreza leve';
  } else if (imc >= 18.5 && imc < 24.9) {
    mensagem = 'Peso saudável';
  } else if (imc >= 25 && imc < 29.9) {
    mensagem = 'Sobrepeso';
  } else if (imc >= 30 && imc < 34.9) {
    mensagem = 'Obesidade grau I';
  } else if (imc >= 35 && imc < 39.9) {
    mensagem = 'Obesidade grau II (severa)';
  } else {
    mensagem = 'Obesidade grau III (mórbida)';
  }

  return `IMC: ${imc} - ${mensagem}`;
}

module.exports = { calcularIMC };
