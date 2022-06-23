/*Variables*/
const quiz= document.getElementById('quiz')
const questionEl = document.getElementById('question')
const answerEls = document.querySelectorAll('.answer')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const previousBtn = document.getElementById('previous')

let currentQuiz = 0
let score = 0

/*Stores The Questions*/ 
const quizInfo = [
    {
        question: "When did the pixar movie 'Cars' come out?",
        a: "2006",
        b: "2007",
        c: "2008",
        d: "2009",
        correct: "a",
    },
    {
        question: "How Many planets in the solar system?",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        correct: "c",
    },
    {
        question: "How many countries are there?",
        a: "194",
        b: "195",
        c: "196",
        d: "197",
        correct: "b",
    },
    {
        question: "How long is an olympic swimming pool?",
        a: "50M",
        b: "60M",
        c: "70M",
        d: "80M",
        correct: "a",
    },
    {
        question: "When did the cold war end?",
        a: "1988",
        b: "1989",
        c: "1990",
        d: "1991",
        correct: "b",
    },


];

/*This creates the Quiz */ 

loadQuiz()  

function loadQuiz() {

    deselectAnswers()

    const currentQuizInfo = quizInfo[currentQuiz]

    questionEl.innerText = currentQuizInfo.question
    a_text.innerText = currentQuizInfo.a
    b_text.innerText = currentQuizInfo.b
    c_text.innerText = currentQuizInfo.c
    d_text.innerText = currentQuizInfo.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false) /*Makes sure no answer is selected by default */
}

/*Tracks which answer was selected */

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {

            answer = answerEl.id
        }
    })
    return answer
}

/*Checks to see if the selected answers are the correct ones and shows how many you answered correctly*/

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {

       if(answer === quizInfo[currentQuiz].correct) {

           score++
       }

       currentQuiz++

       if(currentQuiz < quizInfo.length) {

           loadQuiz()
       } else {
           
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizInfo.length} questions correctly</h2>
            <br>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})

previousBtn.addEventListener('click', () => {
    const answer = getSelected()

       currentQuiz--

       if(currentQuiz < quizInfo.length) {

           loadQuiz()
       } else {
           
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizInfo.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    })