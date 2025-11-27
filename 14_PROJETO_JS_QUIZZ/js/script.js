/*Declaração de variáveis */
const scoreContainer = document.querySelector('#score-container');
const quizzContainer = document.querySelector('#quizz-container');
const question = document.querySelector('#question');
const answersBox = document.querySelector('#answers-box');
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
    createQuestion(0)
}

// Cria uma pergunta
function createQuestion(i){
  
    //limpar questão anterior
    const oldButtons = answersBox.querySelectorAll("button");
    
    oldButtons.forEach(function(btn){
        btn.remove();
    });
  
    // alterar  texto da pergunta
    const questionText = question.querySelector('#question-text');
    const questionNumber = question.querySelector('#question-number');
    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;
    

  // inseri as alternativas
  questions[i].answers.forEach(function(answer, index){
    
    // Cria o template do botão do quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);
    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[index];
    answerText.textContent = answer['answer'];

    //Remover a classe hide e template
    answerTemplate.classList.remove('hide')
    answerTemplate.classList.remove('answer-template')

    answerTemplate.setAttribute('correct-answer', answer['correct']);
    
    //inserir a alternativa na tela
    answersBox.appendChild(answerTemplate);

    //Inserir evento de clique no botão
    answerTemplate.addEventListener('click', function(){
      console.log(this)
    });
  });
  
    //incrementar o número da questão atual
  actualQuestion++;
  }

// Inicialização do quizz
init();

