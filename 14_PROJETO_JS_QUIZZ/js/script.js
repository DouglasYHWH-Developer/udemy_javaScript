/*Declaração de variáveis */
const scoreContainer = document.querySelector('#score-container');
const quizzContainer = document.querySelector('#quizz-container');
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answer-box');
const letters = ['a', 'b', 'c', 'd'];
let poits = 0;
let actualQuestion = 0;

/*Array de perguntas e respostas*/ 
const questions = [
  {
    "question": "PHP foi desenvolvido para qual fim?",
    "answers": [
      {
        "answer": "back-end",
        "correct": true
      },
      {
        "answer": "front-end",
        "correct": false
      },
      {
        "answer": "Sistema operacional",
        "correct": false
      },
      {
        "answer": "Banco de dados",
        "correct": false
      },
    ]
  },
  {
    "question": "Uma forma de declarar variável em JavaScript:",
    "answers": [
      {
        "answer": "$var",
        "correct": false
      },
      {
        "answer": "var",
        "correct": true
      },
      {
        "answer": "@var",
        "correct": false
      },
      {
        "answer": "#let",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual o seletor de id no CSS?",
    "answers": [
      {
        "answer": "#",
        "correct": true
      },
      {
        "answer": ".",
        "correct": false
      },
      {
        "answer": "@",
        "correct": false
      },
      {
        "answer": "/",
        "correct": false
      },
    ]
  },
]

// substituição do quizz para a primeira pergunta
function init(){
    //criar a primeira pergunta
    createQuestion()
}

// Cria uma pergunta
function createQuestion(i){
  
    //limpar questão anterior
    const oldButtons = answerBox.querySelectorAll('button');
    
    oldButtons.forEach(function(btn){
        btn.remove();
    });
    
}

// Inicialização do quizz
init();

