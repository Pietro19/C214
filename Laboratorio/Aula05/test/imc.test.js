const { expect } = require('chai')
const { calcularIMC } = require('../src/imc')

describe('Calculadora de IMC', () => {
  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80 // 80 kg
    const altura = 180 // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2)
    const IMCCalculado = calcularIMC(peso, altura)

    // Use expect para comparar o valor calculado com o valor esperado
    expect(IMCCalculado).to.equal(`IMC: ${IMEsperado} - Peso saudável`)
  })

  it('altura = 0, entrada inadequada', () => {
    const peso = 70 // 70 kg
    const altura = 0 // 0 cm

    const IMCCalculado = calcularIMC(peso, altura)

    expect(IMCCalculado).to.equal('NaN')
  })

  it('Calcula IMC e retorna mensagem de interpretação', () => {
    const peso = 70 // 70 kg
    const altura = 180 // 180 cm

    const IMC = calcularIMC(peso, altura)

    // Verifica se a mensagem de interpretação está correta
    expect(IMC).to.equal('IMC: 21.60 - Peso saudável')
  })

  it('Calcula IMC para caso de obesidade mórbida', () => {
    const peso = 150 // 150 kg
    const altura = 160 // 160 cm

    const IMC = calcularIMC(peso, altura)

    // Verifica se a mensagem de interpretação está correta
    expect(IMC).to.equal('IMC: 58.59 - Obesidade grau III (mórbida)')
  })
})
