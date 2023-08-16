class Filme {
  constructor(titulo, ano, genero, duracao, assistido, avaliacao) {
    this.titulo = titulo
    this.ano = ano
    this.genero = genero
    this.duracao = duracao
    this.assistido = assistido
    this.avaliacao = avaliacao
  }

  MarcarFilme() {
    if (this.assistido === true) {
      return `${this.titulo} foi assistido`
    } else {
      return `${this.titulo} Não foi assistido`
    }
  }

  AvaliarFilme(novaAvaliacao) {
    this.avaliacao = novaAvaliacao
    console.log(`Avaliação de ${this.titulo}: ${novaAvaliacao}`)
  }
}

// Exemplo de uso:
const Filme0 = new Filme(
  'Matrix',
  1999,
  'Ficção Científica',
  '2h 16min',
  true,
  4.5
)
console.log(Filme0.MarcarFilme()) // Saída: "Matrix foi assistido"
Filme0.AvaliarFilme(5) // Saída: "Avaliação de Matrix: 5"

// Exemplo 1
const filme1 = new Filme(
  'O Senhor dos Anéis: A Sociedade do Anel',
  2001,
  'Fantasia',
  '2h 58min',
  true,
  4.8
)
console.log(filme1.MarcarFilme()) // Saída: "O Senhor dos Anéis: A Sociedade do Anel foi assistido"
filme1.AvaliarFilme(4.7) // Saída: "Avaliação de O Senhor dos Anéis: A Sociedade do Anel: 4.7"

// Exemplo 2
const filme2 = new Filme('Pantera Negra', 2018, 'Ação', '2h 14min', false, 0)
console.log(filme2.MarcarFilme()) // Saída: "Pantera Negra Não foi assistido"
filme2.AvaliarFilme(4.2) // Saída: "Avaliação de Pantera Negra: 4.2"
