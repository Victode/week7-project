console.log('Goodluck with the quiz :)')

fetch('./questions.json')
    .then((res) => res.json())
    .then((data) => {
        displayQuestions(data.quiz)
        console.log(data)
    })


function displayQuestions(data) {
    console.log(data[1])
    let quizQuestion = document.getElementById('quiz')

    let questionHTML = ''
    let question = data.question
    console.log(question)
    i = 0
    for (let quiz of data) {
        console.log(quiz)
        questionHTML += `
            <div class="card mb-5">
                <div class="card-body" id="result${i}">
                    <h2 class="card-text">${quiz.question}</h2>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" id="answer${i}" placeholder="Answer Here" aria-label="" aria-describedby="basic-addon1">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary" id="button${i}" type="button">Submit Answer</button>
                        </div>
                    </div>
                </div>
            </div>
            `  
        i += 1
    }
    quizQuestion.innerHTML = questionHTML

    let quizAnswer = document.querySelectorAll('#quiz .btn')
    for (let i = 0; i < quizAnswer.length; i++) {
        quizAnswer[i].addEventListener('click', (event) => {
            let correctAnswer = data[i].answer
            compareResults(correctAnswer, i)
        })
    }
}   
function compareResults(answer, answer_num) {
    let answerInput = document.getElementById(`answer${answer_num}`).value;
    if (answer == answerInput) {
        document.getElementById(`result${answer_num}`).style.backgroundColor = "#29AB87";

    } else{
        document.getElementById(`result${answer_num}`).style.backgroundColor = "#F08080";

    }
}

// function displayQuestion(data) {
//     console.log(data)
//     const it = data[Symbol.iterator]();
//     let quizEl = document.getElementById('quiz')

//     let quizHTML = ''
//     document.getElementById('nextQuestion').onclick = function() {
//         let next = it.toString().next();
//         console.log(next) 
//        for (let value in next.value) {
//             (value.done) ? 
//         [quizEl.innerText, this.innerText, this.disabled] = ['Complete!', 'Done', true]
//          : quizEl.innerText = next.value;
//         }
        
       
//     }






