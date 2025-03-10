const questionList = [
    { "question": "Ciao", "options": ["Hallo", "Doei", "Kaas"], "answer": "Hallo" },
    { "question": "Giorno", "options": ["Dag", "Kaas", "Mooi"], "answer": "Dag" },
    { "question": "Pane", "options": ["Glas", "Brood", "Kaas"], "answer": "Brood" }
];

const cardList = document.getElementById("cardList");

questionList.forEach(({ question, options, answer }) => {
    const card = document.createElement("div");
    card.className = "card w-25 m-3";
    card.innerHTML = `
        <img src="./italy.webp" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${question}</h5>
            <div class="btn-group" role="group">
                ${options.map(option => 
                    `<button type="button" class="btn btn-option">${option}</button>`
                ).join('')}
            </div>
            <div class="m-3 text-success answer-right" style="display: none;">Goed</div>
            <div class="m-3 text-danger answer-wrong" style="display: none;">Fout</div>
        </div>
    `;

    const buttons = card.querySelectorAll(".btn-option");
    const answerRight = card.querySelector(".answer-right");
    const answerWrong = card.querySelector(".answer-wrong");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.textContent === answer) {
                answerRight.style.display = "block";
                answerWrong.style.display = "none";
            } else {
                answerWrong.style.display = "block";
                answerRight.style.display = "none";
            }
        });
    });

    cardList.appendChild(card);
});
