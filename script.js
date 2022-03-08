const questions = [
 {
     question: "In Greek mythology Medusa’s hair was made of what?",
     answers: ["1. Feathers", "2. Fire", "3. Flowers", "4. Snakes"],
     correct: "4. Snakes"
 },
 {
    question: "Which creature in Greek mythology was half-man and half-bull?",
    answers: ["1. Perseus", "2. Minotaur", "3. Pegasus", "4. Centaur"],
    correct: "2. Minotaur"
},
 {
    question: "According to legend, who fired the arrow that hit Achilles in the heel, his only vulnerable spot?",
    answers: ["1. Paris", "2. Heracles", "3. Demeter", "4. Helena"],
    correct: "1. Paris"
 },
 {
    question: "Who was the ancient Greek God was both God of the Underworld and God of the Dead?",
    answers: ["1. Zeus", "2. Hades", "3. Ares", "4. Apollo"],
    correct: "2. Hades"
},
 {
    question: "What is the name of the Hero who killed the Medusa?",
    answers: ["1. Jason", "2. Perseus", "3. Icarus", "4. Kind Minos"],
    correct: "2. Perseus"
 },
 {
    question: "Who was the Greek hero assigned the twelve labors?",
    answers: ["1. Odysseus", "2. Achilles", "3. Prometheus", "4. Heracles"],
    correct: "4. Heracles"
 },
 {
    question: "According to Greek Mythology, who is the keeper of time?",
    answers: ["1. Eros", "2. Oedipus", "3. Chronos", "4. Daedalus"],
    correct: "3. Chronos"
 },
 {
    question: "Which creature tries to lure Odysseus from his ship with beautiful singing?",
    answers: ["1. Sirens", "2. Harpies", "3. Chimeras", "4. Gorgons"],
    correct: "1. Sirens"
 },
 {
    question: "What animal was created by Poseidon?",
    answers: ["1. Dolphin", "2. Dog", "3. Whale", "4. Horse"],
    correct: "4. Horse"
},
 {
    question: "Who is the goddess of wisdom?",
    answers: ["1. Aphrodite", "2. Athena", "3. Hera", "4. Artemis"],
    correct: "2. Athena"
 }

]


const strBtn = document.getElementById('start-btn');
const scoreDisplay = document.getElementById('score-display');
const ansGrid = document.querySelectorAll('.a-div');
const questDisplay = document.getElementById('question-display');
const correctAns = document.querySelector('.correct-ans');
const wrongAns = document.querySelector('.wrong-ans');
const nextBtn = document.querySelector('.next-btn');
const questionContainer = document.getElementById('question-container');
const playAgain = document.querySelector('.play-again')

const quest1 = document.getElementById('quest1');
const quest2 = document.getElementById('quest2');
const quest3 = document.getElementById('quest3');
const quest4 = document.getElementById('quest4');

let counter = 0;
let currentIndex = 0;
let userAnswer = [];


const checkAnswer = () => {
    ansGrid.forEach((grid) => {
        grid.addEventListener('click', () => {
            userAnswer = grid.innerText
            if (userAnswer === questions[currentIndex].correct) {
                correctAns.style.display = 'inline'
            } else {
                wrongAns.style.display = 'inline'
            }
        })
    })
}

checkAnswer();

window.onload = startGame = () => {
    questDisplay.innerText = questions[currentIndex].question;
    quest1.innerText = questions[currentIndex].answers[0];
    quest2.innerText = questions[currentIndex].answers[1];
    quest3.innerText = questions[currentIndex].answers[2];
    quest4.innerText = questions[currentIndex].answers[3];
}



const nextQuestion = () => {
    currentIndex++;
    counter++;
    correctAns.style.display = 'none'
    wrongAns.style.display = 'none'
    questDisplay.innerText = questions[currentIndex].question;
    quest1.innerText = questions[currentIndex].answers[0];
    quest2.innerText = questions[currentIndex].answers[1];
    quest3.innerText = questions[currentIndex].answers[2];
    quest4.innerText = questions[currentIndex].answers[3];

    if(counter >= 9) {
        nextBtn.style.display = 'none';
        playAgain.style.display = 'inline';
       }
  
}




nextBtn.addEventListener('click', nextQuestion);

