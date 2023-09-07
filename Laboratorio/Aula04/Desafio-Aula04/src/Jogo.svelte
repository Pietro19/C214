<script>
  import Jogador from './Jogador.svelte'
  import { format } from 'date-fns'

  let resultado = ''
  let corDeFundo = '' // Inicialmente, não definimos uma cor de fundo

  function marcarGol() {
    const dataAtual = new Date()
    const dataFormatada = format(dataAtual, 'dd/MM/yyyy HH:mm:ss')
    console.log('Marcou 1 GOL')
    console.log('Data e Hora Atual:', dataFormatada)
    resultado = `Marcou 1 GOL em ${dataFormatada}`

    const cores = ['#FF5733', '#33FF57', '#5733FF', '#33FFFF', '#FFFF33']
    corDeFundo = cores[Math.floor(Math.random() * cores.length)]

    // Defina a cor de fundo do elemento HTML (a página inteira)
    document.documentElement.style.backgroundColor = corDeFundo
  }
</script>

<main>
  <h1>Exibe a Data e Hora Atual quando marca GOL</h1>
  <Jogador acao={marcarGol} />

  <!-- Exibe o resultado estilizado na página -->
  {#if resultado}
    <div class="resultado">{resultado}</div>
  {/if}
</main>

<style>
  /* Estilos CSS para o resultado */
  .resultado {
    font-size: 18px;
    margin-top: 20px;
    color: green;
  }

  main {
    transition: background-color 0.5s; /* Adicione uma transição suave */
  }
</style>
