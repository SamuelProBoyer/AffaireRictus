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
  
  // Get a reference to the Firestore database
  var db = firebase.firestore();
  
  // Get elements from HTML
  var questionElement = document.getElementById('question');
  var optionsElement = document.getElementById('options');
  var feedbackElement = document.getElementById('feedback');
  var nextButton = document.getElementById('next-btn');
  var scoreElement = document.getElementById('score');
  var signOutButton = document.getElementById('sign-out-btn');
  
  // Create variables to keep track of quiz state
  var currentQuestionIndex = 0;
  var score = 0;
  
  // Create variables for sound effects
  var correctSound = new Audio('correct.mp3');
  var wrongSound = new Audio('wrong.mp3');
  
  // Add event listener for sign out button
  signOutButton.addEventListener('click', function() {
    firebase.auth().signOut();
  });
  
  // Function to load question and options
  function loadQuestion() {
    // Clear feedback
    feedbackElement.textContent = '';
    // Get current question from the questions array
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
  
  // Function to check selected answer
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
    // Disable option buttons after answering
    var optionButtons = optionsElement.querySelectorAll('.option-btn');
    for (var i = 0; i < optionButtons.length; i++) {
      optionButtons[i].disabled = true;
    }
    // Show next button
    nextButton.disabled = false;
  }
  
  // Function to load next question or end the quiz
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to end the quiz and display score
  function endQuiz() {
    questionElement.textContent = 'Quiz completed!';
    optionsElement.innerHTML = '';
    feedbackElement.textContent = '';
    scoreElement.textContent = 'Score: ' + score;
    nextButton.disabled = true;
  }
  
  // Add event listener for next button
  nextButton.addEventListener('click', nextQuestion);
  
  // Load the first question
  loadQuestion();
  