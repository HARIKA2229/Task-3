/* -------- Study Tips Carousel -------- */
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

/* -------- Quiz Section -------- */
const questions = [
    {
        question: "Which language is used for web styling?",
        options: ["HTML", "CSS", "Python"],
        answer: 1
    },
    {
        question: "Which keyword declares a variable in JS?",
        options: ["var", "int", "define"],
        answer: 0
    },
    {
        question: "Which tag is used for paragraph?",
        options: ["<p>", "<div>", "<h1>"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");

    questionEl.textContent = questions[currentQuestion].question;
    optionsEl.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        score++;
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML =
            `<h3>Your Score: ${score}/${questions.length}</h3>`;
    }
}

loadQuestion();

/* -------- Motivation API -------- */
function getQuote() {
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            document.getElementById("quote").innerText =
                `"${data.content}" - ${data.author}`;
        })
        .catch(() => {
            document.getElementById("quote").innerText =
                "Stay focused and never give up!";
        });
}