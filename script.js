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
        button.innerHTML = "";
    }

    if (counter == 10){
        setTimeout(function(){
            gameTitle.innerHTML = "This Is Only The Beginning.";
        },getRandom(1000,1400));
    }

    if (counter == 15){
        setTimeout(function(){
            gameTitle.innerHTML = "";
        },getRandom(1000,1400));
    }

    if (counter == 30){
        setTimeout(function(){
            gameTitle.innerHTML = "Hmmm. Let's make this harder.";
        },getRandom(1000,1400));
    }

    if (counter == 34){
        button.style.padding = "7px 7px";
    }

    if (counter == 35){
        setTimeout(function(){
            gameTitle.innerHTML = "";
        },getRandom(500,1400));
    }

    if (counter == 37){
        setTimeout(function(){
            gameTitle.innerHTML = "Better.";
        },getRandom(1000,6000));
    }

    if (counter == 41){
        setTimeout(function(){
            gameTitle.innerHTML = "";
        },getRandom(1000,1500));
    }

    if (counter == 65){
        setTimeout(function(){
            gameTitle.innerHTML = "Be back in a moment. I have to let my dog outside.";
        },getRandom(1000,2000));
    }

    if (counter == 66){
        setTimeout(function(){
            button.innerHTML = '<img src="paw-print.webp" width="25" height="25"/>';
            button.style.background = "lightgray";
        },getRandom(1000,2000));
    }

    if (counter == 71){
        setTimeout(function(){
            gameTitle.innerHTML = "";
            button.innerHTML = "";
            button.style.background = "black";
        },getRandom(1000,6000));
    }

    if (counter == 90){
        setTimeout(function(){
        document.body.style.backgroundColor = "black";
        button.style.background = "white";
        },getRandom(1000,6000));
    }

    if (counter == 92){
        gameTitle.style.color = "white";
        gameTitle.innerHTML = "Ugh. Did the motion-sensor light go off? Just a second."
    }
    
    if (counter == 94){
        setTimeout(function(){
            gameTitle.innerHTML = ""
            button.innerHTML = '<img src="shoe-print.png" width="25" height="25"/>';
        },getRandom(1000,6000));
    }

    if (counter == 102){
        setTimeout(function(){
            document.body.style.backgroundColor = "white";
            button.style.background = "black";
            button.innerHTML = "";
        },getRandom(2000,4000));
    }

    if (counter == 104){
        setTimeout(function(){
            gameTitle.innerHTML = "Better.";
        },getRandom(2000,4000));
    }

    if (counter == 106){
        setTimeout(function(){
            gameTitle.innerHTML = "";
        },getRandom(1000,2000));
    }

    if (counter == 120){
        setTimeout(function(){
            gameTitle.innerHTML = "Isn't this fun?";
        },getRandom(1000,2000));
    }

    if (counter == 125){
        setTimeout(function(){
            gameTitle.innerHTML = "Just me and you, on this journey to....";
        },getRandom(1000,2000));
    }

    if (counter == 127){
        setTimeout(function(){
            gameTitle.innerHTML = "...what is it you're doing again?";
        },getRandom(1000,2000));
    }

    if (counter == 257){
        setTimeout(function(){
            gameTitle.innerHTML = "By my metrics, you're...halfway there?";
        },1200);
    }

    if (counter == 550){
        setTimeout(function(){
            gameTitle.innerHTML = "You are done. Congratulations! The coordinates are: ";
        },1200);
    }

    button.style.display = "none";

    //Move The Button
    setTimeout(function(){
        buttonPosition();
        button.style.display = 'block';
        button.disabled = false;
        let rotation = Math.floor(Math.random() * 359)
        button.style.transform = `rotate(${rotation}deg)`;
    }, getRandom(2500,3500));
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