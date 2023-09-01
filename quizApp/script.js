const questionOne = {
    question: 'How to write an IF statement',
    correct: 'correct answer',
    answer2: 'wrong answer',
    answer3: 'wrong answer',
};
const questionTwo = {
    question: 'How to map the world',
    correct: 'correct answer',
    answer2: 'wrong answer',
    answer3: 'wrong answer',
};
const questionThree = {
    question: 'Longest river ever',
    correct: 'correct answer',
    answer2: 'wrong answer',
    answer3: 'wrong answer',
};

const questionList = [questionOne, questionTwo, questionThree];
const questionCount = questionList.length;
const count = document.getElementById('count');
const currentQuestion = document.getElementById('question')
const container = document.getElementsByClassName('main-container')

let containerContent;
containerContent += `<div class='container'>`;
containerContent += `<span>hiiii</span>`;
containerContent += `<hr>`;
containerContent += `<h2 id='question'></h2>`;
containerContent += `<hr>`;
containerContent += `<hr>`;
containerContent += `<hr>`;
containerContent += `</div>`;

container.innerHTML = `<h2>${questionOne['question']}</h2>`;


currentQuestion.innerHTML = `<h2>${questionOne['question']}</h2>`;


let htmlCount = `<h3>Question ? of ${questionCount}</h3>`;
count.innerHTML = htmlCount;


questionList.forEach(element => {
    console.log(element['question'])
});