let isCardOnTable = false;

function playmusic(){
    let battlemusic = new Audio("Music/battleMusic.mp3")
    battlemusic.play();
    battlemusic.volume = 0.1;
}

function moveUserCardToTable(card){
    //first move card from hadn to table
    //to do later -- validate -- make sure only one card moves not entire hand -- doesnt allow multiple cards on table
    if(isCardOnTable === false){
        let table = document.querySelector(".cardTable")
        table.appendChild(card);

        moveUserCardToTable();

        isCardOnTable = true;


    }


}

function moveCPUCardToTable(){
    let cpuCardName = randomCardNameGenerator();

    let card = document.querySelector("." + cpuCardName);

    let cardClone = card.cloneNode(true);
    
    cardClone.classList.toggle('card');
    cardClone.classList.add('cpuCard');

    console.log(cardClone);

    let table = document.querySelector(".cardTable");
    table.appendChild(cardClone);

    


}





function randomCardNameGenerator(){
    let cards = ["cardBoto", "cardFrog", "cardBanana"]

    let randomNumber= getRandomInt(0,2);

    let randomCard = cards[randomNumber]

    return randomCard;

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}