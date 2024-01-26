const button = document.getElementById('game-button');

button.addEventListener('click', function(){
        let i = getRandom(0,window.innerWidth - 40);
        let j = getRandom(0,window.innerHeight - 40);
        
        button.style.left = i + 'px';
        button.style.top = j + 'px';
});

function getRandom(min, max) {
    return Math.floor(Math.random()* (max-min)) + min;
}


