// create (Array , objects) which include the quiz information
const quiz_info = [
    {
        question: "What is the most used programming language?",
        a: "Java",
        b: "PHP",
        c: "Python",
        d: "JavaScript",
        correct: "a",
    },
    {
        question: "Which one of these programing languages is cross-platform",
        a: "Kotlin",
        b: "Swift",
        c: "Dart,flutter",
        d: "objective-C",
        correct: "c",
    },
    {
        question: "which programming language is used in twitter",
        a: "Ruby on Rails",
        b: "PHP",
        c: "JavaScript",
        d: "C++",
        correct: "a",
    },
    {
        question: "which one of these programing language used for backend?",
        a: "HTML",
        b: "reactNative",
        c: "NodeJS",
        d: "TypeScript",
        correct: "c",
    },
];


// bring all the suff we want to use ..
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quiz_info[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quiz_info[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quiz_info.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quiz_info.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});