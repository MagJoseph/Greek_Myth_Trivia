

const questions = [
 {
     question: "1. In Greek mythology Medusa’s hair was made of what?",
     answers: ["1. Feathers", "2. Fire", "3. Flowers", "4. Snakes"],
     correct: "4. Snakes"
 },
 {
    question: "2. Which creature in Greek mythology was half-man and half-bull?",
    answers: ["1. Perseus", "2. Minotaur", "3. Pegasus", "4. Centaur"],
    correct: "2. Minotaur"
},
 {
    question: "3. According to legend, who fired the arrow that hit Achilles in the heel, his only vulnerable spot?",
    answers: ["1. Paris", "2. Heracles", "3. Demeter", "4. Helena"],
    correct: "1. Paris"
 },
 {
    question: "4. Who was the ancient Greek God was both God of the Underworld and God of the Dead?",
    answers: ["1. Zeus", "2. Hades", "3. Ares", "4. Apollo"],
    correct: "2. Hades"
},
 {
    question: "5. What is the name of the Hero who killed the Medusa?",
    answers: ["1. Jason", "2. Perseus", "3. Icarus", "4. Kind Minos"],
    correct: "2. Perseus"
 },
 {
    question: "6. Who was the Greek hero assigned the twelve labors?",
    answers: ["1. Odysseus", "2. Achilles", "3. Prometheus", "4. Heracles"],
    correct: "4. Heracles"
 },
 {
    question: "7. According to Greek Mythology, who is the keeper of time?",
    answers: ["1. Eros", "2. Oedipus", "3. Chronos", "4. Daedalus"],
    correct: "3. Chronos"
 },
 {
    question: "8. Which creature tries to lure Odysseus from his ship with beautiful singing?",
    answers: ["1. Sirens", "2. Harpies", "3. Chimeras", "4. Gorgons"],
    correct: "1. Sirens"
 },
 {
    question: "9. What animal was created by Poseidon?",
    answers: ["1. Dolphin", "2. Dog", "3. Whale", "4. Horse"],
    correct: "4. Horse"
},
 {
    question: "10. Who is the goddess of wisdom?",
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
const playAgain = document.querySelector('#play-again');
const nike = document.querySelector('.vic-img');
const loseImg = document.querySelector('.lose-img');
const timer = document.querySelector('.timer');
const noTimeMsg = document.getElementById('no-time-left');

const quest1 = document.getElementById('quest1');
const quest2 = document.getElementById('quest2');
const quest3 = document.getElementById('quest3');
const quest4 = document.getElementById('quest4');

let counter = 0;
let currentIndex = 0;
let userAnswer = [];
let score = 0;
let countdown = 60;



const checkAnswer = () => {
    ansGrid.forEach((grid) => {
        grid.addEventListener('click', () => {
            userAnswer = grid.innerText
            if (userAnswer === questions[currentIndex].correct) {
                score += 5;
                correctAns.style.visibility = 'visible'
                ansGrid.forEach((grid) => {
                    grid.style.visibility = 'hidden'
                })
                nike.style.display = 'inline'
        } else {
                wrongAns.style.visibility = 'visible'
                ansGrid.forEach((grid) => {
                    grid.style.visibility = 'hidden'
                })
                loseImg.style.display = 'inline'
            } 
        })
    })
}

checkAnswer();

window.onload = startGame = () => {
    scoreDisplay.innerText = 'Score: ' + score;
    questDisplay.innerText = questions[currentIndex].question;
    quest1.innerText = questions[currentIndex].answers[0];
    quest2.innerText = questions[currentIndex].answers[1];
    quest3.innerText = questions[currentIndex].answers[2];
    quest4.innerText = questions[currentIndex].answers[3];
}



const nextQuestion = () => {
    currentIndex++;
    counter++;
    scoreDisplay.innerText = 'Score: ' + score;
    correctAns.style.visibility = 'hidden'
    wrongAns.style.visibility = 'hidden'
    ansGrid.forEach((grid) => {
        grid.style.visibility = 'visible'
    })
    nike.style.display = 'none'
    loseImg.style.display = 'none'
    questDisplay.innerText = questions[currentIndex].question;
    quest1.innerText = questions[currentIndex].answers[0];
    quest2.innerText = questions[currentIndex].answers[1];
    quest3.innerText = questions[currentIndex].answers[2];
    quest4.innerText = questions[currentIndex].answers[3];

    if(counter >= 9) {
        ansGrid.forEach((grid) => {
            grid.addEventListener('click', () => {
                nextBtn.style.display = 'none'
                scoreDisplay.innerText = 'Congrats! Total Score: ' + score;
                scoreDisplay.style.fontSize = '50px';
                playAgain.style.display = 'inline'
                stopCountdown();
             })
    })
}
} 


nextBtn.addEventListener('click', nextQuestion);


 const myTimer = () => {
      if (countdown > 0) {
       countdown --;
       timer.innerText = `${countdown} sec`;
        if ((countdown <= 15) && (countdown > 0)) {
           timer.style.color = 'rgb(254, 23, 23)';
        }
     } else if (countdown === 0) {
         noTimeMsg.style.display = 'inline'
         nextBtn.style.display = 'none'
         playAgain.style.display = 'inline'
         ansGrid.forEach((grid) => {
            grid.style.visibility = 'hidden'
        })
     }
}
  


const myInt = setInterval(myTimer, 1000);

let stopCountdown = () => {
     clearInterval(myInt)
}



