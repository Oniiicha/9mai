let questions = [
    {
        question: "Когда началась Великая Отечественная война?",
        options: ["22 июня 1941г", "11 августа 1941г", "22 июля 1941г"],
        correctAnswer: "22 июня 1941г"
    },
    {
        question: "Какое событие произошло 9 мая 1945 года в 00:43 мск:",
        options: ["Штурм Берлина", "Над Рейхстагом подняли Знамя Победы", "Акт капитуляции Германии"],
        correctAnswer: "Акт капитуляции Германии"
    },
    {
        question: "СССР находился в состоянии войны с Германией до:",
        options: ["24 июня 1945 года", "25 января 1955 года", "2 сентября 1945 года"],
        correctAnswer: "25 января 1955 года"
    },
    {
        question: "В первое послевоенное десятилетие парад Победы:",
        options: ["Проводился дважды в год", "Проводился только в юбилейные годы", "Не проводился вообще"],
        correctAnswer: "Не проводился вообще"
    },
    {
        question: "9 мая официально стало выходным днем:",
        options: ["В 1948 году", "В 1953 году", "В 1965 году"],
        correctAnswer: "В 1965 году"
    },
    {
        question: "Укажите дату снятия блокады Ленинграда:",
        options: ["30 января 1945г", "27 января 1944г", "27 апреля 1944г"],
        correctAnswer: "27 января 1944г"
    },

];

let uncorrect = [

]

let currentQuestion = 0;
let correctAnswers = 0;

function displayQuestion() {
    let questionElement = document.getElementById('question');
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question}`
    let optionsElement = document.getElementById('options');
    optionsElement.innerHTML = '';

    let optionsArray = questions[currentQuestion].options;

    optionsArray.forEach((option) => {
        let button = document.createElement('button');
        optionsElement.append(button);
        button.textContent = option;
        button.classList.add('btn')
    })
    optionsElement.addEventListener('click', (e) => {
        let target = e.target;
        nextQuestion(target.textContent)
    }, { once: true })

}

function nextQuestion(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    } else {
        uncorrect.push(questions[currentQuestion].question)
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    console.log(uncorrect)
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    resultElement.textContent = `Правильных ответов: ${correctAnswers} из ${questions.length}`;
    const markElement = document.getElementById('mark');

    if (correctAnswers == 0) {
        markElement.textContent = 'Ваша оценка - 2. Вы плохо знаете историю Великой Отечественной войны'
    }
    if (correctAnswers == 1) {
        markElement.textContent = 'Ваша оценка - 2. Вы плохо знаете историю Великой Отечественной войны'
    }
    if (correctAnswers == 2) {
        markElement.textContent = 'Ваша оценка - 2. Вы плохо знаете историю Великой Отечественной войны'
    }
    if (correctAnswers == 3) {
        markElement.textContent = 'Ваша оценка - 3. Вы неплохо знаете историю Великой Отечественной войны'
    }
    if (correctAnswers == 4) {
        markElement.textContent = 'Ваша оценка - 4. Вы хорошо знаете историю Великой Отечественной войны'
    }
    if (correctAnswers == 5) {
        markElement.textContent = 'Ваша оценка - 4. Вы хорошо знаете историю Великой Отечественной войны'
    }
    if (correctAnswers == 6) {
        markElement.textContent = 'Ваша оценка - 5. Вы отлично знаете историю Великой Отечественной войны'
    }

    uncorrect.forEach((item) => {
        let uncorrectAnswer = document.createElement("div")
        resultElement.append(uncorrectAnswer)
        uncorrectAnswer.innerHTML = item
    })
}

displayQuestion();