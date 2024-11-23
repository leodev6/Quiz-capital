const translations = {
  en: {
    welcome: "Welcome to World Capitals Quiz",
    description: "Test your knowledge of world capitals through this interactive and educational quiz!",
    quizByContinent: "Quiz by Continent",
    chooseContinent: "Choose from 5 continents: Europe, Asia, Africa, Americas and Oceania.",
    testKnowledge: "Test Your Knowledge",
    identifyCapitals: "Identify capitals from country flags.",
    trackProgress: "Track Your Progress",
    scoring: "Get real-time scoring and detailed answer summary.",
    startQuiz: "Start Quiz",
    chooseContinent: "Choose a Continent",
    chooseLevel: "Choose a Level",
    worldCapitalsQuiz: "World Capitals Quiz",
    score: "Score",
    nextQuestion: "Next Question",
    backToContinents: "Back to Continents",
    quizResults: "Quiz Results",
    congratulations: "Congratulations!",
    perfectScore: "You completed the level with a perfect score!",
    proceedNext: "You can now proceed to the next level.",
    proceedNextBtn: "Proceed to Next Level",
    needPerfectScore: "You need a perfect score (5/5) to access the next level.",
    tryAgain: "Try this level again to progress!",
    retryLevel: "Retry this Level",
    returnToMenu: "Return to Main Menu",
    backToHome: "Back to Home"
  },
  fr: {
    welcome: "Bienvenue au Quiz des Capitales du Monde",
    description: "Testez vos connaissances des capitales mondiales à travers ce quiz interactif et éducatif !",
    quizByContinent: "Quiz par Continent",
    chooseContinent: "Choisissez parmi 5 continents : Europe, Asie, Afrique, Amériques et Océanie.",
    testKnowledge: "Testez vos Connaissances",
    identifyCapitals: "Identifiez les capitales à partir des drapeaux.",
    trackProgress: "Suivez votre Progression",
    scoring: "Obtenez un score en temps réel et un résumé détaillé des réponses.",
    startQuiz: "Commencer le Quiz",
    chooseContinent: "Choisissez un Continent",
    chooseLevel: "Choisissez un Niveau",
    worldCapitalsQuiz: "Quiz des Capitales du Monde",
    score: "Score",
    nextQuestion: "Question Suivante",
    backToContinents: "Retour aux Continents",
    quizResults: "Résultats du Quiz",
    congratulations: "Félicitations !",
    perfectScore: "Vous avez complété le niveau avec un score parfait !",
    proceedNext: "Vous pouvez maintenant passer au niveau suivant.",
    proceedNextBtn: "Passer au Niveau Suivant",
    needPerfectScore: "Vous avez besoin d'un score parfait (5/5) pour accéder au niveau suivant.",
    tryAgain: "Réessayez ce niveau pour progresser !",
    retryLevel: "Réessayer ce Niveau",
    returnToMenu: "Retour au Menu Principal",
    backToHome: "Retour à l'Accueil"
  }
};

let currentLanguage = 'en';

const quizData = {
  europe: {
    level1: [
      { country: "France", capital: "Paris", flag: "https://flagcdn.com/w320/fr.png" },
      { country: "Germany", capital: "Berlin", flag: "https://flagcdn.com/w320/de.png" },
      { country: "Spain", capital: "Madrid", flag: "https://flagcdn.com/w320/es.png" },
      { country: "Italy", capital: "Rome", flag: "https://flagcdn.com/w320/it.png" },
      { country: "United Kingdom", capital: "London", flag: "https://flagcdn.com/w320/gb.png" }
    ],
    level2: [
      { country: "Portugal", capital: "Lisbon", flag: "https://flagcdn.com/w320/pt.png" },
      { country: "Netherlands", capital: "Amsterdam", flag: "https://flagcdn.com/w320/nl.png" },
      { country: "Belgium", capital: "Brussels", flag: "https://flagcdn.com/w320/be.png" },
      { country: "Switzerland", capital: "Bern", flag: "https://flagcdn.com/w320/ch.png" },
      { country: "Austria", capital: "Vienna", flag: "https://flagcdn.com/w320/at.png" }
    ],
    level3: [
      { country: "Sweden", capital: "Stockholm", flag: "https://flagcdn.com/w320/se.png" },
      { country: "Norway", capital: "Oslo", flag: "https://flagcdn.com/w320/no.png" },
      { country: "Finland", capital: "Helsinki", flag: "https://flagcdn.com/w320/fi.png" },
      { country: "Denmark", capital: "Copenhagen", flag: "https://flagcdn.com/w320/dk.png" },
      { country: "Ireland", capital: "Dublin", flag: "https://flagcdn.com/w320/ie.png" }
    ],
    level4: [
      { country: "Poland", capital: "Warsaw", flag: "https://flagcdn.com/w320/pl.png" },
      { country: "Czech Republic", capital: "Prague", flag: "https://flagcdn.com/w320/cz.png" },
      { country: "Hungary", capital: "Budapest", flag: "https://flagcdn.com/w320/hu.png" },
      { country: "Romania", capital: "Bucharest", flag: "https://flagcdn.com/w320/ro.png" },
      { country: "Bulgaria", capital: "Sofia", flag: "https://flagcdn.com/w320/bg.png" }
    ]
  },
  asia: {
    level1: [
      { country: "Japan", capital: "Tokyo", flag: "https://flagcdn.com/w320/jp.png" },
      { country: "China", capital: "Beijing", flag: "https://flagcdn.com/w320/cn.png" },
      { country: "India", capital: "New Delhi", flag: "https://flagcdn.com/w320/in.png" },
      { country: "South Korea", capital: "Seoul", flag: "https://flagcdn.com/w320/kr.png" },
      { country: "Thailand", capital: "Bangkok", flag: "https://flagcdn.com/w320/th.png" }
    ],
    level2: [
      { country: "Malaysia", capital: "Kuala Lumpur", flag: "https://flagcdn.com/w320/my.png" },
      { country: "Vietnam", capital: "Hanoi", flag: "https://flagcdn.com/w320/vn.png" },
      { country: "Philippines", capital: "Manila", flag: "https://flagcdn.com/w320/ph.png" },
      { country: "Indonesia", capital: "Jakarta", flag: "https://flagcdn.com/w320/id.png" },
      { country: "Bangladesh", capital: "Dhaka", flag: "https://flagcdn.com/w320/bd.png" }
    ],
    level3: [
      { country: "Singapore", capital: "Singapore", flag: "https://flagcdn.com/w320/sg.png" },
      { country: "Nepal", capital: "Kathmandu", flag: "https://flagcdn.com/w320/np.png" },
      { country: "Sri Lanka", capital: "Colombo", flag: "https://flagcdn.com/w320/lk.png" },
      { country: "Cambodia", capital: "Phnom Penh", flag: "https://flagcdn.com/w320/kh.png" },
      { country: "Laos", capital: "Vientiane", flag: "https://flagcdn.com/w320/la.png" }
    ],
    level4: [
      { country: "Pakistan", capital: "Islamabad", flag: "https://flagcdn.com/w320/pk.png" },
      { country: "Afghanistan", capital: "Kabul", flag: "https://flagcdn.com/w320/af.png" },
      { country: "Kazakhstan", capital: "Astana", flag: "https://flagcdn.com/w320/kz.png" },
      { country: "Mongolia", capital: "Ulaanbaatar", flag: "https://flagcdn.com/w320/mn.png" },
      { country: "Myanmar", capital: "Naypyidaw", flag: "https://flagcdn.com/w320/mm.png" }
    ]
  },
  africa: {
    level1: [
      { country: "Morocco", capital: "Rabat", flag: "https://flagcdn.com/w320/ma.png" },
      { country: "Egypt", capital: "Cairo", flag: "https://flagcdn.com/w320/eg.png" },
      { country: "Nigeria", capital: "Abuja", flag: "https://flagcdn.com/w320/ng.png" },
      { country: "Kenya", capital: "Nairobi", flag: "https://flagcdn.com/w320/ke.png" },
      { country: "South Africa", capital: "Pretoria", flag: "https://flagcdn.com/w320/za.png" }
    ],
    level2: [
      { country: "Ghana", capital: "Accra", flag: "https://flagcdn.com/w320/gh.png" },
      { country: "Tanzania", capital: "Dodoma", flag: "https://flagcdn.com/w320/tz.png" },
      { country: "Uganda", capital: "Kampala", flag: "https://flagcdn.com/w320/ug.png" },
      { country: "Ivory Coast", capital: "Yamoussoukro", flag: "https://flagcdn.com/w320/ci.png" },
      { country: "Senegal", capital: "Dakar", flag: "https://flagcdn.com/w320/sn.png" }
    ],
    level3: [
      { country: "Angola", capital: "Luanda", flag: "https://flagcdn.com/w320/ao.png" },
      { country: "Zimbabwe", capital: "Harare", flag: "https://flagcdn.com/w320/zw.png" },
      { country: "Zambia", capital: "Lusaka", flag: "https://flagcdn.com/w320/zm.png" },
      { country: "Namibia", capital: "Windhoek", flag: "https://flagcdn.com/w320/na.png" },
      { country: "Mozambique", capital: "Maputo", flag: "https://flagcdn.com/w320/mz.png" }
    ],
    level4: [
      { country: "Mali", capital: "Bamako", flag: "https://flagcdn.com/w320/ml.png" },
      { country: "Niger", capital: "Niamey", flag: "https://flagcdn.com/w320/ne.png" },
      { country: "Chad", capital: "N'Djamena", flag: "https://flagcdn.com/w320/td.png" },
      { country: "Burkina Faso", capital: "Ouagadougou", flag: "https://flagcdn.com/w320/bf.png" },
      { country: "Rwanda", capital: "Kigali", flag: "https://flagcdn.com/w320/rw.png" }
    ]
  },
  americas: {
    level1: [
      { country: "United States", capital: "Washington D.C.", flag: "https://flagcdn.com/w320/us.png" },
      { country: "Canada", capital: "Ottawa", flag: "https://flagcdn.com/w320/ca.png" },
      { country: "Mexico", capital: "Mexico City", flag: "https://flagcdn.com/w320/mx.png" },
      { country: "Brazil", capital: "Brasilia", flag: "https://flagcdn.com/w320/br.png" },
      { country: "Argentina", capital: "Buenos Aires", flag: "https://flagcdn.com/w320/ar.png" }
    ],
    level2: [
      { country: "Colombia", capital: "Bogotá", flag: "https://flagcdn.com/w320/co.png" },
      { country: "Chile", capital: "Santiago", flag: "https://flagcdn.com/w320/cl.png" },
      { country: "Venezuela", capital: "Caracas", flag: "https://flagcdn.com/w320/ve.png" },
      { country: "Peru", capital: "Lima", flag: "https://flagcdn.com/w320/pe.png" },
      { country: "Ecuador", capital: "Quito", flag: "https://flagcdn.com/w320/ec.png" }
    ],
    level3: [
      { country: "Paraguay", capital: "Asunción", flag: "https://flagcdn.com/w320/py.png" },
      { country: "Uruguay", capital: "Montevideo", flag: "https://flagcdn.com/w320/uy.png" },
      { country: "Bolivia", capital: "Sucre", flag: "https://flagcdn.com/w320/bo.png" },
      { country: "Guyana", capital: "Georgetown", flag: "https://flagcdn.com/w320/gf.png" },
      { country: "Suriname", capital: "Paramaribo", flag: "https://flagcdn.com/w320/sr.png" }
    ],
    level4: [
      { country: "Cuba", capital: "Havana", flag: "https://flagcdn.com/w320/cu.png" },
      { country: "Dominican Republic", capital: "Santo Domingo", flag: "https://flagcdn.com/w320/do.png" },
      { country: "Jamaica", capital: "Kingston", flag: "https://flagcdn.com/w320/jm.png" },
      { country: "Haiti", capital: "Port-au-Prince", flag: "https://flagcdn.com/w320/ht.png" },
      { country: "Trinidad and Tobago", capital: "Port of Spain", flag: "https://flagcdn.com/w320/tt.png" }
    ]
  },
  oceania: {
    level1: [
      { country: "Australia", capital: "Canberra", flag: "https://flagcdn.com/w320/au.png" },
      { country: "New Zealand", capital: "Wellington", flag: "https://flagcdn.com/w320/nz.png" },
      { country: "Fiji", capital: "Suva", flag: "https://flagcdn.com/w320/fj.png" },
      { country: "Papua New Guinea", capital: "Port Moresby", flag: "https://flagcdn.com/w320/pg.png" },
      { country: "Samoa", capital: "Apia", flag: "https://flagcdn.com/w320/ws.png" }
    ],
    level2: [
      { country: "Vanuatu", capital: "Port Vila", flag: "https://flagcdn.com/w320/vu.png" },
      { country: "Solomon Islands", capital: "Honiara", flag: "https://flagcdn.com/w320/sb.png" },
      { country: "Kiribati", capital: "Tarawa", flag: "https://flagcdn.com/w320/ki.png" },
      { country: "Tonga", capital: "Nuku'alofa", flag: "https://flagcdn.com/w320/to.png" },
      { country: "Micronesia", capital: "Palikir", flag: "https://flagcdn.com/w320/fm.png" }
    ],
    level3: [
      { country: "Tuvalu", capital: "Funafuti", flag: "https://flagcdn.com/w320/tv.png" },
      { country: "Nauru", capital: "Yaren", flag: "https://flagcdn.com/w320/nr.png" },
      { country: "American Samoa", capital: "Pago Pago", flag: "https://flagcdn.com/w320/as.png" },
      { country: "Cook Islands", capital: "Avarua", flag: "https://flagcdn.com/w320/ck.png" },
      { country: "Niue", capital: "Alofi", flag: "https://flagcdn.com/w320/nu.png" }
    ],
    level4: [
      { country: "Wallis and Futuna", capital: "Mata-Utu", flag: "https://flagcdn.com/w320/wf.png" },
      { country: "Marshall Islands", capital: "Majuro", flag: "https://flagcdn.com/w320/mh.png" },
      { country: "Palau", capital: "Ngerulmud", flag: "https://flagcdn.com/w320/pw.png" },
      { country: "Tokelau", capital: "Nukunonu", flag: "https://flagcdn.com/w320/tk.png" },
      { country: "Pitcairn Islands", capital: "Adamstown", flag: "https://flagcdn.com/w320/pn.png" }
    ]
  }
};

let currentContinent = null;
let currentLevel = null;
let currentQuestionList = [];
let currentQuestion = 0;
let score = 0;
let canAnswer = true;
let userAnswers = [];

const continentSelection = document.getElementById('continentSelection');
const difficultySelection = document.getElementById('difficultySelection');
const quizContainer = document.getElementById('quizContainer');
const resultsContainer = document.getElementById('resultsContainer');
const landingContainer = document.getElementById('landingContainer');
const flagElement = document.getElementById('flag');
const optionsContainer = document.getElementById('options');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('finalScore');
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const startQuizBtn = document.getElementById('startQuizBtn');
const resultsContent = document.getElementById('resultsContent');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function selectContinent(continent) {
  currentContinent = continent;
  continentSelection.classList.remove('active');
  difficultySelection.classList.add('active');
}

function startQuiz(level) {
  currentLevel = level;
  currentQuestionList = quizData[currentContinent][level];
  currentQuestion = 0;
  score = 0;
  scoreElement.textContent = score;
  difficultySelection.classList.remove('active');
  quizContainer.classList.add('active');
  loadQuestion();
}

function loadQuestion() {
  canAnswer = true;
  const currentQuiz = currentQuestionList[currentQuestion];

  flagElement.src = currentQuiz.flag;
  flagElement.alt = `Flag of ${currentQuiz.country}`;

  let options = [currentQuiz.capital];
  while (options.length < 4) {
    const randomContinent = Object.keys(quizData)[Math.floor(Math.random() * Object.keys(quizData).length)];
    const randomCountry = quizData[randomContinent][Object.keys(quizData[randomContinent])[Math.floor(Math.random() * Object.keys(quizData[randomContinent]).length)]][Math.floor(Math.random() * 5)];
    if (!options.includes(randomCountry.capital)) {
      options.push(randomCountry.capital);
    }
  }
  options = shuffleArray(options);

  optionsContainer.innerHTML = '';
  options.forEach(option => {
    const button = document.createElement('button');
    button.className = 'option';
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(option, button));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedAnswer, button) {
  if (!canAnswer) return;
  canAnswer = false;

  const correctAnswer = currentQuestionList[currentQuestion].capital;
  const isCorrect = selectedAnswer === correctAnswer;

  // Store the answer
  userAnswers.push({
    country: currentQuestionList[currentQuestion].country,
    flag: currentQuestionList[currentQuestion].flag,
    userAnswer: selectedAnswer,
    correctAnswer: correctAnswer,
    isCorrect: isCorrect
  });

  if (isCorrect) {
    score++;
    scoreElement.textContent = score;
    button.classList.add('correct');
  } else {
    button.classList.add('incorrect');
    optionsContainer.querySelectorAll('.option').forEach(opt => {
      if (opt.textContent === correctAnswer) {
        opt.classList.add('correct');
      }
    });
  }
}

function showResults() {
  // Hide quiz container and show results
  quizContainer.classList.remove('active');
  resultsContainer.classList.add('active');

  // Update final score
  finalScoreElement.textContent = `${score}/${currentQuestionList.length}`;

  // Clear previous results
  resultsContent.innerHTML = '';

  // Add results for each question
  userAnswers.forEach(answer => {
    const resultItem = document.createElement('div');
    resultItem.className = `result-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;

    resultItem.innerHTML = `
      <img src="${answer.flag}" alt="Flag of ${answer.country}" class="result-flag">
      <div class="result-details">
        <div><strong>${answer.country}</strong></div>
        ${answer.isCorrect
        ? `<div class="result-answer">✓ Correct answer: ${answer.correctAnswer}</div>`
        : `<div class="result-answer">✗ Your answer: ${answer.userAnswer}<br>Correct answer: ${answer.correctAnswer}</div>`
      }
      </div>
    `;

    resultsContent.appendChild(resultItem);
  });

  // Add "Next Level" button if available and score is perfect
  const currentLevelNumber = currentLevel.replace('level', '');
  const nextLevelNumber = parseInt(currentLevelNumber) + 1;
  const nextLevelExists = quizData[currentContinent][`level${nextLevelNumber}`];

  const buttonsContainer = document.createElement('div');
  buttonsContainer.style.marginTop = '20px';
  buttonsContainer.style.display = 'grid';
  buttonsContainer.style.gap = '10px';

  if (nextLevelExists) {
    // Only show next level button if score is perfect (5/5)
    if (score === 5) {
      const congratsMessage = document.createElement('div');
      congratsMessage.className = 'congrats-message';
      congratsMessage.innerHTML = `
        <div class="trophy">🏆</div>
        <h2>Congratulations!</h2>
        <p>You completed the level with a perfect score!</p>
        <p>You can now proceed to the next level.</p>
      `;

      const nextLevelBtn = document.createElement('button');
      nextLevelBtn.className = 'next-btn';
      nextLevelBtn.textContent = 'Proceed to Next Level';
      nextLevelBtn.addEventListener('click', () => {
        resultsContainer.classList.remove('active');
        startQuiz(`level${nextLevelNumber}`);
      });

      buttonsContainer.appendChild(congratsMessage);
      buttonsContainer.appendChild(nextLevelBtn);
    } else {
      // Add message explaining why they can't proceed
      const messageDiv = document.createElement('div');
      messageDiv.style.color = '#f44336';
      messageDiv.style.marginBottom = '15px';
      messageDiv.style.textAlign = 'center';
      messageDiv.innerHTML = `<p>You need a perfect score (5/5) to access the next level.</p>
                            <p>Try this level again to progress!</p>`;

      const retryBtn = document.createElement('button');
      retryBtn.className = 'next-btn';
      retryBtn.textContent = 'Retry this Level';
      retryBtn.addEventListener('click', () => {
        resultsContainer.classList.remove('active');
        startQuiz(currentLevel);
      });

      buttonsContainer.appendChild(messageDiv);
      buttonsContainer.appendChild(retryBtn);
    }
  }

  // Add return to menu button
  const newReturnBtn = document.createElement('button');
  newReturnBtn.className = 'back-btn';
  newReturnBtn.textContent = 'Return to Main Menu';
  newReturnBtn.addEventListener('click', returnToContinentSelection);
  buttonsContainer.appendChild(newReturnBtn);

  resultsContent.appendChild(buttonsContainer);
}

function returnToContinentSelection() {
  // Hide all other containers
  quizContainer.classList.remove('active');
  resultsContainer.classList.remove('active');
  difficultySelection.classList.remove('active');
  landingContainer.classList.remove('active');
  // Show continent selection
  continentSelection.classList.add('active');

  // Reset quiz state
  currentLevel = null;
  currentQuestionList = [];
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
}

// Language toggle functions
function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
  updatePageText();
}

function updatePageText() {
  const t = translations[currentLanguage];

  // Update landing page
  document.querySelector('.landing-container h1').textContent = t.welcome;
  document.querySelector('.description > p').textContent = t.description;
  document.querySelector('.feature:nth-child(1) h3').textContent = t.quizByContinent;
  document.querySelector('.feature:nth-child(1) p').textContent = t.chooseContinent;
  document.querySelector('.feature:nth-child(2) h3').textContent = t.testKnowledge;
  document.querySelector('.feature:nth-child(2) p').textContent = t.identifyCapitals;
  document.querySelector('.feature:nth-child(3) h3').textContent = t.trackProgress;
  document.querySelector('.feature:nth-child(3) p').textContent = t.scoring;
  document.querySelector('.start-btn').textContent = t.startQuiz;

  // Update continent selection
  document.querySelector('#continentSelection h1').textContent = t.chooseContinent;
  document.querySelector('#backToHomeBtn').textContent = t.backToHome;

  // Update difficulty selection
  document.querySelector('#difficultySelection h1').textContent = t.chooseLevel;
  document.querySelector('#backToContinentsBtn').textContent = t.backToContinents;

  // Update quiz container
  document.querySelector('#quizContainer h1').textContent = t.worldCapitalsQuiz;
  document.querySelector('.score').textContent = `${t.score}: ${score}`;
  document.querySelector('#nextBtn').textContent = t.nextQuestion;
  document.querySelector('#backBtn').textContent = t.backToContinents;

  // Update results container if visible
  if (document.querySelector('.congrats-message')) {
    document.querySelector('.congrats-message h2').textContent = t.congratulations;
    document.querySelector('.congrats-message p:nth-child(3)').textContent = t.perfectScore;
    document.querySelector('.congrats-message p:nth-child(4)').textContent = t.proceedNext;
  }
}

// Event Listeners
document.querySelectorAll('.continent-option').forEach(button => {
  button.addEventListener('click', () => {
    selectContinent(button.dataset.continent);
  });
});

document.querySelectorAll('.difficulty-option').forEach(button => {
  button.addEventListener('click', () => {
    startQuiz(button.dataset.level);
  });
});

nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion >= currentQuestionList.length) {
    showResults();
  } else {
    loadQuestion();
  }
});

backBtn.addEventListener('click', returnToContinentSelection);

document.getElementById('backToHomeBtn').addEventListener('click', () => {
  continentSelection.classList.remove('active');
  landingContainer.classList.add('active');
});

document.getElementById('backToContinentsBtn').addEventListener('click', () => {
  difficultySelection.classList.remove('active');
  continentSelection.classList.add('active');
});

startQuizBtn.addEventListener('click', () => {
  landingContainer.classList.remove('active');
  continentSelection.classList.add('active');
});

// Make sure the landing page is shown first by hiding the continent selection initially
continentSelection.classList.remove('active');
landingContainer.classList.add('active');

// Set initial language
updatePageText();