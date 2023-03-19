const quizDB = [
    {
        question: "Q1: Which Indian song won the OSCARS in 2023?",
        a: "Oosupodhu",
        b: "Naatu Naatu",
        c: "Panjaa",
        d: "Dole Dole",
        ans: "ans2"
    },{
        question: "Q2: Who is the director of the film RRR",
        a: "Sukumar",
        b: "James Cameron",
        c: "Rajamouli",
        d: "Shankar",
        ans: "ans3"
    },{
        question: "Q3: Who acted as Ballala dev in Bahubali?",
        a: "Prabhas",
        b: "NTR",
        c: "Ram Charan",
        d: "Rana Daggubati",
        ans: "ans4"
    },{
        question: "Q4: Who is the Music Director of RRR and Bahubali?",
        a: "M M Keeravani",
        b: "DSP",
        c: "Thaman",
        d: "Anirudh",
        ans: "ans1"
    },

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((currAnsElement) => {
        if(currAnsElement.checked){
            answer = currAnsElement.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((currAnsElem) => currAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length} 😊 </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;

        showScore.classList.remove('scoreArea');
    }
});
