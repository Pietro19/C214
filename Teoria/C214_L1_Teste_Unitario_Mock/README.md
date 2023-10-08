# Horário de Atendimento dos Professores - Inatel

Este projeto contém uma classe `HorarioAtendimento` para manipular e calcular o número do prédio com base no número da sala, seguindo as regras específicas do Inatel. Também inclui testes para garantir o correto funcionamento da classe em diversos cenários.

## Funcionalidades

- **HorarioAtendimento.js**: Implementa a classe `HorarioAtendimento` para calcular o número do prédio com base no número da sala e oferecer funcionalidades relacionadas ao horário de atendimento dos professores.

- **horário.de.atendimento.test.js**: Contém os testes da classe `HorarioAtendimento` usando Mocha e Chai.

## Como Executar os Testes

1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Clone este repositório:
   ```bash
   git clone https://github.com/Pietro19/C214.git
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute os testes:
   ```bash
   npm test
   ```

## Classe HorarioAtendimento

A classe `HorarioAtendimento` oferece os seguintes métodos:

### `constructor(jsonString)`

Constrói uma instância da classe a partir de uma string JSON contendo informações sobre os horários de atendimento dos professores.

### `getNumeroPredio(sala)`

Calcula e retorna o número do prédio com base no número da sala fornecida.

## Testes

Os testes foram escritos usando Mocha e Chai. Eles cobrem diversos cenários de sucesso e falha para garantir que a classe `HorarioAtendimento`.

