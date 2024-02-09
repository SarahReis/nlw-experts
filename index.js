const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para desenvolvimento de aplicativos móveis",
        "Um sistema operacional para servidores web",
        "Uma linguagem de programação para desenvolvimento web",
      ],
      correta: 2  
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita de valor e tipo",
        "Atribuição de valor",
        "Comparação de valor apenas",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Um valor fixo que não pode ser alterado",
        "Um nome para representar um valor armazenado na memória que pode mudar durante a execução do programa",
        "Uma função predefinida no JavaScript",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var nomeVariavel = valor;",
        "variavel = valor;",
        "variável = valor;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
      respostas: [
        "Um modelo de programação baseado em objetos que representa a estrutura de um documento HTML e permite interagir com ele",
        "Um método para estilizar elementos HTML",
        "Um tipo de variável em JavaScript",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para exibir dados na janela do navegador em JavaScript?",
      respostas: [
        "console.log()",
        "displayData()",
        "print()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de variável que armazena um valor específico",
        "Um bloco de código que pode ser chamado e executado em qualquer lugar do programa",
        "Um operador lógico em JavaScript",
      ],
      correta: 1
    },
    {
      pergunta: "Como você faz um loop em um array em JavaScript?",
      respostas: [
        "loop(array)",
        "for (var i = 0; i < array.length; i++)",
        "while (array)",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Selecionar e retornar o primeiro elemento que corresponde a um seletor CSS especificado",
        "Executar uma consulta em um banco de dados",
        "Selecionar e retornar todos os elementos de uma página da web",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma condicional em JavaScript?",
      respostas: [
        "Um tipo de variável que armazena um valor booleano",
        "Uma estrutura de controle que executa um bloco de código se uma condição especificada for verdadeira",
        "Um tipo de operador aritmético",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }  