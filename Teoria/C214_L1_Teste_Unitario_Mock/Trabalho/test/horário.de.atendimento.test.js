const chai = require('chai')
const { expect } = chai
const HorarioAtendimento = require('../src/HorarioAtendimento')

describe('HorarioAtendimento', () => {
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

  let horarioAtendimento

  beforeEach(() => {
    horarioAtendimento = new HorarioAtendimento(jsonString)
  })

  describe('Cenários de sucesso', () => {
    it('Deve retornar o nome do primeiro professor corretamente', () => {
      expect(horarioAtendimento.professores[0].nomeDoProfessor).to.equal(
        'Professor 1'
      )
    })

    it('Deve retornar o horário de atendimento do segundo professor corretamente', () => {
      expect(horarioAtendimento.professores[1].horarioDeAtendimento).to.equal(
        'Terça 10:00-12:00'
      )
    })

    it('Deve calcular corretamente o número do prédio para a sala 5', () => {
      expect(horarioAtendimento.getNumeroPredio('5')).to.equal(1)
    })

    it('Deve calcular corretamente o número do prédio para a sala 8', () => {
      expect(horarioAtendimento.getNumeroPredio('8')).to.equal(2)
    })

    it('Deve retornar null se a sala for vazia', () => {
      expect(horarioAtendimento.getNumeroPredio('')).to.be.null
    })

    it('Deve calcular corretamente o número do prédio para a sala 15', () => {
      expect(horarioAtendimento.getNumeroPredio('15')).to.equal(3)
    })

    it('Deve calcular corretamente o número do prédio para a sala 16', () => {
      expect(horarioAtendimento.getNumeroPredio('16')).to.equal(4)
    })

    it('Deve calcular corretamente o número do prédio para a sala 21', () => {
      expect(horarioAtendimento.getNumeroPredio('21')).to.equal(5)
    })

    it('Deve calcular corretamente o número do prédio para a sala 22', () => {
      expect(horarioAtendimento.getNumeroPredio('22')).to.equal(5)
    })

    it('Deve calcular corretamente o número do prédio para a sala 25', () => {
      expect(horarioAtendimento.getNumeroPredio('25')).to.equal(5)
    })
  })

  describe('Cenários de falha', () => {
    it('Deve retornar um erro se o JSON de entrada for inválido', () => {
      expect(() => new HorarioAtendimento('')).to.throw(Error)
    })

    it('Deve retornar um erro se a sala não for um número', () => {
      expect(() => horarioAtendimento.getNumeroPredio('abc')).to.throw(Error)
    })

    it('Deve retornar um erro se o número do prédio não puder ser calculado', () => {
      expect(() => horarioAtendimento.getNumeroPredio('abc')).to.throw(
        'Número da sala inválido. A sala deve ser um número não negativo.'
      )
    })

    it('Deve retornar um erro se o JSON não contiver a chave "professores"', () => {
      const invalidJson = '{"incorrectKey": []}'
      expect(() => new HorarioAtendimento(invalidJson)).to.throw(
        'Formato do JSON inválido. A chave "professores" é obrigatória.'
      )
    })

    it('Deve retornar um erro se a sala for negativa', () => {
      expect(() => horarioAtendimento.getNumeroPredio('-1')).to.throw(
        'Número da sala inválido. A sala deve ser um número não negativo.'
      )
    })

    it('Deve retornar um erro se a sala não for especificada', () => {
      expect(() => horarioAtendimento.getNumeroPredio()).to.throw(
        'Número da sala inválido. A sala deve ser um número não negativo.'
      );
    });

    it('Deve retornar um erro se a sala for null', () => {
      expect(() => horarioAtendimento.getNumeroPredio(null)).to.throw(
        'Número da sala inválido. A sala deve ser um número não negativo.'
      );
    });

    it('Deve retornar um erro se a sala for um objeto', () => {
      expect(() => horarioAtendimento.getNumeroPredio({})).to.throw(
        'Número da sala inválido. A sala deve ser um número não negativo.'
      );
    });

    it('Deve retornar um erro se a sala for undefined', () => {
      expect(() => horarioAtendimento.getNumeroPredio(undefined)).to.throw(
        'Número da sala inválido. A sala deve ser um número não negativo.'
      );
    });

     it('Deve retornar um erro se o número do prédio não puder ser calculado para uma sala válida', () => {
    expect(() => horarioAtendimento.getNumeroPredio(100)).to.throw(
      'Número do prédio não pode ser calculado. O número da sala não corresponde a nenhum prédio conhecido.'
    );
  });
   
  })
})
