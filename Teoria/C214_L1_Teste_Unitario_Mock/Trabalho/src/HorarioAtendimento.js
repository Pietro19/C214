class HorarioAtendimento {
  constructor(jsonString) {
    try {
      const parsedJson = JSON.parse(jsonString)

      if (!parsedJson.professores) {
        throw new Error(
          'Formato do JSON inválido. A chave "professores" é obrigatória.'
        )
      }

      this.professores = parsedJson.professores

      for (const professor of this.professores) {
        if (!professor.sala) {
          throw new Error(
            'Formato do JSON inválido. Cada professor deve conter a chave "sala".'
          )
        }
      }
    } catch (error) {
      throw new Error(
        'Formato do JSON inválido. A chave "professores" é obrigatória.'
      )
    }
  }

  popularPaginaWeb() {
    // Itera sobre cada professor e exibe os horários de atendimento no console
    this.professores.forEach(professor => {
      console.log(`Professor: ${professor.nomeDoProfessor}`)
      console.log(`Horário de Atendimento: ${professor.horarioDeAtendimento}`)
      console.log(`Sala: ${professor.sala}`)
      console.log(`Prédio: ${this.getNumeroPredio(professor.sala)}`)
      console.log('---')
    })
  }

  getNumeroPredio(sala) {
    if (sala === '') {
      return null
    }

    const numeroSala = parseInt(sala, 10)

    if (isNaN(numeroSala) || numeroSala < 0) {
      throw new Error(
        'Número da sala inválido. A sala deve ser um número não negativo.'
      )
    }

    const numeroPredio = Math.ceil(numeroSala / 5)

    return numeroPredio
  }
}

// JSON com os dados dos professores
const jsonString = `
{
  "professores": [
    {
      "nomeDoProfessor": "Professor 1",
      "horarioDeAtendimento": "Segunda 14:00-16:00",
      "periodo": "integral",
      "sala": "5",
      "predio": ["1","2","3","4","6"]
    },
    {
      "nomeDoProfessor": "Professor 2",
      "horarioDeAtendimento": "Terça 10:00-12:00",
      "periodo": "noturno",
      "sala": "8",
      "predio": ["6","7","8","9","10"]
    }
  ]
}
`

// Criando uma instância da classe e populando a página web
const horarioAtendimento = new HorarioAtendimento(jsonString)
horarioAtendimento.popularPaginaWeb()

module.exports = HorarioAtendimento // Exportando a classe
