<script>
  let peso = 0
  let altura = 0
  let imc = 0
  let classificacao = '' // Variável para armazenar a classificação

  let pesoValido = true
  let alturaValida = true

  function calcularIMC() {
    if (peso > 0 && altura > 0) {
      imc = (peso / Math.pow(altura, 2)).toFixed(2)

      // Definir a classificação com base no IMC
      if (imc < 18.5) {
        classificacao = 'Abaixo do peso'
      } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso ideal'
      } else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = 'Levemente acima do peso'
      } else if (imc >= 30.0 && imc <= 34.9) {
        classificacao = 'Obesidade grau 1'
      } else if (imc >= 35.0 && imc <= 39.9) {
        classificacao = 'Obesidade grau 2 (severa)'
      } else {
        classificacao = 'Obesidade grau 3 (mórbida)'
      }
    } else {
      imc = 0
      classificacao = ''
    }
  }

  function validarPeso() {
    pesoValido = peso > 0
    calcularIMC()
  }

  function validarAltura() {
    alturaValida = altura > 0
    calcularIMC()
  }
</script>

<main>
  <h1>Calculadora de IMC</h1>
  <label>
    Peso (kg): <input
      type="number"
      bind:value={peso}
      class:input-invalid={!pesoValido}
      class:input-valid={pesoValido}
      on:input={validarPeso}
    />
  </label>
  <label>
    Altura (m): <input
      type="number"
      bind:value={altura}
      class:input-invalid={!alturaValida}
      class:input-valid={alturaValida}
      on:input={validarAltura}
    />
  </label>
  {#if imc > 0}
    <p>Seu IMC é {imc}</p>
    <p
      class="imc-classificacao {classificacao === 'Abaixo do peso'
        ? 'abaixo-peso'
        : ''}
                                 {classificacao === 'Peso ideal'
        ? 'peso-ideal'
        : ''}
                                 {classificacao === 'Levemente acima do peso'
        ? 'acima-peso'
        : ''}
                                 {classificacao === 'Obesidade grau 1'
        ? 'obesidade-grau1'
        : ''}
                                 {classificacao === 'Obesidade grau 2 (severa)'
        ? 'obesidade-grau2'
        : ''}
                                 {classificacao === 'Obesidade grau 3 (mórbida)'
        ? 'obesidade-grau3'
        : ''}"
    >
      Classificação: {classificacao}
    </p>

    <p class="recomendacoes-saude">
      {#if classificacao === 'Abaixo do peso'}
        Recomendações: É importante manter uma dieta equilibrada e saudável para
        ganhar peso de forma gradual.
      {/if}
      {#if classificacao === 'Peso ideal'}
        Recomendações: Parabéns! Você está dentro do peso ideal. Continue
        mantendo um estilo de vida saudável.
      {/if}
      {#if classificacao === 'Levemente acima do peso'}
        Recomendações: Tente adotar hábitos alimentares mais saudáveis e se
        exercitar regularmente para manter um peso saudável.
      {/if}
      {#if classificacao === 'Obesidade grau 1'}
        Recomendações: É recomendado procurar orientação médica e adotar
        mudanças de estilo de vida para perder peso de forma saudável.
      {/if}
      {#if classificacao === 'Obesidade grau 2 (severa)'}
        Recomendações: Consulte um profissional de saúde para obter orientações
        sobre perda de peso segura e saudável.
      {/if}
      {#if classificacao === 'Obesidade grau 3 (mórbida)'}
        Recomendações: Procurar ajuda médica é crucial. Um profissional de saúde
        pode criar um plano de tratamento adequado.
      {/if}
    </p>
  {/if}
</main>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
    padding: 2rem;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.25rem;
  }
  p {
    margin: 0.5rem 0;
  }

  .imc-classificacao {
    font-weight: bold;
    color: #007bff;
  }

  /* Estilos para diferentes classificações */
  .abaixo-peso {
    color: #e74c3c;
  }

  .peso-ideal {
    color: #2ecc71;
  }

  .acima-peso {
    color: #f39c12;
  }

  .obesidade-grau1 {
    color: #e67e22;
  }

  .obesidade-grau2 {
    color: #d35400;
  }

  .obesidade-grau3 {
    color: #c0392b;
  }

  .input-invalid {
    border: 2px solid #e74c3c;
  }

  .input-valid {
    border: 2px solid #2ecc71;
  }
</style>
