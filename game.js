let player={
    name:"gajala",
    coins:100
}
let firstCard=randomCard()
let secondCard=randomCard()
let cards=[firstCard,secondCard]
let sum=firstCard+secondCard
let message=""
let blackJack=false
let alive=false
console.log(msg)

function startGame(){
    renderGame()
    document.getElementById("details").textContent=player.name+" "+player.coins

}

function renderGame() {
    let qwe= document.getElementById("msg")
     document.querySelector("#sum").textContent="sum : " + sum
    document.getElementById("cards").textContent="cards : "+cards
    if(sum < 21){
        message="want to draw another card"
        alive=true
    }
    else if(sum === 21){
        message="you got a jackpot"
        blackJack=true
    }
    else {
        message="you lost" 
        alive=false   
    }

      qwe.textContent=message
}
function newCard(){
    let select=document.getElementById("select")

    if(alive===true && blackJack===false){
    let card=randomCard()
    sum+=7
     cards.push(card)

    renderGame() 
     
    }
    else{
        select.textContent="you lost"
        document.querySelector("details").textContent=player.name+"000"
    }
    
}
function randomCard(){
    return Math.floor(Math.random()*13)+1
}