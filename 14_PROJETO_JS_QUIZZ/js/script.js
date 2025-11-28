/*Declaração de variáveis */
const scoreContainer = document.querySelector('#score-container');
const quizzContainer = document.querySelector('#quizz-container');
const question = document.querySelector('#question');
const answersBox = document.querySelector('#answers-box');
const letters = ['a', 'b', 'c', 'd'];
let points = 0;
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
      checkAnswer(this)
    });
  });
  
    //incrementar o número da questão atual
  actualQuestion++;
  }

  //verificando resposta do usuário
  function checkAnswer(btn){
  // seleciona todos os botões
    const buttons = answersBox.querySelectorAll('button');
  // verificar se a resposta está correta e adicionar classes nos botões
    buttons.forEach(function(button) {
      if(button.getAttribute('correct-answer') === 'true'){
        button.classList.add('correct-answer');

        //checar se o usuário acertou a pergunta
        if(btn === button){
          //incremento dos pontos
          points++
        }
      }else{
        button.classList.add('wrong-answer');
      }
    });

    // Exibir próxima pergunta
    nextQuestion();
  }

  // Exibir próxima pergunta do quizz
  function nextQuestion(){

    //timer para o usuário ver as respostas
    setTimeout(function(){
    
      //verificar se ainda há perguntas
      if(actualQuestion >= questions.length){
        //apresentar a mensagem de sucesso
        showSuccessMessage();
        return;
      }
      createQuestion(actualQuestion);
    }, 1500) //timer para usuário ver as respostas}
  }

// função que exibe a tela final
function showSuccessMessage(){

  hideOrShowQuizz();

  // trocar dados da tela de sucesso

  //calcular score 
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');

  displayScore.textContent = score.toString();
  console.log(score)
  // alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answer');
  correctAnswers.textContent = points;

  // alterar o número total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}


//mostrar ou esconde o score
function hideOrShowQuizz(){
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz

  const btnRestart = document.querySelector('#restart');
  btnRestart.addEventListener('click', function(){
    //zerar as variáveis
    points = 0;
    actualQuestion = 0;
    hideOrShowQuizz();
    init();
  });
  
// Inicialização do quizz
init();

