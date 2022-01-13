

let cards = []

let messageEl = document.querySelector("#message")
let cardEl = document.querySelector("#cards")
let sumEl = document.querySelector("#sum")
let startEl = document.querySelector("#start-game")
let newCardEl = document.querySelector("#new-card")

let sum = 0;
let message = '';
let hasBlackJack = false;
let isAlive = true;

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}





function startGame() {
    isAlive = true
    let firstNumber = getRandomNumber()
    let secondNumber = getRandomNumber()
    sum = firstNumber + secondNumber
    console.log(cards)
    console.log(sum)

    cards.push(firstNumber)
    cards.push(secondNumber)

    sumEl.textContent = sum;

    showCards()

    checkStatus()

}

function checkStatus() {
    if (sum <= 20) {
        message = "Do you want to draw a new Card?"
    } else if (sum === 21) {
        message = "Nice! you got the Blackjack"
        hasBlackJack = true
    } else {
        message = "Sorry! You are out of Game..."
        isAlive = false;
    }
    messageEl.textContent = message;

}


function showCards() {
    cardsList = ""
    for (let i = 0; i < cards.length; i++) {
        cardsList += cards[i] + ' '
    }
    cardEl.textContent = cardsList

}

function newCard() {
    checkStatus()
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomNumber()
        cards.push(newCard)
        sum += newCard
        showCards()
        sumEl.textContent = sum;
    }
}

function reset() {
    sum = 0;
    cards = []
    cardEl.textContent = "Cards:"
    sumEl.textContent = "Sum:"
    messageEl.textContent = "Want to play a round?"

}

