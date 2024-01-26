//Variables
const button = document.getElementById('game-button');
const game_space = document.getElementById('game');
const gameTitle = document.getElementById('title');

//Click The Button
let counter = 0
button.addEventListener('click', function(){
    button.disabled = true;
    counter += 1;
    
    //Remove Text
    if (counter == 1){
        button.innerHTML = "Click Me!";
        gameTitle.innerHTML = "";
    }

    if (counter == 2){
        button.innerHTML = "";
    }

    if (counter == 6){
        setTimeout(function(){
            gameTitle.innerHTML = "This Is Only The Beginning.";
        },1000);
    }

    if (counter == 10){
        setTimeout(function(){
            gameTitle.innerHTML = "";
        },1200);
    }

    if (counter == 30){
        button.style.backgroundColor = "gray";
    }

    button.style.display = "none";

    //Move The Button
    setTimeout(function(){
        buttonPosition();
        button.style.display = 'block';
        button.disabled = false;
    }, getRandom(2500,4000));
});

//Function That Sets Button Position
function buttonPosition() {
    let i = getRandom(0,window.innerWidth - 40);
    let j = getRandom(0,window.innerHeight - 40);
    button.style.left = i + 'px';
    button.style.top = j + 'px';
}

//RNG-esus
function getRandom(min, max) {
    return Math.floor(Math.random()* (max-min)) + min;
}

//Unfade
function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}