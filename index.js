let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = "" 
let messageEl = document.getElementById("message-el")
//let sumEL = document.getElementById("sum-el")
let sumEL = document.querySelector("#sum-el")
//* another way to grab elements
let cardsEl = document.getElementById("cards-el")
 
//Creating object
let player = {
    name: "Akshat",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard+secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i =0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEL.textContent = "SUM: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) { // == will be true also when if 21 is tring ie "21" but this is not the case with ===.
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}


// CASH OUT
console.log(hasBlackJack)
console.log(isAlive)