const readline = require('readline')

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
    return `Avaliação de ${this.titulo}: ${novaAvaliacao}`
  }
}

class ListaFilmes {
  constructor() {
    this.filmes = []
  }

  AdicionarFilme(filme) {
    this.filmes.push(filme)
  }

  MarcarComoAssistido(titulo) {
    const filme = this.filmes.find(filme => filme.titulo === titulo)
    if (filme) {
      filme.assistido = true
    }
  }

  AvaliarFilme(titulo, novaAvaliacao) {
    const filme = this.filmes.find(filme => filme.titulo === titulo)
    if (filme) {
      filme.avaliacao = novaAvaliacao
    }
  }

  ExibirFilmes() {
    for (const filme of this.filmes) {
      console.log(`${filme.titulo} - ${filme.genero} - ${filme.ano}`)
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const listaDeFilmes = new ListaFilmes()

function exibirMenu() {
  console.log('*** Menu ***')
  console.log('1. Adicionar filme')
  console.log('2. Marcar filme como assistido')
  console.log('3. Avaliar filme')
  console.log('4. Exibir lista de filmes')
  console.log('5. Sair')
}
function receberOpcao() {
  rl.question('Escolha uma opção: ', opcao => {
    switch (parseInt(opcao)) {
      case 1:
        const titulo = prompt('Digite o título do filme:')
        const ano = parseInt(prompt('Digite o ano do filme:'))
        const genero = prompt('Digite o gênero do filme:')
        const duracao = prompt('Digite a duração do filme:')
        const filme = new Filme(titulo, ano, genero, duracao, false, 0)
        listaDeFilmes.AdicionarFilme(filme)
        console.log('Filme adicionado com sucesso!')
        break
      case 2:
        const tituloAssistido = prompt('Digite o título do filme assistido:')
        listaDeFilmes.MarcarComoAssistido(tituloAssistido)
        console.log('Filme marcado como assistido!')
        break
      case 3:
        const tituloAvaliar = prompt('Digite o título do filme a ser avaliado:')
        const novaAvaliacao = parseFloat(
          prompt('Digite a nova avaliação do filme:')
        )
        listaDeFilmes.AvaliarFilme(tituloAvaliar, novaAvaliacao)
        console.log('Avaliação do filme atualizada!')
        break
      case 4:
        console.log('=== Lista de Filmes ===')
        listaDeFilmes.ExibirFilmes()
        break
      case 5:
        console.log('Saindo do programa...')
        process.exit()
      default:
        console.log('Opção inválida. Escolha uma opção válida.')
    }
  })
}

exibirMenu()
receberOpcao()
