# Async Throttle

Este é um sistema de throttle de execução de funções assíncronas, desenvolvido para otimizar o processamento concorrente de tarefas em TypeScript.

## Objetivo

O objetivo deste projeto é demonstrar o conhecimento em TypeScript, async/await, lógica de programação e processamento de dados.

## Regras do Programa

1. O programa consiste em um array chamado `load` com 50 funções assíncronas que simulam uma carga de trabalho através de um delay.
2. Todas as cargas de trabalho devem ser executadas, sem exceção.
3. Cada worker (posição de execução em paralelo) só deve executar uma tarefa por vez.
4. O objetivo é otimizar ao máximo para evitar que os workers fiquem parados esperando o processamento de outras tarefas.

## Uso

1. Clone o repositório.
2. Configure os requisitos mencionados acima.
3. Execute o projeto utilizando o TypeScript.

```bash
npm install
npm start
```
