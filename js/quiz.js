// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCgL7qiacZTLcw19bgMAbfQEUCsyow8gOQ",
    authDomain: "affairerictus.firebaseapp.com",
    projectId: "affairerictus",
    storageBucket: "affairerictus.appspot.com",
    messagingSenderId: "625025844556",
    appId: "1:625025844556:web:d65766db87163734e0fbe9"
  };
  firebase.initializeApp(firebaseConfig);
  
  var db = firebase.firestore();
  
  var questionElement = document.getElementById('question');
  var optionsElement = document.getElementById('options');
  var feedbackElement = document.getElementById('feedback');
  var nextButton = document.getElementById('next-btn');
  var scoreElement = document.getElementById('score');
  var signOutButton = document.getElementById('sign-out-btn');
  
  var currentQuestionIndex = 0;
  var score = 0;
  
  var correctSound = new Audio('correct.mp3');
  var wrongSound = new Audio('wrong.mp3');
  
  signOutButton.addEventListener('click', function() {
    firebase.auth().signOut();
  });
  
 
  function loadQuestion() {
    
    feedbackElement.textContent = '';
    nextButton.style.display = "none";
    var currentQuestion = questions[currentQuestionIndex];
    // Update question and options in HTML
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    for (var i = 0; i < currentQuestion.options.length; i++) {
      var optionButton = document.createElement('button');
      optionButton.classList.add('option-btn');
      optionButton.textContent = currentQuestion.options[i];
      optionsElement.appendChild(optionButton);
      optionButton.addEventListener('click', checkAnswer);
    }
  }
  
  function checkAnswer(event) {
    var selectedOption = event.target.textContent;
    var currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      feedbackElement.textContent = 'Correct!';
      score++;
      correctSound.play();
    } else {
      feedbackElement.textContent = 'Wrong!';
      wrongSound.play();
    }
    var optionButtons = optionsElement.querySelectorAll('.option-btn');
    for (var i = 0; i < optionButtons.length; i++) {
      optionButtons[i].disabled = true;
    }
    nextButton.disabled = false;
  }
 
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      nextButton.style.display = "flex";
      loadQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    questionElement.textContent = 'Quiz completed!';
    optionsElement.innerHTML = '';
    feedbackElement.textContent = '';
    scoreElement.textContent = 'Score: ' + score;
    nextButton.disabled = true;
  }
  
  nextButton.addEventListener('click', nextQuestion);
  

  loadQuestion();
  