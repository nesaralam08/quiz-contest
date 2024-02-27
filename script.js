const quizData = [
    {
        question: "Who is the father of C language?",
        options: ["Steve Jobs", "James Gosling", "Dennis Ritchie", "Rasmus Lerdorf"],
        answer: "Dennis Ritchie"
    },
    {
        question: "Which of the following is not a valid C variable name?",
        options: ["int number;", "float rate;", "int variable_count;", "int $main;"],
        answer: "int $main;"
    },
    {
        question: "All keywords in C are in ____________",
        options: ["LowerCase letters", "UpperCase letters", "CamelCase letters", "None"],
        answer: "LowerCase letters"
    },
    {
        question: "Which is valid C expression?",
        options: ["int my_num = 100,000;", "int my_num = 100000;", "int my num = 1000;", "int $my_num = 10000;"],
        answer: "int my_num = 100000;"
    },
    {
        question: "Which of the following cannot be a variable name in C?",
        options: ["volatile", "true", "friend", "export"],
        answer: "volatile"
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    window.location.href = "quiz.html";
}

function loadQuiz() {
    const quizElement = document.getElementById('quiz');
    const currentQuizData = quizData[currentQuestion];

    quizElement.innerHTML = `
        <div class="quiz-question">${currentQuizData.question}</div>
        <div class="quiz-options">
            ${currentQuizData.options.map(option => `
                <div class="quiz-option">
                    <input type="radio" name="answer" value="${option}">
                    <label>${option}</label>
                </div>
            `).join('')}
        </div>
    `;
}

function submitQuiz() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        alert('Please select an option!');
        return;
    }

    if (selectedOption.value === quizData[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        showResults();
    }
}

function showResults() {
    window.location.href = "answers.html";
    const answersElement = document.getElementById('answers');
    answersElement.innerHTML = `
        <h2>Your Score: ${score} out of ${quizData.length}</h2>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname === '/quiz.html') {
        loadQuiz();
    }
});
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname === '/answers.html') {
        showAnswers();
    } else if (window.location.pathname === '/quiz.html') {
        loadQuiz();
    }
});

function showAnswers() {
    const answersElement = document.getElementById('answers');
    let html = '<h2>Quiz Answers</h2>';
    quizData.forEach((questionData, index) => {
        html += `<div class="quiz-answer">Question ${index + 1}: ${questionData.question}<br>Answer: ${questionData.answer}</div>`;
    });
    answersElement.innerHTML = html;
}
console.log(score);